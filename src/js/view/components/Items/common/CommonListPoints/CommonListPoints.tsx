import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommonListPointItem } from "../CommonListPointItem/CommonListPointItem";
import { ListPointsWrapper } from "../../ListPointsWrapper/ListPointsWrapper";
import {
  convertICommonListPointFromBEToIListPoint,
  getEmptyListPoint,
  convertIListPointBindingFromBEtoIListPointBinding,
} from "../../../../../utils";
import {
  getCommonListPoints,
  lockCommonListPoint,
  getMemberBindings,
  changeCommonListPointBindStatus,
  deleteCommonListPoint,
  unlockCommonListPoint,
} from "../../../../../api_clients";
import { useLoading } from "../../../../../hooks";
import {
  ICommonListPoint,
  ICommonListPointFromBE,
  IListPoint,
  IListPointBindingFromBE,
} from "../../../../../interfaces";
import {
  Modal,
  BlockedListPointModal,
  BindListPointModal,
  ListPointActionModal,
} from "../../../../elements";
import { ICommonListPointsProps } from "./CommonListPointsProps";
import { saveCurrentListPointInLocalStorage } from "../../../../../utils/localStorage";

export const CommonListPoints = (props: ICommonListPointsProps) => {
  const { accessIds } = props;

  const navigate = useNavigate();

  const { setLoading } = useLoading();

  const [listPoints, setListPoints] = useState<ICommonListPoint[]>([]);

  const [selectedListPoint, setSelectedListPoint] =
    useState<ICommonListPoint>();

  const [loadingListPointIndex, setLoadingListPointIndex] = useState<
    number | undefined
  >(undefined);

  const [modalContent, setModalContent] = useState<JSX.Element>();

  const showModal = ({
    listPoint,
    content,
  }: {
    listPoint?: ICommonListPoint;
    content: JSX.Element;
  }) => {
    setModalContent(content);

    if (listPoint) {
      setSelectedListPoint(listPoint);
    }
  };

  const closeModal = () => {
    setModalContent(undefined);

    if (selectedListPoint) {
      void unlockCommonListPoint({
        ...accessIds,
        pointUid: selectedListPoint.pointUid,
      });

      setSelectedListPoint(undefined);
    }
  };

  const goToListPointEditPage = (listPoint: IListPoint) => {
    saveCurrentListPointInLocalStorage(listPoint);
    navigate(listPoint.pointUid ? `item/${listPoint.pointUid}` : "item");
  };

  const getListPoints = async () => {
    try {
      setLoading(true);

      const response = await getCommonListPoints({
        eventUid: accessIds.eventUid,
      });
      const commonListPoints = (
        (await response.json()) as ICommonListPointFromBE[]
      ).map((listPoint) =>
        convertICommonListPointFromBEToIListPoint(listPoint)
      );

      setListPoints(commonListPoints);
    } finally {
      setLoading(false);
    }
  };

  const removeListPoint = async (listPoint: IListPoint) => {
    try {
      setLoading(true);
      closeModal();

      await deleteCommonListPoint({
        ...accessIds,
        pointUid: listPoint.pointUid,
      });

      await getListPoints();
    } finally {
      setLoading(false);
    }
  };

  const updateListPointMemberBindings = async ({
    listPoint,
    index,
  }: {
    listPoint: ICommonListPoint;
    index: number;
  }) => {
    try {
      setLoadingListPointIndex(index);

      const response = await getMemberBindings({
        eventUid: accessIds.eventUid,
        pointUid: listPoint.pointUid,
      });

      listPoints[index].bindings = (
        (await response.json()) as IListPointBindingFromBE[]
      ).map((b) => convertIListPointBindingFromBEtoIListPointBinding(b));
    } finally {
      setLoadingListPointIndex(undefined);
    }
  };

  const showBlockedListPointModal = () =>
    showModal({
      content: (
        <BlockedListPointModal
          onClick={() => {
            closeModal();
          }}
        />
      ),
    });

  const checkListPointAvailability = async ({
    listPoint,
    cb,
  }: {
    listPoint: ICommonListPoint;
    cb: (listPoint: ICommonListPoint) => void | Promise<void>;
  }) => {
    try {
      setLoading(true);

      const { status } = await lockCommonListPoint({
        ...accessIds,
        pointUid: listPoint.pointUid,
      });

      if (status === 201) {
        void cb(listPoint);
      } else {
        showBlockedListPointModal();
      }
    } finally {
      setLoading(false);
    }
  };

  const editListPoint = (listPoint: ICommonListPoint) => {
    closeModal();
    goToListPointEditPage(listPoint);
  };

  const bindListPoint = async ({
    pointUid,
    count,
  }: {
    pointUid: string;
    count: string;
  }) => {
    try {
      setLoading(true);
      closeModal();

      const payload = {
        ...accessIds,
        pointUid,
        count: "",
      };
      if (count !== "0") {
        payload.count = count;
      }

      await changeCommonListPointBindStatus(payload);

      await getListPoints();
    } finally {
      setLoading(false);
    }
  };

  const showBindModal = (listPoint: ICommonListPoint) => {
    const binding = listPoint.bindings.find(
      (b) => b.member.memberUid === accessIds.memberUid
    );
    const countItemTaken = binding ? binding.count : 0;

    showModal({
      listPoint,
      content: (
        <BindListPointModal
          listPoint={listPoint}
          countItemTaken={countItemTaken.toString()}
          onClick={(count) => {
            void bindListPoint({ pointUid: listPoint.pointUid, count });
          }}
        />
      ),
    });
  };

  const showActionListPointModal = (listPoint: ICommonListPoint) => {
    showModal({
      listPoint,
      content: (
        <ListPointActionModal
          listPointName={listPoint.item.name}
          showDeletionWarningMessage
          onEditClick={() => {
            void checkListPointAvailability({
              listPoint,
              cb: editListPoint,
            });
          }}
          onRemoveClick={() => {
            void checkListPointAvailability({
              listPoint,
              cb: removeListPoint,
            });
          }}
        />
      ),
    });
  };

  const listPointItem = (listPoint: ICommonListPoint, index: number) => (
    <CommonListPointItem
      listPoint={listPoint}
      key={listPoint.pointUid}
      memberUid={accessIds.memberUid}
      loading={index === loadingListPointIndex}
      onBindListPoint={() => {
        void checkListPointAvailability({
          listPoint,
          cb: showBindModal,
        });
      }}
      onShowListPointSettings={() => {
        void showActionListPointModal(listPoint);
      }}
      onClickTitle={() => {
        void updateListPointMemberBindings({ listPoint, index });
      }}
    />
  );

  useEffect(() => {
    if (listPoints.length === 0) {
      void getListPoints();
    }
  }, [listPoints.length]);

  return (
    <>
      <ListPointsWrapper
        listPoints={listPoints}
        listPointItem={listPointItem}
        onCreateListPoint={() => goToListPointEditPage(getEmptyListPoint())}
      />

      {modalContent && <Modal onShow={closeModal} content={modalContent} />}
    </>
  );
};

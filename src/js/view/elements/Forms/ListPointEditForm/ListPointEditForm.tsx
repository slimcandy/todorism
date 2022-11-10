import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IListPointEditFormProps } from "./ListPointEditFormProps";
import {
  IListPoint,
  LIST_POINT_CATEGORIES,
  LIST_POINT_UNITS,
} from "../../../../interfaces";

import { Input } from "../../inputs";
import { Select } from "../../Select/Select";
import { TagsGroup } from "../../TagsGroup/TagsGroup";
import { TextBodyStandard } from "../../typography";
import { Counter } from "../../Counter/Counter";

export const ListPointEditForm = (props: IListPointEditFormProps) => {
  const { listPoint, onChange, onFullFill } = props;

  const { t } = useTranslation();

  const checkFormFullFilled = () => !!listPoint.item.name && !!listPoint.count;

  const listPointCategories = Object.values(LIST_POINT_CATEGORIES);

  const listPointUnits = Object.values(LIST_POINT_UNITS);

  const activeTagIndex = listPointCategories.findIndex(
    (category) => category === listPoint.item.tags[0]
  );

  const changeItem = (value: Partial<IListPoint>) => {
    onChange({
      ...listPoint,
      ...value,
    });
  };

  useEffect(() => {
    onFullFill(checkFormFullFilled());
  });

  return (
    <form className="flex flex-col gap-y-3">
      <div>
        <TextBodyStandard className="block dark:text-dark-3 mb-2">
          {t("list_point.edit_form.category")}
        </TextBodyStandard>
        <TagsGroup
          tags={listPointCategories}
          activeTagIndex={activeTagIndex}
          localizationPath="list_point.categories"
          onClick={(value) =>
            changeItem({
              item: {
                ...listPoint.item,
                tags: [listPointCategories[value]],
              },
            })
          }
        />
      </div>

      <div>
        <Input
          label={t("list_point.edit_form.item")}
          value={listPoint.item.name}
          onChange={(value) =>
            changeItem({
              item: {
                ...listPoint.item,
                name: value,
              },
            })
          }
        />
      </div>

      <Select
        label={t("list_point.edit_form.unit")}
        localizationPath="list_point.units"
        value={listPoint.unit}
        options={listPointUnits}
        onChange={(value) =>
          changeItem({
            ...listPoint,
            unit: value as LIST_POINT_UNITS,
          })
        }
      />

      <Counter
        positive
        label={t("list_point.edit_form.count")}
        value={listPoint.count}
        onChange={(value) =>
          changeItem({
            ...listPoint,
            count: value,
          })
        }
      />
    </form>
  );
};

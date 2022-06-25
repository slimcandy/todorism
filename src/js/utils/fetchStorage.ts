import axios from "axios";
import { Store } from "../interfaces";
import { urlApiGet, urlApiSet } from "../common/constants";

export const loadState = async (
  key: string,
  initialValue: Store
): Promise<Store> => {
  try {
    const response = (await (
      await axios.get(`${urlApiGet}${key}/`)
    ).data) as Promise<Store>;
    return (await response) || initialValue;
  } catch (error) {
    return initialValue;
  }
};

export const saveState = async (key: string, value: Store): Promise<void> =>
  axios.post(`${urlApiSet}${key}/`, value);

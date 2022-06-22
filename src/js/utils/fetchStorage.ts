import axios from "axios";
import { Store } from "../interfaces";
import { urlApiGet, urlApiSet } from "../common/constants";

export const loadState = async (
  key: string,
  initialValue: Store
): Promise<Store> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response = await (await axios.get(`${urlApiGet}${key}/`)).data;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response || initialValue;
  } catch (error) {
    return initialValue;
  }
};

export const saveState = async (key: string, value: Store): Promise<void> =>
  axios.post(`${urlApiSet}${key}/`, value);

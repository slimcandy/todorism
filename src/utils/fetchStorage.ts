import axios from "axios";
import { Store } from "../interfaces";

export const loadState = async (
  key: string,
  initialValue: Store
): Promise<Store> => {
  try {
    const response = await (
      await axios.get(`http://localhost:3001/api/v1/get-${key}/`)
    ).data;
    return response || initialValue;
  } catch (error) {
    return initialValue;
  }
};

export const saveState = async (key: string, value: Store): Promise<void> =>
  axios.post(`http://localhost:3001/api/v1/set-${key}/`, value);

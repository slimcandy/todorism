import axios from "axios";
import { StoreType } from "../store/types";

export const loadState = async (
  key: string,
  initialValue: StoreType
): Promise<StoreType> => {
  try {
    const response = await (
      await axios.get(`http://localhost:3001/api/v1/get-${key}/`)
    ).data;
    return response || initialValue;
  } catch (error) {
    console.log(error);
    return initialValue;
  }
};

export const saveState = async (
  key: string,
  value: StoreType
): Promise<void> => {
  try {
    await axios.post(`http://localhost:3001/api/v1/set-${key}/`, value);
  } catch (error) {
    console.log(error);
  }
};

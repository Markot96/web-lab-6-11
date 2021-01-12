import { createReserved, deleteReserved, updateReserved, resetReserved, } from "./Hardcode";

export const startAction = { type: "start", payload: "Hahahah" };

export const updateItem = (item) => {
  return { type: updateReserved, payload: item };
};

export const createItem = (item) => {
  return { type: createReserved, payload: item };
};

export const deleteItem = (item) => {
  return { type: deleteReserved, payload: item };
};

export const resetItems = { type: resetReserved };
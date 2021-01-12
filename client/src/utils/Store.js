import { createStore } from "redux";
import reducer from "./Reducer";

const initialState = { orders: [], totalSalary: 0 };

const store = createStore(reducer, initialState);

export default store;
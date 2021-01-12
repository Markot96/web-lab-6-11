import { createReserved, deleteReserved, updateReserved } from "./Hardcode";

const changeItem = (state, action) => {
    let orders = state.orders.slice();
    let foundIndex = orders.findIndex(
      (element) => element.id === action.payload.id
    );
    orders[foundIndex] = action.payload;
    return orders;
  };
  
  const createItem = (state, action) => {
    let orders = state.orders.slice();
    orders.push(action.payload);
    return orders;
  };
  
  const deleteItem = (state, action) => {
    let orders = state.orders.slice();
    orders = orders.filter((element) => element.id !== action.payload.id);
    return orders;
  };
  
  const calculateSalary = (data) => {
    let sum = 0;
    for (let value of Object.values(data)) {
      sum += value.salary;
    }
    return sum;
  };
  
  const reducer = (state = {}, action) => {
    let orders;
    switch (action.type) {
      case updateReserved:
        orders = changeItem(state, action);
        return {
          orders,
          totalSalary: calculateSalary(orders),
        };
      case createReserved:
        let foundIndex = state.orders.findIndex(
          (element) => element.id === action.payload.id
        );
        if (foundIndex !== -1) {
          orders = changeItem(state, action);
        } else {
          orders = createItem(state, action);
        }
        return {
          orders,
          totalSalary: calculateSalary(orders),
        };
      case deleteReserved:
        orders = deleteItem(state, action);
        return {
          orders,
          totalSalary: calculateSalary(orders),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
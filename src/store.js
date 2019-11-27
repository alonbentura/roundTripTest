const filletedData = [];


export const reducer = (state = filletedData, action) => {
  switch (action.type) {
    case "filter":
      return state = action.newData
    default:
      return state;
  }
};
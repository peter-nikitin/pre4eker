const addItem = (array) => [
  ...array,
  { number: array.length > 0 ? array[array.length - 1].number + 1 : 1 },
];
const removeItem = (array, item) => {
  const index = array.findIndex((elem) => elem.number === item.number);

  return [...array.slice(0, index), ...array.slice(index + 1)];
};

const updateItem = (array, item) => {
  const index = array.findIndex((elem) => elem.number === item.number);

  return [...array.slice(0, index), item, ...array.slice(index + 1)];
};

export default {
  addItem,
  removeItem,
  updateItem,
};

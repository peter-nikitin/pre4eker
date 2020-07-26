const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const toRuDateFormat = (date) => {
  return date.toLocaleString("ru", dateOptions);
};

export default toRuDateFormat;

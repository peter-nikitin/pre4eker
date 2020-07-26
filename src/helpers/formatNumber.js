const toRuNumberFormat = (number) => {
  return new Intl.NumberFormat("ru-RU").format(number) + ` ₽`;
};

export default toRuNumberFormat;

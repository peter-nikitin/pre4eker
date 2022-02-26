const toRuNumberFormat = (number) => {
  return `${new Intl.NumberFormat("ru-RU").format(number)}&nbsp;₽`;
};

export default toRuNumberFormat;

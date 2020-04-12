const customer = {
  discountCard: "Номер дисконтной карты",
  mindboxId: "Mindbox Id",
  externalId: "Внешний ID",
  email: "Email",
  mobilePhone: "Мобильный телефон",
};



const payment = {
  type: "Тип оплаты (card1)",
  creditCard: {
    hash: "Хэш банковской карты",
  },
};

const bonusPoint = {
  amount: "Скидка баллами",
};

const coupon = {
  code: "Промокод",
};

const requestedPromotion = {
  type: "discount",
  amount: "Размер скидки",
  promotion: "Внешний ИД промоакции",
  coupon: {
    code: "Идентификатор промокода",
    pool: {
      ids: {
        externalId: "Внешний идентификатор пула промокода",
        mindboxId: "Идентификатор пула промокода",
      },
    },
  },
};

const giftCard = {
  number: "Номер карты",
  getFromPool: "Пул карты",
};

const line = {
  minPricePerItem: "Мин. цена товара",
  costPricePerItem: "Себестоимость товара",
  basePricePerItem: "Цена товара",
  quantity: "Количество",
  lineId: "Идентификатор линии заказа",
  lineNumber: "Порядковый номер позиции заказа",
  requestedPromotions: [requestedPromotion],
  product: "ИД продукта",
  status: "Статус",
  giftCard: giftCard,
};

const order = {
  ids: {
    mindboxId: "Mindbox Id",
    externalId: "Внешний ID",
  },
  cashdesk: "ИД кассы",
  deliveryCost: "Стоимость доставки",
  area: "Зона",
  customFields: "Дополнительные поля",
  pointOfContact: "Точка контакта",
  requestedPromotions: [requestedPromotion],
  bonusPoints: [bonusPoint],
  coupons: [coupon],
  payments: [payment],
  lines: [line],
};

const request = {

  customer: customer,
  order: order,
  executionDateTimeUtc:
    "Дата и время выполнения (для выполнения запроса задним числом)",
};

export default request;

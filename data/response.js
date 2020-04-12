const response = {
  status: "Success",
  order: {
    processingStatus: "Calculated",
    deliveryCost: 20638572.96,
    ids: {
      mindboxId: 1968413179,
      orderId2Id: "1784802773",
      orderMobileAppIdId: "1288953047",
      offlineTransactionIdId: "1430164306",
      websiteTransactionIdId: "2035457217",
      receiptNumberId: "107913866",
    },
    totalPrice: 10542306.11,
    lines: [
      {
        product: {
          ids: {
            default: "474177964",
            website: "798199676",
            system1c: "570300294",
          },
        },
        quantity: 13179398.15,
        basePricePerItem: 17639978.17,
        discountedPriceOfLine: 804584.3,
        status: {
          ids: {
            externalId: "delivered",
          },
        },
        appliedPromotions: [
          {
            type: "earnedBonusPoints",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 843160681,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            promotion: {
              ids: {
                mindboxId: 181652215,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            balanceType: {
              ids: {
                systemName: "nCE33ILt",
              },
              name: "aa1HemNi",
            },
            amount: 10465118.7,
            expirationDateTimeUtc: "2019-09-14T22:04:40.76Z",
          },
          {
            type: "spentBonusPoints",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 1177337836,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            promotion: {
              ids: {
                mindboxId: 355187063,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            balanceType: {
              ids: {
                systemName: "Dc5EuQOG",
              },
              name: "dhVKsVFD",
            },
            amount: 15785603.89,
          },
          {
            type: "discount",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 11635042,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            promotion: {
              ids: {
                mindboxId: 1761263450,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            amount: 15872309.02,
          },
          {
            type: "deliveryDiscount",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 194093729,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            promotion: {
              ids: {
                mindboxId: 361022015,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            amount: 4987163.88,
          },
          {
            type: "message",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 176737418,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            promotion: {
              ids: {
                mindboxId: 1991884686,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
          },
          {
            type: "issuedCoupon",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 2362011,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            promotion: {
              ids: {
                mindboxId: 1303715822,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            issuedCoupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 326744052,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
          },
          {
            type: "discount",
            promotion: {
              ids: {
                mindboxId: 1507016125,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            amount: 2714279.45,
          },
          {
            type: "discount",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 2127023895,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            amount: 20439998.48,
          },
        ],
        lineNumber: 1,
        lineId: "8",
        minPricePerItem: 19739487.99,
        costPricePerItem: 12489015.84,
        giftCard: {
          ids: {
            number: "5181896985",
          },
          getFromPool: false,
          status: "CanBeActivated",
        },
        placeholders: [
          {
            ids: {
              externalId: "top",
            },
            content: [
              {
                type: "text",
                promotion: {
                  ids: {
                    mindboxId: 1672736105,
                    externalId: "promotion-1",
                  },
                  name: "Новая акция",
                  type: "mindbox",
                },
                message: "Ура! У вас скидка!",
              },
              {
                type: "possibleDiscounts",
                promotion: {
                  ids: {
                    mindboxId: 573105704,
                    externalId: "promotion-1",
                  },
                  name: "Новая акция",
                  type: "mindbox",
                },
                possibleDiscounts: {
                  discountsCount: 2,
                  discount: {
                    amount: 2848939.94,
                    amountType: "Percent",
                  },
                  products: [
                    {
                      ids: {
                        mindboxId: 1615435128,
                        default: "1772822527",
                        website: "570162426",
                        system1c: "1737590581",
                      },
                    },
                    {
                      ids: {
                        mindboxId: 161093334,
                        default: "1909898548",
                        website: "499570319",
                        system1c: "1816923791",
                      },
                    },
                  ],
                },
              },
            ],
          },
          {
            ids: {
              externalId: "top",
            },
            content: [
              {
                type: "text",
                promotion: {
                  ids: {
                    mindboxId: 313427658,
                    externalId: "promotion-1",
                  },
                  name: "Новая акция",
                  type: "mindbox",
                },
                message: "Ура! У вас скидка!",
              },
              {
                type: "possibleDiscounts",
                promotion: {
                  ids: {
                    mindboxId: 1603824745,
                    externalId: "promotion-1",
                  },
                  name: "Новая акция",
                  type: "mindbox",
                },
                possibleDiscounts: {
                  discountsCount: 2,
                  discount: {
                    amount: 14273903.22,
                    amountType: "Percent",
                  },
                  products: [
                    {
                      ids: {
                        mindboxId: 880262601,
                        default: "765859134",
                        website: "1187369234",
                        system1c: "857592008",
                      },
                    },
                    {
                      ids: {
                        mindboxId: 702959408,
                        default: "1700150990",
                        website: "1643422148",
                        system1c: "1112186431",
                      },
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        product: {
          ids: {
            default: "1992290890",
            website: "1963295047",
            system1c: "1845562396",
          },
        },
        quantity: 20422921.01,
        basePricePerItem: 16956137.47,
        discountedPriceOfLine: 9906634.11,
        status: {
          ids: {
            externalId: "delivered",
          },
        },
        appliedPromotions: [
          {
            type: "earnedBonusPoints",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 470378062,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            promotion: {
              ids: {
                mindboxId: 734177952,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            balanceType: {
              ids: {
                systemName: "j8NVBMXK",
              },
              name: "qC0qUSpY",
            },
            amount: 4390646.74,
            expirationDateTimeUtc: "2019-11-16T22:04:40.76Z",
          },
          {
            type: "spentBonusPoints",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 1272268466,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            promotion: {
              ids: {
                mindboxId: 724652849,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            balanceType: {
              ids: {
                systemName: "Hm9fmjz7",
              },
              name: "TBmp3RKg",
            },
            amount: 6967802.04,
          },
          {
            type: "discount",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 120971012,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            promotion: {
              ids: {
                mindboxId: 445735010,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            amount: 21098663.17,
          },
          {
            type: "deliveryDiscount",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 833167866,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            promotion: {
              ids: {
                mindboxId: 1531238233,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            amount: 6272434.97,
          },
          {
            type: "message",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 2034779172,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            promotion: {
              ids: {
                mindboxId: 156935465,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
          },
          {
            type: "issuedCoupon",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 389897904,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            promotion: {
              ids: {
                mindboxId: 1368258995,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            issuedCoupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 513973716,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
          },
          {
            type: "discount",
            promotion: {
              ids: {
                mindboxId: 988347201,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            amount: 16032274.27,
          },
          {
            type: "discount",
            coupon: {
              ids: {
                code: "ABC12345",
              },
              pool: {
                ids: {
                  mindboxId: 1966817662,
                  externalId: "pool-1",
                },
                name: "Новый пул промокодов",
                description: "Пул для новой акции!",
              },
            },
            amount: 5200120.47,
          },
        ],
        lineNumber: 1,
        lineId: "6",
        minPricePerItem: 95251.03,
        costPricePerItem: 9725898.93,
        giftCard: {
          ids: {
            number: "3284651302",
          },
          getFromPool: true,
          status: "CanBeActivated",
        },
        placeholders: [
          {
            ids: {
              externalId: "top",
            },
            content: [
              {
                type: "text",
                promotion: {
                  ids: {
                    mindboxId: 956896160,
                    externalId: "promotion-1",
                  },
                  name: "Новая акция",
                  type: "mindbox",
                },
                message: "Ура! У вас скидка!",
              },
              {
                type: "possibleDiscounts",
                promotion: {
                  ids: {
                    mindboxId: 26717579,
                    externalId: "promotion-1",
                  },
                  name: "Новая акция",
                  type: "mindbox",
                },
                possibleDiscounts: {
                  discountsCount: 2,
                  discount: {
                    amount: 10855641.38,
                    amountType: "Absolute",
                  },
                  products: [
                    {
                      ids: {
                        mindboxId: 1889768117,
                        default: "1755308720",
                        website: "24916354",
                        system1c: "1309885796",
                      },
                    },
                    {
                      ids: {
                        mindboxId: 2038968630,
                        default: "863264996",
                        website: "712011316",
                        system1c: "85289590",
                      },
                    },
                  ],
                },
              },
            ],
          },
          {
            ids: {
              externalId: "top",
            },
            content: [
              {
                type: "text",
                promotion: {
                  ids: {
                    mindboxId: 920231738,
                    externalId: "promotion-1",
                  },
                  name: "Новая акция",
                  type: "mindbox",
                },
                message: "Ура! У вас скидка!",
              },
              {
                type: "possibleDiscounts",
                promotion: {
                  ids: {
                    mindboxId: 930293306,
                    externalId: "promotion-1",
                  },
                  name: "Новая акция",
                  type: "mindbox",
                },
                possibleDiscounts: {
                  discountsCount: 2,
                  discount: {
                    amount: 20069059.43,
                    amountType: "Absolute",
                  },
                  products: [
                    {
                      ids: {
                        mindboxId: 1086396577,
                        default: "1219610192",
                        website: "222642819",
                        system1c: "797901523",
                      },
                    },
                    {
                      ids: {
                        mindboxId: 93927243,
                        default: "1903350911",
                        website: "1772208070",
                        system1c: "1753341541",
                      },
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
    appliedPromotions: [
      {
        type: "earnedBonusPoints",
        coupon: {
          ids: {
            code: "ABC12345",
          },
          pool: {
            ids: {
              mindboxId: 622190754,
              externalId: "pool-1",
            },
            name: "Новый пул промокодов",
            description: "Пул для новой акции!",
          },
        },
        promotion: {
          ids: {
            mindboxId: 1043337289,
            externalId: "promotion-1",
          },
          name: "Новая акция",
          type: "mindbox",
        },
        balanceType: {
          ids: {
            systemName: "ojbLVRsD",
          },
          name: "tmtk1GOB",
        },
        amount: 1180401.2,
        expirationDateTimeUtc: "2017-02-13T22:04:40.76Z",
      },
      {
        type: "spentBonusPoints",
        coupon: {
          ids: {
            code: "ABC12345",
          },
          pool: {
            ids: {
              mindboxId: 419234848,
              externalId: "pool-1",
            },
            name: "Новый пул промокодов",
            description: "Пул для новой акции!",
          },
        },
        promotion: {
          ids: {
            mindboxId: 880694824,
            externalId: "promotion-1",
          },
          name: "Новая акция",
          type: "mindbox",
        },
        balanceType: {
          ids: {
            systemName: "8r6qx418",
          },
          name: "iLqkYKaK",
        },
        amount: 16327420.01,
      },
      {
        type: "discount",
        coupon: {
          ids: {
            code: "ABC12345",
          },
          pool: {
            ids: {
              mindboxId: 130510213,
              externalId: "pool-1",
            },
            name: "Новый пул промокодов",
            description: "Пул для новой акции!",
          },
        },
        promotion: {
          ids: {
            mindboxId: 118506896,
            externalId: "promotion-1",
          },
          name: "Новая акция",
          type: "mindbox",
        },
        amount: 6929359.6,
      },
      {
        type: "deliveryDiscount",
        coupon: {
          ids: {
            code: "ABC12345",
          },
          pool: {
            ids: {
              mindboxId: 810262470,
              externalId: "pool-1",
            },
            name: "Новый пул промокодов",
            description: "Пул для новой акции!",
          },
        },
        promotion: {
          ids: {
            mindboxId: 1497291562,
            externalId: "promotion-1",
          },
          name: "Новая акция",
          type: "mindbox",
        },
        amount: 6653645.27,
      },
      {
        type: "message",
        coupon: {
          ids: {
            code: "ABC12345",
          },
          pool: {
            ids: {
              mindboxId: 1857240434,
              externalId: "pool-1",
            },
            name: "Новый пул промокодов",
            description: "Пул для новой акции!",
          },
        },
        promotion: {
          ids: {
            mindboxId: 1976033026,
            externalId: "promotion-1",
          },
          name: "Новая акция",
          type: "mindbox",
        },
      },
      {
        type: "issuedCoupon",
        coupon: {
          ids: {
            code: "ABC12345",
          },
          pool: {
            ids: {
              mindboxId: 1506150882,
              externalId: "pool-1",
            },
            name: "Новый пул промокодов",
            description: "Пул для новой акции!",
          },
        },
        promotion: {
          ids: {
            mindboxId: 11133877,
            externalId: "promotion-1",
          },
          name: "Новая акция",
          type: "mindbox",
        },
        issuedCoupon: {
          ids: {
            code: "ABC12345",
          },
          pool: {
            ids: {
              mindboxId: 302805830,
              externalId: "pool-1",
            },
            name: "Новый пул промокодов",
            description: "Пул для новой акции!",
          },
        },
      },
      {
        type: "discount",
        promotion: {
          ids: {
            mindboxId: 58219796,
            externalId: "promotion-1",
          },
          name: "Новая акция",
          type: "mindbox",
        },
        amount: 17853107.91,
      },
      {
        type: "discount",
        coupon: {
          ids: {
            code: "ABC12345",
          },
          pool: {
            ids: {
              mindboxId: 1662883173,
              externalId: "pool-1",
            },
            name: "Новый пул промокодов",
            description: "Пул для новой акции!",
          },
        },
        amount: 17074535.58,
      },
    ],
    placeholders: [
      {
        ids: {
          externalId: "top",
        },
        content: [
          {
            type: "text",
            promotion: {
              ids: {
                mindboxId: 202955906,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            message: "Ура! У вас скидка!",
          },
          {
            type: "possibleDiscounts",
            promotion: {
              ids: {
                mindboxId: 162642465,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            possibleDiscounts: {
              discountsCount: 2,
              discount: {
                amount: 14604629.75,
                amountType: "Absolute",
              },
              products: [
                {
                  ids: {
                    mindboxId: 1092843563,
                    default: "1065681969",
                    website: "1153881525",
                    system1c: "782408162",
                  },
                },
                {
                  ids: {
                    mindboxId: 1842796905,
                    default: "156930314",
                    website: "379456495",
                    system1c: "939548260",
                  },
                },
              ],
            },
          },
        ],
      },
      {
        ids: {
          externalId: "top",
        },
        content: [
          {
            type: "text",
            promotion: {
              ids: {
                mindboxId: 96186981,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            message: "Ура! У вас скидка!",
          },
          {
            type: "possibleDiscounts",
            promotion: {
              ids: {
                mindboxId: 2054302,
                externalId: "promotion-1",
              },
              name: "Новая акция",
              type: "mindbox",
            },
            possibleDiscounts: {
              discountsCount: 2,
              discount: {
                amount: 10145121.29,
                amountType: "Absolute",
              },
              products: [
                {
                  ids: {
                    mindboxId: 1709068049,
                    default: "1831835232",
                    website: "632781766",
                    system1c: "2126298331",
                  },
                },
                {
                  ids: {
                    mindboxId: 2074864734,
                    default: "1873782535",
                    website: "70432354",
                    system1c: "589041274",
                  },
                },
              ],
            },
          },
        ],
      },
    ],
    bonusPointsInfo: [
      {
        status: "Success",
        availableAmountForCurrentOrder: 8295431.24,
        spentAmountForCurrentOrder: 1559295.84,
        balance: {
          total: 16594789.28,
          available: 2202060.23,
          blocked: 19474460.28,
        },
      },
      {
        status: "Success",
        availableAmountForCurrentOrder: 15417181.89,
        spentAmountForCurrentOrder: 20423028.05,
        balance: {
          total: 15632017.52,
          available: 8865936.3,
          blocked: 19197363.33,
        },
      },
    ],
    couponsInfo: [
      {
        discountAmountForCurrentOrder: 10528369.9,
        coupon: {
          ids: {
            code: "ABC12345",
          },
          pool: {
            ids: {
              mindboxId: 683788363,
              externalId: "pool-1",
            },
            name: "Новый пул промокодов",
            description: "Пул для новой акции!",
          },
          status: "YetNotActive",
          availableFromDateTimeUtc: "2018-10-22T22:04:40.76Z",
          availableTillDateTimeUtc: "2017-11-20T22:04:40.76Z",
          usedDateTimeUtc: "2019-04-19T22:04:40.76Z",
        },
      },
      {
        discountAmountForCurrentOrder: 6533321.56,
        coupon: {
          ids: {
            code: "ABC12345",
          },
          pool: {
            ids: {
              mindboxId: 1117835067,
              externalId: "pool-1",
            },
            name: "Новый пул промокодов",
            description: "Пул для новой акции!",
          },
          status: "CanNotBeUsedForCurrentOrder",
          availableFromDateTimeUtc: "2019-09-26T22:04:40.76Z",
          availableTillDateTimeUtc: "2017-09-14T22:04:40.76Z",
          usedDateTimeUtc: "2018-02-15T22:04:40.76Z",
        },
      },
    ],
    paymentsInfo: [
      {
        type: "giftCard",
        availableAmountForCurrentOrder: 11525290.25,
        giftCard: {
          ids: {
            number: "wzNCZ",
          },
          status: "CanBeUsed",
          balance: {
            total: 9369139.79,
            available: 15536866.88,
            used: 9336755.02,
          },
        },
      },
      {
        type: "giftCard",
        availableAmountForCurrentOrder: 9824457.81,
        giftCard: {
          ids: {
            number: "IHbBJ",
          },
          status: "Inactive",
          balance: {
            total: 3307237.66,
            available: 9599788.05,
            used: 5195378.17,
          },
        },
      },
    ],
    bonusPointsChanges: [
      {
        balanceType: {
          ids: {
            systemName: "MBcRZtuf",
          },
          name: "P02zXwLm",
        },
        earnedAmount: 1396638.62,
        spentAmount: 5761799.72,
      },
      {
        balanceType: {
          ids: {
            systemName: "REDNhFOU",
          },
          name: "LE0pZEmG",
        },
        earnedAmount: 20955125.72,
        spentAmount: 10868072.91,
      },
    ],
    customFields: {
      defectTestField: "test13",
      socialcard: true,
    },
  },
  customer: {
    processingStatus: "Processed",
    firstName: "Иван",
    middleName: "Иванович",
    lastName: "Иванов",
    email: "test@mindbox.ru",
    isEmailInvalid: false,
    mobilePhone: 79001234567,
    isMobilePhoneInvalid: false,
    isMobilePhoneConfirmed: true,
    pendingMobilePhone: 79652026149,
    area: {
      ids: {
        externalId: "MoscowCity",
      },
      name: "Москва",
    },
    birthDate: "1990-01-31",
    sex: "female",
    customFields: {
      child1Sex: "",
      clearTestClient: "",
      isCompany: true,
      multiline: ["1", "2"],
      singleline: ["56", ""],
      walletCardLink: "",
      walletCardQrCodeLink: "",
      walletCardSubscription: false,
    },
    changeDateTimeUtc: "2018-10-22T22:04:40.76Z",
    ianaTimeZone: "Asia/Hong_Kong",
    timeZoneSource: "Определили в трекере",
  },
  balances: [
    {
      total: 7411602.09,
      available: 5530656.63,
      blocked: 8504294.89,
      systemName: "FP2WL8eXCF",
      balanceType: {
        ids: {
          systemName: "hqpkbxMQ",
        },
        name: "xqTfc7aE",
      },
    },
    {
      total: 745277.66,
      available: 14401541.54,
      blocked: 11328122.48,
      systemName: "lizyckKMQ5",
      balanceType: {
        ids: {
          systemName: "9A6ftv8T",
        },
        name: "lavZehjF",
      },
    },
  ],
};
export default response;

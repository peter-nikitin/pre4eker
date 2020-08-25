export const requestExample = {
  json: `{
    "pointOfContact": "GqsRn9o",
    "customer": {
      "discountCard": {
        "ids": {
          "number": "12345"
        }
      },
      "ids": {
        "mindboxId": "800136209",
        "websiteId": "185765438",
        "externalId": "f41rx"
      },
      "email": "lCIXnQOn3z5@nzfrq.spa",
      "mobilePhone": "79515965529"
    },
    "order": {
      "ids": {
        "mindboxId": "1639535248",
        "offlineTransactionId": "1182159495",
        "receiptNumber": "585452554",
        "orderMobileAppId": "1381781588",
        "websiteTransactionId": "383424514",
        "orderId2": "1598945085"
      },
      "cashdesk": {
        "ids": {
          "externalId": "12345"
        }
      },
      "deliveryCost": "15435386.01",
      "customFields": {
        "defectTestField": "test13",
        "socialcard": "true"
      },
      "area": {
        "ids": {
          "externalId": "FdjPaYtMlq"
        }
      },
      "requestedPromotions": [
        {
          "type": "discount",
          "promotion": {
            "ids": {
              "externalId": "l9X6v1F6"
            }
          },
          "coupon": {
            "ids": {
              "code": "oadsfghoiu"
            },
            "pool": {
              "ids": {
                "externalId": "UnknownExternalId",
                "mindboxId": "1837928584"
              }
            }
          },
          "amount": "15432267.89"
        },
        {
          "type": "discount",
          "promotion": {
            "ids": {
              "externalId": "hzIRoiT"
            }
          },
          "coupon": {
            "ids": {
              "code": "oadsfghoiu"
            },
            "pool": {
              "ids": {
                "externalId": "promo-code-pool-12",
                "mindboxId": "1076539200"
              }
            }
          },
          "amount": "7328785.97"
        }
      ],
      "bonusPoints": [
        {
          "amount": "17539130.57"
        },
        {
          "amount": "11390229.34"
        }
      ],
      "coupons": [
        {
          "ids": {
            "code": "BwFrb"
          }
        },
        {
          "ids": {
            "code": "TLMLwK"
          }
        }
      ],
      "payments": [
        {
          "type": "giftCard",
          "id": "2TovX8"
        },
        {
          "type": "card",
          "creditCard": {
            "hash": "784693314"
          }
        },
        {
          "type": "card1",
          "creditCard": {
            "hash": "169438437"
          }
        },
        {
          "type": "card2",
          "creditCard": {
            "hash": "74235472"
          }
        }
      ],
      "lines": [
        {
          "minPricePerItem": "9001682.09",
          "costPricePerItem": "6370927.87",
          "customFields": {
            "cF": "true"
          },
          "basePricePerItem": "1728132.07",
          "quantity": "13926121.1",
          "lineId": "240",
          "lineNumber": "1",
          "requestedPromotions": [
            {
              "type": "discount",
              "promotion": {
                "ids": {
                  "externalId": "K0stF9"
                }
              },
              "coupon": {
                "ids": {
                  "code": "oadsfghoiu"
                },
                "pool": {
                  "ids": {
                    "externalId": "promo-code-pool-12",
                    "mindboxId": "1091848103"
                  }
                }
              },
              "amount": "11563570.18"
            },
            {
              "type": "discount",
              "promotion": {
                "ids": {
                  "externalId": "NVoWGUp"
                }
              },
              "coupon": {
                "ids": {
                  "code": "oadsfghoiu"
                },
                "pool": {
                  "ids": {
                    "externalId": "promo-code-pool",
                    "mindboxId": "1257272751"
                  }
                }
              },
              "amount": "15714969.72"
            }
          ],
          "product": {
            "ids": {
              "system1c": "2064647950",
              "website": "1804380390",
              "default": "354329620"
            }
          },
          "status": {
            "ids": {
              "externalId": "InCart"
            }
          },
          "giftCard": {
            "ids": {
              "number": "9WwkW"
            },
            "getFromPool": "false"
          }
        },
        {
          "minPricePerItem": "615261.16",
          "costPricePerItem": "15813964.95",
          "customFields": {
            "cF": "true"
          },
          "basePricePerItem": "19800306.01",
          "quantity": "12946553.84",
          "lineId": "361",
          "lineNumber": "1",
          "requestedPromotions": [
            {
              "type": "discount",
              "promotion": {
                "ids": {
                  "externalId": "og2b7"
                }
              },
              "coupon": {
                "ids": {
                  "code": "oadsfghoiu"
                },
                "pool": {
                  "ids": {
                    "externalId": "promo-code-pool-9",
                    "mindboxId": "1483356839"
                  }
                }
              },
              "amount": "16489723.8"
            },
            {
              "type": "discount",
              "promotion": {
                "ids": {
                  "externalId": "9u8Q1QSUqit"
                }
              },
              "coupon": {
                "ids": {
                  "code": "oadsfghoiu"
                },
                "pool": {
                  "ids": {
                    "externalId": "promo-code-pool-7",
                    "mindboxId": "447048918"
                  }
                }
              },
              "amount": "14345461.97"
            }
          ],
          "product": {
            "ids": {
              "system1c": "315080754",
              "website": "1867397562",
              "default": "817316722"
            }
          },
          "status": {
            "ids": {
              "externalId": "InCart"
            }
          },
          "giftCard": {
            "ids": {
              "number": "Jtuxshw"
            },
            "getFromPool": "false"
          }
        }
      ]
    },
    "executionDateTimeUtc": "2017-11-14T09:31:41.33Z"
  }`,
  xml: `<operation>
  <pointOfContact>GqsRn9o</pointOfContact>
  <customer>
    <discountCard>
      <ids>
        <number>12345</number>
      </ids>
    </discountCard>
    <ids>
      <mindboxId>800136209</mindboxId>
      <websiteId>185765438</websiteId>
      <externalId>f41rx</externalId>
    </ids>
    <email>lCIXnQOn3z5@nzfrq.spa</email>
    <mobilePhone>79515965529</mobilePhone>
  </customer>
  <order>
    <ids>
      <mindboxId>1639535248</mindboxId>
      <offlineTransactionId>1182159495</offlineTransactionId>
      <receiptNumber>585452554</receiptNumber>
      <orderMobileAppId>1381781588</orderMobileAppId>
      <websiteTransactionId>383424514</websiteTransactionId>
      <orderId2>1598945085</orderId2>
    </ids>
    <cashdesk>
      <ids>
        <externalId>12345</externalId>
      </ids>
    </cashdesk>
    <deliveryCost>15435386.01</deliveryCost>
    <customFields>
      <defectTestField>test13</defectTestField>
      <socialcard>true</socialcard>
    </customFields>
    <area>
      <ids>
        <externalId>FdjPaYtMlq</externalId>
      </ids>
    </area>
    <requestedPromotions>
      <requestedPromotion>
        <type>discount</type>
        <promotion>
          <ids>
            <externalId>l9X6v1F6</externalId>
          </ids>
        </promotion>
        <coupon>
          <ids>
            <code>oadsfghoiu</code>
          </ids>
          <pool>
            <ids>
              <externalId>UnknownExternalId</externalId>
              <mindboxId>1837928584</mindboxId>
            </ids>
          </pool>
        </coupon>
        <amount>15432267.89</amount>
      </requestedPromotion>
      <requestedPromotion>
        <type>discount</type>
        <promotion>
          <ids>
            <externalId>hzIRoiT</externalId>
          </ids>
        </promotion>
        <coupon>
          <ids>
            <code>oadsfghoiu</code>
          </ids>
          <pool>
            <ids>
              <externalId>promo-code-pool-12</externalId>
              <mindboxId>1076539200</mindboxId>
            </ids>
          </pool>
        </coupon>
        <amount>7328785.97</amount>
      </requestedPromotion>
    </requestedPromotions>
    <bonusPoints>
      <bonusPointsItem>
        <amount>17539130.57</amount>
      </bonusPointsItem>
      <bonusPointsItem>
        <amount>11390229.34</amount>
      </bonusPointsItem>
    </bonusPoints>
    <coupons>
      <coupon>
        <ids>
          <code>BwFrb</code>
        </ids>
      </coupon>
      <coupon>
        <ids>
          <code>TLMLwK</code>
        </ids>
      </coupon>
    </coupons>
    <payments>
      <payment>
        <type>giftCard</type>
        <id>2TovX8</id>
      </payment>
      <payment>
        <type>card</type>
        <creditCard>
          <hash>784693314</hash>
        </creditCard>
      </payment>
      <payment>
        <type>card1</type>
        <creditCard>
          <hash>169438437</hash>
        </creditCard>
      </payment>
      <payment>
        <type>card2</type>
        <creditCard>
          <hash>74235472</hash>
        </creditCard>
      </payment>
    </payments>
    <lines>
      <line>
        <minPricePerItem>9001682.09</minPricePerItem>
        <costPricePerItem>6370927.87</costPricePerItem>
        <customFields>
          <cF>true</cF>
        </customFields>
        <basePricePerItem>1728132.07</basePricePerItem>
        <quantity>13926121.1</quantity>
        <lineId>240</lineId>
        <lineNumber>1</lineNumber>
        <requestedPromotions>
          <requestedPromotion>
            <type>discount</type>
            <promotion>
              <ids>
                <externalId>K0stF9</externalId>
              </ids>
            </promotion>
            <coupon>
              <ids>
                <code>oadsfghoiu</code>
              </ids>
              <pool>
                <ids>
                  <externalId>promo-code-pool-12</externalId>
                  <mindboxId>1091848103</mindboxId>
                </ids>
              </pool>
            </coupon>
            <amount>11563570.18</amount>
          </requestedPromotion>
          <requestedPromotion>
            <type>discount</type>
            <promotion>
              <ids>
                <externalId>NVoWGUp</externalId>
              </ids>
            </promotion>
            <coupon>
              <ids>
                <code>oadsfghoiu</code>
              </ids>
              <pool>
                <ids>
                  <externalId>promo-code-pool</externalId>
                  <mindboxId>1257272751</mindboxId>
                </ids>
              </pool>
            </coupon>
            <amount>15714969.72</amount>
          </requestedPromotion>
        </requestedPromotions>
        <product>
          <ids>
            <system1c>2064647950</system1c>
            <website>1804380390</website>
            <default>354329620</default>
          </ids>
        </product>
        <status>
          <ids>
            <externalId>InCart</externalId>
          </ids>
        </status>
        <giftCard>
          <ids>
            <number>9WwkW</number>
          </ids>
          <getFromPool>false</getFromPool>
        </giftCard>
      </line>
      <line>
        <minPricePerItem>615261.16</minPricePerItem>
        <costPricePerItem>15813964.95</costPricePerItem>
        <customFields>
          <cF>true</cF>
        </customFields>
        <basePricePerItem>19800306.01</basePricePerItem>
        <quantity>12946553.84</quantity>
        <lineId>361</lineId>
        <lineNumber>1</lineNumber>
        <requestedPromotions>
          <requestedPromotion>
            <type>discount</type>
            <promotion>
              <ids>
                <externalId>og2b7</externalId>
              </ids>
            </promotion>
            <coupon>
              <ids>
                <code>oadsfghoiu</code>
              </ids>
              <pool>
                <ids>
                  <externalId>promo-code-pool-9</externalId>
                  <mindboxId>1483356839</mindboxId>
                </ids>
              </pool>
            </coupon>
            <amount>16489723.8</amount>
          </requestedPromotion>
          <requestedPromotion>
            <type>discount</type>
            <promotion>
              <ids>
                <externalId>9u8Q1QSUqit</externalId>
              </ids>
            </promotion>
            <coupon>
              <ids>
                <code>oadsfghoiu</code>
              </ids>
              <pool>
                <ids>
                  <externalId>promo-code-pool-7</externalId>
                  <mindboxId>447048918</mindboxId>
                </ids>
              </pool>
            </coupon>
            <amount>14345461.97</amount>
          </requestedPromotion>
        </requestedPromotions>
        <product>
          <ids>
            <system1c>315080754</system1c>
            <website>1867397562</website>
            <default>817316722</default>
          </ids>
        </product>
        <status>
          <ids>
            <externalId>InCart</externalId>
          </ids>
        </status>
        <giftCard>
          <ids>
            <number>Jtuxshw</number>
          </ids>
          <getFromPool>false</getFromPool>
        </giftCard>
      </line>
    </lines>
  </order>
  <executionDateTimeUtc>2017-11-14T09:31:41.33Z</executionDateTimeUtc>
</operation>`,
};

export const responseExample = {
  json: `{
    "status": "Success",
    "order": {
      "processingStatus": "Calculated",
      "deliveryCost": "6657401.15",
      "ids": {
        "mindboxId": "988330050",
        "offlineTransactionIdId": "628248378",
        "receiptNumberId": "1731534951",
        "orderMobileAppIdId": "871902898",
        "websiteTransactionIdId": "136315512",
        "orderId2Id": "505254024"
      },
      "totalPrice": "10185205.14",
      "lines": [
        {
          "product": {
            "ids": {
              "system1c": "1267395305",
              "website": "225163544",
              "default": "2066126808"
            }
          },
          "quantity": "4809872.21",
          "basePricePerItem": "11992781.42",
          "discountedPriceOfLine": "779563.9",
          "status": {
            "ids": {
              "externalId": "delivered"
            }
          },
          "appliedPromotions": [
            {
              "type": "earnedBonusPoints",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1134085786",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "272499550",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "balanceType": {
                "ids": {
                  "systemName": "UFFpoKLN"
                },
                "name": "6sWv7TLK"
              },
              "amount": "3135836.17",
              "expirationDateTimeUtc": "2020-02-23T09:31:41.408Z"
            },
            {
              "type": "spentBonusPoints",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "843240113",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1893795904",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "balanceType": {
                "ids": {
                  "systemName": "F8h67FCe"
                },
                "name": "YZSpzrYG"
              },
              "amount": "19007547.66"
            },
            {
              "type": "discount",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1267951352",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "317242088",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "amount": "5814738.7"
            },
            {
              "type": "deliveryDiscount",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "151103087",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1846921295",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "amount": "14658244.18"
            },
            {
              "type": "message",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1495835652",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1024666790",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              }
            },
            {
              "type": "issuedCoupon",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1094354246",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "576877737",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "issuedCoupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1972769723",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              }
            },
            {
              "type": "discount",
              "promotion": {
                "ids": {
                  "mindboxId": "1701771293",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "amount": "1674036.04"
            },
            {
              "type": "discount",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1422416507",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "amount": "7268520.95"
            }
          ],
          "lineNumber": "1",
          "lineId": "1",
          "minPricePerItem": "5261872.93",
          "costPricePerItem": "5308678.36",
          "giftCard": {
            "ids": {
              "number": "1576017530"
            },
            "getFromPool": "true",
            "status": "CanBeActivated"
          },
          "customFields": {
            "cF": "true"
          },
          "placeholders": [
            {
              "ids": {
                "externalId": "top"
              },
              "content": [
                {
                  "type": "text",
                  "promotion": {
                    "ids": {
                      "mindboxId": "1318119355",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "message": "Ура! У вас скидка!"
                },
                {
                  "type": "possibleDiscounts",
                  "promotion": {
                    "ids": {
                      "mindboxId": "1710793949",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "possibleDiscounts": {
                    "discountsCount": "2",
                    "discount": {
                      "amount": "1508931.98",
                      "amountType": "Percent"
                    },
                    "products": [
                      {
                        "ids": {
                          "mindboxId": "656393930",
                          "system1c": "1181345854",
                          "website": "261766243",
                          "default": "1742692817"
                        }
                      },
                      {
                        "ids": {
                          "mindboxId": "482633016",
                          "system1c": "615540341",
                          "website": "1806936133",
                          "default": "992344820"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "ids": {
                "externalId": "top"
              },
              "content": [
                {
                  "type": "text",
                  "promotion": {
                    "ids": {
                      "mindboxId": "980104083",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "message": "Ура! У вас скидка!"
                },
                {
                  "type": "possibleDiscounts",
                  "promotion": {
                    "ids": {
                      "mindboxId": "1767390056",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "possibleDiscounts": {
                    "discountsCount": "2",
                    "discount": {
                      "amount": "2735532.52",
                      "amountType": "Absolute"
                    },
                    "products": [
                      {
                        "ids": {
                          "mindboxId": "697913505",
                          "system1c": "1601467953",
                          "website": "2063303689",
                          "default": "1146441618"
                        }
                      },
                      {
                        "ids": {
                          "mindboxId": "1251074186",
                          "system1c": "989014024",
                          "website": "580155088",
                          "default": "1186213888"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "product": {
            "ids": {
              "system1c": "324647479",
              "website": "1934789553",
              "default": "165528207"
            }
          },
          "quantity": "2734570.18",
          "basePricePerItem": "7180625.71",
          "discountedPriceOfLine": "6801411.01",
          "status": {
            "ids": {
              "externalId": "delivered"
            }
          },
          "appliedPromotions": [
            {
              "type": "earnedBonusPoints",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "788663104",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1350544282",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "balanceType": {
                "ids": {
                  "systemName": "YXoHsyWw"
                },
                "name": "AaBzrQOP"
              },
              "amount": "344636.0",
              "expirationDateTimeUtc": "2017-04-16T09:31:41.408Z"
            },
            {
              "type": "spentBonusPoints",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1223177008",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "229471328",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "balanceType": {
                "ids": {
                  "systemName": "iiJggGZd"
                },
                "name": "9d45NEFK"
              },
              "amount": "115774.78"
            },
            {
              "type": "discount",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "2086422681",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1090822399",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "amount": "8354453.76"
            },
            {
              "type": "deliveryDiscount",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "370313801",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1117362188",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "amount": "3200960.63"
            },
            {
              "type": "message",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "940779204",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "402082263",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              }
            },
            {
              "type": "issuedCoupon",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1818417945",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1888368659",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "issuedCoupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1434248190",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              }
            },
            {
              "type": "discount",
              "promotion": {
                "ids": {
                  "mindboxId": "1781204382",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "amount": "2389934.18"
            },
            {
              "type": "discount",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "627355537",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "amount": "2112744.12"
            }
          ],
          "lineNumber": "1",
          "lineId": "7",
          "minPricePerItem": "11210729.54",
          "costPricePerItem": "17895412.28",
          "giftCard": {
            "ids": {
              "number": "8552793091"
            },
            "getFromPool": "false",
            "status": "CanBeActivated"
          },
          "customFields": {
            "cF": "false"
          },
          "placeholders": [
            {
              "ids": {
                "externalId": "top"
              },
              "content": [
                {
                  "type": "text",
                  "promotion": {
                    "ids": {
                      "mindboxId": "425300847",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "message": "Ура! У вас скидка!"
                },
                {
                  "type": "possibleDiscounts",
                  "promotion": {
                    "ids": {
                      "mindboxId": "320403090",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "possibleDiscounts": {
                    "discountsCount": "2",
                    "discount": {
                      "amount": "1706594.45",
                      "amountType": "Percent"
                    },
                    "products": [
                      {
                        "ids": {
                          "mindboxId": "151768000",
                          "system1c": "1525527937",
                          "website": "387731632",
                          "default": "2006641174"
                        }
                      },
                      {
                        "ids": {
                          "mindboxId": "74463431",
                          "system1c": "870701834",
                          "website": "1535809774",
                          "default": "191355510"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "ids": {
                "externalId": "top"
              },
              "content": [
                {
                  "type": "text",
                  "promotion": {
                    "ids": {
                      "mindboxId": "1441228659",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "message": "Ура! У вас скидка!"
                },
                {
                  "type": "possibleDiscounts",
                  "promotion": {
                    "ids": {
                      "mindboxId": "494780007",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "possibleDiscounts": {
                    "discountsCount": "2",
                    "discount": {
                      "amount": "15823234.81",
                      "amountType": "Percent"
                    },
                    "products": [
                      {
                        "ids": {
                          "mindboxId": "1896799454",
                          "system1c": "397274709",
                          "website": "1738701150",
                          "default": "261391141"
                        }
                      },
                      {
                        "ids": {
                          "mindboxId": "1482802544",
                          "system1c": "516404039",
                          "website": "570970360",
                          "default": "1431494976"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "appliedPromotions": [
        {
          "type": "earnedBonusPoints",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "880240565",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "promotion": {
            "ids": {
              "mindboxId": "1647707543",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          },
          "balanceType": {
            "ids": {
              "systemName": "xb1fLUgV"
            },
            "name": "qguGNYmk"
          },
          "amount": "17150777.97",
          "expirationDateTimeUtc": "2018-07-24T09:31:41.408Z"
        },
        {
          "type": "spentBonusPoints",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "1087465050",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "promotion": {
            "ids": {
              "mindboxId": "1144970126",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          },
          "balanceType": {
            "ids": {
              "systemName": "dNpIvSxx"
            },
            "name": "72ZlS4uE"
          },
          "amount": "11453550.95"
        },
        {
          "type": "discount",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "456953648",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "promotion": {
            "ids": {
              "mindboxId": "840773475",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          },
          "amount": "12135503.06"
        },
        {
          "type": "deliveryDiscount",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "681698453",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "promotion": {
            "ids": {
              "mindboxId": "1179195842",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          },
          "amount": "4684783.81"
        },
        {
          "type": "message",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "1919035622",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "promotion": {
            "ids": {
              "mindboxId": "1680692158",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          }
        },
        {
          "type": "issuedCoupon",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "2069170819",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "promotion": {
            "ids": {
              "mindboxId": "905471028",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          },
          "issuedCoupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "1083636677",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          }
        },
        {
          "type": "discount",
          "promotion": {
            "ids": {
              "mindboxId": "220887117",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          },
          "amount": "9488098.89"
        },
        {
          "type": "discount",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "1832504281",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "amount": "18901680.52"
        }
      ],
      "placeholders": [
        {
          "ids": {
            "externalId": "top"
          },
          "content": [
            {
              "type": "text",
              "promotion": {
                "ids": {
                  "mindboxId": "1940259162",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "message": "Ура! У вас скидка!"
            },
            {
              "type": "possibleDiscounts",
              "promotion": {
                "ids": {
                  "mindboxId": "502737417",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "possibleDiscounts": {
                "discountsCount": "2",
                "discount": {
                  "amount": "6952665.85",
                  "amountType": "Percent"
                },
                "products": [
                  {
                    "ids": {
                      "mindboxId": "398066231",
                      "system1c": "785137585",
                      "website": "904675018",
                      "default": "40510897"
                    }
                  },
                  {
                    "ids": {
                      "mindboxId": "1572685492",
                      "system1c": "1183445011",
                      "website": "1554171004",
                      "default": "1364412370"
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "ids": {
            "externalId": "top"
          },
          "content": [
            {
              "type": "text",
              "promotion": {
                "ids": {
                  "mindboxId": "723896821",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "message": "Ура! У вас скидка!"
            },
            {
              "type": "possibleDiscounts",
              "promotion": {
                "ids": {
                  "mindboxId": "1073461739",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "possibleDiscounts": {
                "discountsCount": "2",
                "discount": {
                  "amount": "19715270.8",
                  "amountType": "Percent"
                },
                "products": [
                  {
                    "ids": {
                      "mindboxId": "1876017302",
                      "system1c": "1095899460",
                      "website": "569722702",
                      "default": "428996078"
                    }
                  },
                  {
                    "ids": {
                      "mindboxId": "848037096",
                      "system1c": "2021398391",
                      "website": "463271673",
                      "default": "1992417532"
                    }
                  }
                ]
              }
            }
          ]
        }
      ],
      "bonusPointsInfo": [
        {
          "status": "Success",
          "availableAmountForCurrentOrder": "21410999.85",
          "spentAmountForCurrentOrder": "16710070.01",
          "balance": {
            "total": "7582458.87",
            "available": "17348696.43",
            "blocked": "18965380.21"
          }
        },
        {
          "status": "Success",
          "availableAmountForCurrentOrder": "6164503.29",
          "spentAmountForCurrentOrder": "15026817.25",
          "balance": {
            "total": "11075705.66",
            "available": "644120.96",
            "blocked": "11439637.11"
          }
        }
      ],
      "couponsInfo": [
        {
          "discountAmountForCurrentOrder": "14973536.89",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "148806687",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            },
            "status": "AlreadyNotActive",
            "availableFromDateTimeUtc": "2018-11-26T09:31:41.408Z",
            "availableTillDateTimeUtc": "2017-09-24T09:31:41.408Z",
            "usedDateTimeUtc": "2018-05-25T09:31:41.408Z"
          }
        },
        {
          "discountAmountForCurrentOrder": "16457370.89",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "1772508485",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            },
            "status": "AlreadyNotActive",
            "availableFromDateTimeUtc": "2019-01-17T09:31:41.408Z",
            "availableTillDateTimeUtc": "2017-05-27T09:31:41.408Z",
            "usedDateTimeUtc": "2019-04-21T09:31:41.408Z"
          }
        }
      ],
      "paymentsInfo": [
        {
          "type": "giftCard",
          "availableAmountForCurrentOrder": "3790871.87",
          "giftCard": {
            "ids": {
              "number": "oe7BY"
            },
            "status": "Preactivated",
            "balance": {
              "total": "8745428.77",
              "available": "268916.98",
              "used": "13172890.22"
            }
          }
        },
        {
          "type": "giftCard",
          "availableAmountForCurrentOrder": "2914565.23",
          "giftCard": {
            "ids": {
              "number": "b0Mlx"
            },
            "status": "AlreadyUsed",
            "balance": {
              "total": "18227203.93",
              "available": "19162334.57",
              "used": "7557289.5"
            }
          }
        }
      ],
      "bonusPointsChanges": [
        {
          "balanceType": {
            "ids": {
              "systemName": "mGZBGbGZ"
            },
            "name": "NEv6oGVX"
          },
          "earnedAmount": "1018327.55",
          "spentAmount": "15784929.18"
        },
        {
          "balanceType": {
            "ids": {
              "systemName": "DLSeJLOY"
            },
            "name": "4m8udMDR"
          },
          "earnedAmount": "20920052.27",
          "spentAmount": "1695819.95"
        }
      ],
      "customFields": {
        "defectTestField": "test13",
        "socialcard": "true"
      }
    },
    "customer": {
      "processingStatus": "Processed",
      "firstName": "Иван",
      "middleName": "Иванович",
      "lastName": "Иванов",
      "email": "test@mindbox.ru",
      "isEmailInvalid": "true",
      "mobilePhone": "79001234567",
      "isMobilePhoneInvalid": "false",
      "isMobilePhoneConfirmed": "false",
      "pendingMobilePhone": "79293563890",
      "area": {
        "ids": {
          "externalId": "MoscowCity"
        },
        "name": "Москва"
      },
      "birthDate": "1990-01-31",
      "sex": "male",
      "customFields": {
        "child1Sex": "",
        "clearTestClient": "",
        "isCompany": "true",
        "multiline": [
          "",
          ""
        ],
        "singleline": [
          "",
          ""
        ],
        "walletCardLink": "",
        "walletCardQrCodeLink": "",
        "walletCardSubscription": "false"
      },
      "changeDateTimeUtc": "2017-10-24 09:31:41.251",
      "ianaTimeZone": "Asia/Hong_Kong",
      "timeZoneSource": "Определили в трекере"
    },
    "balances": [
      {
        "total": "15980365.12",
        "available": "18656007.06",
        "blocked": "4916127.34",
        "systemName": "uExrDI6Ows",
        "balanceType": {
          "ids": {
            "systemName": "hebdkj3X"
          },
          "name": "IQIk2d3e"
        }
      },
      {
        "total": "6422158.29",
        "available": "4574495.82",
        "blocked": "7024101.37",
        "systemName": "ClKuu9ZYVN",
        "balanceType": {
          "ids": {
            "systemName": "0IAqICyX"
          },
          "name": "sVRTZllG"
        }
      }
    ]
  }`,
  xml: `<result>
  <status>Success</status>
  <order>
    <processingStatus>Calculated</processingStatus>
    <deliveryCost>6657401.15</deliveryCost>
    <ids>
      <mindboxId>988330050</mindboxId>
      <offlineTransactionIdId>628248378</offlineTransactionIdId>
      <receiptNumberId>1731534951</receiptNumberId>
      <orderMobileAppIdId>871902898</orderMobileAppIdId>
      <websiteTransactionIdId>136315512</websiteTransactionIdId>
      <orderId2Id>505254024</orderId2Id>
    </ids>
    <totalPrice>10185205.14</totalPrice>
    <lines>
      <line>
        <product>
          <ids>
            <system1c>1267395305</system1c>
            <website>225163544</website>
            <default>2066126808</default>
          </ids>
        </product>
        <quantity>4809872.21</quantity>
        <basePricePerItem>11992781.42</basePricePerItem>
        <discountedPriceOfLine>779563.9</discountedPriceOfLine>
        <status>
          <ids>
            <externalId>delivered</externalId>
          </ids>
        </status>
        <appliedPromotions>
          <appliedPromotion>
            <type>earnedBonusPoints</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1134085786</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>272499550</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <balanceType>
              <ids>
                <systemName>UFFpoKLN</systemName>
              </ids>
              <name>6sWv7TLK</name>
            </balanceType>
            <amount>3135836.17</amount>
            <expirationDateTimeUtc>2020-02-23T09:31:41.408Z</expirationDateTimeUtc>
          </appliedPromotion>
          <appliedPromotion>
            <type>spentBonusPoints</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>843240113</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1893795904</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <balanceType>
              <ids>
                <systemName>F8h67FCe</systemName>
              </ids>
              <name>YZSpzrYG</name>
            </balanceType>
            <amount>19007547.66</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>discount</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1267951352</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>317242088</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <amount>5814738.7</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>deliveryDiscount</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>151103087</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1846921295</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <amount>14658244.18</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>message</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1495835652</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1024666790</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
          </appliedPromotion>
          <appliedPromotion>
            <type>issuedCoupon</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1094354246</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>576877737</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <issuedCoupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1972769723</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </issuedCoupon>
          </appliedPromotion>
          <appliedPromotion>
            <type>discount</type>
            <promotion>
              <ids>
                <mindboxId>1701771293</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <amount>1674036.04</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>discount</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1422416507</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <amount>7268520.95</amount>
          </appliedPromotion>
        </appliedPromotions>
        <lineNumber>1</lineNumber>
        <lineId>1</lineId>
        <minPricePerItem>5261872.93</minPricePerItem>
        <costPricePerItem>5308678.36</costPricePerItem>
        <giftCard>
          <ids>
            <number>1576017530</number>
          </ids>
          <getFromPool>true</getFromPool>
          <status>CanBeActivated</status>
        </giftCard>
        <customFields>
          <cF>true</cF>
        </customFields>
        <placeholders>
          <placeholder>
            <ids>
              <externalId>top</externalId>
            </ids>
            <content>
              <contentItem>
                <type>text</type>
                <promotion>
                  <ids>
                    <mindboxId>1318119355</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <message>Ура! У вас скидка!</message>
              </contentItem>
              <contentItem>
                <type>possibleDiscounts</type>
                <promotion>
                  <ids>
                    <mindboxId>1710793949</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <possibleDiscounts>
                  <discountsCount>2</discountsCount>
                  <discount>
                    <amount>1508931.98</amount>
                    <amountType>Percent</amountType>
                  </discount>
                  <products>
                    <product>
                      <ids>
                        <mindboxId>656393930</mindboxId>
                        <system1c>1181345854</system1c>
                        <website>261766243</website>
                        <default>1742692817</default>
                      </ids>
                    </product>
                    <product>
                      <ids>
                        <mindboxId>482633016</mindboxId>
                        <system1c>615540341</system1c>
                        <website>1806936133</website>
                        <default>992344820</default>
                      </ids>
                    </product>
                  </products>
                </possibleDiscounts>
              </contentItem>
            </content>
          </placeholder>
          <placeholder>
            <ids>
              <externalId>top</externalId>
            </ids>
            <content>
              <contentItem>
                <type>text</type>
                <promotion>
                  <ids>
                    <mindboxId>980104083</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <message>Ура! У вас скидка!</message>
              </contentItem>
              <contentItem>
                <type>possibleDiscounts</type>
                <promotion>
                  <ids>
                    <mindboxId>1767390056</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <possibleDiscounts>
                  <discountsCount>2</discountsCount>
                  <discount>
                    <amount>2735532.52</amount>
                    <amountType>Absolute</amountType>
                  </discount>
                  <products>
                    <product>
                      <ids>
                        <mindboxId>697913505</mindboxId>
                        <system1c>1601467953</system1c>
                        <website>2063303689</website>
                        <default>1146441618</default>
                      </ids>
                    </product>
                    <product>
                      <ids>
                        <mindboxId>1251074186</mindboxId>
                        <system1c>989014024</system1c>
                        <website>580155088</website>
                        <default>1186213888</default>
                      </ids>
                    </product>
                  </products>
                </possibleDiscounts>
              </contentItem>
            </content>
          </placeholder>
        </placeholders>
      </line>
      <line>
        <product>
          <ids>
            <system1c>324647479</system1c>
            <website>1934789553</website>
            <default>165528207</default>
          </ids>
        </product>
        <quantity>2734570.18</quantity>
        <basePricePerItem>7180625.71</basePricePerItem>
        <discountedPriceOfLine>6801411.01</discountedPriceOfLine>
        <status>
          <ids>
            <externalId>delivered</externalId>
          </ids>
        </status>
        <appliedPromotions>
          <appliedPromotion>
            <type>earnedBonusPoints</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>788663104</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1350544282</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <balanceType>
              <ids>
                <systemName>YXoHsyWw</systemName>
              </ids>
              <name>AaBzrQOP</name>
            </balanceType>
            <amount>344636.0</amount>
            <expirationDateTimeUtc>2017-04-16T09:31:41.408Z</expirationDateTimeUtc>
          </appliedPromotion>
          <appliedPromotion>
            <type>spentBonusPoints</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1223177008</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>229471328</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <balanceType>
              <ids>
                <systemName>iiJggGZd</systemName>
              </ids>
              <name>9d45NEFK</name>
            </balanceType>
            <amount>115774.78</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>discount</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>2086422681</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1090822399</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <amount>8354453.76</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>deliveryDiscount</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>370313801</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1117362188</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <amount>3200960.63</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>message</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>940779204</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>402082263</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
          </appliedPromotion>
          <appliedPromotion>
            <type>issuedCoupon</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1818417945</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1888368659</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <issuedCoupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1434248190</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </issuedCoupon>
          </appliedPromotion>
          <appliedPromotion>
            <type>discount</type>
            <promotion>
              <ids>
                <mindboxId>1781204382</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <amount>2389934.18</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>discount</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>627355537</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <amount>2112744.12</amount>
          </appliedPromotion>
        </appliedPromotions>
        <lineNumber>1</lineNumber>
        <lineId>7</lineId>
        <minPricePerItem>11210729.54</minPricePerItem>
        <costPricePerItem>17895412.28</costPricePerItem>
        <giftCard>
          <ids>
            <number>8552793091</number>
          </ids>
          <getFromPool>false</getFromPool>
          <status>CanBeActivated</status>
        </giftCard>
        <customFields>
          <cF>false</cF>
        </customFields>
        <placeholders>
          <placeholder>
            <ids>
              <externalId>top</externalId>
            </ids>
            <content>
              <contentItem>
                <type>text</type>
                <promotion>
                  <ids>
                    <mindboxId>425300847</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <message>Ура! У вас скидка!</message>
              </contentItem>
              <contentItem>
                <type>possibleDiscounts</type>
                <promotion>
                  <ids>
                    <mindboxId>320403090</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <possibleDiscounts>
                  <discountsCount>2</discountsCount>
                  <discount>
                    <amount>1706594.45</amount>
                    <amountType>Percent</amountType>
                  </discount>
                  <products>
                    <product>
                      <ids>
                        <mindboxId>151768000</mindboxId>
                        <system1c>1525527937</system1c>
                        <website>387731632</website>
                        <default>2006641174</default>
                      </ids>
                    </product>
                    <product>
                      <ids>
                        <mindboxId>74463431</mindboxId>
                        <system1c>870701834</system1c>
                        <website>1535809774</website>
                        <default>191355510</default>
                      </ids>
                    </product>
                  </products>
                </possibleDiscounts>
              </contentItem>
            </content>
          </placeholder>
          <placeholder>
            <ids>
              <externalId>top</externalId>
            </ids>
            <content>
              <contentItem>
                <type>text</type>
                <promotion>
                  <ids>
                    <mindboxId>1441228659</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <message>Ура! У вас скидка!</message>
              </contentItem>
              <contentItem>
                <type>possibleDiscounts</type>
                <promotion>
                  <ids>
                    <mindboxId>494780007</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <possibleDiscounts>
                  <discountsCount>2</discountsCount>
                  <discount>
                    <amount>15823234.81</amount>
                    <amountType>Percent</amountType>
                  </discount>
                  <products>
                    <product>
                      <ids>
                        <mindboxId>1896799454</mindboxId>
                        <system1c>397274709</system1c>
                        <website>1738701150</website>
                        <default>261391141</default>
                      </ids>
                    </product>
                    <product>
                      <ids>
                        <mindboxId>1482802544</mindboxId>
                        <system1c>516404039</system1c>
                        <website>570970360</website>
                        <default>1431494976</default>
                      </ids>
                    </product>
                  </products>
                </possibleDiscounts>
              </contentItem>
            </content>
          </placeholder>
        </placeholders>
      </line>
    </lines>
    <appliedPromotions>
      <appliedPromotion>
        <type>earnedBonusPoints</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>880240565</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <promotion>
          <ids>
            <mindboxId>1647707543</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
        <balanceType>
          <ids>
            <systemName>xb1fLUgV</systemName>
          </ids>
          <name>qguGNYmk</name>
        </balanceType>
        <amount>17150777.97</amount>
        <expirationDateTimeUtc>2018-07-24T09:31:41.408Z</expirationDateTimeUtc>
      </appliedPromotion>
      <appliedPromotion>
        <type>spentBonusPoints</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>1087465050</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <promotion>
          <ids>
            <mindboxId>1144970126</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
        <balanceType>
          <ids>
            <systemName>dNpIvSxx</systemName>
          </ids>
          <name>72ZlS4uE</name>
        </balanceType>
        <amount>11453550.95</amount>
      </appliedPromotion>
      <appliedPromotion>
        <type>discount</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>456953648</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <promotion>
          <ids>
            <mindboxId>840773475</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
        <amount>12135503.06</amount>
      </appliedPromotion>
      <appliedPromotion>
        <type>deliveryDiscount</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>681698453</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <promotion>
          <ids>
            <mindboxId>1179195842</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
        <amount>4684783.81</amount>
      </appliedPromotion>
      <appliedPromotion>
        <type>message</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>1919035622</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <promotion>
          <ids>
            <mindboxId>1680692158</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
      </appliedPromotion>
      <appliedPromotion>
        <type>issuedCoupon</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>2069170819</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <promotion>
          <ids>
            <mindboxId>905471028</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
        <issuedCoupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>1083636677</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </issuedCoupon>
      </appliedPromotion>
      <appliedPromotion>
        <type>discount</type>
        <promotion>
          <ids>
            <mindboxId>220887117</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
        <amount>9488098.89</amount>
      </appliedPromotion>
      <appliedPromotion>
        <type>discount</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>1832504281</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <amount>18901680.52</amount>
      </appliedPromotion>
    </appliedPromotions>
    <placeholders>
      <placeholder>
        <ids>
          <externalId>top</externalId>
        </ids>
        <content>
          <contentItem>
            <type>text</type>
            <promotion>
              <ids>
                <mindboxId>1940259162</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <message>Ура! У вас скидка!</message>
          </contentItem>
          <contentItem>
            <type>possibleDiscounts</type>
            <promotion>
              <ids>
                <mindboxId>502737417</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <possibleDiscounts>
              <discountsCount>2</discountsCount>
              <discount>
                <amount>6952665.85</amount>
                <amountType>Percent</amountType>
              </discount>
              <products>
                <product>
                  <ids>
                    <mindboxId>398066231</mindboxId>
                    <system1c>785137585</system1c>
                    <website>904675018</website>
                    <default>40510897</default>
                  </ids>
                </product>
                <product>
                  <ids>
                    <mindboxId>1572685492</mindboxId>
                    <system1c>1183445011</system1c>
                    <website>1554171004</website>
                    <default>1364412370</default>
                  </ids>
                </product>
              </products>
            </possibleDiscounts>
          </contentItem>
        </content>
      </placeholder>
      <placeholder>
        <ids>
          <externalId>top</externalId>
        </ids>
        <content>
          <contentItem>
            <type>text</type>
            <promotion>
              <ids>
                <mindboxId>723896821</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <message>Ура! У вас скидка!</message>
          </contentItem>
          <contentItem>
            <type>possibleDiscounts</type>
            <promotion>
              <ids>
                <mindboxId>1073461739</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <possibleDiscounts>
              <discountsCount>2</discountsCount>
              <discount>
                <amount>19715270.8</amount>
                <amountType>Percent</amountType>
              </discount>
              <products>
                <product>
                  <ids>
                    <mindboxId>1876017302</mindboxId>
                    <system1c>1095899460</system1c>
                    <website>569722702</website>
                    <default>428996078</default>
                  </ids>
                </product>
                <product>
                  <ids>
                    <mindboxId>848037096</mindboxId>
                    <system1c>2021398391</system1c>
                    <website>463271673</website>
                    <default>1992417532</default>
                  </ids>
                </product>
              </products>
            </possibleDiscounts>
          </contentItem>
        </content>
      </placeholder>
    </placeholders>
    <bonusPointsInfo>
      <bonusPointsInfoItem>
        <status>Success</status>
        <availableAmountForCurrentOrder>21410999.85</availableAmountForCurrentOrder>
        <spentAmountForCurrentOrder>16710070.01</spentAmountForCurrentOrder>
        <balance>
          <total>7582458.87</total>
          <available>17348696.43</available>
          <blocked>18965380.21</blocked>
        </balance>
      </bonusPointsInfoItem>
      <bonusPointsInfoItem>
        <status>Success</status>
        <availableAmountForCurrentOrder>6164503.29</availableAmountForCurrentOrder>
        <spentAmountForCurrentOrder>15026817.25</spentAmountForCurrentOrder>
        <balance>
          <total>11075705.66</total>
          <available>644120.96</available>
          <blocked>11439637.11</blocked>
        </balance>
      </bonusPointsInfoItem>
    </bonusPointsInfo>
    <couponsInfo>
      <couponInfo>
        <discountAmountForCurrentOrder>14973536.89</discountAmountForCurrentOrder>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>148806687</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
          <status>AlreadyNotActive</status>
          <availableFromDateTimeUtc>2018-11-26T09:31:41.408Z</availableFromDateTimeUtc>
          <availableTillDateTimeUtc>2017-09-24T09:31:41.408Z</availableTillDateTimeUtc>
          <usedDateTimeUtc>2018-05-25T09:31:41.408Z</usedDateTimeUtc>
        </coupon>
      </couponInfo>
      <couponInfo>
        <discountAmountForCurrentOrder>16457370.89</discountAmountForCurrentOrder>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>1772508485</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
          <status>AlreadyNotActive</status>
          <availableFromDateTimeUtc>2019-01-17T09:31:41.408Z</availableFromDateTimeUtc>
          <availableTillDateTimeUtc>2017-05-27T09:31:41.408Z</availableTillDateTimeUtc>
          <usedDateTimeUtc>2019-04-21T09:31:41.408Z</usedDateTimeUtc>
        </coupon>
      </couponInfo>
    </couponsInfo>
    <paymentsInfo>
      <paymentInfo>
        <type>giftCard</type>
        <availableAmountForCurrentOrder>3790871.87</availableAmountForCurrentOrder>
        <giftCard>
          <ids>
            <number>oe7BY</number>
          </ids>
          <status>Preactivated</status>
          <balance>
            <total>8745428.77</total>
            <available>268916.98</available>
            <used>13172890.22</used>
          </balance>
        </giftCard>
      </paymentInfo>
      <paymentInfo>
        <type>giftCard</type>
        <availableAmountForCurrentOrder>2914565.23</availableAmountForCurrentOrder>
        <giftCard>
          <ids>
            <number>b0Mlx</number>
          </ids>
          <status>AlreadyUsed</status>
          <balance>
            <total>18227203.93</total>
            <available>19162334.57</available>
            <used>7557289.5</used>
          </balance>
        </giftCard>
      </paymentInfo>
    </paymentsInfo>
    <bonusPointsChanges>
      <bonusPointsChange>
        <balanceType>
          <ids>
            <systemName>mGZBGbGZ</systemName>
          </ids>
          <name>NEv6oGVX</name>
        </balanceType>
        <earnedAmount>1018327.55</earnedAmount>
        <spentAmount>15784929.18</spentAmount>
      </bonusPointsChange>
      <bonusPointsChange>
        <balanceType>
          <ids>
            <systemName>DLSeJLOY</systemName>
          </ids>
          <name>4m8udMDR</name>
        </balanceType>
        <earnedAmount>20920052.27</earnedAmount>
        <spentAmount>1695819.95</spentAmount>
      </bonusPointsChange>
    </bonusPointsChanges>
    <customFields>
      <defectTestField>test13</defectTestField>
      <socialcard>true</socialcard>
    </customFields>
  </order>
  <customer>
    <processingStatus>Processed</processingStatus>
    <firstName>Иван</firstName>
    <middleName>Иванович</middleName>
    <lastName>Иванов</lastName>
    <email>test@mindbox.ru</email>
    <isEmailInvalid>true</isEmailInvalid>
    <mobilePhone>79001234567</mobilePhone>
    <isMobilePhoneInvalid>false</isMobilePhoneInvalid>
    <isMobilePhoneConfirmed>false</isMobilePhoneConfirmed>
    <pendingMobilePhone>79293563890</pendingMobilePhone>
    <area>
      <ids>
        <externalId>MoscowCity</externalId>
      </ids>
      <name>Москва</name>
    </area>
    <birthDate>1990-01-31</birthDate>
    <sex>male</sex>
    <customFields>
      <child1Sex></child1Sex>
      <clearTestClient></clearTestClient>
      <isCompany>true</isCompany>
      <multiline>
        <value></value>
        <value></value>
      </multiline>
      <singleline>
        <value></value>
        <value></value>
      </singleline>
      <walletCardLink></walletCardLink>
      <walletCardQrCodeLink></walletCardQrCodeLink>
      <walletCardSubscription>false</walletCardSubscription>
    </customFields>
    <changeDateTimeUtc>2017-10-24 09:31:41.251</changeDateTimeUtc>
    <ianaTimeZone>Asia/Hong_Kong</ianaTimeZone>
    <timeZoneSource>Определили в трекере</timeZoneSource>
  </customer>
  <balances>
    <balance>
      <total>15980365.12</total>
      <available>18656007.06</available>
      <blocked>4916127.34</blocked>
      <systemName>uExrDI6Ows</systemName>
      <balanceType>
        <ids>
          <systemName>hebdkj3X</systemName>
        </ids>
        <name>IQIk2d3e</name>
      </balanceType>
    </balance>
    <balance>
      <total>6422158.29</total>
      <available>4574495.82</available>
      <blocked>7024101.37</blocked>
      <systemName>ClKuu9ZYVN</systemName>
      <balanceType>
        <ids>
          <systemName>0IAqICyX</systemName>
        </ids>
        <name>sVRTZllG</name>
      </balanceType>
    </balance>
  </balances>
</result>`,
};

export const responseExampleNoCustomer = {
  json: `{
    "status": "Success",
    "order": {
      "processingStatus": "Calculated",
      "deliveryCost": "6657401.15",
      "ids": {
        "mindboxId": "988330050",
        "offlineTransactionIdId": "628248378",
        "receiptNumberId": "1731534951",
        "orderMobileAppIdId": "871902898",
        "websiteTransactionIdId": "136315512",
        "orderId2Id": "505254024"
      },
      "totalPrice": "10185205.14",
      "lines": [
        {
          "product": {
            "ids": {
              "system1c": "1267395305",
              "website": "225163544",
              "default": "2066126808"
            }
          },
          "quantity": "4809872.21",
          "basePricePerItem": "11992781.42",
          "discountedPriceOfLine": "779563.9",
          "status": {
            "ids": {
              "externalId": "delivered"
            }
          },
          "appliedPromotions": [
            {
              "type": "earnedBonusPoints",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1134085786",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "272499550",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "balanceType": {
                "ids": {
                  "systemName": "UFFpoKLN"
                },
                "name": "6sWv7TLK"
              },
              "amount": "3135836.17",
              "expirationDateTimeUtc": "2020-02-23T09:31:41.408Z"
            },
            {
              "type": "spentBonusPoints",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "843240113",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1893795904",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "balanceType": {
                "ids": {
                  "systemName": "F8h67FCe"
                },
                "name": "YZSpzrYG"
              },
              "amount": "19007547.66"
            },
            {
              "type": "discount",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1267951352",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "317242088",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "amount": "5814738.7"
            },
            {
              "type": "deliveryDiscount",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "151103087",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1846921295",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "amount": "14658244.18"
            },
            {
              "type": "message",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1495835652",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1024666790",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              }
            },
            {
              "type": "issuedCoupon",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1094354246",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "576877737",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "issuedCoupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1972769723",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              }
            },
            {
              "type": "discount",
              "promotion": {
                "ids": {
                  "mindboxId": "1701771293",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "amount": "1674036.04"
            },
            {
              "type": "discount",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1422416507",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "amount": "7268520.95"
            }
          ],
          "lineNumber": "1",
          "lineId": "1",
          "minPricePerItem": "5261872.93",
          "costPricePerItem": "5308678.36",
          "giftCard": {
            "ids": {
              "number": "1576017530"
            },
            "getFromPool": "true",
            "status": "CanBeActivated"
          },
          "customFields": {
            "cF": "true"
          },
          "placeholders": [
            {
              "ids": {
                "externalId": "top"
              },
              "content": [
                {
                  "type": "text",
                  "promotion": {
                    "ids": {
                      "mindboxId": "1318119355",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "message": "Ура! У вас скидка!"
                },
                {
                  "type": "possibleDiscounts",
                  "promotion": {
                    "ids": {
                      "mindboxId": "1710793949",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "possibleDiscounts": {
                    "discountsCount": "2",
                    "discount": {
                      "amount": "1508931.98",
                      "amountType": "Percent"
                    },
                    "products": [
                      {
                        "ids": {
                          "mindboxId": "656393930",
                          "system1c": "1181345854",
                          "website": "261766243",
                          "default": "1742692817"
                        }
                      },
                      {
                        "ids": {
                          "mindboxId": "482633016",
                          "system1c": "615540341",
                          "website": "1806936133",
                          "default": "992344820"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "ids": {
                "externalId": "top"
              },
              "content": [
                {
                  "type": "text",
                  "promotion": {
                    "ids": {
                      "mindboxId": "980104083",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "message": "Ура! У вас скидка!"
                },
                {
                  "type": "possibleDiscounts",
                  "promotion": {
                    "ids": {
                      "mindboxId": "1767390056",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "possibleDiscounts": {
                    "discountsCount": "2",
                    "discount": {
                      "amount": "2735532.52",
                      "amountType": "Absolute"
                    },
                    "products": [
                      {
                        "ids": {
                          "mindboxId": "697913505",
                          "system1c": "1601467953",
                          "website": "2063303689",
                          "default": "1146441618"
                        }
                      },
                      {
                        "ids": {
                          "mindboxId": "1251074186",
                          "system1c": "989014024",
                          "website": "580155088",
                          "default": "1186213888"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "product": {
            "ids": {
              "system1c": "324647479",
              "website": "1934789553",
              "default": "165528207"
            }
          },
          "quantity": "2734570.18",
          "basePricePerItem": "7180625.71",
          "discountedPriceOfLine": "6801411.01",
          "status": {
            "ids": {
              "externalId": "delivered"
            }
          },
          "appliedPromotions": [
            {
              "type": "earnedBonusPoints",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "788663104",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1350544282",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "balanceType": {
                "ids": {
                  "systemName": "YXoHsyWw"
                },
                "name": "AaBzrQOP"
              },
              "amount": "344636.0",
              "expirationDateTimeUtc": "2017-04-16T09:31:41.408Z"
            },
            {
              "type": "spentBonusPoints",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1223177008",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "229471328",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "balanceType": {
                "ids": {
                  "systemName": "iiJggGZd"
                },
                "name": "9d45NEFK"
              },
              "amount": "115774.78"
            },
            {
              "type": "discount",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "2086422681",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1090822399",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "amount": "8354453.76"
            },
            {
              "type": "deliveryDiscount",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "370313801",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1117362188",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "amount": "3200960.63"
            },
            {
              "type": "message",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "940779204",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "402082263",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              }
            },
            {
              "type": "issuedCoupon",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1818417945",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "promotion": {
                "ids": {
                  "mindboxId": "1888368659",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "issuedCoupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "1434248190",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              }
            },
            {
              "type": "discount",
              "promotion": {
                "ids": {
                  "mindboxId": "1781204382",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "amount": "2389934.18"
            },
            {
              "type": "discount",
              "coupon": {
                "ids": {
                  "code": "ABC12345"
                },
                "pool": {
                  "ids": {
                    "mindboxId": "627355537",
                    "externalId": "pool-1"
                  },
                  "name": "Новый пул промокодов",
                  "description": "Пул для новой акции!"
                }
              },
              "amount": "2112744.12"
            }
          ],
          "lineNumber": "1",
          "lineId": "7",
          "minPricePerItem": "11210729.54",
          "costPricePerItem": "17895412.28",
          "giftCard": {
            "ids": {
              "number": "8552793091"
            },
            "getFromPool": "false",
            "status": "CanBeActivated"
          },
          "customFields": {
            "cF": "false"
          },
          "placeholders": [
            {
              "ids": {
                "externalId": "top"
              },
              "content": [
                {
                  "type": "text",
                  "promotion": {
                    "ids": {
                      "mindboxId": "425300847",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "message": "Ура! У вас скидка!"
                },
                {
                  "type": "possibleDiscounts",
                  "promotion": {
                    "ids": {
                      "mindboxId": "320403090",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "possibleDiscounts": {
                    "discountsCount": "2",
                    "discount": {
                      "amount": "1706594.45",
                      "amountType": "Percent"
                    },
                    "products": [
                      {
                        "ids": {
                          "mindboxId": "151768000",
                          "system1c": "1525527937",
                          "website": "387731632",
                          "default": "2006641174"
                        }
                      },
                      {
                        "ids": {
                          "mindboxId": "74463431",
                          "system1c": "870701834",
                          "website": "1535809774",
                          "default": "191355510"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "ids": {
                "externalId": "top"
              },
              "content": [
                {
                  "type": "text",
                  "promotion": {
                    "ids": {
                      "mindboxId": "1441228659",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "message": "Ура! У вас скидка!"
                },
                {
                  "type": "possibleDiscounts",
                  "promotion": {
                    "ids": {
                      "mindboxId": "494780007",
                      "externalId": "promotion-1"
                    },
                    "name": "Новая акция",
                    "type": "mindbox"
                  },
                  "possibleDiscounts": {
                    "discountsCount": "2",
                    "discount": {
                      "amount": "15823234.81",
                      "amountType": "Percent"
                    },
                    "products": [
                      {
                        "ids": {
                          "mindboxId": "1896799454",
                          "system1c": "397274709",
                          "website": "1738701150",
                          "default": "261391141"
                        }
                      },
                      {
                        "ids": {
                          "mindboxId": "1482802544",
                          "system1c": "516404039",
                          "website": "570970360",
                          "default": "1431494976"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "appliedPromotions": [
        {
          "type": "earnedBonusPoints",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "880240565",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "promotion": {
            "ids": {
              "mindboxId": "1647707543",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          },
          "balanceType": {
            "ids": {
              "systemName": "xb1fLUgV"
            },
            "name": "qguGNYmk"
          },
          "amount": "17150777.97",
          "expirationDateTimeUtc": "2018-07-24T09:31:41.408Z"
        },
        {
          "type": "spentBonusPoints",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "1087465050",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "promotion": {
            "ids": {
              "mindboxId": "1144970126",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          },
          "balanceType": {
            "ids": {
              "systemName": "dNpIvSxx"
            },
            "name": "72ZlS4uE"
          },
          "amount": "11453550.95"
        },
        {
          "type": "discount",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "456953648",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "promotion": {
            "ids": {
              "mindboxId": "840773475",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          },
          "amount": "12135503.06"
        },
        {
          "type": "deliveryDiscount",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "681698453",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "promotion": {
            "ids": {
              "mindboxId": "1179195842",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          },
          "amount": "4684783.81"
        },
        {
          "type": "message",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "1919035622",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "promotion": {
            "ids": {
              "mindboxId": "1680692158",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          }
        },
        {
          "type": "issuedCoupon",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "2069170819",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "promotion": {
            "ids": {
              "mindboxId": "905471028",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          },
          "issuedCoupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "1083636677",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          }
        },
        {
          "type": "discount",
          "promotion": {
            "ids": {
              "mindboxId": "220887117",
              "externalId": "promotion-1"
            },
            "name": "Новая акция",
            "type": "mindbox"
          },
          "amount": "9488098.89"
        },
        {
          "type": "discount",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "1832504281",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            }
          },
          "amount": "18901680.52"
        }
      ],
      "placeholders": [
        {
          "ids": {
            "externalId": "top"
          },
          "content": [
            {
              "type": "text",
              "promotion": {
                "ids": {
                  "mindboxId": "1940259162",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "message": "Ура! У вас скидка!"
            },
            {
              "type": "possibleDiscounts",
              "promotion": {
                "ids": {
                  "mindboxId": "502737417",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "possibleDiscounts": {
                "discountsCount": "2",
                "discount": {
                  "amount": "6952665.85",
                  "amountType": "Percent"
                },
                "products": [
                  {
                    "ids": {
                      "mindboxId": "398066231",
                      "system1c": "785137585",
                      "website": "904675018",
                      "default": "40510897"
                    }
                  },
                  {
                    "ids": {
                      "mindboxId": "1572685492",
                      "system1c": "1183445011",
                      "website": "1554171004",
                      "default": "1364412370"
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "ids": {
            "externalId": "top"
          },
          "content": [
            {
              "type": "text",
              "promotion": {
                "ids": {
                  "mindboxId": "723896821",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "message": "Ура! У вас скидка!"
            },
            {
              "type": "possibleDiscounts",
              "promotion": {
                "ids": {
                  "mindboxId": "1073461739",
                  "externalId": "promotion-1"
                },
                "name": "Новая акция",
                "type": "mindbox"
              },
              "possibleDiscounts": {
                "discountsCount": "2",
                "discount": {
                  "amount": "19715270.8",
                  "amountType": "Percent"
                },
                "products": [
                  {
                    "ids": {
                      "mindboxId": "1876017302",
                      "system1c": "1095899460",
                      "website": "569722702",
                      "default": "428996078"
                    }
                  },
                  {
                    "ids": {
                      "mindboxId": "848037096",
                      "system1c": "2021398391",
                      "website": "463271673",
                      "default": "1992417532"
                    }
                  }
                ]
              }
            }
          ]
        }
      ],
      "bonusPointsInfo": [
        {
          "status": "Success",
          "availableAmountForCurrentOrder": "21410999.85",
          "spentAmountForCurrentOrder": "16710070.01",
          "balance": {
            "total": "7582458.87",
            "available": "17348696.43",
            "blocked": "18965380.21"
          }
        },
        {
          "status": "Success",
          "availableAmountForCurrentOrder": "6164503.29",
          "spentAmountForCurrentOrder": "15026817.25",
          "balance": {
            "total": "11075705.66",
            "available": "644120.96",
            "blocked": "11439637.11"
          }
        }
      ],
      "couponsInfo": [
        {
          "discountAmountForCurrentOrder": "14973536.89",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "148806687",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            },
            "status": "AlreadyNotActive",
            "availableFromDateTimeUtc": "2018-11-26T09:31:41.408Z",
            "availableTillDateTimeUtc": "2017-09-24T09:31:41.408Z",
            "usedDateTimeUtc": "2018-05-25T09:31:41.408Z"
          }
        },
        {
          "discountAmountForCurrentOrder": "16457370.89",
          "coupon": {
            "ids": {
              "code": "ABC12345"
            },
            "pool": {
              "ids": {
                "mindboxId": "1772508485",
                "externalId": "pool-1"
              },
              "name": "Новый пул промокодов",
              "description": "Пул для новой акции!"
            },
            "status": "AlreadyNotActive",
            "availableFromDateTimeUtc": "2019-01-17T09:31:41.408Z",
            "availableTillDateTimeUtc": "2017-05-27T09:31:41.408Z",
            "usedDateTimeUtc": "2019-04-21T09:31:41.408Z"
          }
        }
      ],
      "paymentsInfo": [
        {
          "type": "giftCard",
          "availableAmountForCurrentOrder": "3790871.87",
          "giftCard": {
            "ids": {
              "number": "oe7BY"
            },
            "status": "Preactivated",
            "balance": {
              "total": "8745428.77",
              "available": "268916.98",
              "used": "13172890.22"
            }
          }
        },
        {
          "type": "giftCard",
          "availableAmountForCurrentOrder": "2914565.23",
          "giftCard": {
            "ids": {
              "number": "b0Mlx"
            },
            "status": "AlreadyUsed",
            "balance": {
              "total": "18227203.93",
              "available": "19162334.57",
              "used": "7557289.5"
            }
          }
        }
      ],
      "bonusPointsChanges": [
        {
          "balanceType": {
            "ids": {
              "systemName": "mGZBGbGZ"
            },
            "name": "NEv6oGVX"
          },
          "earnedAmount": "1018327.55",
          "spentAmount": "15784929.18"
        },
        {
          "balanceType": {
            "ids": {
              "systemName": "DLSeJLOY"
            },
            "name": "4m8udMDR"
          },
          "earnedAmount": "20920052.27",
          "spentAmount": "1695819.95"
        }
      ],
      "customFields": {
        "defectTestField": "test13",
        "socialcard": "true"
      }
    }, 
    "balances": [
      {
        "total": "15980365.12",
        "available": "18656007.06",
        "blocked": "4916127.34",
        "systemName": "uExrDI6Ows",
        "balanceType": {
          "ids": {
            "systemName": "hebdkj3X"
          },
          "name": "IQIk2d3e"
        }
      },
      {
        "total": "6422158.29",
        "available": "4574495.82",
        "blocked": "7024101.37",
        "systemName": "ClKuu9ZYVN",
        "balanceType": {
          "ids": {
            "systemName": "0IAqICyX"
          },
          "name": "sVRTZllG"
        }
      }
    ]
  }`,
  xml: `<result>
  <status>Success</status>
  <order>
    <processingStatus>Calculated</processingStatus>
    <deliveryCost>6657401.15</deliveryCost>
    <ids>
      <mindboxId>988330050</mindboxId>
      <offlineTransactionIdId>628248378</offlineTransactionIdId>
      <receiptNumberId>1731534951</receiptNumberId>
      <orderMobileAppIdId>871902898</orderMobileAppIdId>
      <websiteTransactionIdId>136315512</websiteTransactionIdId>
      <orderId2Id>505254024</orderId2Id>
    </ids>
    <totalPrice>10185205.14</totalPrice>
    <lines>
      <line>
        <product>
          <ids>
            <system1c>1267395305</system1c>
            <website>225163544</website>
            <default>2066126808</default>
          </ids>
        </product>
        <quantity>4809872.21</quantity>
        <basePricePerItem>11992781.42</basePricePerItem>
        <discountedPriceOfLine>779563.9</discountedPriceOfLine>
        <status>
          <ids>
            <externalId>delivered</externalId>
          </ids>
        </status>
        <appliedPromotions>
          <appliedPromotion>
            <type>earnedBonusPoints</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1134085786</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>272499550</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <balanceType>
              <ids>
                <systemName>UFFpoKLN</systemName>
              </ids>
              <name>6sWv7TLK</name>
            </balanceType>
            <amount>3135836.17</amount>
            <expirationDateTimeUtc>2020-02-23T09:31:41.408Z</expirationDateTimeUtc>
          </appliedPromotion>
          <appliedPromotion>
            <type>spentBonusPoints</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>843240113</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1893795904</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <balanceType>
              <ids>
                <systemName>F8h67FCe</systemName>
              </ids>
              <name>YZSpzrYG</name>
            </balanceType>
            <amount>19007547.66</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>discount</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1267951352</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>317242088</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <amount>5814738.7</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>deliveryDiscount</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>151103087</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1846921295</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <amount>14658244.18</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>message</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1495835652</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1024666790</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
          </appliedPromotion>
          <appliedPromotion>
            <type>issuedCoupon</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1094354246</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>576877737</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <issuedCoupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1972769723</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </issuedCoupon>
          </appliedPromotion>
          <appliedPromotion>
            <type>discount</type>
            <promotion>
              <ids>
                <mindboxId>1701771293</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <amount>1674036.04</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>discount</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1422416507</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <amount>7268520.95</amount>
          </appliedPromotion>
        </appliedPromotions>
        <lineNumber>1</lineNumber>
        <lineId>1</lineId>
        <minPricePerItem>5261872.93</minPricePerItem>
        <costPricePerItem>5308678.36</costPricePerItem>
        <giftCard>
          <ids>
            <number>1576017530</number>
          </ids>
          <getFromPool>true</getFromPool>
          <status>CanBeActivated</status>
        </giftCard>
        <customFields>
          <cF>true</cF>
        </customFields>
        <placeholders>
          <placeholder>
            <ids>
              <externalId>top</externalId>
            </ids>
            <content>
              <contentItem>
                <type>text</type>
                <promotion>
                  <ids>
                    <mindboxId>1318119355</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <message>Ура! У вас скидка!</message>
              </contentItem>
              <contentItem>
                <type>possibleDiscounts</type>
                <promotion>
                  <ids>
                    <mindboxId>1710793949</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <possibleDiscounts>
                  <discountsCount>2</discountsCount>
                  <discount>
                    <amount>1508931.98</amount>
                    <amountType>Percent</amountType>
                  </discount>
                  <products>
                    <product>
                      <ids>
                        <mindboxId>656393930</mindboxId>
                        <system1c>1181345854</system1c>
                        <website>261766243</website>
                        <default>1742692817</default>
                      </ids>
                    </product>
                    <product>
                      <ids>
                        <mindboxId>482633016</mindboxId>
                        <system1c>615540341</system1c>
                        <website>1806936133</website>
                        <default>992344820</default>
                      </ids>
                    </product>
                  </products>
                </possibleDiscounts>
              </contentItem>
            </content>
          </placeholder>
          <placeholder>
            <ids>
              <externalId>top</externalId>
            </ids>
            <content>
              <contentItem>
                <type>text</type>
                <promotion>
                  <ids>
                    <mindboxId>980104083</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <message>Ура! У вас скидка!</message>
              </contentItem>
              <contentItem>
                <type>possibleDiscounts</type>
                <promotion>
                  <ids>
                    <mindboxId>1767390056</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <possibleDiscounts>
                  <discountsCount>2</discountsCount>
                  <discount>
                    <amount>2735532.52</amount>
                    <amountType>Absolute</amountType>
                  </discount>
                  <products>
                    <product>
                      <ids>
                        <mindboxId>697913505</mindboxId>
                        <system1c>1601467953</system1c>
                        <website>2063303689</website>
                        <default>1146441618</default>
                      </ids>
                    </product>
                    <product>
                      <ids>
                        <mindboxId>1251074186</mindboxId>
                        <system1c>989014024</system1c>
                        <website>580155088</website>
                        <default>1186213888</default>
                      </ids>
                    </product>
                  </products>
                </possibleDiscounts>
              </contentItem>
            </content>
          </placeholder>
        </placeholders>
      </line>
      <line>
        <product>
          <ids>
            <system1c>324647479</system1c>
            <website>1934789553</website>
            <default>165528207</default>
          </ids>
        </product>
        <quantity>2734570.18</quantity>
        <basePricePerItem>7180625.71</basePricePerItem>
        <discountedPriceOfLine>6801411.01</discountedPriceOfLine>
        <status>
          <ids>
            <externalId>delivered</externalId>
          </ids>
        </status>
        <appliedPromotions>
          <appliedPromotion>
            <type>earnedBonusPoints</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>788663104</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1350544282</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <balanceType>
              <ids>
                <systemName>YXoHsyWw</systemName>
              </ids>
              <name>AaBzrQOP</name>
            </balanceType>
            <amount>344636.0</amount>
            <expirationDateTimeUtc>2017-04-16T09:31:41.408Z</expirationDateTimeUtc>
          </appliedPromotion>
          <appliedPromotion>
            <type>spentBonusPoints</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1223177008</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>229471328</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <balanceType>
              <ids>
                <systemName>iiJggGZd</systemName>
              </ids>
              <name>9d45NEFK</name>
            </balanceType>
            <amount>115774.78</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>discount</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>2086422681</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1090822399</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <amount>8354453.76</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>deliveryDiscount</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>370313801</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1117362188</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <amount>3200960.63</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>message</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>940779204</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>402082263</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
          </appliedPromotion>
          <appliedPromotion>
            <type>issuedCoupon</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1818417945</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <promotion>
              <ids>
                <mindboxId>1888368659</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <issuedCoupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>1434248190</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </issuedCoupon>
          </appliedPromotion>
          <appliedPromotion>
            <type>discount</type>
            <promotion>
              <ids>
                <mindboxId>1781204382</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <amount>2389934.18</amount>
          </appliedPromotion>
          <appliedPromotion>
            <type>discount</type>
            <coupon>
              <ids>
                <code>ABC12345</code>
              </ids>
              <pool>
                <ids>
                  <mindboxId>627355537</mindboxId>
                  <externalId>pool-1</externalId>
                </ids>
                <name>Новый пул промокодов</name>
                <description>Пул для новой акции!</description>
              </pool>
            </coupon>
            <amount>2112744.12</amount>
          </appliedPromotion>
        </appliedPromotions>
        <lineNumber>1</lineNumber>
        <lineId>7</lineId>
        <minPricePerItem>11210729.54</minPricePerItem>
        <costPricePerItem>17895412.28</costPricePerItem>
        <giftCard>
          <ids>
            <number>8552793091</number>
          </ids>
          <getFromPool>false</getFromPool>
          <status>CanBeActivated</status>
        </giftCard>
        <customFields>
          <cF>false</cF>
        </customFields>
        <placeholders>
          <placeholder>
            <ids>
              <externalId>top</externalId>
            </ids>
            <content>
              <contentItem>
                <type>text</type>
                <promotion>
                  <ids>
                    <mindboxId>425300847</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <message>Ура! У вас скидка!</message>
              </contentItem>
              <contentItem>
                <type>possibleDiscounts</type>
                <promotion>
                  <ids>
                    <mindboxId>320403090</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <possibleDiscounts>
                  <discountsCount>2</discountsCount>
                  <discount>
                    <amount>1706594.45</amount>
                    <amountType>Percent</amountType>
                  </discount>
                  <products>
                    <product>
                      <ids>
                        <mindboxId>151768000</mindboxId>
                        <system1c>1525527937</system1c>
                        <website>387731632</website>
                        <default>2006641174</default>
                      </ids>
                    </product>
                    <product>
                      <ids>
                        <mindboxId>74463431</mindboxId>
                        <system1c>870701834</system1c>
                        <website>1535809774</website>
                        <default>191355510</default>
                      </ids>
                    </product>
                  </products>
                </possibleDiscounts>
              </contentItem>
            </content>
          </placeholder>
          <placeholder>
            <ids>
              <externalId>top</externalId>
            </ids>
            <content>
              <contentItem>
                <type>text</type>
                <promotion>
                  <ids>
                    <mindboxId>1441228659</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <message>Ура! У вас скидка!</message>
              </contentItem>
              <contentItem>
                <type>possibleDiscounts</type>
                <promotion>
                  <ids>
                    <mindboxId>494780007</mindboxId>
                    <externalId>promotion-1</externalId>
                  </ids>
                  <name>Новая акция</name>
                  <type>mindbox</type>
                </promotion>
                <possibleDiscounts>
                  <discountsCount>2</discountsCount>
                  <discount>
                    <amount>15823234.81</amount>
                    <amountType>Percent</amountType>
                  </discount>
                  <products>
                    <product>
                      <ids>
                        <mindboxId>1896799454</mindboxId>
                        <system1c>397274709</system1c>
                        <website>1738701150</website>
                        <default>261391141</default>
                      </ids>
                    </product>
                    <product>
                      <ids>
                        <mindboxId>1482802544</mindboxId>
                        <system1c>516404039</system1c>
                        <website>570970360</website>
                        <default>1431494976</default>
                      </ids>
                    </product>
                  </products>
                </possibleDiscounts>
              </contentItem>
            </content>
          </placeholder>
        </placeholders>
      </line>
    </lines>
    <appliedPromotions>
      <appliedPromotion>
        <type>earnedBonusPoints</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>880240565</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <promotion>
          <ids>
            <mindboxId>1647707543</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
        <balanceType>
          <ids>
            <systemName>xb1fLUgV</systemName>
          </ids>
          <name>qguGNYmk</name>
        </balanceType>
        <amount>17150777.97</amount>
        <expirationDateTimeUtc>2018-07-24T09:31:41.408Z</expirationDateTimeUtc>
      </appliedPromotion>
      <appliedPromotion>
        <type>spentBonusPoints</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>1087465050</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <promotion>
          <ids>
            <mindboxId>1144970126</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
        <balanceType>
          <ids>
            <systemName>dNpIvSxx</systemName>
          </ids>
          <name>72ZlS4uE</name>
        </balanceType>
        <amount>11453550.95</amount>
      </appliedPromotion>
      <appliedPromotion>
        <type>discount</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>456953648</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <promotion>
          <ids>
            <mindboxId>840773475</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
        <amount>12135503.06</amount>
      </appliedPromotion>
      <appliedPromotion>
        <type>deliveryDiscount</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>681698453</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <promotion>
          <ids>
            <mindboxId>1179195842</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
        <amount>4684783.81</amount>
      </appliedPromotion>
      <appliedPromotion>
        <type>message</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>1919035622</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <promotion>
          <ids>
            <mindboxId>1680692158</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
      </appliedPromotion>
      <appliedPromotion>
        <type>issuedCoupon</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>2069170819</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <promotion>
          <ids>
            <mindboxId>905471028</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
        <issuedCoupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>1083636677</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </issuedCoupon>
      </appliedPromotion>
      <appliedPromotion>
        <type>discount</type>
        <promotion>
          <ids>
            <mindboxId>220887117</mindboxId>
            <externalId>promotion-1</externalId>
          </ids>
          <name>Новая акция</name>
          <type>mindbox</type>
        </promotion>
        <amount>9488098.89</amount>
      </appliedPromotion>
      <appliedPromotion>
        <type>discount</type>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>1832504281</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
        </coupon>
        <amount>18901680.52</amount>
      </appliedPromotion>
    </appliedPromotions>
    <placeholders>
      <placeholder>
        <ids>
          <externalId>top</externalId>
        </ids>
        <content>
          <contentItem>
            <type>text</type>
            <promotion>
              <ids>
                <mindboxId>1940259162</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <message>Ура! У вас скидка!</message>
          </contentItem>
          <contentItem>
            <type>possibleDiscounts</type>
            <promotion>
              <ids>
                <mindboxId>502737417</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <possibleDiscounts>
              <discountsCount>2</discountsCount>
              <discount>
                <amount>6952665.85</amount>
                <amountType>Percent</amountType>
              </discount>
              <products>
                <product>
                  <ids>
                    <mindboxId>398066231</mindboxId>
                    <system1c>785137585</system1c>
                    <website>904675018</website>
                    <default>40510897</default>
                  </ids>
                </product>
                <product>
                  <ids>
                    <mindboxId>1572685492</mindboxId>
                    <system1c>1183445011</system1c>
                    <website>1554171004</website>
                    <default>1364412370</default>
                  </ids>
                </product>
              </products>
            </possibleDiscounts>
          </contentItem>
        </content>
      </placeholder>
      <placeholder>
        <ids>
          <externalId>top</externalId>
        </ids>
        <content>
          <contentItem>
            <type>text</type>
            <promotion>
              <ids>
                <mindboxId>723896821</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <message>Ура! У вас скидка!</message>
          </contentItem>
          <contentItem>
            <type>possibleDiscounts</type>
            <promotion>
              <ids>
                <mindboxId>1073461739</mindboxId>
                <externalId>promotion-1</externalId>
              </ids>
              <name>Новая акция</name>
              <type>mindbox</type>
            </promotion>
            <possibleDiscounts>
              <discountsCount>2</discountsCount>
              <discount>
                <amount>19715270.8</amount>
                <amountType>Percent</amountType>
              </discount>
              <products>
                <product>
                  <ids>
                    <mindboxId>1876017302</mindboxId>
                    <system1c>1095899460</system1c>
                    <website>569722702</website>
                    <default>428996078</default>
                  </ids>
                </product>
                <product>
                  <ids>
                    <mindboxId>848037096</mindboxId>
                    <system1c>2021398391</system1c>
                    <website>463271673</website>
                    <default>1992417532</default>
                  </ids>
                </product>
              </products>
            </possibleDiscounts>
          </contentItem>
        </content>
      </placeholder>
    </placeholders>
    <bonusPointsInfo>
      <bonusPointsInfoItem>
        <status>Success</status>
        <availableAmountForCurrentOrder>21410999.85</availableAmountForCurrentOrder>
        <spentAmountForCurrentOrder>16710070.01</spentAmountForCurrentOrder>
        <balance>
          <total>7582458.87</total>
          <available>17348696.43</available>
          <blocked>18965380.21</blocked>
        </balance>
      </bonusPointsInfoItem>
      <bonusPointsInfoItem>
        <status>Success</status>
        <availableAmountForCurrentOrder>6164503.29</availableAmountForCurrentOrder>
        <spentAmountForCurrentOrder>15026817.25</spentAmountForCurrentOrder>
        <balance>
          <total>11075705.66</total>
          <available>644120.96</available>
          <blocked>11439637.11</blocked>
        </balance>
      </bonusPointsInfoItem>
    </bonusPointsInfo>
    <couponsInfo>
      <couponInfo>
        <discountAmountForCurrentOrder>14973536.89</discountAmountForCurrentOrder>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>148806687</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
          <status>AlreadyNotActive</status>
          <availableFromDateTimeUtc>2018-11-26T09:31:41.408Z</availableFromDateTimeUtc>
          <availableTillDateTimeUtc>2017-09-24T09:31:41.408Z</availableTillDateTimeUtc>
          <usedDateTimeUtc>2018-05-25T09:31:41.408Z</usedDateTimeUtc>
        </coupon>
      </couponInfo>
      <couponInfo>
        <discountAmountForCurrentOrder>16457370.89</discountAmountForCurrentOrder>
        <coupon>
          <ids>
            <code>ABC12345</code>
          </ids>
          <pool>
            <ids>
              <mindboxId>1772508485</mindboxId>
              <externalId>pool-1</externalId>
            </ids>
            <name>Новый пул промокодов</name>
            <description>Пул для новой акции!</description>
          </pool>
          <status>AlreadyNotActive</status>
          <availableFromDateTimeUtc>2019-01-17T09:31:41.408Z</availableFromDateTimeUtc>
          <availableTillDateTimeUtc>2017-05-27T09:31:41.408Z</availableTillDateTimeUtc>
          <usedDateTimeUtc>2019-04-21T09:31:41.408Z</usedDateTimeUtc>
        </coupon>
      </couponInfo>
    </couponsInfo>
    <paymentsInfo>
      <paymentInfo>
        <type>giftCard</type>
        <availableAmountForCurrentOrder>3790871.87</availableAmountForCurrentOrder>
        <giftCard>
          <ids>
            <number>oe7BY</number>
          </ids>
          <status>Preactivated</status>
          <balance>
            <total>8745428.77</total>
            <available>268916.98</available>
            <used>13172890.22</used>
          </balance>
        </giftCard>
      </paymentInfo>
      <paymentInfo>
        <type>giftCard</type>
        <availableAmountForCurrentOrder>2914565.23</availableAmountForCurrentOrder>
        <giftCard>
          <ids>
            <number>b0Mlx</number>
          </ids>
          <status>AlreadyUsed</status>
          <balance>
            <total>18227203.93</total>
            <available>19162334.57</available>
            <used>7557289.5</used>
          </balance>
        </giftCard>
      </paymentInfo>
    </paymentsInfo>
    <bonusPointsChanges>
      <bonusPointsChange>
        <balanceType>
          <ids>
            <systemName>mGZBGbGZ</systemName>
          </ids>
          <name>NEv6oGVX</name>
        </balanceType>
        <earnedAmount>1018327.55</earnedAmount>
        <spentAmount>15784929.18</spentAmount>
      </bonusPointsChange>
      <bonusPointsChange>
        <balanceType>
          <ids>
            <systemName>DLSeJLOY</systemName>
          </ids>
          <name>4m8udMDR</name>
        </balanceType>
        <earnedAmount>20920052.27</earnedAmount>
        <spentAmount>1695819.95</spentAmount>
      </bonusPointsChange>
    </bonusPointsChanges>
    <customFields>
      <defectTestField>test13</defectTestField>
      <socialcard>true</socialcard>
    </customFields>
  </order> 
  <balances>
    <balance>
      <total>15980365.12</total>
      <available>18656007.06</available>
      <blocked>4916127.34</blocked>
      <systemName>uExrDI6Ows</systemName>
      <balanceType>
        <ids>
          <systemName>hebdkj3X</systemName>
        </ids>
        <name>IQIk2d3e</name>
      </balanceType>
    </balance>
    <balance>
      <total>6422158.29</total>
      <available>4574495.82</available>
      <blocked>7024101.37</blocked>
      <systemName>ClKuu9ZYVN</systemName>
      <balanceType>
        <ids>
          <systemName>0IAqICyX</systemName>
        </ids>
        <name>sVRTZllG</name>
      </balanceType>
    </balance>
  </balances>
</result>`,
};

export const responseExampleNoOrder = {
  json: `{
    "status": "Success",
    "balances": [
      {
        "total": "15980365.12",
        "available": "18656007.06",
        "blocked": "4916127.34",
        "systemName": "uExrDI6Ows",
        "balanceType": {
          "ids": {
            "systemName": "hebdkj3X"
          },
          "name": "IQIk2d3e"
        }
      },
      {
        "total": "6422158.29",
        "available": "4574495.82",
        "blocked": "7024101.37",
        "systemName": "ClKuu9ZYVN",
        "balanceType": {
          "ids": {
            "systemName": "0IAqICyX"
          },
          "name": "sVRTZllG"
        }
      }
    ]
  }`,
  xml: `<result>
  <status>Success</status>
  <balances>
    <balance>
      <total>15980365.12</total>
      <available>18656007.06</available>
      <blocked>4916127.34</blocked>
      <systemName>uExrDI6Ows</systemName>
      <balanceType>
        <ids>
          <systemName>hebdkj3X</systemName>
        </ids>
        <name>IQIk2d3e</name>
      </balanceType>
    </balance>
    <balance>
      <total>6422158.29</total>
      <available>4574495.82</available>
      <blocked>7024101.37</blocked>
      <systemName>ClKuu9ZYVN</systemName>
      <balanceType>
        <ids>
          <systemName>0IAqICyX</systemName>
        </ids>
        <name>sVRTZllG</name>
      </balanceType>
    </balance>
  </balances>
</result>`,
};

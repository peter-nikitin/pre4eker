const example = {
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

export default example;

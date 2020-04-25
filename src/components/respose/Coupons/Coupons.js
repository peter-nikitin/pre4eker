import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Coupon from "./Coupon";

const Coupons = ({ coupons }) => {
  const couponsWithIDs = coupons.map((item) => ({
    ...item,
    id: shortid.generate(),
  }));

  return couponsWithIDs.map((item) => (
    <Coupon couponInfo={item} key={item.id} />
  ));
};

Coupons.propTypes = {
  coupons: PropTypes.array.isRequired,
};

export default Coupons;

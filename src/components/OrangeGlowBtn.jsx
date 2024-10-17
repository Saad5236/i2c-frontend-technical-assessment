import React from "react";
import { Link } from "react-router-dom";

function OrangeGlowBtn({ toLink, children, extraClasses, btnType }) {
  let classes =
    "nav-link orange-glow-btn bg-primary rounded-pill fw-bold text-white " +
    extraClasses;
  return toLink ? (
    <Link className={classes} aria-current="page" to="#">
      {children}
    </Link>
  ) : (
    <button type={btnType ? btnType : "button"} className={classes}>{children}</button>
  );
}

export default OrangeGlowBtn;

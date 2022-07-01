import React from "react";

import { Link } from "react-router-dom";

const LinkNavbar = ({ item, pathname }) => {
  return (
    <Link
      key={item.text}
      to={item.path}
      className={`link ${item.path === pathname && "link-activated"}`}
      title={`link to ${item.text.toLowerCase()} page`}
    >
      {item.text}
    </Link>
  );
};

export default LinkNavbar;

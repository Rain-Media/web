import React from "react";
import Link from "next/link";
import PropTypes, { any, object, string } from "prop-types";

function Route({ url, name }) {
  return <Link href={url}>{name}</Link>;
}

export default Route;

import React from 'react';
import Link from "next/link";
import PropTypes, {any, string} from 'prop-types';

Route.propTypes = {
  url: PropTypes.string,
  name: string || any
};

function Route({ url, name }) {
  return <Link href={ url }>{ name }</Link>;
}

export default Route;

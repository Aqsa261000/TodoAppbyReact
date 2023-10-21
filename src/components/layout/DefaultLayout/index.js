import React from 'react';
import './styles.css';

const DefaultLayout = (props) => {
  return <div className="container">{props.children}</div>;
};

export default DefaultLayout;

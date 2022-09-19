import React from 'react';

const Link = ({ value, name }) => {
  return (
    <li>
      <a href={value}>{name}</a>
    </li>
  );
};

export default Link;

import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const ItemList = ({ productList }) => {
  return (
    <ul className='grid w-full grid-cols-2 px-4 gap-y-2 gap-x-4 md:gap-y-6 md:grid-cols-5 md:container'>
      {productList.map((product) => {
        return (
          <Link to={`/item/${product.id}`} key={product.id}>
            <Item product={product} />
          </Link>
        );
      })}
    </ul>
  );
};

export default ItemList;

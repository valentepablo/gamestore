import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const ItemList = ({ productList }) => {
    return (
        <ul className="item-list">
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

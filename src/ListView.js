import React from 'react';
import PropTypes from 'prop-types';
import { ShopItem } from './ShopItem';

export function ListView(props) {
    return (
          <ul>
            {props.items.map(item => <ShopItem item={item} />)}
          </ul>
    );
}

ListView.propTypes = {
    items:PropTypes.array.isRequired,
};

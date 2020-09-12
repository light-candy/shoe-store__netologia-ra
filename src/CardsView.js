import React from 'react';
import PropTypes from 'prop-types';
import { ShopCard } from './ShopCard';

export function CardsView(props){
    return (
        <div className="card_layout">
          {props.cards.map(card => <ShopCard item={card}/>)}
        </div>
    );
}

CardsView.propTypes = {
    cards:PropTypes.array.isRequired,
};

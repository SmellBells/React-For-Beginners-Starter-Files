import React, { Component } from 'react';
import helpers, { formatPrice } from '../helpers';
import { format } from 'util';

class Fish extends Component {
  render() {
    const {image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
        {isAvailable ?"Add to Order" : "Sold out"}
        </button>
      </li>
    );
  }
}

export default Fish;
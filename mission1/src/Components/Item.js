import React, { Component } from 'react';
import './Item.css';
import { Link } from "react-router-dom";

class Item extends Component {
    render() {
      return (
        <li className="ListItem">
          <div className="ListItem__name">
            {this.props.name}
          </div>
          <div className="ListItem__price">
            {this.props.price} nis
          </div>
          <img className="ListItem__img" src={`/images/${this.props.image}`} alt="prodImage"></img>
          <Link to={`/product/${this.props.name}`}>about</Link>
        </li>
      );
    }
  }

export default Item;
import './ShoppingList.css';
import React, { Component } from 'react';
import Item from './Item';
import dataProducts from '../data.json';

class ShoppingList extends Component {
    renderItem(name, price, image) {
      return <Item name={name} price={price} image={image}></Item>;
    }
  
    render() {
      return (
        <div>
          {
            dataProducts.map(prod => {
              return (
                <div key={prod.Id}>
                  <ul className="shoppingList">
                    {this.renderItem(prod.Name, prod.Price, prod.Image1)}
                  </ul>
                </div>
              )
            })
          }
        </div>
      )
    }
  }

export default ShoppingList;
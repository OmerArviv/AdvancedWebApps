import React, { Component } from 'react';
import './Product.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Product extends Component {

    render() {
        const { onAddItem } = this.props;


        return (
            <div className="App">
                <Card className='card'>
                    <Card.Img variant="top" src={this.props.product.image} className="card_image" />
                    <Card.Body>
                        <Card.Title>{this.props.product.name}</Card.Title>
                        <Card.Text>
                            {this.props.product.price}  ₪ <br />
                            {this.props.product.description}
                        </Card.Text>
                        <Button className='btn_addtocart' onClick={() => onAddItem(this.props.product)}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </div>

        );
    }
}

export default Product
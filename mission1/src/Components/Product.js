import { Component } from "react";
import { Link } from "react-router-dom";
import dataProducts from '../data.json';


class Product extends Component {

    render() {
        const productId = window.location.href.split('/')[4]
        return (
            <div>
                {
                    dataProducts.map(prod => {
                        if (productId === prod.Name) {
                            return (
                                <div key={prod.Id}>
                                    <div className="product">
                                        <img className="product__image1" src={`/images/${prod.Image1}`} alt="image1" />
                                        <div className="product__name">
                                            {prod.Name}
                                        </div>
                                        <div className="product__price">
                                            Price: {prod.Price} NIS
                                        </div>
                                        <div className="product__company">
                                            Made By {prod.Company}
                                        </div>
                                        <img className="product__image2" src={`/images/${prod.Image2}`} alt="image2" />
                                        <div className="product__details">
                                            {prod.Details}
                                        </div>
                                    </div>
                                    <div className="product__backhome">
                                        <Link to="../..">Return To Homepage</Link>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

            </div >
        )
    }
}

export default Product;
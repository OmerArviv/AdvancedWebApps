import React, { Component } from 'react'
import axios from 'axios'
import Product from './Product'
import './Product.css'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/products/")
            .then(res => {
                this.setState({ posts: res.data })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const { posts } = this.state
        const { onAddItem } = this.props
        return (
            <div>
                <img alt='mainlogo' className='TopLogo' src='data:image/png;base64,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' />
                <div className='container'>
                    {
                        posts.length ?
                            posts.map(post =>
                                <div key={post.name} className="ListItem">
                                    <Product
                                        product={post}
                                        onAddItem={onAddItem}
                                    />
                                </div>) :
                            null
                    }
                </div>
            </div>
        )
    }
}

export default PostList
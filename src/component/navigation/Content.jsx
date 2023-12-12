// Content.js
import React, { Component } from "react";
import Product from "../../page/product/product";
import BlogPost from "../../page/BlogPost/BlogPost";

class Content extends Component {
    render() {
        const { order, updateOrder } = this.props;

        return (
            <>
                <div className="container-fluid">
                    {/*<Product order={order} updateOrder={updateOrder} />*/}
                    <BlogPost />
                </div>
            </>
        );
    }
}

export default Content;

import React, { Component } from "react";

class CardBlogComponent extends Component {
    render() {
        // Use this.props instead of props
        return (
            <>
                <div className="card">
                    <img className="card-img-top" src={this.props.images} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.text}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </>
        );
    }
}

CardBlogComponent.defaultProps = {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    images: "https://loremflickr.com/g/277/180/paris",
};

export default CardBlogComponent;

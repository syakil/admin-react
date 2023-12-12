import React, { Component } from "react";

class CardComponent extends Component {
    state = {
        quantity: 0,
    };

    handleMinus = () => {
        const { updateOrder } = this.props;
        if (this.state.quantity > 0) {
            this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
            updateOrder(-1);
        }
    };

    handlePlus = () => {
        const { updateOrder } = this.props;
        this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
        updateOrder(1);
    };

    render() {
        const { title, text, link } = this.props;
        const { quantity } = this.state;

        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={link} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button
                                className="btn btn-danger"
                                type="button"
                                onClick={this.handleMinus}
                            >
                                -
                            </button>
                        </div>
                        <input
                            type="text"
                            className="form-control text-center"
                            value={quantity}
                            readOnly
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={this.handlePlus}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CardComponent.defaultProps = {
    title: "Title",
    text: "Text",
    link: "#",
};

export default CardComponent;

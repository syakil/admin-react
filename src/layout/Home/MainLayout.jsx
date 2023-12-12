import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../../component/navigation/Sidebar';
import Header from '../../component/navigation/Header';
import Footer from '../../component/navigation/Footer';
import BlogPost from '../../page/BlogPost/BlogPost';
import Product from '../../page/product/product';
import Dashboard from '../../page/dashboard/Dashboard';

class MainLayout extends Component {
    state = {
        order: 0,
    };

    updateOrder = (value) => {
        const newOrder = Math.max(this.state.order + value, 0);
        this.setState({ order: newOrder });
    };

    render() {
        return (
            <>
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <Header order={this.state.order} updateOrder={this.updateOrder} />
                        <div id="content">
                            <div className="container-fluid">
                                {/* Only the content inside this area will change */}
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="/blog" element={<BlogPost />} />
                                    <Route path="/product" element={<Product />} />
                                </Routes>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </>
        );
    }
}

export default MainLayout;

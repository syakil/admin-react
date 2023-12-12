import React from "react";
import CardComponent from "../../component/CardComponent";


const Product = ({ order, updateOrder }) => {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Best Product</h1>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <CardComponent order={order} updateOrder={updateOrder} title="Sepatu Converse" text="sepatu converse - Chuck Taylor 70s 100% original" link="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/4/29/6a6609c3-dffe-4fa5-9684-c77376cb8647.jpg" />
                </div>
                <div className="col-md-3">
                    <CardComponent order={order} updateOrder={updateOrder} title="Sepatu Sneaker" text="FED Sepatu Sneaker Casual SANO BLACK - Hitam, 42" link="https://images.tokopedia.net/img/cache/900/VqbcmM/2023/10/10/dbf06374-e095-433a-96da-e706f72acdf3.png" />
                </div>
                <div className="col-md-3">
                    <CardComponent order={order} updateOrder={updateOrder} title="Aerostreet" text="Aerostreet 37-44 Brooklyn Natural Hijau Tua Hijau Tua" link="https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/9/30/d0ca1c51-056a-44a7-a98f-8caac9b0d2b9.jpg" />
                </div>
                <div className="col-md-3">
                    <CardComponent order={order} updateOrder={updateOrder} title="Casual Hipzo" text="Sepatu Pria Hiking Casual Hipzo Sepatu Gunung " link="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/2/1/c7bdaf3a-de12-47fe-90ac-c7b3e7db2f03.jpg" />
                </div>
            </div>

        </>
    )
}

export default Product;
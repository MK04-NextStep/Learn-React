import { useParams } from "react-router-dom"
import './Item.css'
import Slider from "./Slider";
import Profile from '../assets/default-pic.png'
import { useContext, useEffect, useState } from "react";
import cartList from "../CartList";
import useProduct from "../useProduct";

function Item() {
    let { id } = useParams();

    let { actionCart } = useContext(cartList)

    let { data, loading, error } = useProduct(id);

    if (loading) {
        return <h1>Loading...</h1>
    } else if (error) {
        return <h1>Error...</h1>
    } else {
        return (
            <div className='item'>
                <h1>{data.title}</h1>
                <section className="main">
                    <div className="image">
                        {
                            data.images.length > 1 ?
                                <Slider data={data.images} /> :
                                <img src={data.images[0]} alt={data.title} />
                        }
                    </div>
                    <div className="info">
                        <p className="desc">{data.description}</p>
                        <p className="rating">{data.rating}</p>
                        <p className="price">${data.price}</p>
                        <p className="discount">{data.discountPercentage}% off</p>
                        <p className="shipping">{data.shippingInformation}</p>
                        <p className="available">{data.availabilityStatus}</p>
                        <button onClick={() => actionCart("add", data.id, data)}>Add to Cart</button>
                    </div>
                </section>

                <section className="detail-list">
                    <h3>Product Details</h3>
                    <div className="detail">
                        <ul>
                            <li><b>Brand:</b> {data.brand}</li>
                            <li><b>Quantity:</b> {data.minimumOrderQuantity}</li>
                            <li><b>Warranty:</b> {data.warrantyInformation}</li>
                            <li><b>Return:</b> {data.returnPolicy}</li>
                        </ul>
                        <ul>
                            <li><b>Weight:</b> {data.weight}</li>
                            <li><b>Width:</b> {data.dimensions.width}</li>
                            <li><b>Height:</b> {data.dimensions.height}</li>
                            <li><b>Depth:</b> {data.dimensions.depth}</li>
                        </ul>

                    </div>
                </section>

                <section className="review">
                    <h3>Rating: {data.rating}</h3>
                    <div className="comment">
                        {
                            data.reviews.map((ele, index) => {
                                return (
                                    <div key={index} className="comment-li">
                                        <div className="comment-image">
                                            <img src={Profile} alt="Profile Pic" />
                                            <p className="name">{ele.reviewerName}</p>
                                            <p className="email">{ele.reviewerEmail}</p>
                                        </div>
                                        <div className="comment-detail">
                                            <p className="comment-rating">Rating: {ele.rating}</p>
                                            <p className="comment-msg">{ele.comment}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        )
    }

}

export default Item

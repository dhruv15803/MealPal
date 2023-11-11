import React from "react";
import { ToastContainer } from 'react-toastify';

const FoodCard = (props) => {
  return (
    <>
      <div className="item-card">
        <div className="card-image">
          <img src={props.image} alt="" />
        </div>
        <div className="card-title">
          <h1>{props.title}</h1>
          <i className="fa-solid fa-angle-right" style={{color:'#ff6600'}}></i>
        </div>
        <div className="card-desc">
            <p>{props.desc}</p>
        </div>
        <div className="card-category">
            <p>{props.category}</p>
        </div>
        <div className="card-price">
          <p>$ {props.price}</p>
        </div>
        <div className="card-btn">
          <button className="btn" onClick={()=>props.addToOrder(props.index)}>Add to your order</button>
        </div>
      </div>

      <ToastContainer
position="bottom-right"
autoClose={900}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  );
};

export default FoodCard;

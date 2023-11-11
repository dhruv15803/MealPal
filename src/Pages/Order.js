import React from 'react'
import { Link } from 'react-router-dom';

const Order = (props) => {

    const totalPrice = ()=>{
        let sum = 0;
        for(let i=0;i<props.orders.length;i++){
            sum+= props.orders[i].price * props.orders[i].qty;
        }
        return sum;
    }

  return (
    <>
    <div className="order-outer-container">
        <div className="order-title-container">
            <h1>Your order</h1>
            {props.orders.length===0 && <p className='empty-order'>You have no order. <Link to='/'>Order here</Link></p>}
        </div>
        <div className="order-child-container">
            {props.orders.map((item,i)=>{
                return <div className="order-item-card">
                <div className="order-item-title">
                    <p>{item.title}</p>
                </div>
                <div className="order-item-price">
                    <p>${item.price * item.qty}</p>
                </div>
                <div className="order-item-qty">
                    <button className="qtyBtn" onClick={()=>props.decrement(i)}>-</button>
                    <p>{item.qty}</p>
                    <button className="qtyBtn" onClick={()=>props.increment(i)}>+</button>
                </div>
                <div className="order-item-delete">
                    <button className="removeOrder-btn" onClick={()=>props.removeItem(i)}>Remove</button>
                </div>
            </div>
            })}
            <div className="order-total">
                {props.orders.length!==0 && <p>Total:- ${totalPrice()}</p>}
            </div>
        </div>
    </div>
    </>
  )
}

export default Order
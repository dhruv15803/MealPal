import React from 'react'
import FoodCard from '../Components/FoodCard'

const Food = (props) => {
  return (
    <>
    <div className="food-outer-container">
        <div className="food-title">
        {props.category==='All'? <h1>Our items</h1> :<h1>{props.category[0].toUpperCase() + props.category.slice(1)}</h1>
        }
        </div>

        <div className="food-inner-container">
            {props.menu.map((item,i)=>{
                if(props.category===item.category || props.category==='All'){
                    return <FoodCard id={item.id} title={item.title} category={item.category} price={item.price} image={item.img} desc={item.desc} index={i} addToOrder={props.addToOrder}/>
                }
                else{
                    return <></>
                }
            })}
        </div>

    </div>
    </>
  )
}

export default Food
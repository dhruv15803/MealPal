import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Food from './Pages/Food';
import menu from './data'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from './Pages/Order';


function App() {

  let MealPalOrders = JSON.parse(localStorage.getItem('MealPalOrders'));
  if(MealPalOrders===undefined || MealPalOrders===null){
    MealPalOrders=[];
  }

  const [orders,setOrders] = useState(MealPalOrders);

  const addToOrder = (index)=>{

    for(let i=0;i<orders.length;i++){
      if(menu[index].id===orders[i].id){
        toast.error('Already in your order');
        return;
      }
    }

    setOrders(prevOrder=>[...prevOrder,{
      "id": menu[index].id,
      "title":menu[index].title,
      "category":menu[index].category,
      "price":Math.ceil(menu[index].price),
      "desc":menu[index].desc,
      "qty":1,
    }])

    toast.success('Added to your order');

  }


  const increment = (index)=>{
    const newOrder = orders.map((item,i)=>{
      if(i===index){
        return {
          ...item,
          'qty':item.qty+1,
        }
      }
      else{
        return item;
      }
    })
    setOrders(newOrder);
  }

  const decrement = (index)=>{
    const newOrder = orders.map((item,i)=>{
      if(i===index){
        return {
          ...item,
          'qty':item.qty-1,
        }
      }
      else{
        return item;
      }
    })
    setOrders(newOrder);
  }

  const removeItem = (index)=>{
    const temp = [...orders];
    temp.splice(index,1);
    setOrders(temp);
  }

  useEffect(()=>{
    localStorage.setItem('MealPalOrders',JSON.stringify(orders));
  },[orders])

  return (
    <>
    <Router>
      <Navbar noOfItems={orders.length}/>
      <Routes>
        <Route path='/' element={<Food addToOrder={addToOrder} menu={menu} category='All'/>}/>
        <Route path='/breakfast' element={<Food addToOrder={addToOrder} menu={menu}  category='breakfast'/>}/>
        <Route path='/lunch' element={<Food addToOrder={addToOrder} menu={menu}  category='lunch'/>}/>
        <Route path='/shakes' element={<Food addToOrder={addToOrder} menu={menu}  category='shakes'/>}/>
        <Route path='/Order' element={<Order increment={increment} decrement={decrement} removeItem={removeItem} orders={orders}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

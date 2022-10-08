import React from 'react';
import {useState,useEffect} from "react";
import Axios from 'axios';
import {useNavigate} from "react-router-dom";
import {FaPlusCircle} from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import {NavLink} from "react-router-dom";
import '../styles/Products.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";
import {Routes,Route} from 'react-router-dom';
import Formss from './Formss';



function Products() {
  const [listOfProducts,setListOfProducts]=useState([]);
  const navigate=useNavigate();

  const handlePageClick=(data) =>{
    console.log(data.selected);
  }
  //const [list,setList]=useState([]);

  

  useEffect(()=>{
    Axios.get("http://localhost:3002/getProductsList").then((response)=>{
      if(response.status===200 || response.status===201)
      {
        setListOfProducts(response.data);
      }
      return Promise.reject(response);
      
    });
  },[]);

  const navigateToForm=()=>{
    navigate('/UserForm');
  };

  function gettingForm(e){
    navigate('./UserForm',{replace:true});
  }
  let product_data=listOfProducts.map((productItems)=>{
    return(
      <tr key={productItems.code} scope="row">
        <td>{productItems.code}</td>
        <td>{productItems.username}</td>
        <td>{productItems.qty}</td>
        <td>{productItems.price}</td>
        <td>{productItems.status}</td>
        <td>{productItems.dateAdded}</td>
    </tr>
    )
  });

  
  return (
    
    <div>
      <div className="product_header">
        <h2>Products</h2>
        <Link to="/Formss"><FaPlusCircle class="iconPlus" onClick={navigateToForm}/></Link>
          <Routes>
            <Route path="/Formss" element={<Formss />}></Route>
          </Routes>
        <select id="dropdown">
          <option value="thismonth">This Month</option>
          <option>Jan</option>
          <option>Feb</option>
        </select>
      </div>
      <div>
      <table className="styled-table">
        <thead>
            <tr>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">Date Added</th>
            </tr>
        </thead>
        <tbody>
            {product_data}
        </tbody>
      </table>
      </div>
      <div>
        
      </div>
      </div>
  );
}

export default Products;

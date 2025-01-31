import React from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
// import "../HomePage/HomePage.css";
import { RiStarSFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import axios from "axios";
import {ImTruck} from 'react-icons/im'

function ProductDetails() {
  const params = useParams();
  const [data, setdata] = useState([]);
  const userData = localStorage.getItem("token") || ""
  const [userId, userEmail, userPassword] = userData.split(":")
  console.log(userId)
  let id = params.id;
  let cartData = JSON.parse(localStorage.getItem("cartItems"))||[]

// console.log(cartData)


 

 
  useEffect(() => {
    axios.get(`https://blossombackend.onrender.com/products/Sale/${id}/spec`).then((res)=>{
      
     
      setdata(res.data)
      // console.log(res.data)
      // return(datahai)
    })
  }, []);


 function addToCart(){
   
  // console.log(data,"checking");
  cartData.push(data)
  localStorage.setItem("cartItems", JSON.stringify(cartData))
  }



  return (
    <>
      
      
        {/* start in this div  */}
        {data?.map((el) => (
      <div className="mainimagewala" key={el.id}>

<div className="imagepara">
  <img src={el.image} alt='' />
  <h3>Description</h3>
  <p>{el.description}</p>

</div>
<div className="pricename">
<p className="namei">{el.title}</p>

<div className="starshai">
              <RiStarSFill className="starshaipr" />
              <RiStarSFill className="starshaipr" />
              <RiStarSFill className="starshaipr" />
              <RiStarSFill className="starshaipr" />
              <p className="uparkrdubar">(4)</p>
            </div>
<p className="rate"> {`$${el.price}.00`} </p>
<Link to={`/Sale/${id}/Carts`}>
<button onClick={addToCart} className='addwalabutton'>Add to cart</button>
</Link>
<div className="icomns"><ImTruck className="trucjkhai"/> <p>2-3 Business Day Delivery</p></div>



</div>


      </div>
      ))}
      
      
     
    
     
      <h1 className="Shophai">Other customers bought</h1>

      <div className="othercustomer">
        <div className="mainwala">
          <div className="image1"></div>
          <div className="textdata">
            <p>SkinCeuticals Tripeptide-R Neck Repair 1.7oz</p>
            <div className="giftsel">Select your Gift</div>
            <div className="starshai">
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <p className="uparkr">(4)</p>
            </div>
            <p className="pricehai">$67.00</p>
            <span className="butkor">QUICK BUY</span>
          </div>
        </div>

        <div className="mainwala">
          <div className="image2"></div>
          <div className="textdata">
            <p>SkinCeuticals Silymarin CF Serum 1 fl. oz</p>
            <div className="giftsel">Select your Gift</div>
            <div className="starshai">
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <p className="uparkr">(5)</p>
            </div>
            <p className="pricehai">$167.00</p>
            <span className="butkor">QUICK BUY</span>
          </div>
        </div>

        <div className="mainwala">
          <div className="image3"></div>
          <div className="textdata">
            <p>SkinCeuticals Retinol 0.3 Refining Night Treatment 30ml</p>
            <div className="giftsel">Select your Gift</div>
            <div className="starshai">
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <p className="uparkr">(4)</p>
            </div>
            <p className="pricehai">$67.00</p>
            <span className="butkor">QUICK BUY</span>
          </div>
        </div>

        <div className="mainwala">
          <div className="image4"></div>
          <div className="textdata">
            <p>SkinCeuticals Metacell Renewal B3</p>
            <div className="giftsel">Select your Gift</div>
            <div className="starshai">
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />

              <p className="uparkr">(3)</p>
            </div>
            <p className="pricehai">$169.00</p>
            <span className="butkor">QUICK BUY</span>
          </div>
        </div>
      </div>

      <section className="reviewwala"></section>
    </>
  );
}

export default ProductDetails;

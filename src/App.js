import React from 'react'
import Caro from './Caro'
import { data } from './data';
import Nav from './Nav'
import ProductCard from './ProductCard'
// import image from './images/image2.jpg'
// import image3 from './images/image3.jpg'
import './abc.css'
import PopularBrands from './PopularBrands';
import News from './News';
import Drag from './Drag';
import Footer from './Footer';
function App() {
  const first = data.map((infor) => (
    // console.log(infor.img)
   
    <ProductCard  {...infor} />
  ));
  return (<>
    <Nav/>
<Caro/>
<h4 style={{marginLeft:"20px"}}><b>Popular Brands</b></h4>
<PopularBrands/>
<h4 style={{marginLeft:"20px"}}><b>Best-in-class Products</b></h4>
<div style={{dispay:"flex",flexDirection:"row",flexWrap:"wrap"}} className="table">
{first}
</div>
<br />
<div className="out" style={{height:"10px",backgroundColor:"#f9f9f9",display:"flex"}}>
  <div className="in" style={{width:"30%",height:"10px",backgroundColor:"#FF8A00"}}></div>
  <div className="in" style={{width:"70%",height:"10px",backgroundColor:"#f9f9f9"}}></div>
</div>
<br />
<img style={{width:"100%"}} src="https://rukminim1.flixcart.com/flap/1688/280/image/f9ca61c3d485a954.jpg?q=50"/>
<h4 style={{marginLeft:"20px"}}><b>Trending Products</b></h4>
<div style={{dispay:"flex",flexDirection:"row",flexWrap:"wrap"}} className="table">
{first}
</div>
{/* FF8A00 */}
<br />
<div className="out" style={{height:"10px",backgroundColor:"#f9f9f9",display:"flex",width:"100%",overflow:"hidden"}}>
  <div className="in" style={{width:"30%",height:"10px",backgroundColor:"#FF8A00"}}></div>
  <div className="in" style={{width:"70%",height:"10px",backgroundColor:"#f9f9f9"}}></div>
</div>
<br />

<h4 style={{marginLeft:"20px"}}><b>Limited Deals</b></h4>
<div style={{dispay:"flex",flexDirection:"row",flexWrap:"wrap"}} className="table">
{first}
</div>
<News/>
<Footer/>
<Drag/>
{/* <ProductCard img={"https://rukminim1.flixcart.com/image/312/312/kklhbbk0/mobile/m/s/f/m3-mzb0879in-poco-original-imafzxf686qtxq2x.jpeg?q=70"}/> */}


</>
  )
}

export default App

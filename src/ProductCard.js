import React from 'react'
import Image from './images/rating.svg'
function ProductCard(props) {
    return (
        <div className="col-md-2 col-sm-12" style={{backgroundColor:"#F9F9F9"}}>
           <img style={{paddingLeft:"30%"}} src={props.img} alt="/" height={200}/>
            <h4 style={{fontSize:"15px"}}><b>{props.title}</b></h4>
           {/* <img height={20} src='./images/rating.svg'/> */}
           {/* <Image/>
            */}
             <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      x="0"
      y="0"
      viewBox="0 0 172 172"
    >
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0 172V0h172v172z"></path>
        <path
          fill="#ff8a00"
          d="M90.386 13.955l16.483 48.802 51.503.596c4.432.052 6.266 5.7 2.712 8.342l-41.32 30.754 15.348 49.169c1.318 4.231-3.48 7.717-7.098 5.154L86 126.976l-42.02 29.79c-3.612 2.563-8.416-.928-7.097-5.154l15.348-49.169L10.91 71.69c-3.555-2.643-1.72-8.29 2.711-8.342l51.503-.597L81.608 13.95c1.422-4.197 7.362-4.197 8.778.006z"
        ></path>
      </g>
    </svg>
             <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      x="0"
      y="0"
      viewBox="0 0 172 172"
    >
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0 172V0h172v172z"></path>
        <path
          fill="#ff8a00"
          d="M90.386 13.955l16.483 48.802 51.503.596c4.432.052 6.266 5.7 2.712 8.342l-41.32 30.754 15.348 49.169c1.318 4.231-3.48 7.717-7.098 5.154L86 126.976l-42.02 29.79c-3.612 2.563-8.416-.928-7.097-5.154l15.348-49.169L10.91 71.69c-3.555-2.643-1.72-8.29 2.711-8.342l51.503-.597L81.608 13.95c1.422-4.197 7.362-4.197 8.778.006z"
        ></path>
      </g>
    </svg>
             <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      x="0"
      y="0"
      viewBox="0 0 172 172"
    >
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0 172V0h172v172z"></path>
        <path
          fill="#ff8a00"
          d="M90.386 13.955l16.483 48.802 51.503.596c4.432.052 6.266 5.7 2.712 8.342l-41.32 30.754 15.348 49.169c1.318 4.231-3.48 7.717-7.098 5.154L86 126.976l-42.02 29.79c-3.612 2.563-8.416-.928-7.097-5.154l15.348-49.169L10.91 71.69c-3.555-2.643-1.72-8.29 2.711-8.342l51.503-.597L81.608 13.95c1.422-4.197 7.362-4.197 8.778.006z"
        ></path>
      </g>
    </svg>
           <img height={20} src="https://img.icons8.com/material-outlined/50/000000/filled-star.png"/>
           <img height={20} src="https://img.icons8.com/material-outlined/50/000000/filled-star.png"/>
        
       {/* https://img.icons8.com/external-flatart-icons-outline-flatarticons/2x/external-cart-ecommerce-flatart-icons-outline-flatarticons-2.png */}
        <button  style={{width:"60px",marginLeft:"70%",backgroundColor:"#FF8A00",borderRadius:"7px"}}>
             <img  style={{position:"relative",paddingLeft:"8%",filter:"invert()",padding:"5px"}} height={30} src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/2x/external-cart-ecommerce-flatart-icons-outline-flatarticons-2.png"/></button>
          
        </div>
    )
}

export default ProductCard

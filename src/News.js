import React from 'react'

function News() {
    return (
        <div style={{width:"100%",height:"160px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#FF8A00"}}>
           <div className="left" style={{width:"60%"}}>
                <h4 style={{margin:"30%",color:"white",fontWeight:"400px"}}>
                   <b>Subscribe to discounts<br/> and Recomendations</b> 
                </h4>
           </div>
           <div className="right" style={{backgroundColor:"white",display:"flex",border:"2px white solid"}}>
                    <input type="text" />
                    <div style={{width:"40%",backgroundColor:"#FF891B"}}> <h4 style={{color:"white",fontWeight:"400"}}>Send</h4> </div>
           </div>
        </div>
    )
}

export default News

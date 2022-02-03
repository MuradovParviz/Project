import React , {useEffect , useState} from 'react';
import styled from "styled-components";
import managImg1 from "../managment/managmentimg/Ellipse 94.png"
import star from "../managment/managmentimg/star.png"
import star1 from "../managment/managmentimg/star 1.png";
import axios from "axios";

const ManageLeft =()=>{


    const [products,setProducts]= useState([])
    useEffect(()=>{
       axios.get("http://3.68.156.86:8000/api/v1/core/course/12/")
      .then(res => setProducts(res.data))

      
        
        
      },[]);


    return(
        <ManageLeftDiv>
            <ManageTop>
            <h2 className="manageToph2">
            {products.title}
            </h2>
            <div className="managSmall">
                <div className="ManageCirle">
                  <img src={products.image} alt="" />
                  
                  </div>
                  <div className="ManageStar1">
                    <h6>{products.teacher}</h6>
                    <div className="ManageStar2">
                     <img src={star} alt="" />
                     <img src={star} alt="" />
                     <img src={star} alt="" />
                     <img src={star1} alt="" />
                     <img src={star1} alt="" />
                    </div>
                  </div>

            </div>
            </ManageTop>
            <ManageBottom>
                <h2>Kurs haqqında</h2>
                <p> {products.description}  <a href="#">Davamını oxu...</a>
                </p>

            </ManageBottom>

        </ManageLeftDiv>
    )
}
export default ManageLeft;
const ManageLeftDiv = styled.div`
    width: 40%;
    height: 100%;
    margin-top: 40px;
    
    font-family: Euclid Circular A;
    
    
 @media screen and (max-width: 600px) and (min-width: 300px){
   
    width: 100%;
    font-family: Euclid Circular A;

     
 } 
 @media screen and (max-width: 900px) and (min-width: 300px){
   
   width: 100%;
   font-family: Euclid Circular A;    
}  
`

const ManageTop = styled.div`
    width: 100%;
    height: 20%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Euclid Circular A;
    .manageToph2{
     width: 80%;
     font-size: 20px;
     font-family: Euclid Circular A;

    }
    .managSmall{
        width: 30%;
        height: 40%;
        margin-top: 10px;
        display: flex;
        align-items: center;
        
        
    }
    .ManageCirle{
        width: 40px;
        height: 40px;
        border: 0;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ManageCirle{
        
    }
    .ManageStar1{
        width: auto;
        height: auto;
        margin-left: 10px;
    }

    @media screen and (max-width: 600px) and (min-width: 300px){

        .manageToph2{
         width: 80%;
         font-size: 17px;
         font-family: Euclid Circular A;

    }
    
     
} 


@media screen and (max-width: 900px) and (min-width: 600px){

.manageToph2{
 width: 80%;
 font-size: 22px;
 font-family: Euclid Circular A;

}


} 


`
const ManageBottom = styled.div`
    
    width: 100%;
    height: 80%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    font-family: Euclid Circular A;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;


    p{
        margin-top: 30px;
    }

    @media screen and (max-width: 600px) and (min-width: 300px){

    display: none;
    
     
} 
@media screen and (max-width: 900px) and (min-width: 600px){

display: none;
 
} 
`
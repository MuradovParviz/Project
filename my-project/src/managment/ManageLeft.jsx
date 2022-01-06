import React from "react";
import styled from "styled-components";
import managImg1 from "../managment/managmentimg/Ellipse 94.png"
import star from "../managment/managmentimg/star.png"
import star1 from "../managment/managmentimg/star 1.png"

const ManageLeft =()=>{

    return(
        <ManageLeftDiv>
            <ManageTop>
            <h2 className="manageToph2">
            Management Skills: New Manager Training in Essential Skills
            </h2>
            <div className="managSmall">
                <div className="ManageCirle">
                  <img src={managImg1} alt="" />
                  
                  </div>
                  <div className="ManageStar1">
                    <h6>Gunel Mammadova</h6>
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
                <p>
                Ready to grow the creative business of your dreams? Whether you’re itching to go full-time 
                freelance or looking for ways to supercharge your existing biz, it’s time to really make it happen. 
                Join freelancer and creative business expert Kaleigh Moore for a live, two-week crash-course where you’ll 
                learn everything you need to set up (and manage!) a thriving creative business that you love. <br /> <br />

                As a part of this exclusive learning series, you’ll master the most intimidating elements of running a business, 
                gain actionable pricing strategies & techniques that will allow you to charge more for your work, and ultimately 
                gain more confidence as a business owner so you can spend more time focusing on what you do best—creating. <br /> <br />


                In this first 3-hour course, Kaleigh will get into the nitty gritty of setting up your business for success including
                 strategies for targeting clients, approaching the value conversation, contracts, invoicing, and everything in between. 
                 Plus, Kaleigh will equip you with the tools you need to set and present your rates to clients—and most importantly—how 
                 to justify the value proposition behind the work that you do.  <a href="#">Davamını oxu...</a>
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
    
 @media screen and (max-width: 600px) and (min-width: 300px){
   
    width: 100%;

     
 } 
 @media screen and (max-width: 900px) and (min-width: 300px){
   
   width: 100%;

    
}  
`

const ManageTop = styled.div`
    width: 100%;
    height: 20%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;

    .manageToph2{
     width: 80%;
     font-size: 20px;

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

    }
    
     
} 

@media screen and (max-width: 900px) and (min-width: 600px){

.manageToph2{
 width: 80%;
 font-size: 22px;

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
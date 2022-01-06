import React from "react";
import styled from "styled-components";
import bar from "../managment/managmentimg/bar-chart-2.png";
import language from "../managment/managmentimg/Language.png";
import clock from "../managment/managmentimg/clock.png";
import calendar from "../managment/managmentimg/calendar.png"


 const ManageRight =()=>{
     return(
         <ManageRightDiv>
             <ManageRight1>

             </ManageRight1>
             <ManageRight2>

                 <div className="ManageR2Div1 ManageR2div">
                     <div className="manCircle">
                         <img src={language} alt="" />
                     </div>
                     <div className="mandiv">
                         <p className="manP">Azərbaycanca</p>
                     </div>
                 </div>
                 <div className="ManageR2Div2 ManageR2div">
                 <div className="manCircle">
                     <img src={calendar} alt="" />
                 </div>
                     <div className="mandiv">
                         <p className="manP">7 yanvar, 2021</p>
                         <p>Son müraciət tarixi 5 yanvar</p>
                     </div>
                 </div>
                 <div className="ManageR2Div3 ManageR2div">
                 <div className="manCircle">
                     <img src={clock} alt="" />
                 </div>
                     <div className="mandiv">
                         <p className="manP">48 saat</p>
                         <p>Həftədə 6 saaat olmaqla</p>
                     </div>
                 </div>
                 <div className="ManageR2Div4 ManageR2div">
                 <div className="manCircle">
                     <img src={bar} alt="" />
                 </div>
                     <div className="mandiv">
                         <p className="manP">Beginner level</p>
                     </div>
                 </div>

             </ManageRight2>
             <ManageRight3>
               <div >
                   <p className="manRight3P1">Ümumi:</p>
                   <p className="manRight3P2">21 AZN</p>
               </div>
               <button>Əlavə et</button>
             </ManageRight3>
             <ManageBottom2>
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

            </ManageBottom2>

         </ManageRightDiv>
     )
 }
 export default ManageRight;
 const ManageRightDiv = styled.div`
     
     width: 35%;
     height: auto;
     display: flex;
     flex-direction: column;
     align-items: center;

     @media screen and (max-width:600px) and (min-width: 300px){
        width: 100%;
     height: auto;
     display: flex;
     flex-direction: column;
     align-items: center;
     margin-top: 40px;
     }
     @media screen and (max-width:900px) and (min-width: 600px){
        width: 100%;
     height: auto;
     display: flex;
     flex-direction: column;
     align-items: center;
     margin-top: 40px;
     }
 `
 const ManageRight1 = styled.div`
     
 width: 488px;
 height: 340px;
 background-color: black;
 border: 0;
 border-radius: 10px;

 @media screen and (max-width:600px) and (min-width: 300px){
    width: 328px;
     height: 228px;
     display: flex;
     flex-direction: column;
     align-items: center;
     background-color: black;
 }
 
 
`
const ManageRight2 = styled.div`
width: 388px;
 height: auto;


 .ManageR2div{
    width: 200px;
    height: 50px;
    margin-top: 2px;
    display: flex;
    align-items: center;
 }
 
 .manCircle{
     width: 40px;
     height: 40px;
     border: 1px solid #e0e0e0;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
 }

 .mandiv{
     width: 160px;
     height: 80%;
     font-size: 10px;
     display: flex;
     justify-content: center;
     flex-direction: column;
     text-align: left;
     padding-left: 10px;
 }
 .manP{
     font-size: 14px;
 }
    
 @media screen and (max-width:600px) and (min-width: 300px){
     background-color: #F8F8F8;
     margin-top: 10px;
     border: 0;
     border-radius: 10px;
     padding-left: 10px;
 }  
 `
 const ManageRight3 = styled.div`
     
 width: 388px;
 height: auto;
 padding-bottom: 10px;

 button{
     width: 384px;
     height: 48px;
     background-color: #ffe01b;
     border: 0;
     border-radius: 10px;
     margin-top: 20px;
 }
 div{
     width: 120px;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .manRight3P1{
     font-size: 13px;
     margin-right: 5px;
 }
 @media screen and (max-width:600px) and (min-width: 300px){
     
     margin-top: 20px;
     border-top: 1px solid #f2f2f2;
     

     button{
     width: 328px;
     height: 48px;
     background-color: #ffe01b;
     border: 0;
     border-radius: 10px;
     margin-top: 20px;
 }

     div{
 
        padding-top: 20px;
        padding-left: 15px;
     }
 }  
`
const ManageBottom2 = styled.div`
@media screen and (min-width:900px) {
       
        display: none;
    }
    @media screen and (max-width:900px) and (min-width: 600px){
        width: 90%;
        text-align: left;
        margin-top: 10px ;
    }
    @media screen and (max-width:600px) and (min-width: 300px){
        
        width: 90%;
        text-align: left;
    }
`
 
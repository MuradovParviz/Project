import React from "react";
import bag from "../Startss/startimg/Group 5607.png"
import styled from "styled-components";

const Start =()=>{
    return (
        <Startdiv>
        
            <div className="startdiv-small">

                <div className="start-left">
                    
                    <span className="left-span">Star Learning </span> 
                    <span className="left-span">With the best Palform</span>
                    <span  className="left-span2">Interested in this course?</span>
                

                     
                     <div className="startbutons">
                         <button className="startbutons1">Əlavə et</button>
                         <button className="startbutons2">Sillabusu yüklə</button>
                     </div>
                </div>
                <div className="start-right">
                  <img src={bag} alt="" />
                </div>
                
            

            </div>
            
    

        
        </Startdiv>
    )
}
export default Start;
const Startdiv = styled.div`
    
    
@media screen and (min-width:900px){
    

    
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        
         
   
    .startdiv-small{
        width: 80%;
        height: 350px;
        background-color: #6A5AE0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 0;
        border-radius: 40px;
        
    }
    .start-left{
        width: 30%;
        height: 80%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin-top: 80px;
        
    
    }
    .left-span{
        font-size: 25px;
        color: white;
        font-weight: 600;
    }
    .left-span2{
        font-size: 15px;
        color: #e0e0e0;
        margin: 20px 0;
    
    }
    
    .start-left button{
        width: 176px;
        height: 48px;
        border: 0;
        border-radius: 10px;
        color: #4f4f4f;
    }
    .startbutons{
        display: flex;
    }
    .startbutons1{
        background-color: #FFE01B;
    }
    .startbutons2{
        margin-left: 10px;
        background-color: white;
        
        
    }
    .start-right{
        width: 30%;
        height: 80%;
        display: flex;
        justify-content: center;
    }
    
    
    }

    @media screen and (max-width:900px) and (min-width:600px){
        
    
        
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        
         
    
    .startdiv-small{
        width: 100%;
        height: 350px;
        background-color: #6A5AE0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        
    }
    .start-left{
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 80px;
        
    
    }
    .left-span{
        font-size: 25px;
        color: white;
        font-weight: 600;
    }
    .left-span2{
        font-size: 15px;
        color: #e0e0e0;
        margin: 20px 0;
    
    }
    
    .start-left button{
        width: 176px;
        height: 48px;
        border: 0;
        border-radius: 10px;
        color: #4f4f4f;
    }
    .startbutons1{
        background-color: #FFE01B;
    }
    .startbutons2{
        margin-left: 10px;
        background-color: white;
        
        
    }
    .start-right{
        width: 30%;
        height: 80%;
        display: flex;
        justify-content: center;
        display: none;
    }
    
    
    }
    
    
    @media screen and (max-width:600px) and (min-width:300px){
        
    
        
            width: 100%;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            
             
        
        .startdiv-small{
            width: 100%;
            height: 350px;
            background-color: #6A5AE0;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 0;
            
        }
        .start-left{
            width: 100%;
            height: 80%;
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-top: 80px;
            
        
        }
        .left-span{
            font-size: 25px;
            color: white;
            font-weight: 600;
        }
        .left-span2{
            font-size: 15px;
            color: #e0e0e0;
            margin: 20px 0;
        
        }
        
        .start-left button{
            width: 176px;
            height: 48px;
            border: 0;
            border-radius: 10px;
            color: #4f4f4f;
        }
        .startbutons1{
            background-color: #FFE01B;
        }
        .startbutons2{
            margin-left: 10px;
            background-color: white;
            
            
        }
        .start-right{
            width: 30%;
            height: 80%;
            display: flex;
            justify-content: center;
            display: none;
        }
        
        
        }
`

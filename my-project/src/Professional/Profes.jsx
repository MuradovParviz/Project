import React from "react";
import img1 from "../Professional/Profesimg/Ellipse 102.png"
import img2 from "../Professional/Profesimg/Ellipse 103.png"
import img3 from "../Professional/Profesimg/Ellipse 104.png"
import img4 from "../Professional/Profesimg/Ellipse 105.png"
import styled from "styled-components";

const Profes =()=>{
    return(
        <Profesdiv>
       
            <h2>Peşəkarlardan öyrən!</h2>
            <div className="profesdiv2">
                <div className="card-big card-big1">
                   <div className="card-small">
                       <div className="card-circle">
                           <img src={img1} alt="" />
                       </div>
                       <h3>Shuang Liu</h3>
                       <h5>UX Designer, Google</h5>
                       <p>Shuang has enjoyed working in UX design across a variety of domains at Google, from YouTube, to technical cloud platforms. She is particularly interested in bringing a human touch to products. She received her Master's in Human Computer Interaction from The University of Michigan.</p>
                   </div>
                </div>


                <div className="card-big card-big2">
                   <div className="card-small ">
                       <div className="card-circle">
                           <img src={img2} alt="" />
                       </div>
                       <h3>Shuang Liu</h3>
                       <h5>UX Designer, Google</h5>
                       <p>Shuang has enjoyed working in UX design across a variety of domains at Google, from YouTube, to technical cloud platforms. She is particularly interested in bringing a human touch to products. She received her Master's in Human Computer Interaction from The University of Michigan.</p>
                   </div>
                </div>

                <div className="card-big card-big3">
                   <div className="card-small">
                       <div className="card-circle">
                           <img src={img3} alt="" />
                       </div>
                       <h3>Shuang Liu</h3>
                       <h5>UX Designer, Google</h5>
                       <p>Shuang has enjoyed working in UX design across a variety of domains at Google, from YouTube, to technical cloud platforms. She is particularly interested in bringing a human touch to products. She received her Master's in Human Computer Interaction from The University of Michigan.</p>
                   </div>
                </div>

                <div className="card-big card-big4">
                   <div className="card-small">
                       <div className="card-circle">
                           <img src={img4} alt="" />
                       </div>
                       <h3>Shuang Liu</h3>
                       <h5>UX Designer, Google</h5>
                       <p>Shuang has enjoyed working in UX design across a variety of domains at Google, from YouTube, to technical cloud platforms. She is particularly interested in bringing a human touch to products. She received her Master's in Human Computer Interaction from The University of Michigan.</p>
                   </div>
                </div>

            </div>

       
        </Profesdiv>
    )
}
export default Profes;

const Profesdiv = styled.div`
    @media screen and (min-width:900px){
   
        width: 100%;
        height: auto;
        padding: 30px 0;
        display: flex;
        flex-direction: column;
    
    .profesdiv2 {
        width: 100%;
        height: auto;
        display: flex;
        justify-content:center;
        margin-top: 20px;

    }
    .card-big{
        width: 280px;
        height: 408px;
        background-color: crimson;
        border: 0;
        border-radius: 10px ;
        display: flex;
        align-items: flex-end;
        box-shadow: 0 0 10px 0 #e0e0e0;
        margin-left: 35px;
    }
    .card-small{
        width: 280px;
        height: 98%;
        background-color: white;
        border-radius: 10px;
        position: relative;
    }
    .card-circle{
        width: 60px;
        height: 60px;
        position: absolute;
        left: 114px;
        border: 0;
        border-radius: 50%;
        top: -15px;
    }
    .card-circle img {
        width: 100%;
        height: 100%;

    }
    .card-small h3{
        margin-top: 50px;
       
    }
    .card-small h5{
        margin: 5px 0px;
        color: #828282;
       
    }

    .card-big1{
        background-color: #BF80F1;
    }
    .card-big2{
        background-color: #01B3E4;
    }
    .card-big3{
        background-color: #FFAE0B;
    }
    .card-big4{
        background-color: #00CCBA;
    }
}

@media screen and (max-width:900px) and (min-width: 600px){
 
        width: 100%;
        height: auto;
        padding: 30px 0;
        display: flex;
        flex-direction: column;
    
    .profesdiv2 {
        width: 100%;
        height: auto;
        display: flex;
        justify-content:center;
        flex-wrap: wrap;
        margin-top: 20px;

    }
    .card-big{
        width: 280px;
        height: 408px;
        background-color: crimson;
        border: 0;
        border-radius: 10px ;
        display: flex;
        align-items: flex-end;
        box-shadow: 0 0 10px 0 #e0e0e0;
        margin-left: 25px;
        margin-top: 20px;
    }
    .card-small{
        width: 280px;
        height: 98%;
        background-color: white;
        border-radius: 10px;
        position: relative;
    }
    .card-circle{
        width: 60px;
        height: 60px;
        position: absolute;
        left: 114px;
        border: 0;
        border-radius: 50%;
        top: -15px;
    }
    .card-circle img {
        width: 100%;
        height: 100%;
    }
    .card-small h3{
        margin-top: 50px;
       
    }
    .card-small h5{
        margin: 5px 0px;
        color: #828282;
       
    }   

    .card-big1{
        background-color: #BF80F1;
    }
    .card-big2{
        background-color: #01B3E4;
    }
    .card-big3{
        background-color: #FFAE0B;
    }
    .card-big4{
        background-color: #00CCBA;
    }
}

@media screen and (max-width:600px) and (min-width: 300px){
    
        width: 100%;
        height: auto;
        padding: 30px 0;
        display: flex;
        flex-direction: column;
    
    .profesdiv2 {
        width: 100%;
        height: auto;
        display: flex;
        justify-content:center;
        flex-wrap: wrap;
        margin-top: 20px;

    }
    .card-big{
        width: 280px;
        height: 408px;
        background-color: crimson;
        border: 0;
        border-radius: 10px ;
        display: flex;
        align-items: flex-end;
        box-shadow: 0 0 10px 0 #e0e0e0;
        margin-left: 25px;
        margin-top: 20px;
    }
    .card-small{
        width: 280px;
        height: 98%;
        background-color: white;
        border-radius: 10px;
        position: relative;
    }
    .card-circle{
        width: 60px;
        height: 60px;
        position: absolute;
        left: 114px;
        border: 0;
        border-radius: 50%;
        top: -15px;
    }
    .card-circle img {
        width: 100%;
        height: 100%;
    }
    .card-small h3{
        margin-top: 50px;
       
    }
    .card-small h5{
        margin: 5px 0px;
        color: #828282;
       
    }   

    .card-big1{
        background-color: #BF80F1;
    }
    .card-big2{
        background-color: #01B3E4;
    }
    .card-big3{
        background-color: #FFAE0B;
    }
    .card-big4{
        background-color: #00CCBA;
    }
}
`
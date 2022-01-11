import React from "react";
import sImg from "../sillabus/silabusimg/image 1.png"
import styled from "styled-components";

const Sillabus =()=>{
    return(

        <Sillabusdiv>
        
            <div className="sillabusTop">
                <h2>Sillabus</h2>
                <div className="divButton">
                    <img src={sImg} alt="" />
                    <span>PDF broşuru yüklə</span>
                </div>
            </div>
            <div className="sillabusBottom">
                <div className="sBotSmall sBotSmall1">
                    <h3>UX Fundamentals & Design Research</h3>
                    <p>Product design starts with understanding the needs of users,
                         which is gathered through comprehensive research. Learn the core principles of human-centered
                          design and how to appropriately scope a design problem. Understand how to foster team collaboration
                           and use divergent and convergent thinking to rapidly create testable prototypes. Apply user interface
                            principles in the design of a clickable prototype <a href="#">Hamısını oxu...</a></p>
                </div>
                <div className="sBotSmall sBotSmall2">
                <h3>Concept to Low-Fidelity Prototyping</h3>
                    <p>The best products have gone through rounds of iteration based on user research and feedback.
                         Learn the process of a design sprint, and how to translate findings from research into a 
                         prototype that can be tested with users. Understand how to foster team collaboration and use 
                         divergent and convergent thinking to rapidly create testable prototypes. Apply user interface
                          principles in the design of a clickable prototype, and conduct a usability test to gain 
                        valuable feedback from users that can be used in design iterations. <a href="#">Hamısını oxu...</a></p>
                </div>
                
                <div className="sBotSmall sBotSmall3">
                <h3>CAPSTONE - UX Portfolio Design</h3>
                    <p>UX Designers demonstrate their skills by showcasing their designs and processes in a portfolio.
                         Understand what should and shouldn’t be included in a portfolio, as well as the key components
                          that appeal to target audiences. Learn how to organize previous work and communicate it online,
                           keeping the audience and your career objectives in mind. Apply storytelling and branding frameworks
                            to create a personal profile that conveys a unique
                         value proposition. You’ll also learn best practices for maintaining and 
                         updating a UX portfolio.  <a href="#">Hamısını oxu...</a></p>
                </div>
            </div>

        
        </Sillabusdiv>
    )
}
export default Sillabus;
const Sillabusdiv = styled.div`
    @media screen and (min-width:900px) {


    width: 100%;
    height: auto;
    padding: 30px 0;
    background-color: #f7eefd;
    position: relative;
    font-family: Euclid Circular A;

.sillabusTop{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    padding-bottom: 15px;
   
}
.sillabusTop h2{
    position: absolute;
    left: 80px;
    font-size: 34px;
    color: #4f4f4f;
}
.divButton{
    width: 202px;
    height: 57px;
    position: absolute;
    right: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
}
.divButton img {
  
    margin-right: 10px;
}

.sillabusBottom{
    width: 90%;
    height: 678px;
    background-color: #fff;
    margin-left: 75px;
    border: 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.sillabusBottom p{
    font-size: 16px;
    color: #4f4f4f;
}
.sillabusBottom h3{
    font-size: 20px;
}
.sBotSmall{
    width: 60%;
    text-align: left;
    margin-top: 40px;
    position: relative;

}
.sBotSmall h3{
    margin-bottom: 10px;
   
}


.sBotSmall1::after{
    content: "";
    width: 12px;
    height: 12px;
    background-color: #20BECE;
    position: absolute;
    top: 7px;
    left: -145px;
    border-radius: 50%;
    border: 0;
    z-index: 1;
}
.sBotSmall2::after{
    content: "";
    width: 12px;
    height: 12px;
    background-color: #20BECE;
    position: absolute;
    top: 7px;
    left: -145px;
    border-radius: 50%;
    border: 0;
}

.sBotSmall2::before{
    content: "";
    width: 1px;
    height: 430px;
    background-color: black;
    position: absolute;
    top: -135px;
    left: -140px;
}
.sBotSmall3::after{
    content: "";
    width: 12px;
    height: 12px;
    background-color: #20BECE;
    position: absolute;
    top: 7px;
    left: -145px;
    border-radius: 50%;
    border: 0;
}

}


@media screen and (max-width:900px) and (min-width:600px) {


    width: 100%;
    height: auto;
    padding: 30px 0;
    background-color: #f7eefd;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;

.sillabusTop{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
   
}
.sillabusTop h2{
    position: absolute;
    left: 40px;
}
.divButton{
    width: 35%;
    height: 50px;
    margin-left: 20px;
    position: absolute;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
}
.divButton img {
  
    /* margin-right: 10px; */
}

.sillabusBottom{
    width: 90%;
    height: auto;
    background-color: #fff;
    /* margin-left: 75px; */
    border: 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 10px;
    padding-bottom: 20px;
}
.sBotSmall{
    width: 60%;
    text-align: left;
    /* margin-top: 20px; */
    position: relative;

}
.sBotSmall h3{
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 22px;
}
.sBotSmall p{
    font-size: 15px;

}

.sBotSmall1::after{
    content: "";
    width: 10px;
    height: 10px;
    background-color: #20BECE;
    position: absolute;
    top: 20px;
    left: -45px;
    border-radius: 50%;
    border: 0;
    z-index: 1;
}
.sBotSmall2::after{
    content: "";
    width: 10px;
    height: 10px;
    background-color: #20BECE;
    position: absolute;
    top: 20px;
    left: -45px;
    border-radius: 50%;
    border: 0;
}

.sBotSmall2::before{
    content: "";
    width: 1px;
    height: 270%;
    background-color: black;
    position: absolute;
    top: -70%;
    left: -40px;
}
.sBotSmall3::after{
    content: "";
    width: 10px;
    height: 10px;
    background-color: #20BECE;
    position: absolute;
    top: 13px;
    left: -45px;
    border-radius: 50%;
    border: 0;
}

}


@media screen and (max-width:600px) and (min-width:300px) {


    width: 100%;
    height: auto;
    padding: 30px 0;
    background-color: #f7eefd;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

.sillabusTop{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
   
}
.sillabusTop h2{
    position: absolute;
    left: 40px;
}
.divButton{
    width: 35%;
    height: 50px;
    margin-left: 20px;
    position: absolute;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
}
.divButton img {
  
    /* margin-right: 10px; */
}

.sillabusBottom{
    width: 90%;
    height: 573px;
    background-color: #fff;
    /* margin-left: 75px; */
    border: 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 10px;
}
.sBotSmall{
    width: 60%;
    text-align: left;
    /* margin-top: 20px; */
    position: relative;

}
.sBotSmall h3{
    margin-bottom: 10px;
    margin-top: 10px;
}

.sBotSmall1::after{
    content: "";
    width: 10px;
    height: 10px;
    background-color: #20BECE;
    position: absolute;
    top: 13px;
    left: -45px;
    border-radius: 50%;
    border: 0;
    z-index: 1;
}
.sBotSmall2::after{
    content: "";
    width: 10px;
    height: 10px;
    background-color: #20BECE;
    position: absolute;
    top: 13px;
    left: -45px;
    border-radius: 50%;
    border: 0;
}

.sBotSmall2::before{
    content: "";
    width: 1px;
    height: 270%;
    background-color: black;
    position: absolute;
    top: -70%;
    left: -40px;
}
.sBotSmall3::after{
    content: "";
    width: 10px;
    height: 10px;
    background-color: #20BECE;
    position: absolute;
    top: 13px;
    left: -45px;
    border-radius: 50%;
    border: 0;
}

}
`
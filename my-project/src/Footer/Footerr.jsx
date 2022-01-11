import React from "react";
import taskoll from "../Footer/footerimg/Taskool 1 1.png"
import facebook from "../Footer/footerimg/facebook.png"
import instagram from "../Footer/footerimg/instagram.png"
import twit from "../Footer/footerimg/twitter.png"
import youtube from "../Footer/footerimg/youtube.png"
import phon from "../Footer/footerimg/phone.png"
import pin from "../Footer/footerimg/pin.png"
import email from "../Footer/footerimg/email.png"
import copy from "../Footer/footerimg/copyright.png"
import styled from "styled-components";
import { NavLink } from "react-router-dom";




const Footerr =()=>{
    return(
        <FooterBig>
        
            <div className="footerTop">
                <div className="footer1">
                    <img src={taskoll} alt="" />
                    <div className="footer1-div">
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={youtube} alt="" />
                        <img src={twit} alt="" />
                    </div>
                </div>
                <div className="footer2">
                    
                    <ul>
                        <li><h3>Menu</h3></li>
                        <li><NavLink to="">Kurslar</NavLink></li>
                        <li><NavLink to="">Endirimlər</NavLink></li>
                        <li><NavLink to="">Haqqımızda</NavLink></li>
                        
                    </ul>
                </div>
                <div className="footer3">
                
                    <ul>
                        <li><h3>Kömək</h3></li>
                        <li><NavLink to="">Tez-tez soruşulan suallar</NavLink></li>
                        <li><NavLink to="">Necə işləyir</NavLink></li>
                        <li><NavLink to="">Geri qaytarılma şərtləri</NavLink></li>
                        
                        
                    </ul>
                </div>
                <div className="footer4">
                
                    <ul> 
                        <li><h3>Əlaqə</h3></li>
                        <li> <img src={pin} alt="" /> <NavLink to="">M. K. Ataturk avenue 89, Baku, Azerbaijan</NavLink></li>
                        <li> <img src={email} alt="" /> <NavLink to="">gyunelmammedova@gmail.com</NavLink></li>
                        <li> <img src={phon} alt="" /> <NavLink to="">*2108</NavLink></li>

                    </ul>
                    {/* sadece mobil ucun */}
                    <ul className="smalul">
                            <li>Qaydalar və şərtlər</li>
                            <li>Məxfilik siyasəti</li>
                        </ul>
                </div>
            </div>
            <div className="footer-bottom">
               

               <ul>
                   <li> <img src={copy} alt="" /> <NavLink to="">PeojectX 2021. Bütün hüquqlar qorunur.</NavLink></li>
                   
               </ul>
               <div className="footer-bottom-small">
                   <p><NavLink to="">Qaydalar və şərtlər</NavLink></p>
                   <p><NavLink to="">Məxfilik siyasəti</NavLink> </p>
               </div>
            </div>
        
        </FooterBig>
    )
}
export default Footerr;

const FooterBig = styled.div`
@media screen and (min-width: 900px) {

    width: 100%;
    height: 411px;
   background-color: #f5f5f7;
    

.footerTop{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;

    
}
.footer1{
      
    width: 20%;
    height: auto;
    margin-top: 90px;


}
.footer1-div{
  width: 100%;
  display: flex;
  justify-content:center;

}
.footer1-div img{
    margin-left: 20px;
    margin-top: 15px;
}
.footer2 {
    width: 20%;
    height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: left;
    margin-top: 30px;
}
.footer2 ul {
    width: 50%;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    
}
.footer2 ul li{
    margin-top: 10px;
}
.footer2 ul li a{
    text-decoration: none;
    color: #4f4f4f;
    font-family: Euclid Circular A;
}
.footer3 {
    width: 20%;
    height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: left;
    margin-top: 35px;
}
.footer3 ul {
    width: 70%;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
   
    
}
.footer3 ul li{
    margin-top: 10px;
}
.footer3 ul li a{
    text-decoration: none;
    color: #4f4f4f;
    font-family: Euclid Circular A;
}
.footer4 {
    width: 25%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 35px;
    padding-top: 60px;
    font-family: Euclid Circular A;
    
}
.footer4 ul {
    width: 90%;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
 
}
.footer4 ul li{
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    
}
.footer4 ul li a{
    text-decoration: none;
    color: #4f4f4f;
    margin-left: 10px;
    
}
.footer4 ul li img{
    margin-top: 10px;
}
.smalul{
    visibility: hidden;
}
.footer2 ul li{
  
    list-style: none;
}
.footer3 ul li{
  
    list-style: none;
}
.footer4 ul li{
  
    list-style: none;
}

.footer-bottom{
    display: flex;
    justify-content: space-around;
    border: 0;
    border-top: 1px solid #4f4f4f;
    padding-top: 30px;
}
.footer-bottom ul li{
    list-style: none;
}
.footer-bottom ul li a{
    text-decoration: none;
    color: #4f4f4f;
}
.footer-bottom-small{
    width: 300px;
    height: auto;
    display: flex;
    justify-content: space-between;
}
.footer-bottom-small a{
 text-decoration: none;
 color: #4f4f4f;
}

}

@media screen and (max-width: 900px) and (min-width: 600px){


    width: 100%;
    height: auto;
    padding: 20px 0;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f5f5f7;

.footerTop{
    width: 100%;
    height: auto;
}
.footer1{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
}
.footer1-div{
    width: 30%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.footer1 ul li a{
       text-decoration: none;
       color: #4f4f4f;
   }
.footer2{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }
.footer2 ul{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    justify-content: center;
    flex-direction: column;
   }
.footer2 ul li{
 list-style: none;
 color: #4f4f4f;
 margin-right: 40px;
 
}
.footer2 ul li a{
       text-decoration: none;
       color: #4f4f4f;
   }
.footer3 ul li{
    list-style: none;
    color: #4f4f4f;
    margin-right: 40px;
    
   }
   .footer3 ul li a{
       text-decoration: none;
       color: #4f4f4f;
   }
   .footer4{
       width: 100%;
       height: auto;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
   }
   .footer4 ul li{
    list-style: none;
    color: #4f4f4f;
    margin-right: 40px;
    
   }
   .footer4 ul li a{
       text-decoration: none;
       color: #4f4f4f;
   }
   
  .smalul{
      display: none;
  }
   .footer-bottom{
    display: flex;
    justify-content: space-between;
    border: 0;
    border-top: 1px solid #4f4f4f;
    padding-top: 30px;
}
.footer-bottom ul li{
    list-style: none;
}
.footer-bottom ul li a{
    text-decoration: none;
    color: #4f4f4f;
}
.footer-bottom-small{
    width: 300px;
    height: auto;
    display: flex;
    margin-left: 30px;
}
.footer-bottom-small a{
 text-decoration: none;
 color: #4f4f4f;
 margin-left: 10px;
}

}

    @media screen and (max-width: 600px) and (min-width: 300px){


    width: 100%;
    height: auto;
    padding: 20px 0;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f5f5f7;

.footerTop{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.footer1{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
}
.footer1-div{
    width: 50%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.footer2{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    
    }
    .footer3{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
        
        }
        .footer4{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 20px;
            
            }
.footer2 ul{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* margin-left: 20px; */
   }
.footer2 ul li{
 list-style: none;
 
}
.footer2 ul li a{
       
       text-decoration: none;
       color: #4f4f4f;
       
      }
.footer3 ul{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* margin-left: 20px; */
}
.footer3 ul li{
    list-style: none;
    
   }
   .footer3 ul li a{
       
       text-decoration: none;
       color: #4f4f4f;
       
      }
   .footer4{
       width: 100%;
       height: auto;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       /* margin-left: 20px; */
   }
   .footer4 ul li{
    list-style: none;
    
   }
   .footer4 ul li a{
       
    text-decoration: none;
    color: #4f4f4f;
    
   }
   .smalul{
       width: 100%;
       height: auto;
       display: flex;
       justify-content: center;
       color: #4f4f4f;
   }
   .smalul li{
       margin-left: 20px;
       margin-top: 20px;
   }
   .footer-bottom {
       border-top: 1px solid #4f4f4f;
       width: 100%;
       padding-top: 10px;
   }
   .footer-bottom ul li{
       list-style: none;
   }
   .footer-bottom ul li a{
       text-decoration: none;
      
   }
   .footer-bottom-small{
       display: none;
   }

}




`
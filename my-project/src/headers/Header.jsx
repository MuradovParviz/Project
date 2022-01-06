import React from "react";
import Task from "../headers/hedimg/Taskool 1 1.png"
import Search from "../headers/hedimg/search.png"
import Elipse from "../headers/hedimg/Ellipse 92.png"
import Style from "style-components";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Header =()=>{

    return(
        <Headerbigdiv>
        <div className="headerbigdiv">
            <div className="headerTop">

                <div className="header1">
                    <img src={Task} alt="" />
                </div>
                <div className="header2">
                    <label htmlFor="">
                    <img src={Search} alt="" />
                    <input placeholder="Axtaris..." type="text" />
                    </label>
                    
                </div>
                <div className="header3">
                    <img src={Elipse} alt="" />
                </div>
            </div>
            <div className="headerBottom">
                <ul>
                    <li>
                        <NavLink activeSyle={{color:"black"}} to="/">
                        Home
                        </NavLink>
                    </li>
                    <li>></li>
                    <li>
                        <NavLink to="/Design">
                        Design
                        </NavLink>
                        </li>
                    <li>></li>
                    <li>
                        <NavLink to="/UX/UI design">
                        UX/UI design
                        </NavLink>
                    </li>
                    <li>></li>
                    <li>
                        <NavLink to="/Grow">
                        Grow your creative business in design field
                        </NavLink>
                    </li>
                </ul>
            </div>


        </div>
        </Headerbigdiv>
    )
}
export default Header;

const Headerbigdiv=styled.div`

@media screen and (min-width: 900px) {


    width: 100%;
    height: auto;


.headerTop{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

}
.header1{
    width: 20%;
    height: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.header2{
    width: 30%;
    height: 70%;
    margin-right: 20px;
}
.header2 label{
    position: relative;
}
.header2 input{
    width: 70%;
    height: 50%;
    border: 0;
    border-radius: 10px;
    padding-left: 40px;
    margin-top: 10PX;
    background-color: #F4F4F4;
    margin-right: 90px;
}
.header2 img{
    position: absolute;
    width: 20px;
    left: 15px;
    top: 5px;
}
.header3{
    width: 3%;
    height: 55%;
    border: 0;
    border-radius: 50%;
    margin-right: 5px;
}

.headerBottom {
    width: 100%;
    height: 20%;
    border-top: 1px solid #f4f4f4;
    display: flex;
    align-items: center;
}
.headerBottom ul {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 170px;
}
.headerBottom ul li{
    list-style: none;
    margin-left: 12px;
    color: #828282;
    font-size: 14px;
}
.headerBottom ul li a{
    text-decoration: none;
}
}



@media screen and (max-width: 900px) and (min-width: 600px){


    width: 100%;
    height: 80px;

.headerTop{
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

}
.header1{
    width: 20%;
    height: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.header2{
    width: 30%;
    height: 70%;
    margin-right: 20px;
}
.header2 label{
    position: relative;
}
.header2 input{
    width: 80%;
    height: 25px;
    border: 0;
    border-radius: 10px;
    padding-left: 40px;
    margin-top: 10PX;
    background-color: #F4F4F4;
    margin-left: 40px;
}
.header2 img{
    position: absolute;
    width: 20px;
    left: 45px;
    top: 5px;
}
.header3{
    width: 3%;
    height: 55%;
    border: 0;
    border-radius: 50%;
    margin-right: 5px;
}
.headerBottom {
    display: none;
}

}


@media screen and (max-width: 600px) and (min-width: 300px){


    width: 100%;
    height: 100px;
    

.headerTop{
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

}
.header1{
    width: 20%;
    height: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
}
.header2{
    width: 30%;
    height: 70%;
    margin-right: 20px;
}
.header2 label{
    position: relative;
}
.header2 input{
    width: 70%;
    height: 50%;
    border: 0;
    border-radius: 10px;
    padding-left: 40px;
    margin-top: 10px;
    background-color: #F4F4F4;
    margin-right: 90px;
    display: none;
}
.header2 img{
    position: absolute;
    width: 25px;
    left: 60px;
    top: 0px;
}
.header3{
    width: 3%;
    height: 55%;
    border: 0;
    border-radius: 50%;
    margin-right: 5px;
    margin-top: 15px;
}
.headerBottom{
    display: none;
}

}

    
`
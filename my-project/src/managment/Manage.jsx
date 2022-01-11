import React from "react";
import ManageLeft from "../managment/ManageLeft";
import styled from "styled-components";
import ManageRight from "./ManageRight";

const Manage =()=>{
    return(
        
        <ManageDiv>
        <ManageLeft />
        <ManageRight />
        
        </ManageDiv>
        
        
    )
}
export default Manage;

const ManageDiv = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;

    @media screen and (max-width:600px) and (min-width: 300px){
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    }
    @media screen and (max-width:1200px) and (min-width: 600px){
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    }
    
`
    
    
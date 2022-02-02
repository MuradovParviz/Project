import React , {useEffect , useState} from 'react';
import ManageLeft from "../managment/ManageLeft";
import styled from "styled-components";
import ManageRight from "./ManageRight";
import axios from "axios";

const Manage =()=>{


    const [products,setProducts]= useState([])
  useEffect(()=>{
     axios.get("http://3.68.156.86:8000/api/v1/core/course/12/")
    .then(res => setProducts(res.data))
      
      
    },[]);


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
    
    
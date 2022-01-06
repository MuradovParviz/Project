import React from "react";
import tImg1 from "../teaching/teachingimg/book-saved.png"
import tImg2 from "../teaching/teachingimg/note-pad-1_path 1.png"
import tImg3 from "../teaching/teachingimg/lamp-on.png"
import tImg4 from "../teaching/teachingimg/note.png"
import styled from "styled-components";

const Teaching =()=>{
    return (
        <Teachingdiv>
        
             <h2>Tədris prossesinin təşkili</h2>
             <div className="teaching-div-p">
             <p>Qəbul prosesimiz aşağıdakı addımlardan ibarətdir. Biz təkcə tələbələri qəbul etmirik. <br />
              Karyeranızı bizimlə birgə dəyişmək üçün istəkli olmağınız kifayətdir.</p>
             </div>
             
            <div className="teaching-small">
                <div className="Tcard">
                    <div className="Tcard-circle">
                        <img src={tImg1} alt="" />
                    </div>
                    <h3>Dərsləri dinləmək</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing e </p>
                </div>

                <div className="Tcard">
                    <div className="Tcard-circle">
                        <img src={tImg4} alt="" />
                    </div>
                    <h3>Tapşırıqların icrası</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing e </p>
                </div>

                <div className="Tcard">
                    <div className="Tcard-circle">
                        <img src={tImg3} alt="" />
                    </div>
                    <h3>Mentor dəstəyi</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing e </p>
                </div>


                <div className="Tcard">
                    <div className="Tcard-circle">
                        <img src={tImg2} alt="" />
                    </div>
                    <h3>Quiz</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing e </p>
                </div>

                
            </div>

        
        </Teachingdiv>
    )
}
export default Teaching;
const Teachingdiv =styled.div`
    @media screen  and (min-width:900px) {


    width: 100%;
    height: auto;
    padding-top: 40px;

.teaching-small{
    width: 100%;
    height: auto;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    
}
.Tcard{
    width: 280px;
    height: 280px;
    border: 0;
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: .5s;
}
.Tcard h3 {

    color: #4f4f4f;
    margin-top: 10px;
}
.Tcard p {

color: #4f4f4f;
margin-top: 10px;
}

.Tcard:hover{
    box-shadow: 0 0 10px 0 #e0e0e0;

}
.Tcard-circle{
    width: 30%;
    height: 30%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

}

@media screen  and (max-width:900px) and (min-width:600px) {


    width: 100%;
    height: auto;
    padding-top: 40px;
    

.teaching-div-p{
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 70px;
}
.teaching-small{
    width: 100%;
    height: auto;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
}
.Tcard{
    width: 280px;
    height: 280px;
    border: 0;
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: .5s;
    box-shadow: 0 0 10px 0 #e0e0e0;
    margin-top: 15px;
    margin-left: 10px;
}
.Tcard h3 {

    color: #4f4f4f;
}
.Tcard p{
    margin-top  : 15px;
    color: #333;
   
}

.Tcard-circle{
    width: 30%;
    height: 30%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

}

@media screen  and (max-width:600px) and (min-width:300px) {


    width: 100%;
    height: auto;
    padding-top: 40px;

.teaching-div-p{
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 70px;
}
.teaching-small{
    width: 100%;
    height: auto;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
}
.Tcard{
    width: 280px;
    height: 280px;
    border: 0;
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: .5s;
    box-shadow: 0 0 10px 0 #e0e0e0;
    margin-top: 30px;
}
.Tcard h3 {

    color: #4f4f4f;
}
.Tcard p{
    margin-top  : 15px;
    color: #333;
   
}

.Tcard-circle{
    width: 30%;
    height: 30%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

}
`

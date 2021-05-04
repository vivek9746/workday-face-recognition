import React from "react";
import Style from "../Components/verify.module.css";
import { useState } from "react";
import Webcam from "react-webcam";

const Verify = ()=>{
    let [url,setUrl] = useState(`http://127.0.0.1:5000/video_feed`);
    const changeUrl=()=>{
        if(url===``){
            setUrl(`http://127.0.0.1:5000/video_feed`);
        }
        else if(url===`http://127.0.0.1:5000/video_feed`){
            setUrl(``);
        }
        
    }
    const videoConstraints = {
        facingMode: "user"
    };
    return(
    <div className={Style.stream}>
        {/* <img src={url} alt={`stream`} onClick={changeUrl}/>
         */}
         <Webcam videoConstraints={videoConstraints}/>
    </div>
    );
}

export default Verify;
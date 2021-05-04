import React,{useState} from 'react';
import Style from '../Components/login.module.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Webcam from "react-webcam";




const Login = (props)=>{
    const videoConstraints = {
        facingMode: "user"
    };
let [render,setRender] = useState(false);

    let [username,setUsername] = useState('');
    console.log(username);
    const history = useHistory();
    const signIn = async (event) =>{
        event.preventDefault();
        console.log('SignIn called');
        console.log(`http://127.0.0.1:5000/login/${username}`);
        const data = await axios.get(`http://127.0.0.1:5000/login/${username}`);
        console.log(data.data['value']);

        if(data.data['value']==='1'){
            console.log('Employee Found');
            props.onRender();
            // setRender(true);
            const userdata = await axios.get(`http://127.0.0.1:5000/verify/${username}`);
            console.log(userdata.data);
            setRender(true);
            if(userdata.data == username){
             
                setTimeout(function(){
                    history.push("/dashboard");
                },5000); 
            }
            // props.onRender();
        }
        
    }

    return(

        <div className={Style.loginDiv}>
            {render?<Webcam videoConstraints={videoConstraints}/>:console.log('not rendered')}
            <form>
            <div className={Style.userName}>
                Username
            </div>
            <div className={Style.Input}>
                <input type="text" onChange={(e)=>{setUsername(e.target.value)}}></input>
            </div>
            <div className={Style.validateAccount}>
                {/* <a href="#" className={Style.roundButton}>&#8250;</a> */}
                <button className={Style.LoginButton} onClick={signIn}>Login</button>
            </div>
            </form>
        </div>

    );
}

export default Login;
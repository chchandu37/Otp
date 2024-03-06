import { useEffect, useRef } from "react";

const Otp=(value=4, otpsubmit=()=>{})=>{
    const [otp,setotp]=useState(new Array(value).fill(""));
    const userefs= useRef([]);
    useEffect(()=>{
        if(userefs.current[0]){
            userefs.current[0].focus;
        }
    },[])
    const onChange=(index,e)=>{           
        const value=e.target.value;
        if(NaN(value)) return;
        const newOtp=[...otp];
        newOtp[index]=value.substring(value.length-1);
        setotp(newOtp);
        const combinedotp=newOtp.join("");
        if(combinedotp.length===length){
            otpsubmit(combinedotp);
        }
        if(value && index.length-1 && userefs.current[index+1]){
            userefs.current[index+1].focus;
        }
        }
        const handlekey=(index,e)=>{
            if(e.key==="Backspace" && !otp[index] && index>0 && userefs.current[index-1]){
                userefs.current[index-1].focus;
            }
        }
  
    return(
      <div>
        {otp.map((value,index)=>{
          <input type={number}  key={index} value={value} onChange={()=>handlechange(index,e)} 
        onclick={()=>handleclick(e)} onKeyDown={()=>handlekey(index,e)}/>

        })}
      </div>
  
    )
  
  }
import { useState } from "react";

const PhoneOtp=()=>{
    const [phonenumber, setPhonenumber]=useState("");
    const[showotp, setShowOtp]=useState(false);
    const handlechange=(event)=>{
        event.preventdefault();
    }
    const handlenumber=(event)=>{
        setPhonenumber(event.target.value);
        const regex=/^[0-9]/g
        if(phonenumber.length<10 || regex.test(phonenumber)){
            alert("enter correct")
            return
        }
        showotp(true);
    }
    const otpsubmit=()=>{
        console.log("login successufully");
    }

    return(
        <div>
           { !showotp ? (<form onSubmit={handlechange}>
            <input type="number" value={phonenumber} onChange={handlenumber} placeholder="enter phone number"/>
            <button type="submit">submit</button>

            </form>):(<div><Otp value={4} onotpsubmit={otpsubmit}/></div>)}
        </div>

    )
}
export default PhoneOtp;

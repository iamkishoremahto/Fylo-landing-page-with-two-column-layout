import { useState } from "react";

export default function Section3(){


   const  [emailStatus, setEmailStatus] = useState(true);

   const isValidEmail = (email) =>{
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return emailRegex.test(email);
   }

   const emailHandler = (e) =>{
       let email = e.target.value;
       console.log(isValidEmail(email));

       isValidEmail(email)?setEmailStatus(true):setEmailStatus(false);

       if(email.length<=0){
           setEmailStatus(true);
       }
   }  
    return (
        <>
        <div className="subscribe min-h-[350px] bg-DesaturatedBlue grid place-items-center grid-cols-1 p-5 md:grid-cols-2">
            <div className="content flex min-w-[80%] flex-col gap-5">
                <h1 className="text-[20px] md:text-start font-bold text-center font-Raleway text-white">Get early access today</h1>
                <p className="text-[16px]  max-w-[360px] md:text-start text-center text-LightGrayishBlue font-Raleway">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you</p>
            </div>
            <div className="getStart relative flex flex-col justify-center min-w-[75%] items-center md:items-start gap-7">
                <input type="email" onChange={emailHandler} className={`min-h-[45px] rounded-sm 2xl:min-w-full min-w-full px-2 text-[16px] font-Raleway  ${emailStatus?'':'focus:outline-red'} px-4`} placeholder="email@example.com" />
                <p className={`absolute bottom-12  text-[14px] text-LightGrayishBlue  ${emailStatus?'hidden':''}`}>Please check your email</p>
                <button type="button" className="bg-BrightBlue min-h-[45px] min-w-full md:min-w-[50%] px-5  transition duration-150 ease-in-out hover:bg-fadedBlue text-white font-bold rounded-sm">Get Started For Free</button>
            </div>
        </div>
        
        </>
    )
}
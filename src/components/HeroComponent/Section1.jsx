import { useState  } from "react"

export default function Section1() {

   const  [emailStatus, setEmailStatus] = useState(true);

    const isValidEmail = (email) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const emailHandler = (e) =>{
        let email = e.target.value;

        isValidEmail(email)?setEmailStatus(true):setEmailStatus(false);

        if(email.length<=0){
            setEmailStatus(true)
        }
    }   

    return (
        <>
            <div className="section1Wrapper place-items-center grid md:grid-cols-2 justify-center items-center min-h-[650px] md:flex-row-reverse pb-11">
                <div className="section1Image md:order-2">
                    <img src="/images/illustration-1.svg" className="h-[300px] md:h-[320px] lg:h-[400px]" alt="image1" />
                </div>

                <div className="section1Content flex gap-5 flex-col  w-[80%] ">
                    <h1 className="text-[27px] lg:text-[40px] md:text-[22px] text-veryDarkBlue  text-center md:text-start w-full font-bold text-Raleway leading-normal">All your files in one secure<br />location, accessible anywhere</h1>
                    <p className="text-DesaturatedBlue text-[16px] text-center md:text-start md:w-[70%] w-[100%]">Fylo stores your most important files in one secure location.
                        Access them wherever you need, share and collaborate with friends, family, and co-workers.
                    </p>

                    <div className="newslatter  md:w-[280px] lg:w-[300px] xl:w-full relative flex flex-col md:flex-col  lg:flex-col xl:flex-row gap-4 w-full md:order-1">
                        <input type="email" onChange = {emailHandler} className={`border-[1px] focus:outline-[1px]  ${emailStatus?'':'focus:outline-red'}  border-DesaturatedBlue focus:border-none  rounded-md placeholder:font-Raleway placeholder:font-[450] placeholder:text-LightGray p-3 min-w-full lg:min-w-[300px]`} placeholder="Enter your email..." />
                        <p className={`absolute -bottom-7  text-[14px] text-red ${emailStatus?'hidden':''} `}>Please check your email</p>
                        <button type="button" className="hover:bg-fadedBlue transition duration-150 ease-in-out px-12 py-3 text-[16px] text-white rounded-md bg-BrightBlue">Get Started</button>
                    </div>
                </div>
            </div>

        </>
    )
}
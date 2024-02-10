

export default function Section2(){
    return (
        <>
        <div className="section2 items-end  justify-center flex bg-top md:bg-[url('/images/bg-curve-desktop.svg')]  bg-[url('/images/bg-curve-mobile.svg')] bg-no-repeat bg-contain  min-h-[480px]">
           <div className="grid md:grid-cols-2 gap-8 p-4 md:p-10 grid-cols-1 place-items-start bg-fadedPink md:mt-[60px] lg:mt-[70px]   mt-[50px] xl:mt-[100px] w-full min-h-[670px] ">

                <div className="content md:px-11 flex gap-5 h-full items-center justify-center md:items-start md:justify-start flex-col w-full">
                    <h1 className="text-[17px]  w-full md:text-start md:text-[30px] lg:text-[45px] text-veryDarkBlue text-center font-bold font-Raleway">Stay productive, wherever you are</h1>
                    <p className="text-DesaturatedBlue max-w-[365px] md:max-w-[600px] text-Raleway text-[16px]">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>

                    <p className="text-DesaturatedBlue max-w-[365px] md:max-w-[600px] text-Raleway text-[16px]">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>

                    <div className="work items-center justify-center md:justify-start w-full flex ">
                        <a href="#" className="relative text-[16px] min-w-[163px] border-b-2 border-ModerateCyan text-ModerateCyan flex items-center">See how Fylo works  <span className="absolute -right-1 "><img src="/images/icon-arrow.svg" alt="arrow" /></span></a>
                    </div>

                    <div className="testimonialCard md:mt-[50px] mt-[20px] mb-[70px] md:mb-[0px] rounded-md gap-5 flex flex-col max-w-[330px] md:min-w-[350px] p-5 px-8 bg-white">
                        <img src="/images/icon-quotes.svg" className="h-[15px] w-[15px]" alt="quates" />

                        <p className="text-[12px]">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>

                        <div className="founder flex gap-3 items-center">
                            <img src="/images/avatar-testimonial.jpg" className="h-[40px] rounded-full" alt="avtar" />
                            <div className="avtarDetails">
                                <p className="text-[16px] font-bold font-Raleway">Kyle Burton</p>
                                <p className="text-[10px] text-DesaturatedBlue">Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bgImage  w-full h-full flex items-start -order-1 md:order-1 justify-center">
                    <img src="/images/illustration-2.svg" alt="image" className="h-[250px] md:h-[300px] lg:h-[400px]" />
                </div>

           </div>
        </div>
        </>
    )
}
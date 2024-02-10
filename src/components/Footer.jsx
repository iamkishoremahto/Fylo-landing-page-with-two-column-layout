import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";



export default function Footer() {
    return (
        <>
            <div className="footerWrapper  bg-veryDarkBlue min-h-[450px] max-h-[700] flex flex-col md:flex-col lg:flex-row items-start justify-between">
                <div className="footerContact p-7   md:p-11 py-11 min-h-[200px] lg:min-h-[450px] w-[360px] md:w-[100%] lg:w-[450px]  ">
                    <img src="/images/logo2.svg" className="mb-[30px]" alt="logo" />
                    <div className="contactWrapper flex gap-4 mb-1 items-center ">
                        <img src="/images/icon-phone.svg" className="h-[20px] w-[20px]" alt="phone" />
                        <p className="text-white">Phone: +1-543-123-4567</p>
                    </div>
                    <div className="contactWrapper flex gap-4 items-center ">
                        <img src="/images/icon-email.svg" className="h-[15px] w-[20px]" alt="email" />
                        <p className="text-white">expample@fylo.com</p>
                    </div>
                </div>
                <div className="footerLinks px-7 w-full min-h-[350px] flex items-center justify-evenly flex-col gap-5  md:flex-row">
                    <div className="footerLinkWrapper ">
                        <a href="#" className="fLink">About Us</a>
                        <a href="#" className="fLink">Jobs</a>
                        <a href="#" className="fLink">Press</a>
                        <a href="#" className="fLink">Blog</a>
                    </div>

                    <div className="footerLinkWrapper">
                        <a href="#" className="fLink">Contact Us</a>
                        <a href="#" className="fLink">Terms</a>
                        <a href="#" className="fLink">Privacy</a>
              
                    </div>

                    <div className="footerLinkWrapper">
                        <a href="#" className="fLink"><FaFacebookF /></a>
                        <a href="#" className="fLink"><FaTwitter /></a>
                        <a href="#" className="fLink"><FaInstagram/></a>

                    </div>
                </div>
            </div>
        </>
    )
}
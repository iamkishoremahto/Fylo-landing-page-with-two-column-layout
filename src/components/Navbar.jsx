

export default function Navbar(){
    return (
        <>
        <div className="navbarWrapper  flex justify-between items-center min-h-[100px] px-5 ">
            <div className="icon">
                <img src='/images/logo.svg' className="h-[30px] md:h-[40px]" alt="logo" />
            </div>
            <div className="navTabs flex items-center gap-5 md:gap-8">
                <a href="#" className="link">Features</a>
                <a href="#" className="link">Team</a>
                <a href="#" className="link">Sign In</a>
            </div>
        </div>
        </>
    )
}
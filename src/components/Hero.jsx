import Section1 from "./HeroComponent/Section1"
import Section2 from "./HeroComponent/Section2"
import Section3 from "./HeroComponent/Section3"

export default function Hero(){

    
    return (
        <>
        <div className="HeroWrapper flex flex-col">
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
        </>
    )
}
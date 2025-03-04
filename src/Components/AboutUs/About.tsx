import withHeaderAndFooter from "../../HOC/withHeaderAndFooter"
import AboutHeadery from "./AboutHeadery"
import OurStory from "./OurStory"
import OurVision from "./OurVission"
import WhoWeAre from "./WhoWeAre"

const About = () => {
    return (
        <div className="px-[0.9rem] md:px-[4rem] lg:px-[6rem] bg-[#fff] max-w-[1600px] mx-auto">
            <AboutHeadery />
            <OurStory />
            <WhoWeAre />
            <OurVision />
        </div>
    )
}

export default withHeaderAndFooter(About)
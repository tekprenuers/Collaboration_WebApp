import svgOne from "./../../assets/vector-illustration/our-story-icon-1.svg fill.png"
import svgTwo from "./../../assets/vector-illustration/our-story-icon-2.svg.png"
import svgThree from "./../../assets/vector-illustration/our-story-icon-3.svg fill.png"
import svgFour from "./../../assets/vector-illustration/our-story-icon-4.svg.png"
import tree from "./../../assets/vector-illustration/tree-base.png.png"
import treeTop from "./../../assets/vector-illustration/tree-section-3-branch-left.png.png"

const OurStory = () => {
  return (
    <div className="mt-[2rem]">
        <h1 className=" text-center text-[#003366] text-[2rem] font-bold">Our <span className="text-[#FF5733]">Story</span></h1>
        <img src={treeTop} alt="Image" className="mx-auto mt-[-2rem]"/>
        <div className="flex flex-col md:flex-row max-w-[50rem] mx-auto md:gap-4 md:pl-[9rem] mb-[3rem] md:mb-0">
            <div className=" flex flex-col gap-[1rem]">
                <div className="flex gap-4">
                    <img src={svgOne} alt="Image" />
                    <p>Founded in 2025</p>
                </div>
                <div className="flex gap-4">
                    <img src={svgTwo} alt="Image" />
                    <p>Incubated out of a Tekpreneurs</p>
                </div>
                <div className="flex gap-4">
                    <img src={svgThree} alt="Image" />
                    <p>Self-funded and profitable</p>
                </div>
                <div className="flex gap-4">
                    <img src={svgFour} alt="Image" />
                    <p>3.5 million users in 133 countries</p>
                </div>
            </div>
            <img src={tree} alt="Image" className="hidden md:block md:ml-[-8rem] mt-[-1.5rem]" />
        </div>

    </div>
  )
}

export default OurStory
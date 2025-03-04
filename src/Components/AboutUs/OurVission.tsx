import branchImg from "./../../assets/vector-illustration/branch.png"
import cloudImg from "./../../assets/vector-illustration/Cloud4.png"
import cloudImgSmall from "./../../assets/vector-illustration/CloudSmall.png"

const OurVision = () => {
    return (
        <div className="relative mb-[3rem] md:mb-[4rem]">
            <img src={branchImg} alt="Image" className="mx-auto z-40 mb-[-2.3rem]"/>
            <div className="bg-[#e3e3e3] w-full md:w-[70%] mx-auto p-[0.6rem] rounded-lg">
                <div className="w-full flex justify-between px-[0.5rem] mt-[1rem]">
                    <div className="flex gap-5">
                        <div className="bg-[#979797] w-[1rem] h-[1rem] rounded-full"></div>
                        <div className="bg-[#979797] w-[1rem] h-[1rem] rounded-full"></div>
                        <div className="bg-[#979797] w-[1rem] h-[1rem] rounded-full"></div>
                    </div>
                    <div className="bg-[#979797] w-[3rem] h-[1rem] rounded-full"></div>
                </div>
                <div className="mt-[1rem] bg-[#fff] py-[5rem] rounded-md">
                    <h1 className=" text-center text-[#003366] text-[2rem] font-bold">Our <span className="text-[#FF5733]">Vision</span></h1>
                    <div className="flex flex-col justify-between text-[#000000B0] sm:text-[1.3rem] px-[0.8rem] sm:px-[2rem] lg:px-[7rem] mt-[3rem]">
                        <p>At Headerfy we believe everyone should be able to create beautiful content with no design experience and minimal effort.</p>
                        <p>And our vision is to bring the power of visual communication to the masses – to empower the world to communicate visually through beautiful designs they can be proud of and that theiraudience appreciates.</p>
                    </div>
                </div>
            </div>
            <img src={cloudImg} alt="Image" className="absolute hidden sm:block left-[0] lg:left-[7rem] bottom-[-1rem]" />
            <img src={cloudImgSmall} alt="Image" className="absolute hidden md:block right-0 lg:right-[7rem] top-[5rem] z-10" />
        </div>
    )
}

export default OurVision
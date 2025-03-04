import { IoIosArrowDropdownCircle } from "react-icons/io"
import img from "./../../assets/vector-illustration/team_members_header.svg.png"


const WhoWeAre = () => {
    return (
        <div>
            <div className="bg-[#e3e3e3] w-[70%] mx-auto p-[1rem] rounded-lg">
                <div className="w-full flex justify-between">
                    <div className="flex gap-5">
                        <div className="bg-[#979797] w-[1rem] h-[1rem] rounded-full"></div>
                        <div className="bg-[#979797] w-[1rem] h-[1rem] rounded-full"></div>
                        <div className="bg-[#979797] w-[1rem] h-[1rem] rounded-full"></div>
                    </div>
                    <div className="bg-[#979797] w-[3rem] h-[1rem] rounded-full"></div>
                </div>
                <div className="mt-[1rem] bg-[#fff] py-[1rem] pb-[9rem] rounded-md">
                    <h1 className=" text-center text-[#003366] text-[2rem] font-bold">Who are <span className="text-[#FF5733]">we?</span></h1>
                    <div className="flex justify-between text-[#000000B0] text-[1.3rem] lg:px-[7rem] mt-[3rem]">
                        <div className="w-full md:w-[45%]">
                            <p>We are a team of <span className="text-[#000]">talented</span> and <span className="text-[#000]">passionate</span> designers, developers with <span className="text-[#000]">sheer dedicated</span> to creating the best letterhead creation platform <span className="text-[#000]">on the planet</span></p>
                        </div>
                        <div className="w-full md:w-[45%]">
                            <p>Headerfy is the construct and reflection of <span className="text-[#000]">our imagination</span> of what letterhead should be like, <span className="text-[#000]">a platfrom to unify your ideas </span> with your audience and empower the world to <span className="text-[#000]">speak</span> loudly by speaking visually.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center max-w-[15rem] mx-auto mt-[-4rem] ">
                <h1 className="text-[#000000e1] text-[1.1rem] font-bold">Meet the Visme Team</h1>
                <img src={img} alt="Image" className="mx-auto" />
                <IoIosArrowDropdownCircle className="text-[#FF5733] text-[2rem] text-center mx-auto " />
            </div>
        </div>
    )
}

export default WhoWeAre
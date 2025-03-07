import { IoIosArrowDropdownCircle } from "react-icons/io"
import img from "./../../assets/vector-illustration/team_members_header.svg.png"
import cloudImg from "./../../assets/vector-illustration/Cloud4.png"
import cloudImgTwo from "./../../assets/vector-illustration/Cloud4.png"
import cloudImgSmall from "./../../assets/vector-illustration/CloudSmall.png"


const WhoWeAre = () => {
    return (
      <div className="relative mb-[3rem] md:mb-0">
        <div className="bg-[#e3e3e3] w-full md:w-[100%] lg:w-[70%] mx-auto p-[0.6rem] rounded-lg z-30 ">
          <div className="w-full flex justify-between px-[0.5rem] mt-[1rem]">
            <div className="flex gap-5">
              <div className="bg-[#979797] w-[1rem] h-[1rem] rounded-full"></div>
              <div className="bg-[#979797] w-[1rem] h-[1rem] rounded-full"></div>
              <div className="bg-[#979797] w-[1rem] h-[1rem] rounded-full"></div>
            </div>
            <div className="bg-[#979797] w-[3rem] h-[1rem] rounded-full"></div>
          </div>
          <div className="mt-[1rem] bg-[#fff] py-[1rem] pb-[9rem] rounded-md">
            <h1 className=" text-center text-[#003366] text-[2rem] font-bold">
              Who are <span className="text-[#FF5733]">we?</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-between text-[#000000B0] sm:text-[1.3rem] px-[0.8rem] sm:px-[2rem] lg:px-[4rem] xl:px-[7rem] mt-[3rem]">
              <div className="w-full md:w-[45%]">
                <p>
                  We are a team of <span className="text-[#000]">talented</span>{" "}
                  and <span className="text-[#000]">passionate</span> designers,
                  developers with{" "}
                  <span className="text-[#000]">sheer dedicated</span> to
                  creating the best letterhead creation platform{" "}
                  <span className="text-[#000]">on the planet</span>
                </p>
              </div>
              <div className="w-full md:w-[45%]">
                <p>
                  Headerfy is the construct and reflection of{" "}
                  <span className="text-[#000]">our imagination</span> of what
                  letterhead should be like,{" "}
                  <span className="text-[#000]">
                    a platfrom to unify your ideas{" "}
                  </span>{" "}
                  with your audience and empower the world to{" "}
                  <span className="text-[#000]">speak</span> loudly by speaking
                  visually.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center max-w-[15rem] mx-auto mt-[-4rem] ">
          <h1 className="text-[#000000e1] text-[1.1rem] font-bold">
            Meet the Headerfy Team
          </h1>
          <img src={img} alt="Image" className="mx-auto" />
          <IoIosArrowDropdownCircle className="text-[#FF5733] text-[2rem] text-center mx-auto " />
        </div>
        <img
          src={cloudImg}
          alt="Image"
          className="absolute hidden sm:block left-[0] lg:left-[7rem] bottom-[2rem]"
        />
        <img
          src={cloudImgTwo}
          alt="Image"
          className="absolute hidden md:block right-0 lg:right-[7rem] top-[-2rem] z-10"
        />
        <img
          src={cloudImgSmall}
          alt="Image"
          className="absolute hidden md::block right-0 lg:right-[7rem] top-[3rem] z-10"
        />
      </div>
    );
}

export default WhoWeAre
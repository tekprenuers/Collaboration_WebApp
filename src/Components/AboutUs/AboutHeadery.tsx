import img from "./../../assets/vector-illustration/about1.png"
import cloudImg from "./../../assets/vector-illustration/Cloud1.png.png"
import cloudImgTwo from "./../../assets/vector-illustration/Cloud1.png.png"

const AboutHeadery:React.FC = () => {
  return (
    <div className="text-[#000000B0] mt-[3rem] md:mt-[5rem] ">
      <div className="text-[#000000B0] text-center">
        <h3 className="text-[#003366] font-bold font-poppins">ABOUT HEADERFY</h3>
        <h1 className=" text-[#003366] text-[2rem] font-bold font-poppins">WHO WE <span className="text-[#FF5733]">ARE!</span></h1>
        <p className="md:text-[1.2rem]">Enjoy the moment, as we take you through our history team and vision.</p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-[2rem] md:gap-0 justify-between mt-[3rem] md:mt-[9rem]">
        <div className="relative w-full md:w-[40%] text-center md:text-left ">
          <h1 className="text-[2rem] text-[#003366] font-bold">What is Headerfy?</h1>
          <div className="md:text-[1rem] lg:text-[1.4rem] mt-[2rem]">
            <p>Headerfy is everything you need to create beautiful letterheads templates. </p>
            <p className="md:max-w-[30rem]">And it's a place to get free educational content built to give non-designers the resources to become amazing visual communicators. </p>
          </div>
          <div className=" hidden md:block">
            <img src={cloudImg} alt="" />
          </div>
        </div>
        <div className=" relativew-full md:w-[60%] lg:w-[70%] md:ml-[-12rem] mb-[3rem] md:mb-[5rem] lg:mt-[-3rem]">
          <img src={img} alt="" className="w-full " />
          <div className=" hidden md:block float-right mt-[-7rem]">
            <img src={cloudImgTwo} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutHeadery
import img from "./../../assets/vector-illustration/our-story-icon-1.svg fill.png"

const OurStory = () => {
  return (
    <div>
        <h1 className=" text-center text-[#003366] text-[2rem] font-bold">Our <span className="text-[#FF5733]">Story</span></h1>
        <div className="">
            <div className=" flex flex-col gap-[1rem]">
                <div className="flex gap-4">
                    <img src={img} alt="" />
                    <p>Founded in 2025</p>
                </div>
                <div className="flex gap-4">
                    <img src={img} alt="" />
                    <p>Founded in 2025</p>
                </div>
                <div className="flex gap-4">
                    <img src={img} alt="" />
                    <p>Founded in 2025</p>
                </div>
                <div className="flex gap-4">
                    <img src={img} alt="" />
                    <p>Founded in 2025</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default OurStory
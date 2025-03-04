import withHeaderAndFooter from "../../HOC/withHeaderAndFooter"
import LearnBodyOne from "./LearnBodyOne"


const Learn = () => {
  return (
    <div className="px-[0.9rem] md:px-[4rem] lg:px-[6rem] bg-[#fff] max-w-[1600px] mx-auto">
        <LearnBodyOne />
    </div>
  )
}

export default withHeaderAndFooter(Learn)
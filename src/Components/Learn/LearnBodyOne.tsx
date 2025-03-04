import ReactPlayer from "react-player"
import withSharedContent from "../../HOC/withSharedContent";


type listUsed = {
    id: number;
    src: string;
    title: string;
    desc: string;
}
const LearnBodyOne:React.FC = () => {

    const list: listUsed[] = [
        { id: 1, src: "https://youtu.be/LDB4uaJ87e0?si=PZyM8B-E3FaZIl4U", title: "Headerfy video Tutorials", desc: "watch videos on how to use headerfy" },
        { id: 2, src: "https://youtu.be/7qYwOr4jgnI?si=qQtNMOg2HDq-Bvvh", title: "Graphics Design Videos", desc: "watch videos on how to design graphics" },
        { id: 3, src: "https://youtu.be/wbj-DuaL748?si=RjhFkrv4Dyv8soNs", title: "E-Books on designs", desc: "Read books on design principles" },
    ]


    return (
        <div className="text-[#333333] flex flex-col gap-[1rem] p-[2.5rem] my-[2rem] mt-[3rem] shadow-xl rounded-tl-4xl rounded-br-4xl shadow-[#0000002a]">
            <h1 className=" text-[1.7rem]">Free Educational Resources</h1>
            <div className=" flex flex-col md:flex-row justify-between gap-[1rem]">
                
            {list.map((item) => {
                return (
                    <div className="w-full md:w-[30%] flex flex-col gap-[1rem]">
                        <div key={item.id} className="w-full rounded-xl overflow-hidden">
                            <ReactPlayer
                                url={item.src}
                                controls
                                width="100%"
                                height="200px"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-medium text-[1.2rem]">{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                )
            })}
            </div>

        </div>
    )
}

export default withSharedContent(LearnBodyOne)
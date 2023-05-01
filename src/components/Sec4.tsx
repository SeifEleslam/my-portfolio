import Image from "next/image";
import frame from "../assets/frame.svg";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import { VscGithub } from "react-icons/vsc";
import { ImLink } from "react-icons/im";

export const Sec4 = () => {
  const selectedProjects = [
    {
      image: proj1,
      link: "https://seifeleslam.github.io/clearmix-clone/",
      link2: "https://github.com/SeifEleslam/clearmix-clone",
      title: "ClearMix Clone",
      des: "A one page project that clone the landing page design of clearmix website. The page is a great example of how animation could be used to attract users attention and highlight company services.",
    },
    {
      image: proj2,
      link: "https://www.my-controller.online/",
      link2: "",
      title: "MyController Managment System",
      des: "A full stack project that is use to manage playstation gaming centers. The system provide many features including managing several branches and several shifts. N0TE: I only worked on the frontend of the project",
    },
  ];
  return (
    <div className="space-y-12 relative flex flex-col justify-center items-center w-[90%] mx-auto max-w-[60rem] min-h-[100vh]">
      <h1 className="mb-20  text-5xl sm:text-6xl text-center text-prim  ">
        Selected Projects
      </h1>
      {selectedProjects.map((proj) => {
        return (
          <div
            key={proj.title}
            className="pb-12 flex flex-col justify-center items-center w-full sm:flex-row border-prim border-b-[3px]"
          >
            <Proj source={proj.image} link={proj.link} />
            <div>
              <h1 className="text-4xl sm:text-left text-center text-prim">
                {proj.title}
              </h1>
              <br />
              <p className="text-lg text-white">{proj.des}</p>
              <br />
              <div className="md:space-x-4 space-y-4 md:space-y-0 md:flex-row flex-col flex justify-center items-center">
                <a
                  target="_blank"
                  href={proj.link}
                  className="w-fit mx-auto sm:mx-0 hover:-translate-y-2 flex hover:shadow-gold bg-prim duration-500 items-center space-x-2 rounded-full text-bgprim px-4 py-2 "
                >
                  <ImLink size={"30px"} />
                  <p className="text-2xl">Project Link</p>
                </a>
                {proj.link2 && (
                  <a
                    target="_blank"
                    href={proj.link2}
                    className="w-fit mx-auto sm:mx-0 flex hover:shadow-gold duration-500 items-center space-x-2 rounded-2xl border-prim text-prim border-[2px] px-4 py-2 "
                  >
                    <VscGithub size={"30px"} />
                    <p className="text-2xl">Repo</p>
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <div className="pb-12 flex flex-col justify-center items-center w-full sm:flex-row">
        <h1 className="text-white text-2xl text-center">
          See the rest of my work in GIthub and Codepen
        </h1>
        <div></div>
      </div>
    </div>
  );
};

const Proj = ({ source, link }: { source: any; link: string }) => {
  return (
    <div className="relative min-w-[20rem] max-w-full  aspect-square">
      <Image
        className="absolute w-full h-full object-fit "
        src={frame}
        alt=""
      />
      <a
        href={link}
        target="_blank"
        className="absolute w-full h-full overflow-clip rounded-full  border-[10px] border-prim scale-[.52]"
      >
        <Image
          className="w-full duration-1000 hover:scale-[1.4] h-full object-cover"
          src={source}
          alt=""
        />
      </a>
    </div>
  );
};

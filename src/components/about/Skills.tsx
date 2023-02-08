import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiDocker,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Golang, Nextjs } from "../svgs/Skills";

export const Skills = () => {
  return (
    <div
      className={
        " backdrop-blur bg-[#272b33]/75 duration-500 absolute ease-in-out w-full h-full overflow-hidden"
      }
    >
      <div className=" ">
        <h1 className="mb-4 sm:text-[25px] lg:text-[35px] text-shadow py-2 text-[#d8b15d] text-center">
          Technical Skills
        </h1>
        <div className="p-[1vw] text-left w-full">
          <div>Experienced At:</div>

          <div className="w-full h-[12vh] flex p-2">
            <div className="h-full flex-1">
              <AiFillHtml5 size="100%" />
            </div>
            <div className="h-full flex-1">
              <FaCss3Alt size="100%" />
            </div>
            <div className="h-full flex-1">
              <SiJavascript size="100%" />
            </div>
            <div className="h-full flex-1">
              <SiReact size="100%" />
            </div>
          </div>
        </div>
        <div className="p-[1vw] text-left w-full">
          <div> Comfortable With:</div>

          <div className="w-full h-[12vh] p-2 flex duration-500">
            <div className="h-full flex-1">
              <SiTypescript size="100%" />
            </div>
            <div className="h-full flex-1">
              <SiTailwindcss size="100%" />
            </div>
          </div>
        </div>
        <div className="p-[1vw] text-left w-full">
          <div> Familiar With:</div>

          <div className="w-full h-[12vh] flex p-2">
            <div className="h-full flex-1">
              <SiPostgresql size="100%" />
            </div>
            <div className="h-full flex-1">
              <Nextjs />
            </div>
            <div className="h-full flex-1">
              <Golang />
            </div>
            <div className="h-full flex-1">
              <SiDocker size="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

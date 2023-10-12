import Image from "next/image";
import { title } from "process";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTailwind,
} from "react-icons/tb";
import { SiAngularjs } from "react-icons/si";
import ts from "../assets/typescript.svg";
import next from "../assets/next.svg";
export const Sec3 = () => {
  const skills = [
    {
      icon: <TbBrandHtml5 size={"100%"} />,
      title: "HTML",
    },
    {
      icon: <TbBrandCss3 size={"100%"} color="#d8b15d" />,
      title: "CSS",
    },
    {
      icon: <TbBrandJavascript size={"100%"} />,
      title: "JavaSCript",
    },
    {
      icon: <Image src={ts} className="w-full scale-75" alt="" />,
      title: "TypeScript",
    },
    {
      icon: <TbBrandTailwind size={"100%"} />,
      title: "Tailwind",
    },
    {
      icon: <Image src={next} className="w-full sm:scale-1 scale-75" alt="" />,
      title: "NextJS",
    },
    {
      icon: <SiAngularjs size={"85%"} className="sm:scale-1 scale-75" />,
      title: "Angularjs",
    },
  ];
  return (
    <div className="relative flex-col flex justify-center items-center w-[90%] mx-auto max-w-[60rem] min-h-[100vh]">
      <div>
        <h1 className="text-shadow mb-20 text-5xl sm:text-6xl text-center text-prim  ">
          My Skills
        </h1>{" "}
        <div className="p-4 sm:max-w-full text-white flex flex-col sm:flex-row justify-between items-center space-x-4 space-y-4 bg-black/50  w-full shadow-3xl rounded-lg sm:rounded-full">
          <div className="border-b-[3px] sm:border-b-[0px] sm:border-r-[3px] border-prim p-4 text-5xl sm:text-4xl md:text-6xl text-prim h-full text-center">
            <p>Experinced With</p>
            <div className="absolute left-0 top-0 triangle-topleft"></div>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap">
            {skills.map((skill) => {
              return (
                <Skill key={skill.title} title={skill.title}>
                  {skill.icon}
                </Skill>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skill = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="w-full max-w-[10rem] sm:w-[30%] lg:w-[20%] flex flex-col justify-center items-center text-center ">
      {children} <h1>{title}</h1>
    </div>
  );
};

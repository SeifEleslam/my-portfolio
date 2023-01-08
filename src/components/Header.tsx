import LightSVG from "./LightSVG";
import { Github, LinkedIn } from "./Links";

export default function Header() {
  return (
    <div className="w-full h-fit fixed z-[200] p-1">
      <nav className="z-[100] relative flex items-center px-[10vw] bg-transparent">
        <div className="mx-auto flex w-full items-center ">
          <div className="w-[50%] relative lg:text-left block flex items-center">
            <a className="cursor-pointer h-[3rem] hover:shadow-gold duration-1000 flex border-[1px] rounded-lg border-[#d8b15d]">
              <LightSVG />
              <span className="mr-[.7rem] block my-auto sm:inline-block hidden text-[#d8b15d] duration-[500ms] rounded-lg mx-auto durarion-600 text-right text-[1.5rem] text-shadow">
                SEIFELELAM
              </span>
            </a>
          </div>
          <div className="items-center justify-end flex text-right w-[50%] h-[6vh]">
            <a
              href="https://github.com/SeifEleslam"
              target="_blank"
              className="h-[2.5rem] mx-[2vw] cursor-pointer hover:opacity-[1] opacity-[.75] duration-[500ms]"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/seifeleslam-gouda-0a5504256"
              target="_blank"
              className="h-[2.5rem] mx-[2vw] cursor-pointer hover:opacity-[1] opacity-[.75] duration-[500ms]"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

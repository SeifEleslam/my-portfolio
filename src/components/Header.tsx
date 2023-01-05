import LightSVG from "./LightSVG";

export default function Header() {
  return (
    <div className="w-full h-fit fixed z-[200] p-1">
      <nav className="z-[100] relative flex items-center px-[10vw] bg-transparent">
        <div className="mx-auto flex w-full items-center ">
          <div className="w-[50%] relative lg:text-left block flex items-center">
            <button className="h-[6vh] border-[1px] rounded-lg border-[#d8b15d]">
              <LightSVG />
            </button>
          </div>
          <div className="items-center justify-center flex text-right w-[50%] h-[6vh]">
            <p className="mx-1 hover:text-[#d8b15d] duration-[500ms] rounded-lg mx-auto durarion-600 text-right text-[2.2vh] text-shadow text-[#aaa]">
              SEIFELELAM
            </p>
            <button className="h-[4vh] mx-1"></button>
            <button className="h-[4vhnpm ] mx-1"></button>
          </div>
        </div>
      </nav>
    </div>
  );
}

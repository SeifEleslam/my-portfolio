import LightSVG from "./LightSVG";

export default function Header() {
  return (
    <div className="w-full h-fit fixed z-50 ">
      <nav className="z-[100] relative flex items-center px-[10vw] bg-transparent mb-3">
        <div className="mx-auto flex w-full items-center ">
          <div className="w-[50%] relative lg:text-left block flex items-center">
            <button className="h-[7vh] border-[1px] rounded-lg border-[#d8b15d] m-1">
              <LightSVG />
            </button>
          </div>
          <div
            className="items-center justify-center flex text-right w-[50%] h-[10vh]"
            id="example-navbar-danger"
          >
            <p className="mx-1 mx-auto durarion-600 text-right text-[2.2vh] text-shadow text-[#d8b15d]">
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

import { useState } from "react";

interface FooterProps {
  handleState: (newVal: string) => void;
  linkState: string;
}

export default function Footer({ handleState, linkState }: FooterProps) {
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState("");
  const showDes = (title: string) => {
    setHover(title);
    const el = document.getElementById("des");
    el!.style.visibility = "visible";
    el!.style.opacity = "1";
    el!.style.left = "0";
  };
  const hideDes = () => {
    const el = document.getElementById("des");
    el!.style.visibility = "hidden";
    el!.style.opacity = "0";
    el!.style.left = "-10px";
  };

  return (
    <div className="xl:w-fit fixed flex z-[99] mt-[2vh] xl:left-0 left-[.5vw] xl:right-auto right-0 mx-auto xl:top-10 bottom-0 xl:my-auto duration-[600ms] rounded-full">
      {/* <button
        onClick={() => {
          setClicked(true);
        }}
        className={
          " text-[3vh] lg:text-[3vw] lg:rotate-0 -rotate-90 lg:left-0 lg:right-0 lg:mx-auto w-fit h-fit absolute mx-[1vw] my-[1vh] bottom-0 bottom-0 right-10 lg:top-10 duration-[600ms] p-1 text-shadow rounded text-[#aaa] hover:text-[#edc769]"
        }
      >
        &#x279C;
      </button> */}
      <p
        id="des"
        className="border-y-[.5vh] absolute mx-[1vw] my-[1vh] left-0 bottom-0 max-w-[30%] md:max-w-[100%] xl:bottom-10 border-[#d8b15d] opacity-0 invisible duration-[600ms] p-1 text-shadow rounded text-[#aaa]"
      >
        {hover}
      </p>

      <div className="xl:flex-col flex xl:my-auto mx-auto z-[200] xl:top-0 xl:left-auto xl:right-auto left-0 right-0 bottom-0 h-fit w-fit py-2 duration-[600ms] overflow-hidden">
        <div
          onMouseEnter={() => {
            showDes("Dramatic Entrance");
          }}
          onMouseLeave={() => {
            hideDes();
          }}
          className={
            (linkState === "drama"
              ? "w-[7vw] bg-[#d8b15d]"
              : "w-[4vw] bg-[#aaa]") +
            " my-[2vh] mx-[1vw] cursor-pointer duration-[600ms] ease-in-out shadow-footer hover:w-[7vw] h-[1vh] rounded-full"
          }
          onClick={() => {
            handleState("drama");
          }}
        ></div>

        <div
          onMouseEnter={() => {
            showDes("About Me");
          }}
          onMouseLeave={() => {
            hideDes();
          }}
          className={
            (linkState === "about"
              ? "w-[7vw] bg-[#d8b15d]"
              : "w-[4vw] bg-[#aaa]") +
            " my-[2vh] mx-[1vw] cursor-pointer duration-[600ms] ease-in-out shadow-footer hover:w-[7vw] h-[1vh] rounded-full"
          }
          onClick={() => {
            handleState("about");
          }}
        ></div>

        <div
          onMouseEnter={() => {
            showDes("Projects");
          }}
          onMouseLeave={() => {
            hideDes();
          }}
          className={
            (linkState === "projects"
              ? "w-[7vw] bg-[#d8b15d]"
              : "w-[4vw] bg-[#aaa]") +
            " my-[2vh] mx-[1vw] cursor-pointer duration-[600ms] ease-in-out shadow-footer hover:w-[7vw] h-[1vh] rounded-full"
          }
          onClick={() => {
            handleState("projects");
          }}
        ></div>

        <div
          onMouseEnter={() => {
            showDes("Contact");
          }}
          onMouseLeave={() => {
            hideDes();
          }}
          className={
            (linkState === "contact"
              ? "w-[7vw] bg-[#d8b15d]"
              : "w-[4vw] bg-[#aaa]") +
            " my-[2vh] mx-[1vw] cursor-pointer duration-[600ms] ease-in-out shadow-footer hover:w-[7vw] h-[1vh] rounded-full"
          }
          onClick={() => {
            handleState("contact");
          }}
        ></div>
      </div>
    </div>
  );
}

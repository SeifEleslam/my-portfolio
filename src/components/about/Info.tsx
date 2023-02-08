export const Info = () => {
  return (
    <div className="w-full h-full text-[#aaa] flex  ">
      <div className={" w-full  h-full relative"}>
        <div
          className={
            " backdrop-blur bg-[#272b33]/75 duration-[1500ms] ease-in-out w-full absolute h-full overflow-hidden"
          }
        >
          <h1 className="mb-4 sm:text-[25px] lg:text-[35px] text-shadow py-2 text-[#d8b15d] text-center">
            About Me
          </h1>
          <div className="p-[1vw] text-left w-full">
            <p className="text-[#aaa] sm:text-[20px] lg:text-[30px] absolute ease-in-out  ">
              Hello, 👋👋
              <br />
              My name is SeifEleslam. <br /> I am an experienced front-end
              developer with the required UI/UX design knowledge. I have a
              significant focus on the details seeking a perfectly designed user
              interface with the best possible performance to provide a
              remarkable user experience.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

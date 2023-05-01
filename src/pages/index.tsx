// import "../assets/fonts/reqa.ttf";

import Canvas from "@/components/Canvas";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <main className="eng">
      <div className="fixed w-[100vw] z-0 h-[100vh]">
        <Canvas />
      </div>
      <Main />
    </main>
  );
}

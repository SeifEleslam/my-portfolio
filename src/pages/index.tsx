// import "../assets/fonts/reqa.ttf";

import Canvas from "@/components/Canvas";
import { Main } from "@/components/Main";
import Head from "next/head";

export default function Home() {
  return (
    <div className="eng">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div className="fixed w-[100vw] z-0 h-[100vh]">
        <Canvas />
      </div>
      <Main />
    </div>
  );
}

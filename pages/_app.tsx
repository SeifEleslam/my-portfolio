import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Parallax from "parallax-js";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    var scene = document.getElementById("scene");
    if (scene) var parallaxInstance = new Parallax(scene);
  }, []);
  return <Component {...pageProps} />;
}

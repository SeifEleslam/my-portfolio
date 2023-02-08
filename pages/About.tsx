import { domAnimation, LazyMotion } from "framer-motion";
import { Info } from "../src/components/about/Info";
import { Skills } from "../src/components/about/Skills";

export default function About() {
  return (
    <LazyMotion features={domAnimation}>
      <div>
        <Skills />
        <Info />
      </div>
    </LazyMotion>
  );
}

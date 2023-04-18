import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
export default function About() {
  const { ref: img1Ref, inView: img1InView } = useInView({
    threshold: 0.5,
  });
  const { ref: img2Ref, inView: img2InView } = useInView({
    threshold: 0.5,
  });
  const { ref: img3Ref, inView: img3InView } = useInView({
    threshold: 0.5,
  });
  const { ref: img4Ref, inView: img4InView } = useInView({
    threshold: 0.5,
  });
  return (
    <>
    <h3>About me:</h3>
      <div className="relative h-[3000px]">
        <div className="absolute p-0.5 bg-slate-400  h-full right-1/2 z-[3]">
          <div className="rounded-full bg-slate-100 h-5 w-5 absolute translate-x-[-50%]  top-0"></div>
        </div>
        <div className="bg-black story-content-left">sdadsa</div>
        <img
          ref={img1Ref}
          className={`story-background-img  ${
            img1InView ? "transition-opacity" : "opacity-20"
          }`}
          src="/spring.jpg"
          alt=""
        />

        <div className="before:test   bg-transparent overflow-hidden story-content-right  top-[30%] ">
          <div className="before:test1"></div>
          <div className="test2">dsad</div>
        </div>
        <img
          ref={img2Ref}
          className={`story-background-img top-1/4  ${
            img2InView ? "transition-opacity" : "opacity-20"
          }`}
          src="/desert.jpg"
          alt=""
        />

        <div className="bg-black story-content-left top-2/4"></div>
        <img
          ref={img3Ref}
          className={`story-background-img top-2/4  ${
            img3InView ? "transition-opacity" : "opacity-20"
          }`}
          src="/tree.jpg"
          alt=""
        />

        <div className="bg-black story-content-right top-3/4"></div>
        <img
          ref={img4Ref}
          className={`story-background-img top-3/4  ${
            img4InView ? "transition-opacity" : "opacity-20"
          }`}
          src="/winter.jpg"
          alt=""
        />
        {/* <div className="bg-black story-content-right bottom-0"></div> */}
      </div>
    </>
  );
}

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Videobg from "/Videos/Video1.mp4";

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  const bannerRef = useRef(null);
  const videoRef = useRef(null);
  const textStructureRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const video = videoRef.current;
    const textStructure = textStructureRef.current;
    
    let ctx = gsap.context(() => {
      // Check device type
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        // Mobile animation
        gsap.fromTo(
          video,
          { y: "0", scale: 1 },
          {
            y: "-60vw",
            scale: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: banner,
              pin: true,
              start: "top 0%",
              end: "top -100%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      } else {
        // Desktop animation
        gsap.fromTo(
          video,
          { y: "0", scale: 1 },
          {
            y: "-30vw",
            scale: 0.9,
            ease: "none",
            scrollTrigger: {
              trigger: banner,
              pin: true,
              start: "top 0%",
              end: "top -120%",
              scrub: 2,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }, textStructure);

    // Add resize listener
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={bannerRef} className="relative  w-screen  h-screen sm:h-screen overflow-hidden bg-[#9a7749] pt-1   ">
      <div className="relative w-full h-full bg-slate-500 flex justify-center items-end  ">
      <div ref={textStructureRef} className="textStructure  relative w-4/5 sm:w-3/5 h-40 sm:h-60 text-right " >
           <div className="w-full relative bg-white bg-opacity-50 p-4 sm:p-8 text-zinc-900 backdrop-blur-sm rounded-t-3xl z-20 ">
               {["आत्मनिर्भर पंचायत,", "ग्रामोदय से भारत", "उदय"].map((item, index) => (
               <div key={index} className="Hero-main">
                   <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">{item}</h1>
                 </div>
               ))}
           </div>
             <div ref={videoRef} className='absolute w-full px-2 py-16 sm:px-24 top-[0vw]  '>
               <video
                src={Videobg}
                className="w-full h-full object-center z-10 "
                autoPlay
                muted
                loop
               >
               Your browser does not support the video tag.
               </video>
             </div>

          </div>

      </div>

    </div>
  );
}

export default Banner;
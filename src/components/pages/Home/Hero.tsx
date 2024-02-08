import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Hero = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  return (
    <div className="h-[900px] relative">
      <video
        className="object-cover h-full w-full"
        ref={videoRef}
        playsInline
        autoPlay
        muted
        loop
        src="https://cdn.shopify.com/videos/c/vp/ad691bb63ff2458a89aea46d0445c352/ad691bb63ff2458a89aea46d0445c352.HD-1080p-7.2Mbps-23932345.mp4"
      ></video>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap	text-white flex flex-col gap-2">
        <NavLink
          className={"text-xs flex items-center gap-2"}
        >
          <span className="tracking-[0.2em]">EXPLORE NOW</span>
          <svg viewBox="0 0 20 14" className="w-4 h-3 fill-current">
            <path d="M13.3 0l-.8.7 5.6 5.8H.1v1h18l-5.6 5.8.8.7L20 7z"></path>
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;

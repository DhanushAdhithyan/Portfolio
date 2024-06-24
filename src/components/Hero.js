import React from "react";
import HeroImg from "../assets/hero.png";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export const Hero = () => {
  const config = {
    subtitle: "Im a Full-stack developer and Designer",
    social: {
      twitter: "https://twitter.com/jvlcode",
      facebook: "https://facebook.com/jvlcode",
      linkedin: "https://in.linkedin.com/company/jvl-code",
    },
  };
  return (
    <section id="hero" className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex-col">
        <h1 className=" text-white text-5xl font-hero-font">
          Hii there !!! <br />
          Im <span className="text-black">Dhanush Adhithyan</span>
          <p className="text-2xl">I'm a Full Stack Developer</p>{" "}
        </h1>
        <div className="flex py-10">
          <a href={config.social.twitter} className="pr-5 hover:text-white">
            <AiOutlineTwitter size={40} />
          </a>
          <a href={config.social.facebook} className="pr-5 hover:text-white">
            <AiOutlineFacebook size={40} />
          </a>
          <a href={config.social.linkedin} className="hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg} />
    </section>
  );
};

import React from "react";
import AboutImg from "../assets/about.png";

export const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row bg-secondary px-5">
      <div className="md:w-1/2 py-5 flex justify-center">
        <img src={AboutImg} alt="" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 mb-5 w-[170px] border-primary">
            About me
          </h1>
          <p>
            Hii, Myself Dhanush Adhithyan I'm a Full Stack Developer who worked
            with Java-SpringBoot, Kotlin-ktor, ReactJs-tailwindCss along with
            PostgreSql.
          </p>
          <br />
          <p>
            With a strong foundation as a Certified FullStack Developer with a
            good hands on experience wth CSS, Bootstrap, Java and SQL, and
            current experience as a Software Developer , I am excited about the
            opportunities to be a more knowledgable Developer
          </p>
          <br />
          <p>
        
            During my Java FullStack certification (2023), I have developed a
            deep understanding of modern web application development, including
            front-end and back-end technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

function About() {
  return (
    <div className="container gap-20 py-10">
      <div className="w-full rounded-xl overflow-hidden border-2 border-main-color shadow-0">
        <img src="./me2.png" alt="" className="w-full" />
      </div>
      <div className="">
        <h2>About me</h2>
        <div className="text-white flex flex-col gap-4 mt-4">
          <p>
            I'm Svetlana Moiseienko, a passionate front-end developer with over
            a year of hands-on experience in creating immersive web experiences.
          </p>
          <p>
            My expertise lies in the
            <b>
              {" "}
              HTML, CSS, JavaScript/TypeScript, React, Redux/RTK, and Next.js{" "}
            </b>
            stacks. I believe that a well-designed user interface isn't just
            about aesthetics; it's about seamless functionality and engaging
            user experiences. That's why I'm dedicated to mastering the latest
            technologies and design trends to bring creativity and innovation to
            every project.
          </p>
          <p>
            I also have a keen eye for <b>design</b> and <b>SEO optimization</b>
            , which allows me to create websites that not only look great, but
            also perform exceptionally well in search engine rankings.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;

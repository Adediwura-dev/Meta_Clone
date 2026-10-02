import fullpageModule from "@fullpage/react-fullpage";
import vid1 from "../../../assets/metavideo.mp4";
import vid2 from "../../../assets/meta2.mp4";
import vid3 from "../../../assets/meta3.mp4";
import vid4 from "../../../assets/meta4.mp4";
const ReactFullpage = fullpageModule.default ?? fullpageModule;

const AboutHero = () => {
  return (
    <ReactFullpage
      licenseKey={"gplv3-license"}
      scrollingSpeed={1000}
      //   paddingTop={"80px"}
      autoScrolling={false} // Disables full-screen snapping
      fitToSection={false} // Prevents snapping to sections
      credits={{ enabled: true, label: "fullPage.js" }}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className=" bg-amber-500 h-screen relative">
              <div className=" h-full w-full absolute flex flex-col justify-center items-center ">
                <h1 className=" max-w-[600px] mx-10 font-medium text-4xl text-center text-white mb-3">
                  We're building the future of human connection
                </h1>
                <button className=" px-5 py-3 bg-blue-600 text-white rounded-full">
                  Our Mission
                </button>
              </div>
              <video
                className=" w-full h-full object-cover"
                autoPlay
                loop
                src={vid1}
              ></video>
            </div>
          </div>
          <div className="section">
            <div className=" bg-amber-500 h-screen relative">
              <div className=" h-full w-full absolute flex flex-col justify-center items-center ">
                <h1 className=" max-w-[600px] mx-10 font-medium text-4xl text-center text-white mb-3">
                  And the technologies that make it possible
                </h1>
                <button className=" px-5 py-3 bg-blue-600 text-white rounded-full">
                  Our Technologies
                </button>
              </div>
              <video
                className=" w-full h-full object-cover"
                autoPlay
                loop
                src={vid2}
              ></video>
            </div>
          </div>
          <div className="section">
            <div className=" bg-amber-500 h-screen relative">
              <div className=" h-full w-full absolute flex flex-col justify-center items-center ">
                <h1 className=" max-w-[600px] mx-10 font-medium text-4xl text-center text-white mb-3">
                  Our innovations give people new ways to connect
                </h1>
                <button className=" px-5 py-3 bg-blue-600 text-white rounded-full">
                  AI at Meta
                </button>
              </div>
              <video
                className=" w-full h-full object-cover"
                autoPlay
                loop
                src={vid3}
              ></video>
            </div>
          </div>
          <div className="section ">
            <div className=" bg-amber-500 h-screen relative">
              <div className=" h-full w-full absolute flex flex-col justify-center items-center ">
                <h1 className=" max-w-[600px] mx-10 font-medium text-4xl text-center text-white mb-3">
                  And we're committed to helping keep everyone safe and making a
                  positive impact
                </h1>
                <button className=" px-5 py-3 bg-blue-600 text-white rounded-full">
                  Our Actions
                </button>
              </div>
              <video
                className=" w-full h-full object-cover"
                autoPlay
                loop
                src={vid4}
              ></video>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default AboutHero;

import firstVideo from "../../../assets/metavideo.mp4";
import fullpageModule from "@fullpage/react-fullpage";
const ReactFullpage = fullpageModule.default ?? fullpageModule;

const Hero = () => {
  return (
    <ReactFullpage
      licenseKey={"gplv3-license"}
      scrollingSpeed={1000}
      //   paddingTop={"80px"}
      credits={{ enabled: true, label: "fullPage.js" }}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="bg-amber-500 h-screen relative">
              <div className="flex items-center justify-center h-full w-full absolute">
                <div className=" flex items-center justify-center h-full w-full absolute flex-col gap-4">
                  <h1 className="text-white mx-10 font-medium text-4xl">We're building the future of human connection.</h1>
                  <button className="px-5 py-3 rounded-full text-white bg-blue-600 ">AI at Meta</button>
                </div>
                <video
                  className="w-full"
                  autoPlay
                  loop
                  src={firstVideo}
                ></video>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="bg-green-500 h-screen"></div>
          </div>
          <div className="section">
            <div className="bg-blue-500 h-screen"></div>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default Hero;

// import ReactSlick from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Slider = ReactSlick.default ?? ReactSlick;

// const SimpleSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     swipeToSlide: true,
//   };

//   return (
//     <div className="bg-blue-400 h-100vh">
//       <Slider {...settings}>
//         <div className="bg-amber-400 h-screen w-full">
//           <h3>1</h3>
//         </div>

//         <div className="bg-amber-700 h-screen w-full hidden">
//           <h3>2</h3>
//         </div>

//         <div className="bg-black h-screen hidden">
//           <h3>3</h3>
//         </div>

//         <div className="bg-amber-300 h-screen">
//           <h3>4</h3>
//         </div>
//         <div className="bg-emerald-400 h-screen">
//           <h3>5</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default SimpleSlider;

import homeImage from "../../../assets/homeimage.webp";

const HomeHero = () => {
  return (
    <div className="section">
      <div className=" bg-amber-500 h-screen relative">
        <div className=" h-full w-full absolute flex flex-col justify-end items-center ">
          <h1 className=" max-w-[1200px] mx-10 font-medium text-6xl text-center text-white mb-3">
            Introducing Meta VR Glasses
          </h1>
          <p className=" max-w-[600px] mx-10 font-medium text-2xl text-center text-white mb-3">
            The weight is over</p>
          <button className=" px-5 py-3 bg-blue-600 text-white rounded-full">
            Learn more
          </button>
        </div>
        <div>
          <img src={homeImage} alt="Home" />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

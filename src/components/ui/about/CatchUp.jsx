import { CircleArrowRight } from "lucide-react";
import news1 from "../../../assets/news1.webp";
import news2 from "../../../assets/news2.webp";
import news3 from "../../../assets/news3.webp";

const CatchUp = () => {
  return (
    <section className=" p-40 max-md:p-0 max-md:py-20  flex justify-center">
      <main className=" max-w-360 mx-auto flex flex-col items-center  p-4 max-md:max-w-[90%] max-sm:max-w-full">
        <h1 className=" font-medium text-[2.5em] mb-4 text-center">
          Catch up on the latest news
        </h1>
        <button className=" px-5 py-2 rounded-full border border-gray-400 font-medium">
          See More At Newsroom
        </button>
        <div className=" flex gap-12 my-10 flex-wrap justify-center">
          <main className="  w-86.25 max-md:w-[90%] ">
            <div className=" bg-blue-950 w-86.25 h-63.75 rounded-3xl mb-6 max-md:w-full">
              <img
                className="  object-cover  max-md:w-full max-md:h-63.75 rounded-3xl"
                src={news1}
                alt=""
              />
            </div>
            <p className=" font-medium text-[17px] leading-tight mb-3">
              Introducing Meta One: A Subscription Service With More Features
              and AI to Create, Connect, and Stand Out
            </p>
            <div className=" flex gap-1.5">
              {" "}
              <CircleArrowRight />
              <span className=" font-semibold"> Read More</span>{" "}
            </div>
          </main>
          <main className="  w-86.25 max-md:w-[90%] ">
            <div className=" bg-blue-950 w-86.25 h-63.75 rounded-3xl mb-6 max-md:w-full">
              <img
                className="  object-cover  max-md:w-full max-md:h-63.75 rounded-3xl"
                src={news2}
                alt=""
              />
            </div>
            <p className=" font-medium text-[17px] leading-tight mb-3">
              Introducing Meta One: A Subscription Service With More Features
              and AI to Create, Connect, and Stand Out
            </p>
            <div className=" flex gap-1.5">
              {" "}
              <CircleArrowRight />
              <span className=" font-semibold"> Read More</span>{" "}
            </div>
          </main>
          <main className="  w-86.25 max-md:w-[90%] ">
            <div className=" bg-blue-950 w-86.25 h-63.75 rounded-3xl mb-6 max-md:w-full">
              <img
                className="  object-cover  max-md:w-full max-md:h-63.75 rounded-3xl"
                src={news3}
                alt=""
              />
            </div>
            <p className=" font-medium text-[17px] leading-tight mb-3">
              Introducing Meta One: A Subscription Service With More Features
              and AI to Create, Connect, and Stand Out
            </p>
            <div className=" flex gap-1.5">
              {" "}
              <CircleArrowRight />
              <span className=" font-semibold"> Read More</span>{" "}
            </div>
          </main>
          {/* <main className="  w-86.25">
            <div className=" bg-blue-950 w-86.25 h-63.75 rounded-3xl mb-6">
              <img className=" object-cover rounded-3xl" src={news1} alt="" />
            </div>
            <p className=" font-medium text-[17px] leading-tight mb-3">
              Introducing Meta One: A Subscription Service With More Features
              and AI to Create, Connect, and Stand Out
            </p>
            <div className=" flex gap-1.5">
              {" "}
              <CircleArrowRight />
              <span className=" font-semibold"> Read More</span>{" "}
            </div>
          </main>
          <main className="  w-86.25">
            <div className=" bg-blue-950 w-86.25 h-63.75 rounded-3xl mb-6">
              <img className=" object-cover rounded-3xl" src={news1} alt="" />
            </div>
            <p className=" font-medium text-[17px] leading-tight mb-3">
              Introducing Meta One: A Subscription Service With More Features
              and AI to Create, Connect, and Stand Out
            </p>
            <div className=" flex gap-1.5">
              {" "}
              <CircleArrowRight />
              <span className=" font-semibold"> Read More</span>{" "}
            </div>
          </main> */}
        </div>
      </main>
    </section>
  );
};

export default CatchUp;

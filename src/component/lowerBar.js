import { usePlaces } from "./PlacesContext";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import ReactSpeedometer from "react-d3-speedometer";

const LowerBar = () => {
  const { data, quality } = usePlaces();

  function formatTime(conerTime){
    const date = new Date(conerTime*1000)
    const hours = date.getUTCHours().toString().padStart(2,'0');
    const minutes = date.getUTCMinutes().toString().padStart(2,'0');
    return `${hours}:${minutes}`
    
  }
  return (
    <div className="ml-12 h-2/3 w-full ">
       {data && quality && (<>
       <h1 className="font-bold">Today's Highlights</h1>
     
        <div className="h-full mt-2 w-full">
          <section className="h-40 w-full flex">
            <div className=" ml-4 bg-white w-1/4 mt-2 rounded-xl">
              <p className="text-zinc-300 ml-2 mt-1">Air Pressure</p>
              <p className="ml-4 mt-2">
                <ReactSpeedometer
                  maxValue={109}
                  minValue={92}
                  value={data.main.pressure/10}
                  needleTransitionDuration={3000}
                  startColor="green"
                  segments={3}
                  maxSegmentLabels={2}
                  endColor="blue"
                  width={180}
                  height={180}
                />
              </p>
            </div>
            <div className=" ml-4 bg-white w-1/4 mt-2 rounded-xl">
              <p className="text-zinc-300 ml-2 mt-1">Wind Status</p>
              <section className="flex">
                <p className="text-5xl mt-3 ml-5">{data.wind.speed}</p>
                <p className="text-xl mt-8">Km/h</p>
              </section>
              <p className="mt-5 ml-5">🌪{data.wind.gust}</p>
            </div>
            <div className=" ml-4 bg-white w-1/4 mt-2 rounded-xl">
              <p className="text-zinc-300 ml-2 mt-1">Sunrise & Sunset</p>
              <section className="flex">
                <p className="mt-4 ml-4 text-yellow-300">
                  <WiSunrise size={50} />
                </p>
                <p className="mt-7">{formatTime(data.sys.sunrise)} Am</p>
              </section>
              <section className="flex">
                <p className="text-black ml-4">
                  <WiSunset size={50} />
                </p>
                <p className="mt-3">{formatTime(data.sys.sunset)} PM</p>
              </section>
            </div>
          </section>
          <section className="h-40 w-full flex">
            <div className=" ml-4 bg-white w-1/4 mt-2 rounded-xl">
              <p className="text-zinc-300 ml-2 mt-1">Humidity</p>
              <section className="flex">
                <p className="text-3xl mt-5 ml-3">{data.main.humidity}</p>
                <sup className="mt-6 ml-0.5 text-lg ">%</sup>
              </section>
              <p className="mt-3 ml-3">
                {data.main.humidity >= 40 && data.main.humidity <= 60
                  ? "Normal 🤙🏻"
                  : "Bad 👎🏻"}
              </p>
            </div>
            <div className=" ml-4 bg-white w-1/4 mt-2 rounded-xl">
              <p className="text-zinc-300 ml-2 mt-1">Visibility</p>
              <section className="flex">
                <p className="mt-5 ml-3 text-3xl">{data.visibility / 1000}</p>
                <p className="mt-7 ml-0.5 text-lg">km</p>
              </section>
              <p className="mt-4 ml-4">
                {data.visibility / 1000 > 7.5 ? "Good 😁" : "Bad 😢"}
              </p>
            </div>
            <div className=" ml-4 bg-white w-1/4 mt-2 rounded-xl">
              <p className="text-zinc-300 ml-2 mt-1">Air Quality</p>
              <p className="text-4xl mt-4 ml-3">{quality.main.aqi*100}</p>
              <p className="mt-4 ml-4">{(quality.main.aqi*100)<300 ? 'Healthy 👍🏻':'Unhealthy 👎🏻'}</p>
            </div>
          </section>
        </div>
        </>
      )}
    </div>  
  );
};

export default LowerBar;

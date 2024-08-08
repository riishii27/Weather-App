import { useState } from "react";

const UpperBar = () => {
  const [today, setToday] = useState(false);
  const [week, setWeek] = useState(true);

  const handleClick = () => {
    setToday(!today);
    setWeek(false); 
  };

  const handleWeekClick = () => {
    setWeek(!week);
    setToday(false); 
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 35);
  };

  const weekDummy = [
    {
      id: 1,
      day: "Sun",
      image: 'https://cdn-icons-png.freepik.com/512/11335/11335849.png',
      temperature: generateRandomNumber(),
    },
    {
      id: 2,
      day: "Mon",
      image: 'https://cdn-icons-png.flaticon.com/512/4735/4735030.png',
      temperature: generateRandomNumber(),
    },
    {
      id: 3,
      day: "Tue",
      image: 'https://th.bing.com/th/id/OIP.gTRFRCaBrEOA1nTuVxf8mQHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5',
      temperature: generateRandomNumber(),
    },
    {
      id: 4,
      day: "Wed",
      image: 'https://cdn-icons-png.flaticon.com/512/6805/6805163.png',
      temperature: generateRandomNumber(),
    },
    {
      id: 5,
      day: "Thu",
      image: 'https://cdn-icons-png.flaticon.com/512/6805/6805163.png',
      temperature: generateRandomNumber(),
    },
    {
      id: 6,
      day: "Fri",
      image: 'https://cdn-icons-png.flaticon.com/512/6805/6805163.png',
      temperature: generateRandomNumber(),
    },
    {
      id: 7,
      day: "Sat",
      image: 'https://cdn-icons-png.freepik.com/512/11335/11335849.png',
      temperature: generateRandomNumber(),
    },
  ];

  const dayDummy = [
    {
      id: 1,
      time: "7:00 Am",
      image: 'https://cdn-icons-png.freepik.com/512/11335/11335849.png',
      temperature: generateRandomNumber(),
    },
    {
      id: 2,
      time: "9:00 Am",
      image: 'https://cdn-icons-png.flaticon.com/512/4735/4735030.png',
      temperature: generateRandomNumber(),
    },
    {
      id: 3,
      time: "1:00 Pm",
      image: 'https://th.bing.com/th/id/OIP.gTRFRCaBrEOA1nTuVxf8mQHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5',
      temperature: generateRandomNumber(),
    },
    {
      id: 4,
      time: "3:00 Pm",
      image: 'https://cdn-icons-png.flaticon.com/512/6805/6805163.png',
      temperature: generateRandomNumber(),
    },
    {
      id: 5,
      time: "7:00 Pm",
      image: 'https://cdn-icons-png.flaticon.com/512/6805/6805163.png',
      temperature: generateRandomNumber(),
    },
    {
      id: 6,
      time: "10:00 Pm",
      image: 'https://cdn-icons-png.flaticon.com/512/6805/6805163.png',
      temperature: generateRandomNumber(),
    },
    {
      id: 7,
      time: "11.45 Pm",
      image: 'https://cdn-icons-png.freepik.com/512/11335/11335849.png',
      temperature: generateRandomNumber(),
    },
  ];

  return (
    <div className="h-1/3 w-full">
      <div className="ml-9 mt-2">
        <button onClick={handleClick} className={`px-6 ${today ? 'underline text-black':'text-zinc-400 '} `}>Today</button>
        <button onClick={handleWeekClick} className={` ${week ? 'underline text-black':'text-zinc-400 '} `}>Week</button>
      </div>
      <div>
        {today && !week && (
          <div className="flex justify-between mx-16 mt-8">
            {dayDummy.map((item) => (
              <div key={item.id} className="rounded-lg bg-white h-24 w-24 flex flex-col items-center justify-center">
                <p className="text-sm mt-1">{item.time}</p>
                <img src={item.image} className="h-1/2 mt-1" alt={`${item.day} temperature icon`} />
                <p className="text-sm mt-1">{item.temperature}°C</p>
              </div>
            ))}
          </div>
        )}
        {week && !today && (
          <div className="flex justify-between mx-16 mt-8">
            {weekDummy.map((item) => (
              <div key={item.id} className="rounded-lg bg-white h-24 w-24 flex flex-col items-center justify-center">
                <p className="text-sm mt-1">{item.day}</p>
                <img src={item.image} className="h-1/2 mt-1" alt={`${item.day} temperature icon`} />
                <p className="text-sm mt-1">{item.temperature}°C</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpperBar;

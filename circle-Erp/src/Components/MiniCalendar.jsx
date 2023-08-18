import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../assets/css/MiniCalendar.css";

export  const MiniCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div  className="w-auto mx-auto flex    justify-center   h-80 my-2">
      
       <div className="w-[70%]   p-4 rounded-md bg-white">
       <Calendar
        
        className={''}
          onChange={onChange}
          value={value}
          prevLabel={<MdChevronLeft className="ml-1 h-6 w-6 " />}
          nextLabel={<MdChevronRight className="ml-1 h-6 w-6 " />}
          view={"month"}
        />
       </div>
      
    </div>
  );
};

export default MiniCalendar;

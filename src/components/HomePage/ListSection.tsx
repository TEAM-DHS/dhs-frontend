import React from "react";
import EventItem from "../_common/EventItem";

import { eventData } from "../../utils/data/eventData";

const ListSection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[calc(100%-100px)] flex flex-wrap gap-[30px] mobile:w-[calc(100%-40px)]">
        {eventData.map(item => (
          <EventItem {...item} key={item.programId} />
        ))}
      </div>
    </div>
  );
};

export default ListSection;

import React from "react";
import Timeline from "../components/Blocks/home/TimeLine";

const TimeLine = () => {
  return (
    <div
      id="timeline"
      className=" pt-20 pb-20 bg-[#150e29] border-b border-slate-800"
    >
      <div className="w-[90%] m-auto ">
        <h1 className="text-3xl tracking-tighter leading-1 text-white text-center font-extrabold max-md:text-center max-md:text-2xl">
          Timeline
        </h1>
        <p className="text-center py-4 text-white text-sm w-[28%] m-auto max-md:w-[90%] max-md:text-xs">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>

        {/* timeline */}
        <Timeline
          number="1"
          date="November 18, 2023"
          desc="The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register"
          first_order="text-end max-md:text-start"
          last_order="justify-end"
          title="Hackathon Announcement"
        />
        <Timeline
          number="2"
          date="November 18, 2023"
          desc="Interested teams can now show their interest in the
getlinked tech hackathon 1.0 2023 by proceeding to register"
          first_order="order-1 items-start justify-end "
          last_order="-order-2 items-end justify-end "
          title="Teams Registration begins"
          descAlign="text-start"
        />

        <Timeline
          number="3"
          date="November 18, 2023"
          desc="Interested Participants are no longer Allowed to
register"
          first_order="justify-end text-end max-md:text-start"
          last_order="justify-end"
          title="Teams Registration ends"
        />
        <Timeline
          number="4"
          date="November 18, 2023"
          desc="All teams whom idea has been accepted into getlinked tech
hackathon 1.0 2023 are formally announced"
          first_order="order-1 items-start justify-end "
          last_order="-order-2 items-end justify-end "
          title="Announcement of the accepted teams
and ideas"
          descAlign="text-start"
          titleAlign="text-start"
        />
        <Timeline
          number="5"
          date="November 18, 2023"
          desc="Accepted teams can now proceed to build their
ground breaking skill driven solutions"
          first_order="text-end max-md:text-start"
          last_order="justify-end"
          title="Getlinked Hackathon 1.0 Offically Begins"
        />
        <Timeline
          number="6"
          date="November 18, 2023"
          desc="Teams get the opportunity to pitch their projects to judges.
The winner of the hackathon will also be announced on
this day"
          first_order="order-1 items-start justify-end "
          last_order="-order-2 items-end justify-end "
          title="Demo Day"
          descAlign="text-start"
        />
      </div>
    </div>
  );
};

export default TimeLine;

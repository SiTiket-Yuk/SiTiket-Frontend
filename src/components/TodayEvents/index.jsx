import Image from "next/image";
import Link from "next/link";
import OvFestival from "../../../public/imageEvents/OvFestival.png";
import OvWorkshop from "../../../public/imageEvents/OvWorkshop.png";
import OvWebinar from "../../../public/imageEvents/OvWebinar.png";
import OvBisnis from "../../../public/imageEvents/OvBisnis.png";
import OvOlahraga from "../../../public/imageEvents/OvOlahraga.png";

const EventItem = ({ img, name }) => {
  return (
    <div
      className="flex flex-col items-center justify-center
    hover:text-blue hover:cursor-pointer"
    >
      <Image className="object-cover w-56 md:h-auto" src={img} alt={name} />
      <h1 className="font-medium py-2 text-xl">{name}</h1>
    </div>
  );
};

const TodayEvents = () => {
  return (
    <div className="flex flex-wrap w-1/2 justify-center lg:gap-8 sm:gap-5 pb-20">
      <EventItem img={OvFestival} name={"Festival"} />
      <EventItem img={OvWorkshop} name={"Workshop"} />
      <EventItem img={OvWebinar} name={"Webinar"} />
      <EventItem img={OvBisnis} name={"Bisnis"} />
      <EventItem img={OvOlahraga} name={"Olahara"} />
    </div>
  );
};

export default TodayEvents;

import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { PiTicketLight } from "react-icons/pi";

import { Card, CardBody, CardFooter, Divider, Avatar } from "@nextui-org/react";

const CardDetail = ({
  eventName,
  date,
  time,
  quantity,
  place,
  organizerLogo,
  organizerName,
}) => {
  return (
    <Card className="lg:w-[360px] md:w-[150px] p-4">
      <CardBody>
        <div>
          <p className="font-bold text-base pt-2 pb-2">{eventName}</p>
          <div className="flex flex-row justify-items-center mt-2 mb-2">
            <CiCalendar size={25} />
            <p className="text-sm self-center ml-4">{date}</p>
          </div>
          <div className="flex flex-row justify-items-center mt-2 mb-2">
            <CiClock2 size={25} />
            <p className="text-sm self-center ml-4">{time}</p>
          </div>
          <div className="flex flex-row justify-items-center mt-2 mb-2">
            <CiLocationOn size={25} />
            <p className="text-sm self-center ml-4">{place}</p>
          </div>
          <div className="flex flex-row justify-items-center mt-2 mb-2">
            <PiTicketLight size={25} />
            <p className="text-sm self-center ml-4">{quantity}</p>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex gap-4">
        <Avatar radius="full" size="sm" src={organizerLogo} />
        <p className="text-sm">{organizerName}</p>
      </CardFooter>
    </Card>
  );
};

export default CardDetail;

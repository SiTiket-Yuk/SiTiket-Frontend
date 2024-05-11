"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import EventDescription from "@/components/EventDescription";
import Breadcrumbs from "@/components/BreadcrumbssNav";
import CategoryBar from "@/components/CategoryBar";
import CardDetail from "@/components/EventCardDetail";
import CardAddTix from "@/components/EventCardAddTix";
import CardPrintETicket from "@/components/EventCardPrintEticket";

const STRING_TYPE = typeof "STRING";

const EventDetail = ({ fetchedData }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userTicketOwned, setUserTicketOwned] = useState(0);
  const [paidStatus, setPaidStatus] = useState(false);
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    if (fetchedData.isRegistered === true) {
      setIsRegistered(true);
    }

    if (fetchedData.ticketOwned !== 0) {
      setUserTicketOwned(fetchedData.ticketOwned);
    }

    if (fetchedData.status === "Lunas") {
      setPaidStatus(true);
    }

    setEventData(fetchedData.eventData);
  }, [fetchedData]);

  return (
    <>
      {Object.keys(eventData).length !== 0 ? (
        <div className="container mx-auto max-w-[1100px]">
          <Breadcrumbs
            link1={"/landing-page"}
            link2={"#"}
            link3={"#"}
            pageName1={"Home"}
            pageName2={
              eventData.category
                ? typeof eventData.category === STRING_TYPE
                  ? eventData.category
                  : eventData.category[0]
                : ""
            }
            pageName3={eventData.name}
          />
          <div className="flex flex-column gap-10 mb-32">
            <div className="basis-3/4">
              <div>
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  src={eventData.image}
                  alt={eventData.name}
                />
              </div>
              <EventDescription eventDesc={eventData.desc} />
              <CategoryBar categories={eventData.category}></CategoryBar>
            </div>
            <div className="ml-8 flex flex-col gap-8 basis-1/4">
              <CardDetail
                eventName={eventData.name}
                date={eventData.date}
                time={eventData.time}
                quantity={eventData.ticketleft}
                place={eventData.place}
                organizerLogo={eventData.logo}
                organizerName={eventData.organizer}
              />

              {/* jika tiket blm dimiliki user, tampilkan section beli tiket */}

              {!isRegistered && (
                <CardAddTix
                  eventId={eventData.eventId}
                  cost={eventData.price}
                  quantityTicket={eventData.ticketleft}
                  date={eventData.date}
                />
              )}

              {/*jika tiket sudah dimiliki user, tampilkan section cetak tiket elektronik*/}
              {isRegistered && (
                <CardPrintETicket
                  quantity={userTicketOwned}
                  status={paidStatus}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex justify-center items-center h-[870px]">
          <Spinner className="self-auto" size="lg" />
        </div>
      )}
    </>
  );
};

export default EventDetail;

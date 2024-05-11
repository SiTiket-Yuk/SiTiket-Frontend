"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "@nextui-org/react";
import EventCardDiscovery from "@/components/EventCardDiscovery";
import SkeletonCard from "./SkeletonCard";

const SITIKET_API = process.env.NEXT_PUBLIC_SITIKET_API;
const MAX_EVENT = 9;

const DiscoverySection = () => {
  const [loadedEvents, setLoadedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    start: 0,
    end: 9,
  });

  const handlePagination = (page) => {
    setPagination({
      page,
      start: (page - 1) * MAX_EVENT,
      end: page * MAX_EVENT,
    });
  };

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await axios.get(`${SITIKET_API}/api/event/events`);
      if (response.status === 200) {
        const dataResponse = response.data.events;
        setLoadedEvents(dataResponse);
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, []);

  return (
    <>
      <p className="text-2xl mb-4 font-bold">Semua Event</p>
      <div className="grid grid-cols-3 gap-4">
        {isLoading
          ? [...Array(9)].map((_, index) => <SkeletonCard key={index} />)
          : loadedEvents
              .slice(pagination.start, pagination.end)
              .map((event, index) => (
                <EventCardDiscovery
                  key={index}
                  id={event.eventId}
                  image={event.image}
                  name={event.name}
                  date={event.date}
                  cost={event.price}
                  organizerLogo={event.logo}
                  organizerName={event.organizer}
                />
              ))}
      </div>
      <Pagination
        showControls
        total={loadedEvents.length / 9 + 1}
        page={pagination.page}
        color="secondary"
        size="lg"
        className="mt-16 mb-16 flex justify-center"
        onChange={handlePagination}
      />
    </>
  );
};

export default DiscoverySection;

import EventCardDiscovery from "@/components/EventCardDiscovery";
import { eventDummyData } from "@/data/eventsJSON";

const DiscoverySection = ({
}) => {
	return (
        <div>
            <p className="text-2xl mb-4 font-bold">Semua Event</p>
            <div className="grid grid-cols-3 gap-4">
                {eventDummyData.map((event) => (
                    <EventCardDiscovery
                        key={event.name}
                        id={event.id}
                        image={event.post.src}
                        name={event.name}
                        date={event.date}
                        cost={event.cost}
                        organizerLogo={event.organizerLogo.src}
                        organizerName={event.organizerName}
                    />
                ))}
            </div>
        </div>

	);
};

export default DiscoverySection;

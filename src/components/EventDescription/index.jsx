const EventDescription = ({
	eventDesc,
}) => {
	return (
        <div className="container mx-auto mt-10">
            <h3 className="font-bold text-2xl mb-4">Tentang Event</h3>
            <p className="text-lg">{eventDesc}</p>
        </div>
	);
};

export default EventDescription;
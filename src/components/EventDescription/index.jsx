const EventDescription = ({ eventDesc }) => {
	return (
		<div className="w-full mx-auto mt-10">
			<h3 className="font-bold text-xl mb-4">Tentang Event</h3>
			<p className="text-sm whitespace-pre-wrap">{eventDesc}</p>
		</div>
	);
};

export default EventDescription;

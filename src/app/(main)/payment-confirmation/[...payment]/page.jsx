import CardPaymentDetail from "@/components/EventCardPaymentDetail";
import CardPaymentConfirmation from "@/components/EventCardPaymentConfirmation";
import { eventDummyData } from "@/data/eventsJSON";

const PaymentDetail = ({ params }) => {
	const {
		payment: [eventId, cost, quantity],
	} = params;
	const eventData = eventDummyData.filter((event) => event.id == eventId)[0];

	return (
		<div className="container mx-auto max-w-[1100px] mt-16">
			<p className="text-xl font-bold mt-16 mb-10">Detail Pemesanan</p>
			<div className="flex flex-row gap-8 mb-32">
				<div className="basis-3/4">
					<CardPaymentDetail
						eventImg={eventData.post}
						eventName={eventData.name}
						date={eventData.date}
						time={eventData.time}
						place={eventData.place}
						organizerLogo={eventData.organizerLogo}
						organizerName={eventData.organizerName}
					/>
				</div>
				<div className="basis-1/4 ml-8 flex flex-col gap-8">
					<CardPaymentConfirmation totalTix={quantity} tixPrice={cost} />
				</div>
			</div>
		</div>
	);
};

export default PaymentDetail;

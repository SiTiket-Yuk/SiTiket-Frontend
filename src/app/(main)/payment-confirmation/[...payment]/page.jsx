import CardPaymentDetail from "@/components/EventCardPaymentDetail";
import CardPaymentConfirmation from "@/components/EventCardPaymentConfirmation";
import axios from "axios";
import { getSession } from "@/app/lib/session";

const SITIKET_API = process.env.NEXT_PUBLIC_SITIKET_API;

const PaymentDetail = async ({ params }) => {
	const {
		payment: [eventId, cost, quantity],
	} = params;

	const session = await getSession();
	const uid = session.userSession.uid;

	const fetchedData = {};

	const response = await axios.get(`${SITIKET_API}/api/event/${eventId}`);

	if (response.status === 200) {
		const dataResponse = response.data.event;
		const eventAsset = await axios.get(
			`${SITIKET_API}/api/image/asset/${eventId}`
		);

		dataResponse["image"] = eventAsset.data.asset[0];
		dataResponse["logo"] = eventAsset.data.asset[1];
		fetchedData.eventData = dataResponse;

		fetchedData.eventData.eventId = eventId;
	}

	return (
		<div className="container mx-auto max-w-[1100px] mt-16 mb-[11.05rem]">
			<p className="text-xl font-bold mt-16 mb-10">Detail Pemesanan</p>
			<div className="flex flex-row gap-8 mb-32">
				<div className="basis-3/4">
					<CardPaymentDetail
						eventImg={fetchedData.eventData.image}
						eventName={fetchedData.eventData.name}
						date={fetchedData.eventData.date}
						time={fetchedData.eventData.time}
						place={fetchedData.eventData.place}
						organizerLogo={fetchedData.eventData.logo}
						organizerName={fetchedData.eventData.organizer}
					/>
				</div>
				<div className="basis-1/4 ml-8 flex flex-col gap-8">
					<CardPaymentConfirmation
						uid={uid}
						eventId={fetchedData.eventData.eventId}
						totalTix={quantity}
						tixPrice={cost}
					/>
				</div>
			</div>
		</div>
	);
};

export default PaymentDetail;

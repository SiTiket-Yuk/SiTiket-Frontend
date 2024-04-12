import LogoBeekind from "../../../../public/logo/LogoBeekind.png";
import CardPaymentDetail from "@/components/EventCardPaymentDetail";
import EventCardImg from "../../../../public/imageEvents/EventCardImg.png";
import CardPaymentConfirmation from "@/components/EventCardPaymentConfirmation";

const EventDetail = () => {
	return (
		<div className="container mx-auto mt-16 mb-16">
			<p className="text-3xl font-bold mt-16 mb-10">Detail Pemesanan</p>
			<div class="flex flex-row gap-10 mb-32">
				<div class="basis-3/4">
				<CardPaymentDetail
						eventImg={EventCardImg}
						eventName={"Mengenal Dunia Copy Writing"}
						date={"04 Agustus 2024"}
						time={"20.00 PM"}
						place={"Zoom Meeting"}
						organizerLogo={LogoBeekind}
						organizerName={"Lorem"}
				/>
				</div>
				<div class="basis-1/4 ml-8 flex flex-col gap-16">
					<CardPaymentConfirmation
						eventName={"Mengenal Dunia Copy Writing"}
						date={"04 Agustus 2024"}
						time={"20.00 PM"}
						quantity={"100"}
						place={"Zoom Meeting"}
						organizerLogo={LogoBeekind}
						organizerName={"Lorem"}
					/>
				</div>
			</div>
		</div>
	);
};

export default EventDetail;

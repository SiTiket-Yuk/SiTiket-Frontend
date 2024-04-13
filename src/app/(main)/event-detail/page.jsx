'use client'
import Image from "next/image";
import React, { useState } from "react"
import EventDescription from "@/components/EventDescription";
import Breadcrumbs from "@/components/BreadcrumbssNav";
import CategoryBar from "@/components/CategoryBar";
import CardDetail from "@/components/EventCardDetail";
import LogoBeekind from "../../../../public/logo/LogoBeekind.png";
import CardAddTix from "@/components/EventCardAddTix";
import CardPrintETicket from "@/components/EventCardPrintEticket";
const EventDetail = () => {

	// atur state tiket = sudah dimiliki/belum
	const [ticketOwned, setticketOwned] = useState(false);
	const handleticketOwned = () => {
	   setticketOwned(true);
	};
	return (
		<div className="container mx-auto max-w-[1100px]">
			<Breadcrumbs
				link1={"#"}
				link2={"#"}
				link3={"#"}
				pageName1={"Home"}
				pageName2={"Webinar"}
				pageName3={"Mengenal Dunia Copy Writing"}
			/>
			<div class="flex flex-column gap-10 mb-32">
				<div class="basis-3/4">
					<div>
						<Image
							width="0"
							height="0"
							sizes="100vw"
							className="w-full h-auto"
							src={"/imageEventsPoster/PostColdiac.png"}
							alt={"Event Poster"}
						/>
					</div>

					<EventDescription
						eventDesc={`Webinar Impaktif bertujuan untuk mengajak kamu mengembangkan keahlianmu dalam berbagai bidang karir yang kamu memiliki passion didalamnya. 
						Yang mana setiap keahlian yang telah kamu miliki dan telah kamu asah akan menjadi hal yang paling berguna untuk kamu mendapatkan karir yang sukses dalam setiap pekerjaan ataupun dalam menjalankan sebuah bisnis. Yuk, berkembang bersama Impaktif.\n
						Membahas Tentang : \n
						- Mengenal dunia copywriting dan proses menulis copy yang baik\n
						- Memahami profesi copywriter, peran, dan tanggung jawabnya\n
						- Mengeskplorasi prospek kerja dan tips menjadi copywriter`}
					/>

					<CategoryBar
						link1={"#"} category1={"Webinar"}
						link2={"#"} category2={"Bisnis"}
					>
					</CategoryBar>
				</div>
				<div class="ml-8 flex flex-col gap-8 basis-1/4">
					<CardDetail
						eventName={"Mengenal Dunia Copy Writing"}
						date={"04 Agustus 2024"}
						time={"20.00 PM"}
						quantity={"100"}
						place={"Zoom Meeting"}
						organizerLogo={LogoBeekind}
						organizerName={"Lorem"}
					/>

					{/* jika tiket blm dimiliki user, tampilkan section beli tiket */}
					{!ticketOwned && (
						<CardAddTix
						eventName={"Mengenal Dunia Copy Writing"}
						cost={"Rp. 30.000"}
						quantityTix={"100"}
						/>
					)} 

		
					{/* jika tiket sudah dimiliki user, tampilkan section cetak tiket elektronik */}
					{ticketOwned &&(
						<CardPrintETicket quantity={"1"} />
					)} 
				</div>
			</div>
		</div>
	);
};

export default EventDetail;

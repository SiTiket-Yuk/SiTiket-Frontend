"use client";
import Image from "next/image";
import React from "react";
import ImageHeroAbout from "../../../../public/images/ImageHeroAbout.png";

const About = () => {
	return (
		<div className="flex flex-col">
			<div className="relative w-full">
				<Image src={ImageHeroAbout} alt="an image" className="bg-[#101010]" />
				<div className="absolute inset-0 flex justify-center items-center">
					<h2 className="text-white text-3xl font-bold">TENTANG KAMI</h2>
				</div>
			</div>
			<div className="container mx-auto min-w-[4rem] font-medium text-xl mt-16 mb-[13%] leading-8">
				siTiket adalah platform Ticketing Management Service (TMS) yang
				mendukung seluruh penyelenggara event mulai dari distribusi & manajemen
				tiket. siTiket menawarkan akses mudah dan cepat ke berbagai acara, mulai
				dari konser musik, pertunjukan teater, hingga acara olahraga dan seminar
				inspiratif. <br /> <br />
				Dengan antarmuka yang ramah pengguna dan sistem yang efisien, siTiket
				memastikan setiap langkah pembelian tiket anda berlangsung dengan lancar
				dan mudah. <br />
				<br />
				Sudah ada ratusan event yang bekerja sama dengan kami dan semuanya
				tersebar di seluruh Indonesia. Kini, saatnya perkenalkan event Anda pada
				dunia untuk membawa penonton yang lebih banyak lagi bersama kami!
			</div>
		</div>
	);
};

export default About;

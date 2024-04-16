"use client"
import aboutImg from "../../../../public/images/aboutImg.png";
import React from "react";


const About = () => {
	return (
		<div className="container mx-auto flex flex-col">
			<div className="relative w-full">
				<img
					loading="lazy"
					srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/78c0db3947d870186bc642996b2ee75766fde450e88ae8112dc4c509e92b15a1?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c0db3947d870186bc642996b2ee75766fde450e88ae8112dc4c509e92b15a1?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c0db3947d870186bc642996b2ee75766fde450e88ae8112dc4c509e92b15a1?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c0db3947d870186bc642996b2ee75766fde450e88ae8112dc4c509e92b15a1?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c0db3947d870186bc642996b2ee75766fde450e88ae8112dc4c509e92b15a1?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c0db3947d870186bc642996b2ee75766fde450e88ae8112dc4c509e92b15a1?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c0db3947d870186bc642996b2ee75766fde450e88ae8112dc4c509e92b15a1?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c0db3947d870186bc642996b2ee75766fde450e88ae8112dc4c509e92b15a1?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&"
					className="w-full"
				/>
				{/* Menambahkan teks di atas gambar dengan posisi absolut */}
				<div className="absolute inset-0 flex justify-center items-center">
					<h2 className="text-white text-3xl font-bold">TENTANG KAMI</h2>
				</div>
			</div>
			<div className="relative h-[479px] w-full flex justify-center mx-auto mt-[60px]">
				<div className="w-[1104px] h-[224px]">
					siTiket adalah platform Ticketing Management Service (TMS) yang mendukung seluruh penyelenggara event mulai dari distribusi & manajemen tiket. siTiket menawarkan akses mudah dan cepat ke berbagai acara, mulai dari konser musik, pertunjukan teater, hingga acara olahraga dan seminar inspiratif. <br />
					Dengan antarmuka yang ramah pengguna dan sistem yang efisien, siTiket memastikan setiap langkah  pembelian tiket anda berlangsung dengan lancar dan mudah. <br /><br />

					Sudah ada ratusan event yang bekerja sama dengan kami dan semuanya tersebar di seluruh Indonesia. Kini, saatnya perkenalkan event Anda pada dunia untuk membawa penonton yang lebih banyak lagi bersama kami!
				</div>
			</div>
		</div>
	);
};

export default About;

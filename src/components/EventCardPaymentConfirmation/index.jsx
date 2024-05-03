"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
	Card,
	CardBody,
	CardFooter,
	Divider,
	Button,
	useDisclosure,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "@nextui-org/react";
import axios from "axios";
import Modal2Buttons from "@/components/Modal2Buttons";
import InformationMsg from "../InformationMessage";
import SuccessBuy from "../../../public/images/SuccessBuy.svg";

const SITIKET_API = process.env.NEXT_PUBLIC_SITIKET_API;

const ModalBuySuccess = ({ isOpen, onOpenChange, eventId }) => {
	const router = useRouter();

	const ToEventDetail = () => {
		router.push(`/event-detail/${eventId}`);
		router.refresh();
	};

	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent className="p-8 text-sm">
				<ModalHeader className="flex flex-col text-center font-bold text-xl">
					Pembayaran berhasil!
				</ModalHeader>
				<ModalBody className="flex justify-center items-center">
					<Image alt={"Success Buy"} src={SuccessBuy} />
				</ModalBody>
				<ModalFooter className="flex flex-row justify-center">
					<Button radius="full" color="secondary" onPress={ToEventDetail}>
						Lihat Tiket
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

const NominalFactory = ({ label, nominal, type }) => {
	return (
		<div className="flex flex-row justify-between">
			<p className="text-sm pt-2 pb-2">{label}</p>
			{type === "x" ? (
				<p className="text-sm pt-2 pb-2">x{nominal.toLocaleString("id-ID")}</p>
			) : (
				<p className="text-sm pt-2 pb-2">
					Rp. {Number(nominal).toLocaleString("id-ID")}
				</p>
			)}
		</div>
	);
};

const CardPaymentConfirmation = ({ uid, eventId, totalTix, tixPrice }) => {
	const modalConfirm = useDisclosure();
	const modalBuySuccess = useDisclosure();

	// atur status paymentConfirmation, paymentReminder
	const [paymentConfirmation, setPaymentConfirmation] = useState(false);
	const [paymentReminder, setPaymentReminder] = useState(false);
	const [paymentDeadline, setPaymentDeadline] = useState("");
	const [isRegistered, setIsRegistered] = useState(false);

	const handleConfirmPayment = async () => {
		const today = new Date(); // Get the current date

		// Add 7 days to the current date in milliseconds
		const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000;
		const futureDate = new Date(today.getTime() + sevenDaysInMilliseconds);

		// Function to add leading zeros for month and day
		const pad = (number) => String(number).padStart(2, "0");

		// Format the date in YYYY-MM-DD
		const year = futureDate.getFullYear();
		const month = pad(futureDate.getMonth() + 1); // Month is zero-indexed
		const day = pad(futureDate.getDate());

		const formattedDate = `${year}-${month}-${day}`;

		try {
			const response = await axios.post(
				`${SITIKET_API}/api/event/registerUser`,
				{
					uid: uid,
					id: eventId,
					ticket: totalTix,
					timelimit: formattedDate,
				}
			);

			if (response.status === 200) {
				//setPaymentConfirmation(true);
				//setPaymentReminder(true);
				modalBuySuccess.onOpen();
			}
		} catch (e) {
			console.log(e);
		}
	};

	const handleCloseInformationMsg = () => {
		//setPaymentConfirmation(false);
	};

	const platformFee = 0;
	const totalPrice = tixPrice * totalTix;
	const totalPayment = totalPrice + platformFee;

	useEffect(() => {
		const fetchPaymentStatus = async () => {
			try {
				const response = await axios.get(`${SITIKET_API}/api/user/${uid}`);

				if (response.status === 200) {
					const userEvents = response.data.user.registeredevents;

					// User doesn't have any registerd events
					if (userEvents === undefined || userEvents === null) {
						setIsRegistered(false);
					}

					// Check every registered events that are same as eventId
					for (const event in userEvents) {
						if (eventId === event) {
							setIsRegistered(true);
							// if user haven't paid yes show the remind the deadline
							if (userEvents[event].status !== "lunas") {
								setPaymentDeadline(userEvents[event].timelimit);
								setPaymentReminder(true);
								break;
							}
						}
					}
				} else {
					console.log("Somethings wrong. no cares");
				}
			} catch (e) {
				console.log(e);
			}
		};

		fetchPaymentStatus();
	});

	return (
		<>
			<Card className="lg:w-[400px] md:w-[300px] p-4">
				<CardBody>
					<div>
						<p className="font-bold text-base pt-2 pb-2">Detail Harga</p>
						<NominalFactory
							label={"Jumlah Tiket"}
							nominal={totalTix}
							type={"x"}
						/>
						<NominalFactory
							label={"Harga Tiket"}
							nominal={tixPrice}
							type={"Rp."}
						/>
						<NominalFactory
							label={"Total Harga Tiket"}
							nominal={totalPrice}
							type={"Rp."}
						/>
						<NominalFactory
							label={"Biaya Platform"}
							nominal={platformFee}
							type={"Rp."}
						/>
						<Divider className="mt-4 mb-4" />
						<NominalFactory
							label={"Total Bayar"}
							nominal={totalPayment}
							type={"Rp."}
						/>

						{/* jika status payment reminder == true (waktu pembayaran masih berlaku), tampilkan ini */}
						{/*paymentReminder && (
							<p className="text-sm pt-2 text-center text-neutral-300">
								Selesaikan pembayaran sebelum {paymentDeadline}{" "}
							</p>
						)*/}
					</div>
				</CardBody>
				<CardFooter>
					{/* jika status payment reminder == false (waktu pembayaran false/expired), tampilkan ini */}
					{!paymentReminder && (
						<Button
							radius="full"
							color="secondary"
							className="font-semibold text-sm p-6 mx-auto"
							fullWidth
							onPress={modalConfirm.onOpen}
							style={{ display: paymentReminder ? "none" : "flex" }}
						>
							Bayar Tiket
						</Button>
					)}

					<Modal2Buttons
						message={"Apakah Anda yakin ingin membeli tiket ini?"}
						isOpen={modalConfirm.isOpen}
						leftButton={"Ya"}
						rightButton={"Tidak"}
						onOpenChange={modalConfirm.onOpenChange}
						onYesClick={handleConfirmPayment}
					/>

					<ModalBuySuccess
						isOpen={modalBuySuccess.isOpen}
						onOpenChange={modalBuySuccess.onOpenChange}
						eventId={eventId}
					/>
				</CardFooter>
			</Card>

			{/* jika paymentconfirmation == true, tampilkan information message*/}
			{/*paymentConfirmation && (
				<InformationMsg
					titleMsg={"Pemesanan tiket berhasil diproses!"}
					bodyMsg={
						"Periksa email Anda untuk mendapatkan kode dan tata cara pembayaran"
					}
					onClose={handleCloseInformationMsg}
				/>
			)*/}
		</>
	);
};

export default CardPaymentConfirmation;

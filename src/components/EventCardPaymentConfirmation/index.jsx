'use client'
import React, { useState } from "react"
import { Card, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";
import Modal2Buttons from "@/components/Modal2Buttons";
import { useDisclosure } from "@nextui-org/react";
import InformationMsg from "../InformationMessage";

const CardPaymentConfirmation = ({ 
  totalTix,
  tixPrice,
  paymentDeadline
}) => {


	const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // atur status paymentconfirmation, paymentReminder
  const [paymentConfirmation, setPaymentConfirmation] = useState(false);
  const [paymentReminder, setPaymentReminder] = useState(false);

  const handleConfirmPayment = () => {
    setPaymentConfirmation(true);
    setPaymentReminder(true); 
  };

  const handleCloseInformationMsg = () => {
    setPaymentConfirmation(false); 
  };
  const platformFee = 0;
  const totalPrice = tixPrice * totalTix;
  const totalPayment = totalPrice+platformFee;
  

  return (
    <>
      <Card className="lg:w-[400px] md:w-[300px] p-4">
        <CardBody>
          <div> 
            <p className="font-bold text-base pt-2 pb-2">Detail Harga</p>
            <div className="flex flex-row justify-between ">
              <p className="text-sm pt-2 pb-2">Jumlah Tiket</p>
              <p className="text-sm pt-2 pb-2">x{totalTix}</p>
            </div>
            <div className="flex flex-row justify-between ">
              <p className="text-sm pt-2 pb-2">Harga Tiket</p>
              <p className="text-sm pt-2 pb-2">Rp. {tixPrice}</p>
            </div>
            <div className="flex flex-row justify-between ">
              <p className="text-sm pt-2 pb-2">Total Harga Tiket</p>
              <p className="text-sm pt-2 pb-2">Rp. {totalPrice}</p>
            </div>
            <div className="flex flex-row justify-between ">
              <p className="text-sm pt-2 pb-2">Biaya Platform </p>
              <p className="text-sm pt-2 pb-2">Rp. {platformFee}</p>
            </div>
            <Divider className="mt-4 mb-4"/>
            <div className="flex flex-row justify-between ">         
              <p className="font-bold  text-sm pt-2 pb-4">Total Bayar </p>
              <p className="font-bold  text-sm pt-2 pb-2">Rp. {totalPayment}</p>
            </div>

            {/* jika status payment reminder == true (waktu pembayaran masih berlaku), tampilkan ini */}
            {paymentReminder && (
                <p className="text-sm pt-2 text-center text-neutral-300">Selesaikan pembayaran sebelum {paymentDeadline} </p>
             )}           
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
            onPress={onOpen}
            style={{ display: paymentReminder ? 'none' : 'flex' }}
          >
              Bayar Tiket
            </Button>
          )}  

		  
          <Modal2Buttons
            message={"Apakah Anda yakin ingin membeli tiket ini?"}
            isOpen={isOpen}
            leftButton={"Ya"}
            rightButton={"Tidak"}
            onOpenChange={onOpenChange}
            onYesClick={handleConfirmPayment} 
          />
        </CardFooter>
      </Card>
      
      {/* jika paymentconfirmation == true, tampilkan information message*/}
      {paymentConfirmation && (
          <InformationMsg
            titleMsg={"Pemesanan tiket berhasil diproses!"}
            bodyMsg={"Periksa email Anda untuk mendapatkan kode dan tata cara pembayaran"}
            onClose={handleCloseInformationMsg}
          />          
      )}  




    </>
  );
};

export default CardPaymentConfirmation;
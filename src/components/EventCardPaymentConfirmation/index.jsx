'use client'
import React, { useState } from "react"
import { Card, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";
import Modal2Buttons from "@/components/Modal2Buttons";
import { useDisclosure } from "@nextui-org/react";
import InformationMsg from "../InformationMessage";

const CardPaymentConfirmation = ({ 
  totalTix,
  tixPrice,
  totalPrice,
  platformFee,
  totalPayment,
  paymentDeadline
}) => {

  // atur status paymentconfirmation
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [paymentConfirmation, setPaymentConfirmation] = useState(false);
  const handleConfirmPayment = () => {
    setPaymentConfirmation(true);
  };
  return (
    <>
      <Card className="lg:w-[450px] md:w-[300px] p-7">
        <CardBody>
          <div> 
            <p className="font-bold text-xl pt-2 pb-2">Detail Harga</p>
            <div className="flex flex-row justify-between ">
              <p className="text-xl pt-2 pb-2">Jumlah Tiket</p>
              <p className="text-xl pt-2 pb-2">x{totalTix}</p>
            </div>
            <div className="flex flex-row justify-between ">
              <p className="text-xl pt-2 pb-2">Harga Tiket</p>
              <p className="text-xl pt-2 pb-2">Rp. {tixPrice}</p>
            </div>
            <div className="flex flex-row justify-between ">
              <p className="text-xl pt-2 pb-2">Total Harga Tiket</p>
              <p className="text-xl pt-2 pb-2">Rp. {totalPrice}</p>
            </div>
            <div className="flex flex-row justify-between ">
              <p className="text-xl pt-2 pb-2">Biaya Platform </p>
              <p className="text-xl pt-2 pb-2">Rp. {platformFee}</p>
            </div>
            <Divider className="mt-4 mb-4"/>
            <div className="flex flex-row justify-between ">         
              <p className="font-bold  text-xl pt-2 pb-4">Total Bayar </p>
              <p className="font-bold  text-xl pt-2 pb-2">Rp. {totalPayment}</p>
            </div>
            {paymentConfirmation && (
                <p className="text-large pt-2 text-center text-neutral-300">Selesaikan pembayaran sebelum {paymentDeadline} </p>
             )}          
          </div>
        </CardBody>
        <CardFooter className="">
          <Button
            radius="full"
            color="secondary"
            className="font-semibold text-base p-7 mx-auto"
            fullWidth
            onPress={onOpen}
            style={{ display: paymentConfirmation ? 'none' : 'flex' }}
          >
            Bayar Tiket
          </Button>
		  
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
      
      {/* jika paymentconfirmation == true, tampilkan information message dan deadline pembayaran */}
      {paymentConfirmation && (
          <InformationMsg/>          
      )}  
    </>
  );
};

export default CardPaymentConfirmation;
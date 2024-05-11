"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Divider } from "@nextui-org/react";
import QuantityCounter from "@/components/EventQuantityCounter";
import ModalLogin from "@/components/ModalLogin";
import Link from "next/link";
import ModalSignIn from "../ModalSignIn";

const CardAddTix = ({ eventId, cost, quantityTicket, date }) => {
  let initialAvailable = true;
  const [available, setAvailable] = useState(initialAvailable);
  const [isDisabled, setIsDisabled] = useState(!available);
  const [totalCost, setTotalCost] = useState(cost);
  const [quantity, setQuantity] = useState(1);

  const buttonColor = available ? "#B05F8A" : "#929292";
  const buttonText = available
    ? "Lanjutkan Pembayaran"
    : "Tiket Tidak Tersedia";
  const buttonTextColor = "#FFFFFF";

  useEffect(() => {
    const currentDate = new Date();
    if (currentDate > new Date(date)) {
      setAvailable(true);
    } else {
      setIsDisabled(true);
    }
  }, [setAvailable, date]);

  return (
    <Card className="lg:w-[360px] md:w-[150px] p-7">
      <CardBody>
        <p className="font-bold text-base pt-2 pb-2">Beli Tiket</p>
        <div className="flex flex-row justify-between items-center mt-2 mb-2">
          <p className="text-sm">Rp. {totalCost.toLocaleString("id-ID")}</p>
          <div className="ml-4 text-sm">
            <QuantityCounter
              quantityTicket={quantityTicket}
              quantity={quantity}
              setQuantity={setQuantity}
              setTotalCost={setTotalCost}
              totalCost={totalCost}
              eventCost={cost}
            />
          </div>
        </div>
      </CardBody>
      <Divider />
      <Button
        fullWidth
        radius="full"
        className="font-semibold text-sm p-6 mb-6 mt-6 mx-auto"
        style={{ backgroundColor: buttonColor, color: buttonTextColor }}
        disabled={!available}
      >
        <Link href={`/payment-confirmation/${eventId}/${cost}/${quantity}`}>
          {buttonText}
        </Link>
      </Button>
    </Card>
  );
};

export default CardAddTix;

"use client";
import { CiCircleCheck } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Button } from "@nextui-org/react";

const InformationMsg = ({ titleMsg, bodyMsg, onClose }) => {
  return (
    <div className="bg-green-50 flex flex-row items-center justify-between py-5 px-5 max-w-[400px] grow">
      <div className="flex flex-row items-center gap-3">
        <CiCircleCheck size={32} color="rgb(22, 163, 74)" fontWeight={"bold"} />
        <div>
          <p className="text-green-600 font-medium">{titleMsg}</p>
          <p>{bodyMsg}</p>
        </div>
      </div>
      <Button isIconOnly color="" aria-label="close" onClick={onClose}>
        <IoClose size={24} color="#080808" />
      </Button>
    </div>
  );
};

export default InformationMsg;

'use client'
import { CiCircleCheck } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Button } from "@nextui-org/react";


const InformationMsg = ({titleMsg, bodyMsg, onClose}) => {
	return (
		<div className="bg-green-50 flex flex-column gap-4 p-4 text-sm">
            <div>
                <CiCircleCheck size={32} color="rgb(22, 163, 74)"fontWeight={"bold"}/>
            </div>
            <div>
                <p className="text-green-600 text-sm font-medium" >{titleMsg}</p>
                <p>{bodyMsg}</p>
            </div>
            <Button isIconOnly color="" aria-label="close" onClick={onClose} className="items-start">
                <IoClose size={15} color="rgb(22, 163, 74)" fontWeight={"bold"}/>
            </Button>  
            
		</div>
	);
};

export default InformationMsg;

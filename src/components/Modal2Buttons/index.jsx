'useclient'
import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

export default function Modal2Buttons({title, message, leftButton, rightButton, isOpen, onOpenChange, onYesClick }) {
  const handleYesClick = () => {
    onYesClick(); 
    onOpenChange(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent className="p-8">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-center">{title}</ModalHeader>
              <ModalBody className="text-center text-[18px] leading-[18px] mb-3">
                <p>{message}</p>
              </ModalBody>
              <ModalFooter className="flex flex-row justify-center">
                <Button color="secondary"  onPress={handleYesClick} className="block w-[157px] h-[42px] select-none rounded-full text-white font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B05F8A] focus:ring-opacity-50 font-dm-sans">
                  {leftButton}
                </Button>
                <Button color="secondary" onPress={onClose} className="ml-3 block w-[157px] h-[42px] select-none rounded-full text-white font-bold text-xs shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B05F8A] focus:ring-opacity-50 font-dm-sans">
                  {rightButton}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

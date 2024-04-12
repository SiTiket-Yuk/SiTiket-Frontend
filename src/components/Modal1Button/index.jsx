'useclient'
import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

export default function Modal1Button({title, message, buttonName, isOpen, onOpenChange }) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="p-8">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-center">{title}</ModalHeader>
              <ModalBody className="text-center">
                <p>{message}</p>
              </ModalBody>
              <ModalFooter className="flex flex-row justify-center">
                <Button color="secondary" onPress={onClose} fullWidth>
                  {buttonName}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export default function Modal2Buttons({
  title,
  message,
  leftButton,
  rightButton,
  isOpen,
  onOpenChange,
  onYesClick,
}) {
  const handleYesClick = () => {
    onYesClick();
    onOpenChange(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="p-8 text-sm">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-center">
                {title}
              </ModalHeader>
              <ModalBody className="text-center">
                <p className="font-bold text-xl">{message}</p>
              </ModalBody>
              <ModalFooter className="flex flex-row justify-center">
                <Button
                  radius="full"
                  className="flex-grow"
                  color="secondary"
                  onPress={handleYesClick}
                >
                  {leftButton}
                </Button>
                <Button
                  radius="full"
                  className="flex-grow"
                  color="secondary"
                  onPress={onClose}
                >
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

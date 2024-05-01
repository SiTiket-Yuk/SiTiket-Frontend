import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const ModalLogoutInDashboard = ({
	title,
	message,
	leftButton,
	rightButton,
	isOpen,
	onOpenChange,
}) => {
	const router = useRouter();
	const handleLogout = async () => {
		const res = await fetch("/api/delete-session", {
			method: "DELETE",
		});

		if (!res.ok) {
			console.error("Failed to delete session:", res.statusText);
			return;
		}

		// Redirect to the login page
		router.push("/login-page");
	};

	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
				<ModalContent className="p-8">
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col text-center">
								{title}
							</ModalHeader>
							<ModalBody className="text-center text-[18px] leading-[18px] mb-3">
								<p>{message}</p>
							</ModalBody>
							<ModalFooter className="flex flex-row justify-center">
								<Button
									color="secondary"
									onPress={handleLogout}
									className="block w-[157px] h-[42px] select-none rounded-full text-white font-bold text-xs 
                  shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B05F8A] 
                  focus:ring-opacity-50 font-dm-sans"
								>
									{leftButton}
								</Button>
								<Button
									color="secondary"
									onPress={onClose}
									className="ml-3 block w-[157px] h-[42px] select-none rounded-full text-white font-bold text-xs
                  shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B05F8A] 
                  focus:ring-opacity-50 font-dm-sans"
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
};

export default ModalLogoutInDashboard;

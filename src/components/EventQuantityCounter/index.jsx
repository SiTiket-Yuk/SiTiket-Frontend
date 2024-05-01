"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { IoIosRemove } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";

const QuantityCounter = ({
	quantityTicket,
	quantity,
	setQuantity,
	setTotalCost,
	totalCost,
	eventCost,
}) => {
	let initialAvailable = true;
	const [available, setAvailable] = useState(initialAvailable);
	const [isDisabled, setIsDisabled] = useState(!available);

	const decreaseButtonColor = available ? "#B05F8A" : "#929292";
	const increaseButtonColor = available ? "#B05F8A" : "#929292";
	const buttonTextColor = "#FFFFFF";

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
			setTotalCost(totalCost - eventCost);
		}
	};

	const increaseQuantity = () => {
		if (quantity >= 1 && quantity <= quantityTicket) {
			setQuantity(quantity + 1);
			setTotalCost(totalCost + eventCost);
		}
	};

	return (
		<div className="flex flex-row items-center">
			<div className="pr-4">
				<Button
					isIconOnly
					radius="full"
					size="sm"
					style={{
						backgroundColor: decreaseButtonColor,
						color: buttonTextColor,
					}}
					disabled={!available}
					onClick={decreaseQuantity}
				>
					<IoIosRemove size={15} />
				</Button>
			</div>
			<div className="pr-4 text-sm">
				<p>{quantity}</p>
			</div>
			<div>
				<Button
					isIconOnly
					size="sm"
					radius="full"
					style={{
						backgroundColor: increaseButtonColor,
						color: buttonTextColor,
					}}
					disabled={!available}
					onClick={increaseQuantity}
				>
					<IoIosAdd size={15} />
				</Button>
			</div>
		</div>
	);
};

export default QuantityCounter;

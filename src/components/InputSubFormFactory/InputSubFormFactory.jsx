import { useState, useEffect } from "react";

const InputSubFormFactory = ({
	type,
	data,
	handleInputChange,
	dataError,
	text,
}) => {
	const [errorMessage, setErrorMessage] = useState(dataError);

	useEffect(() => {
		setErrorMessage(dataError);
	}, [dataError]);

	return (
		<div className="relative h-fit">
			<input
				className="peer w-full rounded-full border border-[#d4a4be] bg-transparent 
        px-6 py-3 font-sans text-base font-normal text-[#414141] outline outline-0
        transition-all placeholder-shown:border-2 placeholder-shown:border-[#e7e7e7] 
        focus:border-2 focus:border-[#d4a4be] disabled:border-0 disabled:bg-blue-gray-50"
				placeholder=""
				type={type}
				value={data}
				onChange={handleInputChange}
			/>
			<label
				className="before:content['*'] after:content['*'] pointer-events-none absolute 
        left-6 -top-1 flex h-full w-full select-none text-[0px] text-[#929292] transition-all 
        before:pointer-events-none after:pointer-events-none peer-placeholder-shown:text-base 
        peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
			>
				Masukkan {text}
			</label>
			{errorMessage && (
				<p className="absolute text-error mt-2">{errorMessage}</p>
			)}
		</div>
	);
};

export default InputSubFormFactory;

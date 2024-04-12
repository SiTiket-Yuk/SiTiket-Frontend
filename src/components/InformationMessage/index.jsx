'use client'
import { CiCircleCheck } from "react-icons/ci";

const InformationMsg = () => {
	return (
		<div className="bg-green-50 flex flex-column gap-4 p-4 text-large">
            <div>
                <CiCircleCheck size={32} color="rgb(22, 163, 74)"fontWeight={"bold"}/>
                
            </div>
            <div>
                <p className="text-green-600 font-medium" >Pemesanan tiket berhasil diproses!</p>
                <p>Periksa email Anda untuk mendapatkan kode dan tata cara pembayaran.</p>
            </div>
           
		</div>
	);
};

export default InformationMsg;

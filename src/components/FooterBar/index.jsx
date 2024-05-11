import Link from "next/link";
import Image from "next/image";
import IconFacebook from "../../../public/iconSosMed/IconFacebook.svg";
import IconTwitter from "../../../public/iconSosMed/IconTwitter.svg";
import IconInstagram from "../../../public/iconSosMed/IconInstagram.svg";

const FooterBar = () => {
  return (
    <footer className="bg-primary">
      <div
        className="flex flex-wrap md:flex-row flex-col lg:mx-52 md:mx-20
				py-5 justify-between items-center"
      >
        <div className="flex md:flex-row md:gap-12 gap-1 flex-col items-center">
          <h2 className="text-white text-xl">
            Copyright © 2024 siTiket | All Rights Reserved
          </h2>
        </div>
        <div className="flex flex-row gap-4">
          <Link href="#">
            <Image width={50} src={IconFacebook} alt={"Facebook"} />
          </Link>
          <Link href="#">
            <Image width={50} src={IconTwitter} alt={"Twitter"} />
          </Link>
          <Link href="#">
            <Image width={50} src={IconInstagram} alt={"Instagram"} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;

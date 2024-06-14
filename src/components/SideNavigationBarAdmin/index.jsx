"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import LogoLight from "../../../public/logo/LogoLight.svg";
import ModalLogoutInDashboard from "../ModalLogoutInDashboard";
import { useDisclosure } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import OnIconTiketSaya from "../../../public/images/OnIconTiketSaya.svg";
import OffIconTiketSaya from "../../../public/images/OffIconTiketSaya.svg";
import OnIconPengaturan from "../../../public/images/OnIconPengaturan.svg";
import OffIconPengaturan from "../../../public/images/OffIconPengaturan.svg";
import OnIconKeluar from "../../../public/images/OnIconKeluar.svg";
import OffIconKeluar from "../../../public/images/OffIconKeluar.svg";

const SectionButtonLinks = ({
  isActive,
  onIcon,
  offIcon,
  link,
  label,
  onSectionlinkClick,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const handleLogOut = () => {
    // Add Logout Logic Here, [Remove Session, and others]
    router.push("/login-page");
  };
  const handleClick = () => {
    onSectionlinkClick();
  };

  return (
    <>
      {label !== "Keluar" ? (
        <Link href={`/${link}`}>
          <button
            className={`flex py-3 w-[229px] ${
              isActive ? "bg-white" : "bg-[#0075B4]"
            } rounded-[15px] gap-4 items-center`}
            style={{
              boxShadow: isActive
                ? "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)"
                : "none",
            }}
            onClick={handleClick}
          >
            <div
              className={`flex h-[28px] w-[29px] ml-[24px] ${
                isActive ? "bg-[#0076b5]" : "bg-white"
              } rounded-xl flex-col items-center justify-center`}
            >
              <div
                className={`flex justify-center items-center px-2 ${
                  isActive ? "bg-[#0076b5]" : "bg-white"
                } rounded-xl h-[28px] w-[29px]`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  alt={label}
                  loading="lazy"
                  src={isActive ? onIcon : offIcon}
                  className={`w-full ${
                    isActive ? "fill-white" : "fill-[#0075B4] max-w-[13px]"
                  }`}
                />
              </div>
            </div>
            <h2
              className={`font-medium text-medium lg:text-base ${
                isActive ? "" : "text-white"
              }`}
            >
              <span>{label}</span>
            </h2>
          </button>
        </Link>
      ) : (
        <>
          <button
            className={`flex py-3 w-[229px] ${
              isActive ? "bg-white" : "bg-[#0075B4]"
            } rounded-[15px] gap-4 items-center`}
            style={{
              boxShadow: isActive
                ? "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)"
                : "none",
            }}
            onClick={() => {
              handleClick(), onOpen();
            }}
          >
            <div
              className={`flex h-[28px] w-[29px] ml-[24px] ${
                isActive ? "bg-[#0076b5]" : "bg-white"
              } rounded-xl flex-col items-center justify-center`}
            >
              <div
                className={`flex justify-center items-center px-2 ${
                  isActive ? "bg-[#0076b5]" : "bg-white"
                } rounded-xl h-[28px] w-[29px]`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  alt={label}
                  loading="lazy"
                  src={isActive ? onIcon : offIcon}
                  className={`w-full ${
                    isActive ? "fill-white" : "fill-[#0075B4] max-w-[13px]"
                  }`}
                />
              </div>
            </div>
            <h2
              className={`font-medium text-medium lg:text-base ${
                isActive ? "" : "text-white"
              }`}
            >
              <span>{label}</span>
            </h2>
          </button>

          <ModalLogoutInDashboard
            title={"Apakah Anda yakin ingin keluar dari siTiket"}
            isOpen={isOpen}
            leftButton={"Ya"}
            rightButton={"Kembali"}
            onOpenChange={onOpenChange}
            onYesClick={handleLogOut}
          />
        </>
      )}
    </>
  );
};

const SideNavigationBarAdmin = () => {
  const currentPathname = usePathname();
  const [activePage, setActivePage] = useState(-1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const SectionList = [
    {
      pageName: "Event",
      pageLink: "event-list",
      onIcon: OnIconTiketSaya,
      offIcon: OffIconTiketSaya,
    },
    {
      pageName: "Pengaturan",
      pageLink: "#",
      onIcon: OnIconPengaturan,
      offIcon: OffIconPengaturan,
    },
    {
      pageName: "Keluar",
      pageLink: "login-page",
      onIcon: OnIconKeluar,
      offIcon: OffIconKeluar,
    },
  ];

  useEffect(() => {
    for (let index = 0; index < SectionList.length; index++) {
      if (currentPathname === `/${SectionList[index].pageLink}`) {
        setActivePage(index);
      }
    }
  }, [currentPathname, SectionList]);

  const onSectionlinkClick = (index) => {
    setActivePage(index);
  };

  return (
    <div
      className="bg-primary px-16"
      style={{
        boxShadow: "0px 2px 6px 0px rgba(20, 20, 43, 0.06)",
      }}
    >
      <div className="flex items-center mt-[50px]">
        <div className="flex gap-1 flex-col items-center mx-auto">
          <Link href="/" className="flex flex-row items-center">
            <Image
              className="object-cover h-13 w-12"
              src={LogoLight}
              alt="SiTiket Logo"
            />
            <div className="flex flex-row pl-2 text-white text-3xl">
              si<div className="font-bold">tiket</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-9 gap-4">
        {SectionList.map((section, index) => (
          <SectionButtonLinks
            key={section.pageName}
            isActive={index === activePage}
            onIcon={section.onIcon}
            offIcon={section.offIcon}
            link={section.pageLink}
            label={section.pageName}
            onSectionlinkClick={() => onSectionlinkClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SideNavigationBarAdmin;

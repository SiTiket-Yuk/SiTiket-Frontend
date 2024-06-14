"use client";
import Image from "next/image";
import Status from "../../../../../public/logo/Status.svg";
import Hapus from "../../../../../public/logo/Hapus.svg";
import LastEdit from "../../../../../public/logo/LastEdit.svg";
import AvatarDefault from "../../../../../public/imageDefault/AvatarDefault.png";
import {
  Avatar,
  DatePicker,
  useDisclosure,
  Checkbox,
  Textarea,
  DateRangePicker,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import Modal1Buttons from "@/components/Modal1Button";
import axios from "axios";
import { revalidatePath } from "next/cache";

const SITIKET_API = process.env.NEXT_PUBLIC_SITIKET_API;

const AddEvent = () => {
  const [judul, setJudul] = useState("");
  const [date, setDate] = useState(null);
  const [tempat, setTempat] = useState("");
  const [penyelenggara, setPenyelenggara] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [previewUrlEventImage, setPreviewUrlEventImage] = useState("");
  const [organizerImage, setOrganizerImage] = useState("");
  const [previewUrlOrganizerImage, setPreviewUrlOrganizerImage] = useState("");
  const [harga, setHarga] = useState(0);
  const [jumlahTiket, setJumlahTiket] = useState(0);
  const [rentangJual, setRentangJual] = React.useState("");

  const [judulError, setJudulError] = useState("Masukkan judul");
  const [dateError, setDateError] = useState("Masukkan tanggal");
  const [tempatError, setTempatError] = useState("Masukkan tempat");
  const [penyelenggaraError, setPenyelenggaraError] = useState(
    "Masukkan penyelenggara"
  );
  const [deskripsiError, setDeskripsiError] = useState("Masukkan deskripsi");
  const [eventImageError, setEventImageError] = useState(
    "Masukkan gambar event"
  );
  const [organizerImageError, setOrganizerImageError] = useState(
    "Masukkan gambar penyelenggara"
  );
  const [hargaError, setHargaError] = useState("Masukkan harga");
  const [jumlahTiketError, setJumlahTiketError] = useState(
    "Masukkan jumlah tiket"
  );
  const [rentangJualError, setRentangJualError] = useState(
    "Masukkan tanggal rentang penjualan"
  );

  const [isTiketSayaClicked, setIsTiketSayaClicked] = useState(true);
  const [isKeluarClicked, setIsKeluarClicked] = useState(false);
  const {
    isOpen: isOpenKeluar,
    onOpen: onOpenKeluar,
    onOpenChange: onOpenChangeKeluar,
  } = useDisclosure();
  const {
    isOpen: isOpenModalDraft,
    onOpen: onOpenModalDraft,
    onOpenChange: onOpenChangeDraft,
  } = useDisclosure();
  const {
    isOpen: isOpenModalPublish,
    onOpen: onOpenModalPublish,
    onOpenChange: onOpenChangePublish,
  } = useDisclosure();

  const [isFestivalSelected, setIsFestivalSelected] = React.useState(false);
  const [isWebinarSelected, setIsWebinarSelected] = React.useState(false);
  const [isWorkshopSelected, setIsWorkshopSelected] = React.useState(false);
  const [isOlahragaSelected, setIsOlahragaSelected] = React.useState(false);
  const [isBisnisSelected, setIsBisnisSelected] = React.useState(false);

  const isDisabled =
    judulError ||
    dateError ||
    tempatError ||
    penyelenggaraError ||
    deskripsiError ||
    organizerImageError ||
    eventImageError ||
    hargaError ||
    jumlahTiketError ||
    rentangJualError ||
    (!isFestivalSelected &&
      !isWebinarSelected &&
      !isWorkshopSelected &&
      !isOlahragaSelected &&
      !isBisnisSelected);

  const zeroesSingularTime = (char) => {
    if (char.toString().length === 1) {
      return `0${char.toString()}`;
    }
    return char;
  };

  const handleSubmitDraft = () => {
    // Logic untuk menangani penyerahan formulir
  };
  const handleSubmitPublish = async () => {
    // Logic untuk menangani penyerahan formulir

    const categories = [
      {
        festivalSelected: {
          name: "Festival",
          isSelected: isFestivalSelected,
        },
      },
      {
        webinarSelected: {
          name: "Webinar",
          isSelected: isWebinarSelected,
        },
      },
      {
        workshopSelected: {
          name: "Workshop",
          isSelected: isWorkshopSelected,
        },
      },
      {
        sportSelected: {
          name: "Olahraga",
          isSelected: isOlahragaSelected,
        },
      },
      {
        businessSelected: {
          name: "Bisnis",
          isSelected: isBisnisSelected,
        },
      },
    ];

    let categoriesInCheck = "";

    for (let i = 0; i < categories.length; i++) {
      const category = Object.values(categories[i])[0];
      if (category.isSelected) {
        categoriesInCheck += category.name;
        if (i + 1 !== categories.length) {
          categoriesInCheck += ", ";
        }
      }
    }

    const day = zeroesSingularTime(date.day);
    const month = zeroesSingularTime(date.month);
    const hour = zeroesSingularTime(date.hour);
    const minute = zeroesSingularTime(date.minute);

    const formData = new FormData();

    formData.append("name", judul);
    formData.append("date", `${date.year}-${month}-${day}`);
    formData.append("price", harga);
    formData.append("description", deskripsi);
    formData.append("organizer", penyelenggara);
    formData.append("status", "open");
    formData.append("category", categoriesInCheck);
    formData.append("place", tempat);
    formData.append("time", `${hour}.${minute}`);
    formData.append("ticket", jumlahTiket);
    formData.append("eventImage", eventImage);
    formData.append("organizerLogo", organizerImage);

    try {
      const response = await axios.post(
        `${SITIKET_API}/api/event/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Successfully add new Event");
      }
    } catch (e) {
      alert("Server Error or Try Again");
    }
  };

  const handleChangeJudul = (event) => {
    const { value } = event.target;
    setJudul(value);
    if (value == "") {
      setJudulError("Masukkan judul");
    } else if (value.length > 0 && !value.trim()) {
      setJudulError("Masukkan judul yang sesuai");
    } else if (value.length >= 0 && value.trim()) {
      setJudulError("");
    }
  };

  const handleChangeTempat = (event) => {
    const { value } = event.target;
    setTempat(value);

    if (value == "") {
      setTempatError("Masukkan tempat");
    } else if (value.length > 0 && !value.trim()) {
      setTempatError("Masukkan tempat yang sesuai");
    } else if (value.length >= 0 && value.trim()) {
      setTempatError("");
    }
  };

  const handleChangePenyelenggara = (event) => {
    const { value } = event.target;
    setPenyelenggara(value);

    if (value == "") {
      setPenyelenggaraError("Masukkan penyelenggara");
    } else if (value.length > 0 && !value.trim()) {
      setPenyelenggaraError("Masukkan nama penyelenggara yang sesuai");
    } else if (value.length >= 0 && value.trim()) {
      setPenyelenggaraError("");
    }
  };

  const handleChangeDeskripsi = (event) => {
    const { value } = event.target;
    setDeskripsi(value);

    if (value == "") {
      setDeskripsiError("Masukkan deskripsi");
    } else if (value.length > 0 && !value.trim()) {
      setDeskripsiError("Masukkan deskripsi yang sesuai");
    } else if (value.length >= 0 && value.trim()) {
      setDeskripsiError("");
    }
  };

  const handleEventImageChange = (event) => {
    const file = event.target.files[0];
    setEventImage(file);

    if (file) {
      setEventImageError("");
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrlEventImage(reader.result);
      };
      reader.readAsDataURL(file);
      setEventImage(file);
    } else {
      setEventImageError("Masukkan gambar event");
    }
  };

  const handleOrganizerImageChange = (event) => {
    const file = event.target.files[0];
    setOrganizerImage(file);

    if (file) {
      setOrganizerImageError("");
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrlOrganizerImage(reader.result);
      };
      reader.readAsDataURL(file);
      setOrganizerImage(file);
    } else {
      setOrganizerImageError("Masukkan gambar event");
    }
  };

  const handleChangeHarga = (event) => {
    const { value } = event.target;
    setHarga(value);

    if (value == "") {
      setHargaError("Masukkan harga");
    } else {
      setHargaError("");
    }
  };

  const handleChangeJumlahTiket = (event) => {
    const { value } = event.target;
    setJumlahTiket(value);

    if (value == "") {
      setJumlahTiketError("Masukkan jumlah tiket");
    } else {
      setJumlahTiketError("");
    }
  };

  const router = useRouter();

  return (
    <div className="container h-[1637px] mx-auto flex">
      <div className="relative mx-auto w-full max-w-screen h-full flex flex-row">
        <div className="flex flex-col w-full h-full">
          <div
            className="flex flex-col pl-6 pr-11 pt-9 pb-5 text-3xl font-bold leading-10 text-[#0076b5] 
            whitespace-nowrap bg-white shadow-sm max-md:px-5"
          >
            <div className="flex gap-5 justify-between py-2.5 pl-2.5 max-md:flex-wrap max-md:max-w-full">
              <div className="my-auto">Event</div>

              <div>
                <Avatar size="lg" src={AvatarDefault.src} />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col pl-8 pr-11 h-screen ">
            <div className="flex flex-row justify-between h-[93px] pt-8 pb-4">
              <div className="pt-4 text-xl font-medium leading-5 text-black ">
                Tambah Event
              </div>
            </div>

            <div className="py-8 max-md:pr-5">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[620px] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-10">
                    <div className="shrink-0 px-6 pt-6 bg-white rounded-lg border border-gray-200 border-solid min-h-[889px]">
                      <div className="pb-4 mb-4 w-[506px] text-lg font-medium leading-5 text-neutral-700 border-b border-[#EBEBEB]">
                        Detail Event
                      </div>

                      <form>
                        <div className="flex items-center">
                          <label
                            className="mb-7"
                            style={{
                              cursor: "pointer",
                              display: "inline-block",
                            }}
                          >
                            <input
                              className=" w-[572px] h-[205px] rounded-[10px] bg-[#E5E5E5] items-center justify-center flex"
                              type="file"
                              accept=".png, .jpg, .jpeg, .svg"
                              onChange={handleEventImageChange}
                            />

                            {previewUrlEventImage && (
                              <Image
                                src={previewUrlEventImage}
                                alt="Event Image Preview"
                                width={1000}
                                height={1000}
                                className="-mt-[205px] w-[572px] h-[205px] rounded-[10px] object-cover"
                              />
                            )}
                          </label>
                        </div>

                        <div className="relative mb-14 text-base font-medium leading-5 w-[572px] h-[57px] text-neutral-700">
                          Judul
                          <input
                            type="text"
                            value={judul}
                            placeholder=" "
                            onChange={handleChangeJudul}
                            aria-label="event title"
                            className="peer justify-center items-start px-6 py-3.5 mt-4 w-full bg-white rounded-xl border border-solid border-[#d4a4be]
                            text-[#414141] max-md:px-5 max-md:max-w-full outline outline-0 transition-all placeholder-shown:border-2 
                            placeholder-shown:border-neutral-200 focus:border-2 focus:border-[#d4a4be] disabled:bg-blue-gray-50"
                          />
                          <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-6 top-7 flex 
                            h-full w-full select-none text-[0px] text-[#929292] before:pointer-events-none 
                            after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
                          >
                            Masukkan Judul
                          </label>
                        </div>

                        <div className="flex gap-5 justify-between mb-7 text-base leading-5 max-md:flex-wrap">
                          <div className="flex flex-col rounded-xl">
                            <div className="font-medium text-neutral-700">
                              Tanggal & Waktu
                            </div>
                            <DatePicker
                              size="lg"
                              variant="bordered"
                              radius="md"
                              granularity="minute"
                              label="Date and Time"
                              className="mt-3 w-[572px] text-[14px] justify-start flex border-neutral-200 text-neutral-400"
                              color="secondary"
                              value={date}
                              onChange={(newValue) => {
                                setDate(newValue);
                                setDateError("");
                              }}
                            ></DatePicker>
                          </div>
                        </div>

                        <div className="relative mb-14 text-base font-medium leading-5 w-[572px] h-[57px] text-neutral-700">
                          Tempat
                          <input
                            type="text"
                            value={tempat}
                            placeholder=" "
                            onChange={handleChangeTempat}
                            className="peer justify-center items-start px-6 py-3.5 mt-4 w-full bg-white rounded-xl border border-solid border-[#d4a4be]
                          text-[#414141] max-md:px-5 max-md:max-w-full outline outline-0 transition-all placeholder-shown:border-2 
                          placeholder-shown:border-neutral-200 focus:border-2 focus:border-[#d4a4be] disabled:bg-blue-gray-50"
                          />
                          <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-6 top-7 flex 
                            h-full w-full select-none text-[0px] text-[#929292] before:pointer-events-none 
                            after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
                          >
                            Masukkan Tempat
                          </label>
                        </div>

                        <div className="relative mb-14 text-base font-medium leading-5 w-[572px] h-[57px] text-neutral-700">
                          Penyelenggara
                          <div className="flex flex-row">
                            <div>
                              <input
                                type="text"
                                value={penyelenggara}
                                placeholder=" "
                                onChange={handleChangePenyelenggara}
                                className="peer justify-center items-start px-6 py-3.5 mt-4 w-[498.52px] bg-white rounded-xl border border-solid border-[#d4a4be]
                                text-[#414141] max-md:px-5 max-md:max-w-full outline outline-0 transition-all placeholder-shown:border-2 
                                placeholder-shown:border-neutral-200 focus:border-2 focus:border-[#d4a4be] disabled:bg-blue-gray-50"
                              />
                              <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-6 top-7 flex 
                                h-full w-full select-none text-[0px] text-[#929292] before:pointer-events-none 
                                after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
                              >
                                Masukkan Penyelenggara
                              </label>
                            </div>

                            <div className="flex items-center">
                              <label
                                style={{
                                  cursor: "pointer",
                                  display: "inline-block",
                                }}
                              >
                                <input
                                  className="shrink-0 aspect-[1.04] w-[57px] ml-4 mt-4 bg-[#E5E5E5] rounded-full"
                                  type="file"
                                  accept=".png, .jpg, .jpeg, .svg"
                                  onChange={handleOrganizerImageChange}
                                />

                                {previewUrlOrganizerImage && (
                                  <Image
                                    src={previewUrlOrganizerImage}
                                    alt="Organizer Image Preview"
                                    width={500}
                                    height={500}
                                    className="-mt-[55px] ml-4 aspect-[1.04] w-[57px] rounded-full"
                                  />
                                )}
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="relative text-base font-medium leading-5 w-[572px] min-h-[57px] text-neutral-700">
                          Deskripsi
                          <Textarea
                            variant="bordered"
                            minRows={1}
                            size="lg"
                            color="secondary"
                            radius="md"
                            value={deskripsi}
                            onChange={handleChangeDeskripsi}
                            placeholder="Tuliskan Deskripsi Event"
                            className="mt-4"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="shrink-0 mt-5 px-6 pt-6 bg-white rounded-lg border border-gray-200 border-solid h-[314px]">
                      <div className="pb-4 mb-6 w-[506px] text-lg font-medium leading-5 text-neutral-700 border-b border-[#EBEBEB]">
                        Detail Tiket
                      </div>

                      <form>
                        <div className="flex flex-row gap-7">
                          <div className="relative mb-14 text-base font-medium leading-5 w-[270px] h-[57px] text-neutral-700">
                            Harga
                            <input
                              type="number"
                              value={harga}
                              placeholder=" "
                              min={0}
                              onChange={handleChangeHarga}
                              className="peer justify-center items-start px-6 py-3.5 mt-4 w-full bg-white rounded-xl border border-solid border-[#d4a4be]
                              text-[#414141] max-md:px-5 max-md:max-w-full outline outline-0 transition-all placeholder-shown:border-2 
                              placeholder-shown:border-neutral-200 focus:border-2 focus:border-[#d4a4be] disabled:bg-blue-gray-50"
                            />
                            <label
                              className="before:content[' '] after:content[' '] pointer-events-none absolute left-6 top-7 flex 
                              h-full w-full select-none text-[0px] text-[#929292] before:pointer-events-none 
                              after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
                            >
                              Masukkan Harga
                            </label>
                          </div>

                          <div className="relative mb-14 text-base font-medium leading-5 w-[270px] h-[57px] text-neutral-700">
                            Jumlah Tiket
                            <input
                              type="number"
                              value={jumlahTiket}
                              placeholder=" "
                              min={0}
                              onChange={handleChangeJumlahTiket}
                              className="peer justify-center items-start px-6 py-3.5 mt-4 w-full bg-white rounded-xl border border-solid border-[#d4a4be]
                              text-[#414141] max-md:px-5 max-md:max-w-full outline outline-0 transition-all placeholder-shown:border-2 
                              placeholder-shown:border-neutral-200 focus:border-2 focus:border-[#d4a4be] disabled:bg-blue-gray-50"
                            />
                            <label
                              className="before:content[' '] after:content[' '] pointer-events-none absolute left-6 top-7 flex 
                              h-full w-full select-none text-[0px] text-[#929292] before:pointer-events-none 
                              after:pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.1] peer-focus:text-[0px]"
                            >
                              Jumlah Tiket Tersedia
                            </label>
                          </div>
                        </div>

                        <div className="flex flex-row gap-7">
                          <div className="relative mb-14 text-base font-medium leading-5 h-[57px] text-neutral-700">
                            Rentang Penjualan
                            <DateRangePicker
                              size="lg"
                              variant="bordered"
                              radius="md"
                              className="mt-3 w-[568px] text-[14px] justify-start flex border-neutral-200 text-neutral-400"
                              color="secondary"
                              value={rentangJual}
                              aria-label="Event Date"
                              onChange={(newValue) => {
                                setRentangJual(newValue);
                                setRentangJualError("");
                              }}
                            ></DateRangePicker>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-10">
                    <div className="shrink-0 px-6 pt-6 bg-white rounded-lg border border-gray-200 border-solid h-[266px]">
                      <div className="pb-4 mb-4 max-md:w-full text-lg font-medium leading-5 text-neutral-700 border-b border-[#EBEBEB]">
                        Publish
                      </div>

                      <div>
                        <div className="flex flex-row">
                          <Image
                            className="object-cover h-[14px] w-[14px] mt-[5px] mr-2"
                            src={Status}
                            alt="Status Logo"
                          />
                          Status :
                        </div>

                        <div className="flex flex-row mt-4">
                          <Image
                            className="object-cover h-[14px] w-[14px] mt-[5px] mr-2"
                            src={LastEdit}
                            alt="Last Edit Logo"
                          />
                          Terakhir Diedit :
                        </div>

                        <div className="flex flex-row pb-4 mt-4 text-[#929292] mb-3 max-md:w-full border-b border-[#EBEBEB]">
                          <Image
                            className="object-cover h-[14px] w-[14px] mt-[5px] mr-2"
                            src={Hapus}
                            alt="Hapus Logo"
                          />
                          Hapus
                        </div>

                        <div className="flex flex-row gap-4 pl-2 justify-center">
                          <button
                            className="block w-[135px] h-[42px] select-none rounded-full 
                          text-white font-bold text-xs shadow-md transition-all focus:outline-none focus:ring-2
                          focus:ring-pink-400 focus:ring-opacity-50 mb-10"
                            style={{
                              backgroundColor: isDisabled
                                ? "#D4D4D4"
                                : "#b5618d",
                              color: isDisabled ? "#A5A5A5" : "#FFFFFF",
                            }}
                            data-ripple-light="true"
                            onClick={() => {
                              handleSubmitDraft();
                            }}
                            disabled={isDisabled}
                          >
                            Simpan Draft
                          </button>

                          <button
                            className="block w-[124px] h-[42px] select-none rounded-full 
                            text-white font-bold text-xs shadow-md transition-all focus:outline-none focus:ring-2
                            focus:ring-pink-400 focus:ring-opacity-50 mb-10"
                            type="submit"
                            style={{
                              backgroundColor: isDisabled
                                ? "#D4D4D4"
                                : "#b5618d",
                              color: isDisabled ? "#A5A5A5" : "#FFFFFF",
                            }}
                            data-ripple-light="true"
                            onClick={() => {
                              handleSubmitPublish();
                            }}
                            disabled={isDisabled}
                          >
                            Publish
                          </button>

                          <Modal1Buttons
                            message={"Draft Event berhasil disimpan"}
                            isOpen={isOpenModalDraft}
                            buttonName={"Ok"}
                            onOpenChange={onOpenChangeDraft}
                          />

                          <Modal1Buttons
                            message={"Event berhasil dipublish"}
                            isOpen={isOpenModalPublish}
                            buttonName={"Ok"}
                            onOpenChange={onOpenChangePublish}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 mt-11 px-6 pt-6 bg-white rounded-lg border border-gray-200 border-solid h-[278px] max-md:mt-10">
                      <div className="pb-4 mb-4 max-md:w-full text-lg font-medium leading-5 text-neutral-700 border-b border-[#EBEBEB]">
                        Kategori
                      </div>

                      <form>
                        <div className="flex flex-col gap-4">
                          <Checkbox
                            isSelected={isFestivalSelected}
                            color="secondary"
                            radius="sm"
                            onValueChange={setIsFestivalSelected}
                          >
                            Festival
                          </Checkbox>

                          <Checkbox
                            isSelected={isWebinarSelected}
                            color="secondary"
                            radius="sm"
                            onValueChange={setIsWebinarSelected}
                          >
                            Webinar
                          </Checkbox>

                          <Checkbox
                            isSelected={isWorkshopSelected}
                            color="secondary"
                            radius="sm"
                            onValueChange={setIsWorkshopSelected}
                          >
                            Workshop
                          </Checkbox>

                          <Checkbox
                            isSelected={isOlahragaSelected}
                            color="secondary"
                            radius="sm"
                            onValueChange={setIsOlahragaSelected}
                          >
                            Olahraga
                          </Checkbox>

                          <Checkbox
                            isSelected={isBisnisSelected}
                            color="secondary"
                            radius="sm"
                            onValueChange={setIsBisnisSelected}
                          >
                            Bisnis
                          </Checkbox>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;

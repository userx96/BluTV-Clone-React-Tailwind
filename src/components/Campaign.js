import { IoIosArrowDown } from "react-icons/io";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import classNames from "classnames";

export default function Campaign() {
  const [active, setActive] = useState(false);
  const [itype, setiType] = useState("text");
  const [iValue, setiValue] = useState("");
  const inputClasses = classNames("border", "border-gray-300", {
    "border-red-500": iValue.length < 6,
  });

  const inputType = itype === "text" ? "password" : "text";

  const eyeToggle = () => {
    setActive(!active);
    setiType(inputType);
  };

  const validation = (e) => {
    setiValue(e.target.value);
  };

  return (
    <div className="flex flex-row items-center w-full h-[123px] campaign-gradient px-[35px] py-4 leg:h-[56px] leg:justify-center">
      <h1 className="leg:text-center hidden leg:flex text-white leg:items-center">
        Kayıt ol & İzlemeye Başla <IoIosArrowDown size={24} />
      </h1>
      <div className="flex items-center justify-center flex-nowrap w-max absolute top-40 left-[318px] leg:hidden">
        <input type="checkbox" className="cursor-pointer w-4 h-4" />
        <p className="text-center text-sm text-white ml-2">
          <span className="underline underline-offset-2">
            İletişim izinlerini
          </span>{" "}
          ve{" "}
          <span className="underline underline-offset-2">
            üyelik sözleşmesini
          </span>{" "}
          okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.
        </p>
      </div>
      <div className="flex flex-row items-start gap-4 xl:gap-2 2xl:gap-4">
        <div className="w-full first:mt-[15px] lg:w-2/12 lg:first:mt-0 xl:w-2/12">
          <span className="mb-0 block !w-auto overflow-hidden text-ellipsis !text-sm font-normal !leading-[26px] text-white lg:!w-[210px] lg:!text-lg lg:!leading-6 ltr:lg:text-left rtl:lg:text-right leg:hidden">
            Yıllık Üyeliklerde <br /> İlk 7 Gün Ücretsiz Deneme
          </span>
        </div>
        <div className="w-full grid grid-cols-1 gap-3 lg:grid-cols-4 pl-14 leg:hidden">
          <input
            className="relative w-full rounded px-2 py-1 leg:hidden outline-none placeholder:text-sm placeholder:text-gray-600"
            type="text"
            placeholder="Ad Soyad"
          />
          <input
            className="relative w-full rounded px-3 py-3 leg:hidden outline-none placeholder:text-sm placeholder:text-gray-600"
            type="email"
            placeholder="E-posta Adresiniz"
          />
          <div className="w-full h-12 relative">
            <input
              required
              onChange={validation}
              value={iValue}
              className={`relative w-full rounded px-3 py-3 leg:hidden outline-none placeholder:text-sm placeholder:text-gray-600 ${inputClasses}`}
              type={inputType}
              placeholder="Parola"
            />
            <BsEyeSlash
              onClick={eyeToggle}
              className={`w-5 h-5 z-20 text-gray-600 absolute right-3 bottom-3.5 cursor-pointer ${
                active ? "hidden" : "block"
              }`}
            />
            <BsEye
              onClick={eyeToggle}
              className={`w-5 h-5 text-gray-600 absolute right-3 bottom-3.5 cursor-pointer ${
                active ? "block" : "hidden"
              }`}
            />
          </div>
          <button className="relative w-max h-[45px] py-1 px-2 rounded border-0 border-none text-center whitespace-nowrap leg:hidden shadow-default hover:outline-0 focus:outline-0 active:outline-0 disabled:cursor-not-allowed bg-blue-500 text-sm text-white hover:bg-blue-300 hover:text-white transition-all">
            Ücretsiz Dene
          </button>
        </div>
        <span className="relative w-min text-white text-xs -left-[85px] top-2 whitespace-nowrap tall:hidden">
          ya da
        </span>
        <div className="relative flex flex-row mt-[15px] h-10 items-center -top-[12px] justify-center -left-[75px] max-xl:-left-[65px] blu:-left-[50px] ret:-left-[35px] leg:hidden">
          <div className="relative mr-2 rounded overflow-hidden w-10 h-10 bg-white flex items-center justify-center">
            <img
              alt="facebook"
              src="https://blutv-objects.mncdn.com/static/assets/svg/facebook-icon.svg?v=4.1.0"
            />
          </div>
          <div className="relative mr-2 rounded overflow-hidden w-10 h-10 bg-white flex items-center justify-center">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-5 h-5"
            >
              <g>
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="relative mr-2 rounded overflow-hidden w-10 h-10 bg-white flex items-center justify-center">
            <img
              alt="apple"
              src="https://blutv-objects.mncdn.com/static/assets/svg/ios-icon.svg?v=4.1.0"
              className="invert w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>

    //? mobil için açılır pencere yapılmadı.
  );
}

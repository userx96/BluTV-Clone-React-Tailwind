import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

        //? WİDTH SAĞ TARAFINDA FAZLADAN BOŞLUK VAR.

export default function Series() {
  return (
    <div className="relative mx-auto flex flex-col min-h-[68vh] bg-[#081329] pl-4 leg:pl-2 leg:pb-4">
      <h2 className="relative mb-6 flex items-center justify-center z-10 text-lg text-white ">
        BluTV Özel Yapımlar
      </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          className="container h-[455px] flex items-center justify-center mx-auto cursor-pointer max-w-fit"
        > 
          <SwiperSlide className="bg-red-300 max-w-[330px] min-w-[300px] rounded border-2 border-gray-800 behzat"></SwiperSlide>
          <SwiperSlide className="bg-red-300 max-w-[330px] min-w-[300px] rounded border-2 border-gray-800 benbu"></SwiperSlide>
          <SwiperSlide className="bg-red-300 max-w-[330px] min-w-[300px] rounded border-2 border-gray-800 yesilcam"></SwiperSlide>
          <SwiperSlide className="bg-red-300 max-w-[330px] min-w-[300px] rounded border-2 border-gray-800 kiyma"></SwiperSlide>
          <SwiperSlide className="bg-red-300 max-w-[330px] min-w-[300px] rounded border-2 border-gray-800 birankara"></SwiperSlide>
          <SwiperSlide className="bg-red-300 max-w-[330px] min-w-[300px] rounded border-2 border-gray-800 bizden"></SwiperSlide>
          <SwiperSlide className="bg-red-300 max-w-[330px] min-w-[300px] rounded border-2 border-gray-800 saygi"></SwiperSlide>
          <SwiperSlide className="bg-red-300 max-w-[330px] min-w-[300px] rounded border-2 border-gray-800 ilkson"></SwiperSlide>
        </Swiper>
    </div>
  );
}

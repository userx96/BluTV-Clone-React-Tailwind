export default function Infos() {
  return (
    <div className="relative w-full mx-auto min-h-[100.60vh] flex flex-col bg-[#081329] alti:min-h-[80vh] leg:min-h-[8vh]">
      <h2 className="relative my-6 flex items-center justify-center z-10 text-lg text-white ">
        Dilediğin Zaman, Dilediğin Yerden İzle
      </h2>
      <img
        alt="diledigin"
        src="https://blutv-images.mncdn.com/q/t/i/bluv2/75/1435x615/61f7edcb866ac32ef0310a6e"
      />
      <div className="relative mx-auto w-full h-14 my-12 flex items-center justify-between px-8 alti:h-48 alti:flex-col alti:gap-y-4 alti:items-start alti:mt-32">
          <div className="relative w-1/5 h-full border-l-4 border-blue-500 alti:w-full">
            <p className="text-white text-[15px] yedi:text-[12px] ml-5 max-h-fit">10.000 saatten fazla film, dizi ve daha fazlası.</p>
          </div>
          <div className="relative w-1/5 h-full border-l-4 border-blue-500 alti:w-full">
          <p className="text-white text-[15px] yedi:text-[12px] ml-5 max-h-fit">Dizüstü ve masaüstü tüm bilgisayarlarda</p>
          </div>
          <div className="relative w-1/5 h-full border-l-4 border-blue-500 alti:w-full">
          <p className="text-white text-[15px] yedi:text-[12px] ml-5 max-h-fit">Akıllı televizyonlarda ve Apple TV’de</p>
          </div>
          <div className="relative w-1/5 h-full border-l-4 border-blue-500 alti:w-full">
          <p className="text-white text-[15px] yedi:text-[12px] ml-5 max-h-fit">Tüm telefon ve tabletlerde, dilediğin içeriği indir & izle!</p>
          </div>
      </div>
    </div>
  );
}

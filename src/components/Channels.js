export default function Channels() {
  return (
    <div className="flex flex-col items-center w-full h-[270px] leg:h-[600px] px-[35px] py-4 leg:justify-center bg-[#081329]">
      <h2 className="relative mb-6 flex items-center justify-center z-10 text-lg text-white ">
        En Sevilen Canlı Yayın Kanalları
      </h2>
      <div className="grid leg:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="relative h-full w-[120px] flex items-center justify-center rounded bg-[#1a1d25] text-white">
          <img alt="star" src="https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/5dc2be53866ac331e0feb20e" className="p-5"/>
        </div>
        <div className="relative h-full w-[120px] flex items-center justify-center rounded bg-[#1a1d25] text-white">
          <img alt="show" src="https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/5dcd4eec866ac302bcb1c34b" className="p-5"/>
        </div>
        <div className="relative h-full w-[120px] flex items-center justify-center rounded bg-[#1a1d25] text-white">
          <img alt="fox" src="https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/5dc2bd27866ac331e0feb1fe" className="p-5"/>
        </div>
        <div className="relative h-full w-[120px] flex items-center justify-center rounded bg-[#1a1d25] text-white">
          <img alt="trt1" src="https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/5c3f5cf2866ac306fce2c061" className="p-5"/>
        </div>
        <div className="relative h-full w-[120px] flex items-center justify-center rounded bg-[#1a1d25] text-white">
          <img alt="kanal7" src="https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/5c3f5b69866ac306fce2c029" className="p-5"/>
        </div>
        <div className="relative h-full w-[120px] flex items-center justify-center rounded bg-[#1a1d25] text-white">
          <img alt="trt2" src="https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fddc62866ac31b149aa274" className="p-5"/>
        </div>
        <div className="relative h-full w-[120px] flex items-center justify-center rounded bg-[#1a1d25] text-white">
          <img alt="tv360" src="https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fddc22866ac31b782685c8" className="p-5"/>
        </div>
        <div className="relative h-full w-[120px] flex items-center justify-center rounded bg-[#1a1d25] text-white">
          <img alt="blutvplay1" src="https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/6295d4b4866ac31658881736" className="p-5"/>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center relative w-full h-[85vh] mx-0 my-0 herosection-background-large">
      <div className="container flex items-start justify-start text-white flex-col leg:items-center leg:justify-center leg:text-center z-10">
        <h1 className="text-[40px] mb-[18px]">Türkiye'nin İnternet Televizyonu</h1>
        <h2 className="text-[20px] max-w-[400px] mb-[10px]">Yerli ve yabancı 10.000 saatten fazla içerik yıllık üyeliklere özel ayda sadece ₺39.9</h2>
        <h3 className="text-[16px] text-yillik mb-[44px]">*Yıllık aboneliklerde</h3>
        <h2 className="text-[18px] mb-[10px]">İstediğin zaman iptal et.</h2>
        <button className="h-[45px] w-[272px] rounded text-black text-[16px] py-2.5 px-5 bg-white text-center">Ücretsiz Dene</button>
      </div>
    </div>
  )
}

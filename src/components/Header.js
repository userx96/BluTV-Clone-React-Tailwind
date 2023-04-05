export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between w-full h-[70px] bg-[#08112F] py-3.5 px-9">
      <img src="https://blutv-objects.mncdn.com/static/assets/svg/blutv-icon.svg?v=4.1.0" alt="blutv" className="w-[77px] h-[26px] hover:cursor-pointer max-lg:my-0 max-lg:mx-auto"/>
      <a href="/" className="text-white text-sm no-underline">Üye Girişi</a>
    </div>
  )
}

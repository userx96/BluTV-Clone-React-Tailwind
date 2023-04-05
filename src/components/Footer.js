import { GrTwitter } from 'react-icons/gr' 
import { FaFacebookF, FaInstagramSquare, FaYoutube } from 'react-icons/fa' 

export default function Footer() {
  return (
    <footer className="h-[38px] z-30 bg-[#2e2f41] text-gray-300 text-center p-2.5 flex flex-row items-center justify-center fixed bottom-0 w-full leg:hidden">
      <div className="border-r-[1px] border-[#aeb1b269] pr-3"><a href="/" className="text-sm text-[#AEB1B2] hover:text-white">Kupon Kodu Kullan</a></div>
      <div className="border-r-[1px] border-[#aeb1b269] pr-3 ml-3"><a href="/" className="text-sm text-[#AEB1B2] hover:text-white">Gizlilik Politikası</a></div>
      <div className="border-r-[1px] border-[#aeb1b269] pr-3 ml-3"><a href="/" className="text-sm text-[#AEB1B2] hover:text-white">Çerez Politikası</a></div>
      <div className="border-r-[1px] border-[#aeb1b269] pr-3 ml-3 whitespace-nowrap flex flex-row items-center justify-center"><img alt="appstore" className="w-[13px] h-[18px]" src="https://blutv-objects.mncdn.com/static/assets/svg/ios-icon.svg?v=4.1.0"/><a href="/" className="text-sm text-[#AEB1B2] ml-2 hover:text-white">App Store</a></div>
      <div className="border-r-[1px] border-[#aeb1b269] pr-3 ml-3 whitespace-nowrap flex flex-row items-center justify-center"><img alt="gplay" className="w-[13px] h-[18px]" src="https://blutv-objects.mncdn.com/static/assets/svg/google-icon.svg?v=4.1.0"/><a href="/" className="text-sm text-[#AEB1B2] ml-2 hover:text-white">Google Play</a></div>
      <div className="border-r-[1px] border-[#aeb1b269] pr-3 ml-3 whitespace-nowrap flex flex-row items-center justify-center"><img alt="huawei" className="w-[13px] h-[18px]" src="https://blutv-objects.mncdn.com/static/assets/svg/huawei-icon.svg?v=4.1.0"/><a href="/" className="text-sm text-[#AEB1B2] ml-2 hover:text-white">Huawei AppGallery</a></div>
      <div className="border-r-[1px] border-[#aeb1b269] pr-3 ml-3 whitespace-nowrap flex flex-row items-center justify-center gap-x-2">
        <FaFacebookF className='cursor-pointer'/>
        <GrTwitter className='cursor-pointer'/>
        <FaInstagramSquare className='cursor-pointer'/>
        <FaYoutube className='cursor-pointer'/>
      </div>
      <div className="pr-3 ml-3"><a href="/" className="text-sm text-[#AEB1B2] hover:text-white">Yardım Merkezi</a></div>
    </footer>
  )
}

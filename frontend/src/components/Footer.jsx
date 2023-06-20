const Footer = () => {
  return (
    
    <footer className="bg-slate-800 w-full text-center text-white py-4">
      <span className="mx-auto text-sm sm:text-md lg:texl-lg w-1/4 tracking-[8px]">
        CONTACT US</span>
      <hr className="w-1/6 mt-2 mx-auto bg-slate-100" />
      <a href="mailto:strategik.contact@gmail.com">
        <span
        className="transition-opacity hover:opacity-100 opacity-80 pt-2 text-center text-xs sm:text-sm font-thin tracking-[2px] sm:tracking-[4px]"
        >strategik.contact@gmail.com</span>
      </a>
      <span
        className="block text-center text-xs font-thin tracking-wide"
        >StrateGIK © 2022. All rights reserved</span>
    </footer>
    
  )
}

export default Footer

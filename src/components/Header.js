import React from "react"
const Header = () => {
  return (
    <div className="flex flex-row  justify-between items-center select-none px-10">
      <div>
        <img src="assets/logo.png" alt="Logo" />
      </div>
      <div className="flex flex-row items-center gap-10">
        <p className="text-base font-medium cursor-pointer">Whitepaper</p>
        <p className="text-base cursor-pointer">Sign In</p>
        <div className=" bg-main text-white px-8 py-2 cursor-pointer">
          <p className="text-sm">Register</p>
        </div>
        <div className="flex flex-row items-center px-3 h-[38px] border-2 cursor-pointer">
          <div>
            <img src="assets/en.png" alt="EN" />
          </div>
          <p className=" pl-2 pr-14">EN</p>
          <div>
            <img src="assets/arrow-down.svg" alt="dropdown" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

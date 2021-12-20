import React from "react"

const Contact = () => {
  return (
    <div className="relative font-[SFPro]">
      <div className=" h-[7vw]" />
      <div className="absolute w-full">
        <img src="assets/contact.png" alt="contact" />
      </div>
      <div className="absolute flex flex-col ml-[10vw] mt-[3vw]">
        <div className="w-[180px] mb-6">
          <img src="assets/big-logo.png" alt="logo" />
        </div>
        <p>Your name</p>
        <div className=" border-[1px] border-borderInput py-2 px-4 mt-2 mb-5">
          <input className="outline-none w-[300px]" placeholder="Enter your name" />
        </div>
        <p>Your request</p>
        <div className=" border-[1px] border-borderInput py-2 px-4 mt-2 mb-6">
          <textarea
            className="outline-none w-[300px] h-12 resize-none "
            placeholder="Enter your request"
          />
        </div>
        <div className=" bg-main text-white px-8 py-2 w-[150px] mb-[7vw] select-none">
          <p className="text-sm text-center">Send request</p>
        </div>
        <p>Copyright © Zenihub, Inc. All Rights Reserved.</p>
      </div>
    </div>
  )
}
export default Contact

import React from "react"

const Investor = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-1/2 bg-lightTint">
        <div className=" ml-32 pr-10 mb-36">
          <p className=" mt-20 mb-3 text-2xl font-medium">
            Real Estate Developers in Southeast Asia
          </p>
          <div className="max-w-[510px] ">
            {" "}
            <span>
              {
                "Tap into the global investor market via our high-tech and secure software platform. "
              }
              <span>Join us</span>
              {" in making your properties accessible to the world!"}
            </span>
          </div>
          <div className=" text-main border-main border-[1px] px-10 py-2 mt-14 select-none cursor-pointer max-w-[340px]">
            <p className="text-center">Contact our Sourcing Department</p>
          </div>
        </div>
        <div>
          <img src="/assets/vietnam.png" alt="Investor-Vietnam" />
        </div>
      </div>
      <div className="flex flex-col w-1/2 bg-lightBlue">
        <div className=" ml-32 pr-10 mb-36">
          <p className=" mt-20 mb-3 text-2xl font-medium">Investors in Developed Nations</p>
          <div className="max-w-[510px] ">
            <p>
              Begin investing in high-yielding real estate in emerging markets that were never
              accessible or affordable before.
            </p>
          </div>
          <div className=" text-main border-main border-[1px] px-10 py-2 mt-14 select-none cursor-pointer max-w-[250px]">
            <p className="text-center">Register Now</p>
          </div>
        </div>
        <div>
          <img src="/assets/nations.png" alt="Investor-Vietnam" />
        </div>
      </div>
    </div>
  )
}

export default Investor

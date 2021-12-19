import React from "react"

const Journey = () => {
  return (
    <div className="flex flex-col bg-black items-center px-36 text-center">
      <p className="text-white text-3xl mt-32 mb-6">
        Join Our Journey to Reinvent Real Estate Investing with Technology
      </p>
      <p className="text-lightGrey">
        {`Invest in Zenihub via our utility token, "Zeni Coin", which will be traded on a public
        exchange.`}
      </p>
      <p className="text-lightGrey mb-20">
        Profits from Zenihub will be used to buy back and burn Zeni Coins until we reduce the total
        supply in the market down to 50% of the issued amount.
      </p>
      <div>
        <img src="/assets/map.png" />
      </div>
      <div className="text-clay border-clay border-[1px] px-10 py-2 select-none cursor-pointer my-20">
        <p>Register to Invest in Zeni Coins</p>
      </div>
    </div>
  )
}

export default Journey

import React from "react"

const Introduce = () => {
  return (
    <div className="flex flex-col w-screen max-w-[1920px] pt-[120px]">
      <div className="w-full h-[200px] flex flex-row">
        <div className=" bg-backgroundIntroduce1 w-[75.1%]"></div>
        <div className=" bg-backgroundIntroduce2 w-[24.9%]"></div>
      </div>
      <div className="flex relative flex-col">
        <div className="w-full h-[37vw] max-h-[711px] flex flex-row">
          <div className="bg-backgroundIntroduce1 w-[75.1%]"></div>
          <div className="bg-backgroundIntroduce2 w-[24.9%]"></div>
        </div>
        <div className="absolute">
          <img src="/assets/introduce.png" alt="Introduce" />
        </div>
        <div className="absolute pl-14 top-[-260px] font-[Haragino]">
          <p className="text-[72px]">Our Journey to Reinvent</p>
          <p className="text-[72px]">Real Estate Investing</p>
        </div>
      </div>
      <div className="flex flex-col px-36 mb-28">
        <div className=" pt-36 text-[32px] font-medium">
          <p>Making High-Yielding Real Estate Investment</p>
          <p>Opportunities Accessible and Affordable</p>
        </div>
        <div className="w-full h-[2px] bg-line mt-16" />
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3 pt-16">
            <p className=" text-2xl font-medium pb-3">High-Yielding Properties</p>
            <p>
              {
                "Zenihub offers high-yielding real estate investment opportunities that are: Sourced and vetted by Zenihub's professional staff in the target region"
              }
            </p>
          </div>
          <div className="h-[170px] w-[3px] bg-line mx-8" />
          <div className="flex flex-col w-1/3 pt-16">
            <p className=" text-2xl font-medium pb-3">Secure and Accessible</p>
            <p>
              {
                "Zenihub utilizes a secure ledger based on blockchain technology, which enables quick transactions that do not require the tedious paperwork and high transaction costs that are associated with the traditional way of purchasing real estate."
              }
            </p>
          </div>
          <div className="h-[170px] w-[3px] bg-line mx-8" />
          <div className="flex flex-col w-1/3 pt-16">
            <p className=" text-2xl font-medium pb-3">Affordable and with Increased Liquidity</p>
            <p className="pb-2">
              Zenihub provides investors with the option to invest in a fraction of a particular
              real estate project, hence investors are able to make their investment in smaller
              amounts.
            </p>
            <p>
              If an investor wishes to sell a Zeni Token at any given point in time, Zenihub
              provides a secondary market where the investor can sell it to other investors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Introduce

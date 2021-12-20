import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper"
SwiperCore.use([Pagination, Navigation])
import "swiper/css"
import "swiper/css/pagination"

const listProject = [
  {
    img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTJKRASqom1vtb6q_v2VM49t7MkEyEhd-JGULIaB-oqNObmHudt0UMfC75kjLLBbFeMWeohDANOxH6Fcns6-K4",
    address: "【Vietnam】123 Main, 123 Main, Vietnam",
    name: "Keangnam building",
    token_name: "1,000,000.00",
    token_price: "1,000,000.00",
    market_quantity: "100,000,000,000.00",
    price_by_area: "10,000,000/m2",
    floor_area: "10,000m2",
  },
  {
    img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTJKRASqom1vtb6q_v2VM49t7MkEyEhd-JGULIaB-oqNObmHudt0UMfC75kjLLBbFeMWeohDANOxH6Fcns6-K4",
    address: "【Vietnam】123 Main, 123 Main, Vietnam",
    name: "Keangnam building",
    token_name: "1,000,000.00",
    token_price: "1,000,000.00",
    market_quantity: "100,000,000,000.00",
    price_by_area: "10,000,000/m2",
    floor_area: "10,000m2",
  },
  {
    img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTJKRASqom1vtb6q_v2VM49t7MkEyEhd-JGULIaB-oqNObmHudt0UMfC75kjLLBbFeMWeohDANOxH6Fcns6-K4",
    address: "【Vietnam】123 Main, 123 Main, Vietnam",
    name: "Keangnam building",
    token_name: "1,000,000.00",
    token_price: "1,000,000.00",
    market_quantity: "100,000,000,000.00",
    price_by_area: "10,000,000/m2",
    floor_area: "10,000m2",
  },
  {
    img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTJKRASqom1vtb6q_v2VM49t7MkEyEhd-JGULIaB-oqNObmHudt0UMfC75kjLLBbFeMWeohDANOxH6Fcns6-K4",
    address: "【Vietnam】123 Main, 123 Main, Vietnam",
    name: "Keangnam building",
    token_name: "1,000,000.00",
    token_price: "1,000,000.00",
    market_quantity: "100,000,000,000.00",
    price_by_area: "10,000,000/m2",
    floor_area: "10,000m2",
  },
  {
    img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTJKRASqom1vtb6q_v2VM49t7MkEyEhd-JGULIaB-oqNObmHudt0UMfC75kjLLBbFeMWeohDANOxH6Fcns6-K4",
    address: "【Vietnam】123 Main, 123 Main, Vietnam",
    name: "Keangnam building",
    token_name: "1,000,000.00",
    token_price: "1,000,000.00",
    market_quantity: "100,000,000,000.00",
    price_by_area: "10,000,000/m2",
    floor_area: "10,000m2",
  },
]

const Project = () => {
  return (
    <div className="flex flex-col bg-projectBg ">
      <p className="text-white text-3xl font-medium mt-28 mb-10 px-[170px]">New Projects</p>
      <div className="pl-[170px] select-none">
        <Swiper
          spaceBetween={30}
          freeMode={true}
          grabCursor={true}
          loop={true}
          slidesPerView={1}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          breakpoints={{
            1500: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1050: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          className="mySwiper w-full"
        >
          <>
            {listProject.map((project) => {
              return (
                <>
                  {" "}
                  <SwiperSlide>
                    <div className="flex flex-col w-[445px]">
                      <div className="w-[445px] h-[280px]">
                        <img src={project.img} />
                      </div>
                      <p className="pt-[40px] pb-4 text-heavyGrey text-xs">{project.address}</p>
                      <p className=" text-2xl font-medium text-white ">{project.name}</p>
                      <div className="w-[50px] h-[1px] bg-white my-4" />
                      <div className="flex flex-row text-tint text-2xl font-medium pb-3">
                        <div className="w-1/2">
                          <p>Token name</p>
                        </div>
                        <div className="w-1/2">
                          <p>{project.token_name}</p>
                        </div>
                      </div>
                      <div className="flex flex-row mb-3">
                        <div className="w-1/2 flex flex-col">
                          <p className="text-heavyGrey text-xs">token price</p>
                          <p className="text-white font-medium">{project.token_price}</p>
                        </div>
                        <div className="w-1/2 flex flex-col">
                          <p className="text-heavyGrey text-xs">market quantity</p>
                          <p className="text-white font-medium">{project.market_quantity}</p>
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="w-1/2 flex flex-col">
                          <p className="text-heavyGrey text-xs">price by area</p>
                          <p className="text-white font-medium">{project.price_by_area}</p>
                        </div>
                        <div className="w-1/2 flex flex-col">
                          <p className="text-heavyGrey text-xs">floor area</p>
                          <p className="text-white font-medium">{project.floor_area}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              )
            })}
          </>
        </Swiper>
      </div>
      <div className="h-[1px] bg-heavyGrey my-10 mx-[170px]" />
      <div className="flex flex-row mx-[170px] mb-28 justify-between">
        <div className="flex flex-row items-center select-none">
          <div className="text-clay border-clay border-[1px] px-10 py-2 select-none cursor-pointer mr-[54px]">
            <p>Register to Invest in Zeni Coins</p>
          </div>
          <p className="text-clay cursor-pointer">Already a registered user? Log in</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="swiper-button-prev cursor-pointer">
            <img src="assets/left.svg" />
          </div>
          <div className="swiper-button-next cursor-pointer">
            <img src="assets/right.svg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project

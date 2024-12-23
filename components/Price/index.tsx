import React, { useState } from "react"
import { motion } from "framer-motion"
import { HiOutlinePaintBrush } from "react-icons/hi2"
import { IoIosInformationCircleOutline } from "react-icons/io"
import { PiBrowserDuotone, PiLinkSimpleLight } from "react-icons/pi"
import { TbBrowserOff } from "react-icons/tb"

import { priceCardData } from "@/config/constants"
import { fadeInAnimationByIndex } from "@/lib/animations"

import Container from "../Container"
import Switch from "../Switch"
import PriceCard from "./price-card"

const PriceSection = () => {
  const [isToggled, setToggled] = useState(false)

  const SvgItem = (
    <svg
      width="75"
      height="72"
      viewBox="0 0 75 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_205_5272)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.9735 23.9626C48.0499 24.4132 48.118 24.801 48.1551 25.0058C48.3837 26.2512 48.5761 29.4135 49.4578 31.5642C50.1298 33.2052 51.204 34.264 52.8376 33.8827C54.3224 33.536 55.2467 32.0557 55.6915 30.0092C56.6488 25.6048 55.4944 18.5684 54.5967 16.5328C54.4986 16.3106 54.2399 16.2099 54.0177 16.308C53.7965 16.4056 53.6958 16.6643 53.7939 16.8865C54.6549 18.8402 55.7529 25.5947 54.8339 29.8231C54.4745 31.4757 53.8371 32.748 52.6376 33.0278C51.4539 33.3044 50.7573 32.4213 50.2701 31.2317C49.4116 29.1388 49.2406 26.06 49.0187 24.8472C48.8792 24.087 48.429 21.1726 48.3303 20.9321C48.2068 20.6309 47.9513 20.6391 47.8677 20.6481C47.8029 20.655 47.4819 20.7102 47.4673 21.109C47.2563 26.7949 42.997 35.3741 36.732 41.117C30.5222 46.8096 22.3119 49.713 14.0866 44.0661C13.8865 43.9293 13.613 43.9802 13.4757 44.1793C13.339 44.3793 13.3899 44.6528 13.5899 44.7896C22.2084 50.7062 30.8193 47.7282 37.3249 41.7647C42.808 36.7388 46.7736 29.59 47.9735 23.9626Z"
          fill="#0D121F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.305 44.6634C15.3365 44.5784 16.3662 44.5267 17.3917 44.3615C20.1239 43.922 22.8698 42.8867 25.0858 41.2126C25.2794 41.0657 25.3171 40.7906 25.1716 40.5974C25.0247 40.4038 24.7495 40.3661 24.5564 40.5116C22.4543 42.1016 19.8447 43.0776 17.2525 43.4943C16.0786 43.6828 14.8977 43.7207 13.7163 43.8335C13.6574 43.8398 13.1426 43.8731 13.0359 43.91C12.7869 43.9944 12.7377 44.1884 12.7264 44.2811C12.7161 44.3585 12.7222 44.4535 12.7724 44.5597C12.8142 44.6465 12.9321 44.7928 13.1313 44.9548C13.7678 45.4759 15.427 46.4781 15.6819 46.6714C18.6044 48.8871 20.9514 51.4391 23.4895 54.064C23.6586 54.2377 23.937 54.2427 24.1111 54.0746C24.2853 53.9065 24.2893 53.6286 24.1212 53.4544C21.5511 50.796 19.1708 48.2151 16.2124 45.9729C16.0377 45.8394 15.029 45.1536 14.305 44.6634Z"
          fill="#0D121F"
        />
      </g>
      <defs>
        <clipPath id="clip0_205_5272">
          <rect
            width="57.0685"
            height="50.03"
            fill="white"
            transform="translate(74.1777 45.3687) rotate(153.036)"
          />
        </clipPath>
      </defs>
    </svg>
  )

  const priceCardImgs = [
    [
      [<TbBrowserOff />],
      [<PiBrowserDuotone />],
      [<PiLinkSimpleLight />],
      [<HiOutlinePaintBrush />],
    ],
  ]

  return (
    <div
      id="pricing"
      className="flex items-center w-full relative overflow-hidden transaction-all"
    >
      <div className="w-full flex flex-col items-center gap-4 text-white">
        <div className="flex flex-col items-center gap-20 w-full justify-start">
          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-2xl mt-20 leading-[48px] font-bold text-center max-w-[700px] text-[#FF4500]">
              Tailored pricing plans designed for you
            </h3>
            <p className="text-xl mt-2 text-center max-w-[1000px] text-description leading-[1.5]">
              All plans include advanced tools and features to boost your
              conversion rate. Choose the best plan to fit your needs.
            </p>
            <motion.p
              className="text-secondary-light text-xl text-center mt-3 max-w-[500px]"
              variants={fadeInAnimationByIndex}
              initial="initial"
              animate="animate"
            >
              Choose a plan that suits your business needs
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 relative ">
            <div className="flex flex-row items-center gap-4 w-full">
              <p className="text-[#FF4500] text-xl font-semibold text-center max-w-[500px]">
                {" "}
                Pay Monthly
              </p>
              <Switch
                isToggled={isToggled}
                setToggled={() => setToggled(!isToggled)}
              />
              <p className="text-[#FF4500] text-xl font-semibold text-center max-w-[500px]">
                {" "}
                Pay Yearly
              </p>
              <div className="absolute right-[-20px] top-10">{SvgItem}</div>
            </div>
            <div className="flex whitespace-nowrap flex-row mt-6 text-black py-1 px-3 font-semibold items-center gap-6 bg-background-light rounded-full">
              Save 20%
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-6 ms:grid-cols-3 mg:grid-cols-2">
              {priceCardData.map((priceCard, index: number) => (
                <div
                  key={index}
                  className={`${
                    index === 2 ? "mg:col-span-2 mg:w-1/2 mg:mx-auto" : ""
                  } flex flex-col items-center justify-center w-full p-6 bg-white rounded-lg`}
                >
                  <PriceCard
                    logo={priceCard.logo}
                    title={priceCard.title}
                    description={priceCard.description}
                    priceMonthly={priceCard.priceMonthly}
                    priceYearly={priceCard.priceYearly}
                    features={priceCard.features.map((feature) => ({
                      ...feature,
                      isInformationCircleIncluded:
                        feature.isInformationCircleIncluded ?? false,
                    }))}
                    isYearly={isToggled}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceSection

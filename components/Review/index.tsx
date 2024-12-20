import React, { useRef } from "react"
import { motion } from "framer-motion"
import SwiperCore from "swiper"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/autoplay"
import { reviewCardData, reviewPanelDatas } from "@/config/constants"

const ReviewSection = () => {
  const swiperRef = useRef<SwiperCore | null>(null)

  return (
    <div id="reviews" className="w-full">
      {/* Reviews Section */}
      <div className="flex items-center w-full bg-[linear-gradient(138.18deg,#eae8fd,#fce5e6_94.44%)] py-16 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full flex flex-col items-center gap-6"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-between w-full mt-8 sm:mt-16">
            {/* Content Section */}
            <div className="flex flex-col items-center justify-center w-full lg:w-1/3 text-center">
              <h4 className="text-sm text-gray-600">Real Customers Reviews</h4>
              <h3 className="text-3xl sm:text-4xl mt-3 leading-[48px] font-bold max-w-[300px] text-gray-600">
                What people say
              </h3>
              <p className="text-gray-600 text-base sm:text-xl leading-8 mt-3 max-w-[500px]">
                See what our customers have to say about their experience.
              </p>
            </div>

            {/* Cards Section */}
            <div className="w-full lg:w-2/3">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                loop
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                slidesPerGroup={1}
                className="w-full"
              >
                {reviewCardData.map((slide, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex items-stretch" // Ensure all slides stretch to fill height
                  >
                    <div className="w-full flex flex-col items-center justify-between bg-white p-6 rounded-lg shadow-md text-center min-h-[250px]">
                      {/* Quote */}
                      <p className="text-gray-700 italic text-xl mb-4 flex-grow">
                        {slide.description}
                      </p>

                      {/* User Info */}
                      <div className="flex items-center space-x-3 mt-auto">
                        <img
                          src={slide.image}
                          alt={slide.Name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="text-gray-900 font-bold">
                            {slide.Name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {slide.Position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Panel Data Section */}
      <div className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-center text-2xl sm:text-3xl font-bold mb-10 text-gray-600">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviewPanelDatas.map((reviewPanelData, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center border-2 rounded-lg p-8 ${reviewPanelData.borderColor}`}
              >
                {/* Icon */}
                <div
                  className={`text-6xl mb-6 ${reviewPanelData.iconColor}`} // Icon size and color
                >
                  {reviewPanelData.icon}
                </div>

                {/* Value */}
                <h3 className="text-3xl font-bold text-gray-500">
                  {reviewPanelData.value}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-center">
                  {reviewPanelData.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
import React from "react"

interface ContainerProps {
  children: React.ReactNode
  bgColor?: string
}

const Container = ({ children, bgColor }: ContainerProps) => {
  return (
    <div
      className={`container sm:my-28 my-5 mx-auto px-7 sm:px-10 lg:px-10 bg-[${bgColor}] relative  `}
    >
      <div className="flex flex-col items-center gap-4 ">{children}</div>
    </div>
  )
}

export default Container

import { useEffect, useState } from "react"

export default function SlideShow() {

  const images = [
    "el1.jpg",
    "el2.jpg",
    "el3.jpg",
    "el4.jpg",
    "el5.jpg",
    "el6.jpg",
    "el7.jpg",
    "el8.jpg",
    "el9.jpg",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1
          ? 0
          : prevIndex + 1
      )

    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (
    <>
      <h1
        id="images"
        className="
          text-4xl
          sm:text-5xl
          md:text-7xl
          font-black
          text-white
          tracking-wider
          text-center
          mt-10
          hover:scale-105
          transition-all
          duration-500
        "
      >
        HIGHLIGHTS
      </h1>

      <div className="flex justify-center items-center py-10 px-4">

        <div
          className="
            relative
            p-2
            md:p-3
            rounded-[35px]
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            shadow-[0_0_40px_rgba(168,85,247,0.4)]
            w-full
            max-w-[700px]
          "
        >

          <div
            className="
              absolute
              inset-0
              rounded-[35px]
              bg-gradient-to-r
              from-purple-500/20
              via-pink-500/20
              to-cyan-500/20
              blur-xl
              -z-10
            "
          ></div>

          <img
            src={images[currentIndex]}
            alt="slideshow"
            className="
              w-full
              h-[220px]
              sm:h-[320px]
              md:h-[400px]
              object-cover
              object-center
              rounded-[28px]
              transition-all
              duration-700
            "
          />

        </div>

      </div>
      <div
        id="sponsors"
        className="
          rounded-xl
          px-4
          md:px-10
          lg:px-20
          py-2
          w-full
        "
      >

        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-black
            text-white
            tracking-wider
            text-center
            mt-10
            mb-10
            hover:scale-105
            transition-all
            duration-500
          "
        >
          SPONSORS
        </h1>

        <img
          src="Screenshot 2026-05-21 130823.png"
          alt="Sponsors"
          className="
            rounded-xl
            w-full
            h-auto
            object-cover
            mb-10
          "
        />

      </div>

    </>
  )
}
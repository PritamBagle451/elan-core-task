export default function Mid() {
  return (
    <>
      <div className="text-white mx-4 md:mx-10 pb-10 relative z-10">

        <button
          className="
            block
            mt-4
            mx-auto
            bg-gradient-to-r
            from-pink-500
            to-purple-500
            text-white
            px-6 md:px-8
            py-3 md:py-4
            rounded-full
            text-base md:text-lg
            font-semibold
            shadow-[0_0_30px_rgba(236,72,153,0.7)]
            hover:scale-105
            hover:shadow-[0_0_45px_rgba(236,72,153,1)]
            transition-all
            duration-300
          "
        >
          <a href="https://elan-beta.web.app/Workshops">
            Register For Workshops
          </a>
        </button>

        <div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px] items-center justify-center">

            <div className="flex flex-col">

              <h3
                className="
                  text-[18px] md:text-[28px]
                  leading-[32px] md:leading-[45px]
                  tracking-[2px] md:tracking-[3px]
                  font-medium
                  uppercase
                  relative
                  inline-block
                  pb-4
                "
              >
                <span
                  className="
                    bg-gradient-to-r
                    from-cyan-400
                    via-purple-400
                    to-pink-500
                    bg-clip-text
                    text-transparent
                    font-semibold
                    [text-shadow:0_0_15px_rgba(168,85,247,0.5)]
                  "
                >
                  South India's Biggest
                </span>

                <br />

                <span className="text-white tracking-[5px]">
                  Techno-Cultural Fest
                </span>

                <div
                  className="
                    absolute
                    left-0
                    bottom-0
                    w-32
                    h-[3px]
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-pink-500
                    shadow-[0_0_20px_rgba(168,85,247,0.8)]
                  "
                ></div>

              </h3>

              <h1
                className="
                  text-5xl md:text-7xl
                  my-5
                  font-light
                  leading-none
                  tracking-wide
                  [text-shadow:0_0_25px_rgba(168,85,247,0.7)]
                "
              >
                ELAN & <br /> nVISION
              </h1>

              <h2
                className="
                  text-3xl md:text-5xl
                  my-3
                  font-semibold
                  text-[#f8fafc]
                "
              >
                2026
              </h2>

              <h4
                className="
                  text-lg md:text-2xl
                  my-4
                  text-gray-200
                  font-light
                "
              >
                Where Innovation meets imagination
              </h4>

              <div
                className="
                  flex
                  flex-col sm:flex-row
                  items-center
                  gap-2
                  text-lg
                  mt-4
                "
              >

                <p className="text-gray-300">
                  5th-Jan 2026 - 7th-Jan 2026 |
                </p>

                <a
                  className="
                    text-[#ff4da6]
                    font-semibold
                    tracking-wide
                  "
                >
                  IIT HYDERABAD
                </a>

              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-4">

                <button
                  className="
                    bg-gradient-to-r
                    from-pink-500
                    to-purple-500
                    text-white
                    px-8
                    py-4
                    rounded-full
                    text-lg
                    font-semibold
                    shadow-[0_0_30px_rgba(236,72,153,0.7)]
                    hover:scale-105
                    hover:shadow-[0_0_45px_rgba(236,72,153,1)]
                    transition-all
                    duration-300
                  "
                >
                  <a href="https://elan-beta.web.app/Events">
                    Explore Events
                  </a>
                </button>

                <a
                  className="
                    text-white
                    text-lg md:text-xl
                    hover:text-[#c084fc]
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                  href="#video"
                >
                  ▶ Watch Video
                </a>

              </div>

            </div>

            <div>

              <h1
                id="video"
                className="
                  mt-6
                  text-2xl md:text-4xl
                  font-bold
                  text-white
                  tracking-wide
                  [text-shadow:0_0_20px_rgba(168,85,247,0.8)]
                  text-center
                  md:mt-16
                "
              >
                ELAN AFTERMOVIE 2025
              </h1>

              <div className="flex justify-center items-center py-16">

                <div
                  className="
                    relative
                    p-2 md:p-4
                    rounded-[35px]
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/20
                    shadow-[0_0_40px_rgba(168,85,247,0.4)]
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

                  <iframe
                    src="https://www.youtube.com/embed/ttbe0l-dyF0"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="
                       rounded-[28px]
                    overflow-hidden
                    w-[95vw]
                    sm:w-[90vw]
                    md:w-[650px]
                    lg:w-[650px]
                    xl:w-[720px]
                    h-[220px]
                    sm:h-[320px]
                    md:h-[420px]
                    "
                  ></iframe>

                </div>

              </div>

            </div>

          </div>
        </div>

        <div
          className="
            flex
            flex-wrap
            gap-8
            bg-black/40
            mt-14
            border
            border-white/10
            rounded-[35px]
            p-6 md:p-8
            w-full
            items-center
            justify-around
            backdrop-blur-xl
            shadow-[0_0_35px_rgba(168,85,247,0.25)]
          "
        >

          <div
            className="
              text-center
              hover:scale-110
              transition-all
              duration-300
            "
          >

            <h1 className="text-2xl md:text-4xl font-bold text-[#c084fc]">
              <i className="fa-solid fa-people-group"></i> 50K+
            </h1>

            <p className="text-base md:text-xl text-gray-300 mt-2">
              Participants
            </p>

          </div>

          <div
            className="
              text-center
              hover:scale-110
              transition-all
              duration-300
            "
          >

            <h1 className="text-2xl md:text-4xl font-bold text-[#c084fc]">
              <i className="fa-solid fa-calendar"></i> 100+
            </h1>

            <p className="text-base md:text-xl text-gray-300 mt-2">
              Events
            </p>

          </div>

          <div
            className="
              text-center
              hover:scale-110
              transition-all
              duration-300
            "
          >

            <h1 className="text-2xl md:text-4xl font-bold text-[#c084fc]">
              <i className="fa-solid fa-building-columns"></i> 200+
            </h1>

            <p className="text-base md:text-xl text-gray-300 mt-2">
              Colleges
            </p>

          </div>

          <div
            className="
              text-center
              hover:scale-110
              transition-all
              duration-300
            "
          >

            <h1 className="text-2xl md:text-4xl font-bold text-[#c084fc]">
              <i className="fa-solid fa-trophy"></i> 20+
            </h1>

            <p className="text-base md:text-xl text-gray-300 mt-2">
              Workshops
            </p>

          </div>

        </div>

      </div>
    </>
  )
}
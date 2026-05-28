export default function Cards() {
  return (
    <div
      className="
        flex
        flex-col
        xl:flex-row
        gap-10
        text-white
        mt-10
        p-4
        md:p-8
        mx-4
        md:mx-8
        rounded-3xl
        bg-black/10
        backdrop-blur-xl
        border border-white/20
        shadow-2xl
        justify-center
        items-center
      "
    >
      <div
        className="
          flex flex-col
          justify-between
          p-4 md:p-6
          rounded-2xl
          w-full
          max-w-[400px]
          hover:scale-105
          transition-all
          duration-300
          text-center
          xl:text-left
        "
      >
        <div>
          <h2 className="text-sm tracking-[4px] text-purple-300 uppercase">
            competitions
          </h2>

          <h1 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">
            Experiences <br /> that inspire
          </h1>

          <p className="text-gray-300 mt-5 leading-7 text-sm md:text-base">
            From electrifying concerts and engaging workshops
            to dramatic performances — discover a universe
            of events crafted for every passion.
          </p>

        </div>

        <button
          className="
            mt-8
            bg-purple-500
            hover:bg-purple-600
            px-6
            py-3
            rounded-xl
            font-semibold
            transition-all
            duration-300
            shadow-lg
            w-full
            md:w-fit
            mx-auto
            xl:mx-0
          "
        >
          <a href="https://elan-beta.web.app/Competitions">
            View All Competitions
          </a>
        </button>

      </div>
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
          w-full
          place-items-center
        "
      >
        <div
          className="
            flex flex-col
            justify-start
            rounded-2xl
            bg-white/5
            border border-white/10
            w-full
            max-w-[250px]
            h-[230px]
            hover:-translate-y-2
            hover:bg-white/10
            transition-all
            duration-300
          "
        >
          <img
            src="coding.jpg"
            alt="Coding Event"
            className="w-full h-32 object-cover rounded-t-2xl"
          />
          <div className="p-3 flex flex-col justify-center items-center text-center">

            <h2 className="text-sm text-cyan-300 tracking-widest">
              CODE, BUILD, WIN
            </h2>

            <h1 className="text-2xl font-bold">
              Coding & <br /> Development
            </h1>

          </div>
        </div>
        <div
          className="
            flex flex-col
            justify-start
            rounded-2xl
            bg-white/5
            border border-white/10
            w-full
            max-w-[250px]
            h-[230px]
            hover:-translate-y-2
            hover:bg-white/10
            transition-all
            duration-300
          "
        >
          <img
            src="robtics.jpg"
            alt="Robotics Event"
            className="w-full h-32 object-cover rounded-t-2xl"
          />
          <div className="p-3 flex flex-col justify-center items-center text-center">

            <h2 className="text-sm text-pink-300 tracking-widest">
              AUTONOMOUS FUTURE
            </h2>

            <h1 className="text-2xl font-bold">
              Robotics & <br /> AI
            </h1>
          </div>
        </div>
        <div
          className="
            flex flex-col
            justify-start
            rounded-2xl
            bg-white/5
            border border-white/10
            w-full
            max-w-[250px]
            h-[230px]
            hover:-translate-y-2
            hover:bg-white/10
            transition-all
            duration-300
          "
        >
          <img
            src="drmatics.jpg"
            alt="Dramatics Event"
            className="w-full h-32 object-cover rounded-t-2xl"
          />
          <div className="p-3 flex flex-col justify-center items-center text-center">

            <h2 className="text-sm text-yellow-300 tracking-widest">
              IRSHAAD
            </h2>

            <h1 className="text-2xl font-bold">
              Dramatics
            </h1>

          </div>
        </div>
        <div
          className="
            flex flex-col
            justify-start
            rounded-2xl
            bg-white/5
            border border-white/10
            w-full
            max-w-[250px]
            h-[230px]
            hover:-translate-y-2
            hover:bg-white/10
            transition-all
            duration-300
          "
        >
          <img
            src="music.jpg"
            alt="Music Event"
            className="w-full h-32 object-cover rounded-t-2xl"
          />
          <div className="p-3 flex flex-col justify-center items-center text-center">
            <h2 className="text-sm text-green-300 tracking-widest">
              NRITYANJALI
            </h2>
            <h1 className="text-2xl font-bold">
              Music <br /> & Dance
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
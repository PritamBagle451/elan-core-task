export default function Header() {
  return (
    <header
      className="
        text-white
        flex
        flex-col
        lg:flex-row
        justify-between
        items-center
        py-4
        px-4
        md:px-8
        gap-6
      "
    >

      <img
        src="logo.png"
        alt="Elan Logo"
        className="w-28 sm:w-36 md:w-40"
      />

      <div className="flex items-center justify-center w-full">

        <nav
          className="
            flex
            flex-wrap
            justify-center
            gap-4
            md:gap-8
            text-center
          "
        >

          <a
            href="#"
            className="hover:text-yellow-500 text-sm md:text-lg transition-all duration-300"
          >
            Home
          </a>

          <a
            href="#"
            className="hover:text-yellow-500 text-sm md:text-lg transition-all duration-300"
          >
            About
          </a>

          <a
            href="#sponsors"
            className="hover:text-yellow-500 text-sm md:text-lg transition-all duration-300"
          >
            Sponsors
          </a>

          <a
            href="#images"
            className="hover:text-yellow-500 text-sm md:text-lg transition-all duration-300"
          >
            Gallery
          </a>

          <a
            href="https://elan.org.in/workshops"
            className="hover:text-yellow-500 text-sm md:text-lg transition-all duration-300"
          >
            Workshops
          </a>

          <a
            href="https://elan-beta.web.app/Events"
            className="hover:text-yellow-500 text-sm md:text-lg transition-all duration-300"
          >
            Events
          </a>

          <a
            href="https://elan.org.in/contact"
            className="hover:text-yellow-500 text-sm md:text-lg transition-all duration-300"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  )
}
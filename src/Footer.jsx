export default function Footer(){
return (<footer className="bg-black/90 text-white mt-10">
  <div
    className="
      flex
      flex-col
      lg:flex-row
      justify-evenly
      items-center
      py-6
      px-6
      gap-10
      lg:gap-0
    "
  >
    <div className="flex flex-col gap-6">

      <div className="flex items-center gap-2">

        <img
          src="elanl.png"
          alt="Elan logo"
          className="h-12 w-12 rounded-full bg-white/10 object-cover"
        />

        <span className="text-xl font-semibold text-blue-200">
          Elan Events
        </span>
      </div>
      <div className="flex gap-3 justify-center lg:justify-start">

        <a
          href="https://www.instagram.com/elan_nvision.iith"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 border border-purple-200"
        >
          <i className="fa-brands fa-instagram text-white"></i>
        </a>

        <a
          href="https://www.linkedin.com/company/elan-nvision-iith?originalSubdomain=in"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 border border-purple-200"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://www.youtube.com/@ElanIITHyderabad"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 border border-purple-200"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>

        <a
          href="https://www.facebook.com/elannvision.iithyderabad"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 border border-purple-200"
        >
          <i className="fa-brands fa-square-facebook"></i>
        </a>

      </div>

      <p className="text-purple-200 text-center lg:text-left">
        Mail us:
        {" "}
        <a href="https://mail.google.com/mail/u/0/#inbox">
          elan@sa.iith.ac.in
        </a>
      </p>

    </div>

    <div id="foot" className="space-y-3 text-center lg:text-left">

      <h1 className="text-2xl font-bold text-blue-300">
        Contact Us
      </h1>

      <p className="text-sm leading-7 text-purple-200">
        Manikanta Uppulapu, Overall Head
        <br />
        77300 06389
        <br />
        Sumedh Kashikar, Head of Public Relations
        <br />
        76010 41880
      </p>

    </div>

  </div>

  <div className="border-t border-white/20 py-4 text-purple-200">

    <h1 className="text-center text-sm md:text-xl">
      © 2023, All rights reserved, Elan & ηVision
    </h1>

  </div>

</footer>)
}
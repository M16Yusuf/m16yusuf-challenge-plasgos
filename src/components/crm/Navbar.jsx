import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 flex h-[70px] w-full justify-center transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between p-3">
        <div className="w-[120px] cursor-pointer">
          <img
            src="/crm/plg-logo-D6Raik_a.png"
            className="w-full object-contain"
            alt="Logo"
          />
        </div>
        <div className="hidden gap-x-12 md:flex">
          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            className="relative z-10 flex max-w-max flex-1 flex-col items-center justify-center"
          >
            <div style={{ position: "relative" }}>
              <ul
                data-orientation="horizontal"
                className="group flex flex-1 list-none items-center justify-center space-x-1"
                dir="ltr"
              >
                <div className="flex gap-x-5">
                  <a href="#home">
                    <p
                      className="font-raleway hover:text-primary text-primary cursor-pointer font-semibold transition-all duration-200 ease-in-out lg:mx-5"
                      data-radix-collection-item=""
                    >
                      Home
                    </p>
                  </a>
                  <a href="#solusi">
                    <p
                      className="font-raleway hover:text-primary cursor-pointer font-semibold transition-all duration-200 ease-in-out lg:mx-5"
                      data-radix-collection-item=""
                    >
                      Solusi
                    </p>
                  </a>
                  <a href="#fitur">
                    <p
                      className="font-raleway hover:text-primary cursor-pointer font-semibold transition-all duration-200 ease-in-out lg:mx-5"
                      data-radix-collection-item=""
                    >
                      Fitur
                    </p>
                  </a>
                  <a href="#pricing">
                    <p
                      className="font-raleway hover:text-primary cursor-pointer font-semibold transition-all duration-200 ease-in-out lg:mx-5"
                      data-radix-collection-item=""
                    >
                      Harga
                    </p>
                  </a>
                  <a
                    href="https://plasgos.co.id/crm/doc-api.html"
                    target="_blank"
                  >
                    <p
                      className="font-raleway hover:text-primary cursor-pointer font-semibold transition-all duration-200 ease-in-out lg:mx-5"
                      data-radix-collection-item=""
                    >
                      API Doc
                    </p>
                  </a>
                </div>
              </ul>
            </div>
            <div className="absolute top-full left-0 flex justify-center"></div>
          </nav>
        </div>
        <div className="hidden gap-x-3 md:flex">
          <a href="https://www.plasgos.co.id/login?p=https%3A%2F%2Fwww.plasgos.co.id%2Fcrm%2F">
            <button className="focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
              Login
            </button>
          </a>
          <a href="https://www.plasgos.co.id/register?p=https%3A%2F%2Fwww.plasgos.co.id%2Fcrm%2F">
            <button className="focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
              Register
            </button>
          </a>
        </div>
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r6:"
          data-state="closed"
          className="md:hidden"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            viewBox="0 0 17 17"
            className="transition-all duration-200 ease-in-out hover:scale-110"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g></g>
            <path d="M16 2v2h-11v-2h11zM5 9h11v-2h-11v2zM5 14h11v-2h-11v2zM2 2c-0.552 0-1 0.447-1 1s0.448 1 1 1 1-0.447 1-1-0.448-1-1-1zM2 7c-0.552 0-1 0.447-1 1s0.448 1 1 1 1-0.447 1-1-0.448-1-1-1zM2 12c-0.552 0-1 0.447-1 1s0.448 1 1 1 1-0.447 1-1-0.448-1-1-1z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;

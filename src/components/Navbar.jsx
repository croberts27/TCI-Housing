import { Link } from "react-router-dom";
// import { Menu } from "@headlessui/react";

function Navbar() {
  // const location = useLocation();

  // const isActive = (path) => {
  //   if (location.pathname === "/contact") {
  //     return "text-black"; // For Contact page
  //   }
  //   return "text-white"; // For other pages
  // };

  return (
    <header className="relative text-white shadow-lg inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between  lg:px-12"
        aria-label="Global"
      >
        {/* ... (other code remains unchanged) ... */}

        <div className="hidden lg:flex lg:gap-x-12">
          {/* <Menu
            as="div"
            className={`inline-flex w-full items-center justify-center px-1 pt-1 text-xl font-medium ${isActive(
              "/about"
            )}`}
          > */}
          {/* <Link
            className="border-gray-300 inline-flex items-center border-b-2 px-1 pt-1 text-xl font-medium"
            to="/about"
          >
            About
          </Link> */}
          {/* </Menu> */}

          {/* <Menu
            as="div"
            className={`inline-flex w-full items-center justify-center px-1 pt-1 text-xl font-medium ${isActive(
              "/contact"
            )}`}
          > */}
          <Link
            to="/contact"
            className="border-gray-300 inline-flex w-full align-top items-center justify-center border-b-2 px-1 pt-1 text-xl font-medium"
          >
            Contact Us
          </Link>
          {/* </Menu> */}
        </div>

        {/* <Link
            className="inline-flex items-center border-b-2 border-white px-1 pt-1 text-xl font-medium text-white"
            to="/contact"
          >
            Contact Us
          </Link> */}

        <div className="flex lg:flex-1 justify-end items-center">
          <Link className="-m-1.5 p-1.5" to="/">
            <img
              className="h-20 w-auto"
              src="src\images\tci-logo-trans.png"
              alt="TCI Housing Logo"
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          {/* <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">TCI Housing</span>
                  <img
                    className="h-8 w-auto"
                    src="./src/images/tci-logo-trans.png"
                    alt="tci logo"
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2  py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog> */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

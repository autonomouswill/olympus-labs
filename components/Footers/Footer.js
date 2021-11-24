import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="block py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center">
            <ul className="flex flex-wrap list-none md:justify-center">
              <li>
                <a
                  href="https://www.creative-tim.com/presentation?ref=nnjs-footer-admin"
                  className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-admin"
                  className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  Legal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

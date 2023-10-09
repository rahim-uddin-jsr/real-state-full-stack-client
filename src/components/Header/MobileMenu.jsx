/* eslint-disable react/prop-types */
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MobileMenu({ children }) {
  return (
    <>
      <Menu as="div" className="text-left">
        <>
          <Menu.Button className="inline-flex w-full h-full justify-center rounded-md px-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg
              className="w-8 dark:fill-white fill-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </Menu.Button>
        </>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-1/2 -translate-x-1/2 max-w-lg w-screen mt-[18px] origin-top-right divide-y divide-gray-100 rounded-b-md rounded-t-none bg-white dark:bg-primary-dark/[.6] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 flex flex-col w-full">{children}</div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

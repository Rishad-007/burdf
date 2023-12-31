import React from "react";
import { MdMail } from "react-icons/md";

export const Committee = ({ name, url, pod, fb, mail }) => {
  return (
    <div className="flex flex-col min-w-[300px] bg-[#d87f2c] shadow-2xl items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#8B1500] rounded-xl">
      <img
        className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
        src={url}
        alt=""
      />

      <h1 className="mt-4 h-12 text-2xl font-semibold text-gray-950 capitalize dark:text-black group-hover:text-white">
        {name}
      </h1>

      <p className="mt-2 text-gray-900 capitalize dark:text-black group-hover:text-gray-300">
        {pod}
      </p>

      <div className="flex mt-3 -mx-2">
        <a
          href={mail}
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
          aria-label="Gmail"
        >
          <MdMail className="text-2xl" />
        </a>

        <a
          href={fb}
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
          aria-label="Facebook"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

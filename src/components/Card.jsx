import React from "react";

export const Card = ({ name, url,pod1,pod2 }) => {
  return (
    <div>
      <div className="w-auto mt-7 h-full mr-7 p-2 ml-6 bg-white border border-gray-100 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={url} alt="moderator pic" />
        <div className="pl-2">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {pod1} <br />
            {pod2} <br />
            Begum Rokeya university, Rangpur.
          </p>
        </div>
      </div>
    </div>
  );
};

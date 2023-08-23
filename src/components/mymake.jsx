import React from "react";

export const Mymake = ({ name, url, deg, department }) => {
  return (
    <div className=" max-w-sm mt-7 mr-7 ml-6 wrapper antialiased text-gray-900">
      <div className="max-w-sm mt-7 mr-7 ml-6">
        <div className="relative px-4  leading-tight">
          <div className="bg-white bg-contain p-3 rounded-lg shadow-lg">
            <h6 className="mt-1 text-lg font-semibold text-center uppercase leading-tight truncate">
              {deg}
            </h6>
          </div>
        </div>
        <img
          src={url}
          alt=" random imgee"
          className=" object-cover -mt-7 object-center rounded-lg shadow-md"
        />
        <div className="relative px-4 -mt-16 leading-tight">
          <div className="bg-white p-3 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold leading-tight truncate">{name}</h3>
            <p className="text-sm">Commettee 2022-2023</p>
            <p>
              {department}
              <br />
              Begum rokeya university, rangpur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

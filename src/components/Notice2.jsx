import React from "react";

export const Notice2 = ({ tittle, discription, link }) => {
  return (
    <div>
      {/* <!-- Notice 1 --> */}
      <div class="bg-white p-6 rounded-lg shadow-xl">
        <h3 class="text-xl font-semibold mb-2">{tittle}</h3>
        <p class="text-gray-700">{discription}</p>
        <a href={link} class="mt-4 inline-block text-blue-600 hover:underline">
          Google Form link
        </a>
      </div>
    </div>
  );
};

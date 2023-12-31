import React from "react";

export const Notice = ({ tittle, discription, link }) => {
  return (
    <div>
      {/* <!-- Notice 1 --> */}
      <div class="bg-white h-100  p-6 rounded-lg shadow-xl">
        <h3 class="text-xl font-semibold mb-2">{tittle}</h3>
        <p class="text-gray-700">{discription}</p>
        <a href={link} class="mt-4 inline-block text-blue-600 hover:underline">
          View on Facebook
        </a>
      </div>
    </div>
  );
};

import React from "react";


export const Events = ({ Event_name_1, Time_1,Time_2,Time_3, Event_name_2, Event_name_3 }) => {
  return (
    <div>
      <div className="bg-gray-100 py-16">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-semibold mb-8">We Practice Every week</h2>
          <p class="text-gray-700 mb-8">
            Join us every week on Wednesday and Saterday for exciting debate
            sessions!
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <!-- Practice Schedule --> */}
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4">Practice Schedule</h3>
              <p class="text-gray-700 mb-2">Wednesday: 3:30 PM - 5:00 PM</p>
              <p class="text-gray-700">Satarday: 3:30 PM - 5:00 PM</p>

              <div className="py-10">
                To become new member,{" "}
                <a href="https://forms.gle/4yDhqeKhBXtjgWPr7" className="text-cyan-600">Fill this LINK</a>
              </div>
            </div>

            {/* <!-- Upcoming Events --> */}
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4">Upcoming Events</h3>
              <div class="grid grid-cols-3 gap-4">
                {/* <!-- Event 1 --> */}
                <div class="text-center">
                  <div class="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* <!-- Your SVG icon code here --> Date: October 10 */}
                    </svg>
                  </div>
                  <p class="text-gray-700 font-semibold mb-1">{Event_name_1}</p>
                  <p class="text-gray-500 text-sm mb-2">{Time_1}</p>
                  <a href="#" class="text-blue-500 hover:underline">
                    Learn More
                  </a>
                </div>
                {/* <!-- Event 2 --> */}
                <div class="text-center">
                  <div class="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* <!-- Your SVG icon code here --> */}
                    </svg>
                  </div>
                  <p class="text-gray-700 font-semibold mb-1">{Event_name_2}</p>
                  <p class="text-gray-500 text-sm mb-2">{Time_2}</p>
                  <a href="#" class="text-blue-500 hover:underline">
                    Learn More
                  </a>
                </div>
                {/* <!-- Event 3 --> */}
                <div class="text-center">
                  <div class="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* <!-- Your SVG icon code here --> */}
                    </svg>
                  </div>
                  <p class="text-gray-700 font-semibold mb-1">{Event_name_1}</p>
                  <p class="text-gray-500 text-sm mb-2">{Time_3}</p>
                  <a href="#" class="text-blue-500 hover:underline">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

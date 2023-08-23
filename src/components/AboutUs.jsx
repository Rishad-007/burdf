import React from "react";

export const AboutUs = () => {
  return (
    <div>
      <section className="h-auto bg-[#EFD9A2] py-7">
        <div class="bg-[#EFD9A2] py-16">
          <div class="container mx-auto flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 lg:pr-16 p-8">
              <img
                src="../src/assets/image/IMG_4753.JPG"
                alt="About Us"
                class="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div class="lg:w-1/2 mt-8 lg:mt-0">
              <h2 class="text-5xl md:text-left text-center font-semibold mb-4">
                About Us
              </h2>
              <p class="text-gray-700">
                <p className="text-justify px-4 md:px-0">
                  <b>Begum Rokeya University Debate Forum (BRUDF)</b> Founded in
                  2016, on August 25th, the Begum Rokeya University Debate Forum
                  (BRUDF) has emerged as a vibrant space for intellectual
                  exploration. With a committee comprising 41 members, including
                  a Chief Moderator and three Moderators, BRUDF is a dynamic
                  platform for diverse discussions. <br /> BRUDF practices
                  various debate formats such as Asian Parliamentary, British
                  Parliamentary, Classic, and Panel Debates. Beyond refining
                  rhetoric, the forum is deeply committed to social initiatives,
                  blending dialogue with positive impact. <br /> The forum's
                  prestigious debate tournaments not only showcase its members'
                  talents but also extend coaching to school and college
                  debaters. BRUDF's consistent success in debate circuits
                  highlights its influence and excellence. <br /> With sessions
                  held twice a week, BRUDF covers both Bangla and English
                  debates, fostering linguistic and intellectual growth. As it
                  continues to evolve, BRUDF remains a catalyst for discourse,
                  transforming communication into a tool for leadership and
                  change.
                </p>
              </p>
              <br />
              <div className="md:mx-3 mx-28">
                <a href="https://www.facebook.com/brudf.2016">
                  <button
                    type="button"
                    class="text-white  bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Our Facebook page
                  </button>
                </a>
                <a href="https://www.facebook.com/groups/1019690851430799" className="px-2">
                  <button
                    type="button"
                    class="text-white  bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Our Facebook group
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#EFD9A2] p-5">
          <div class="container mx-auto flex justify-center">
            <div class="md:w-[560px] md:h-[315px] w-[400px] h-[300px] aspect-w-16 aspect-h-9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Vr3Sacil2qs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

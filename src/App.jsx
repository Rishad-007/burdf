import "./App.css";
import Img from "./assets/images/B87D291C-AC18-54E0-B03D-F7B7E4C2DC18.png";
import { Card } from "./components/Card";
import { GeneralMembers } from "./components/GeneralMembers";
import { Committee } from "./components/committee";
import { Events } from "./components/Events";
import { AboutUs } from "./components/AboutUs";
import { Notice } from "./components/Notice";
import { Notice2 } from "./components/Notice2";
import { ImageCardv2 } from "./components/ImageCardv2";

function App() {
  return (
    <div className="min-h-screen w-full">
      <section className="h-auto bg-gradient-to-r from-[#F6BE30] to-[#8B1500] py-14">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div className="text-3xl pl-3 font-bold">
                যুক্তি...সততা...মুক্তি
              </div>
              <div className="mt-11 pl-3 text-6xl md:text-5xl lg:text-7xl mb-7 font-bold max-w-lg">
                <p className="text-zinc-950">
                  Begum Rokeya University Debate Forum (BRUDF)
                </p>
              </div>
            </div>
            <div className="justify-end">
              <img class=" w-auto lg:max-w-3xl " src={Img} alt="logo" />
            </div>
          </div>
        </div>
      </section>

      <AboutUs></AboutUs>
      <section className="h-auto bg-[#e7ca80] py-14">
        <div>
          <div className="mx-auto text-center font-bold text-3xl">
            Our Moderators
            <hr className="w-1/5 mx-auto mt-1" />
          </div>

          <div className="container px-6 mx-auto grid grid-cols-1 items-stretch gap-2 mt-2 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Card
              name="Prof. Dr. Tuhin Wadud"
              pod1="Chief Moderator,"
              pod2="Professor, Department of Bangla,"
              url="assets/image/mod1.jpg"
            />
            <Card
              name="A. B. M. Nurullah"
              pod1="Moderator,"
              pod2="Assistant Professor, Department of Sociology,"
              url="assets/image/mod2.jpg"
            />
            <Card
              name="Md Rakibul Islam Bhuiyan"
              pod1="Moderator,"
              pod2="lecturer, Management Information System,"
              url="assets/image/mod3.jpg"
            />
            <Card
              name="Niaz Makhdum"
              pod1="Moderator,"
              pod2="lecturer, Department of Public Administration,"
              url="assets/image/mod4.jpg"
            />
          </div>
        </div>
      </section>

      <section className="h-auto pt-4 pb-12 bg-[#edc96d] dark:bg-gray-800">
        <div>
          <div>
            <div className="text-3xl pt-5 font-semibold  text-center text-gray-800 capitalize lg:text-4xl dark:text-zinc-50   ">
              Executive commettee
              <hr className="w-1/4 mt-2 mx-auto" />
            </div>
            <div className="container px-6 pt-2 mx-auto">
              <div className="grid grid-cols-1 items-stretch gap-8 mt-5 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                <Committee
                  name="Israt Jahan Tumpa"
                  url="assets/image/tumpa.jpg"
                  fb="https://www.facebook.com/isratjahan8311"
                  pod="President (2023-2024)"
                  mail="mailto:tisrat57@gmail.com"
                />
                <Committee
                  name="MD. Rishad Nur"
                  url="assets/image/Rishad.jpg"
                  pod="General secratery (2023-2024)"
                  mail="mailto:rishad.nur007@gmail.com"
                  fb="https://www.facebook.com/rishad.nur"
                />
              </div>
            </div>

            <div>
              <GeneralMembers />
            </div>
          </div>
        </div>
      </section>

      <section className="h-auto bg-[#e7b73c] py-7">
        <div class="container mx-auto">
          <h2 class="text-2xl font-semibold text-center mb-6">
            <span class="border-b-2 border-gray-600 pb-2">Notice Board</span>
          </h2>
          <div class="grid items-stretch h-auto grid-cols-2 px-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Notice
              tittle="নতুন সদস্য রেজিস্ট্রেশন "
              discription="বিশ্ববিদ্যালয় এর নবাগত ১৫ তম ব্যাচকে স্বাগতম। বেগম রোকেয়া ইউনিভার্সিটি ডিবেট ফোরাম প্রতিবারের মত এবারে নতুন সদস্যদের বিতর্ক অঙ্গনে যুক্ত করার লক্ষ্যে 'নতুন সদস্য সংগ্রহ করছে'। আপনি যদি একজন উপস্থাপক/পাবলিক স্পিকার/বিতার্কিক হতে চান, এখনি নিম্নক্ত ফর্মটি পূরণ করে ফেলুন"
              link="https://forms.gle/M5RU5PhhWoLZGfPY9"
            />
            <Notice
              tittle="New Executive Committee Election"
              discription="Upcoming 24th of august, an election will take place to construct new executive committee. go to link to learn more."
              link="https://www.facebook.com/groups/1019690851430799/permalink/6611195522280276/?app=fbl"
            />
            <Notice
              tittle="Tournament final"
              discription="Final Debate of the 'Intra Brudf tournament 2023' will take place in 25th august, 2023 at Cafeteria,BRUR "
              link="#"
            />
            <Notice
              tittle="New Committee announcement"
              discription="at 25th march, new committee will be formend. the committe will be active for one year"
              link="https://fb.watch/mzrmZgoe5F/"
            />
          </div>
        </div>
      </section>
      <section className="h-auto pt-4 pb-12 bg-[#edc96d] dark:bg-gray-800">
        <h2 class="text-4xl font-semibold text-center mb-6">
          <span class="border-b-2 border-gray-600 pb-2 dark:text-cyan-50">
            Photo Gallery
          </span>
        </h2>
        <div class=" py-16">
          <div class="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="14 Batch freshers"
              url="assets/image/all members.jpg"
            />
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="26th march, 2023"
              url="assets/image/full1.jpg"
            />
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="On going debate"
              url="assets/image/IMG_2952.JPG"
            />

            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="15 august, 2023"
              url="assets/image/full2.jpg"
            />
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="Intra BRUDF Debate Tournament-2023"
              url="assets/image/upload1.jpg"
            />
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="Our chief moderator"
              url="assets/image/tuhin sir.jpg"
            />
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="Debate adda"
              url="assets/image/Round meeting.jpg"
            />
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="Rainy Debate"
              url="assets/image/IMG_6200.jpeg"
            />
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="Debate Evaluation"
              url="assets/image/IMG_6245.jpeg"
            />
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="Debate Evaluation"
              url="assets/image/IMG_6255.jpeg"
            />
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="Debate Evaluation"
              url="assets/image/IMG_6254.jpeg"
            />
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="Debate Evaluation"
              url="assets/image/IMG_6258.jpeg"
            />
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="Debate Evaluation"
              url="assets/image/IMG_6257.jpeg"
            />
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="মনোযোগী দর্শক"
              url="assets/image/monojog.jpeg"
            />
            <ImageCardv2
              link="https://www.facebook.com/rishad.nur"
              discription="আঞ্চলিক বিতর্ক শেষে আমাদের পরিবার"
              url="assets/image/all together.jpeg"
            />
          </div>
        </div>
      </section>

      {/* <section className="h-auto pt-4 pb-12 bg-[#edc96d]">
        <h2 class="text-3xl font-semibold text-center mb-6">
          <span class="border-b-2 border-gray-600 pb-2">Photo Gallery</span>
        </h2>
        <div class=" py-16">
          <div class="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div class="relative overflow-hidden rounded-lg shadow-md">
              <img
                src="assets/image/labu.jpg"
                alt="Photo 1"
                class="object-cover w-full h-full transition-transform transform hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-100 md:opacity-0 transition-opacity hover:opacity-100">
                <p class="text-sm">Beautiful Landscape</p>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg shadow-md">
              <img
                src="assets/image/tuli.jpg"
                alt="Photo 2"
                class="object-cover w-full h-full transition-transform transform hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-100 md:opacity-0 transition-opacity hover:opacity-100">
                <p class="text-sm">Urban Exploration</p>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg shadow-md">
              <img
                src="assets/image/IMG_3011.JPG"
                alt="Photo 1"
                class="object-cover w-full h-full transition-transform transform hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-100 md:opacity-0 transition-opacity hover:opacity-100">
                <p class="text-sm">Beautiful Landscape</p>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg shadow-md">
              <img
                src="assets/image/IMG_2952.JPG"
                alt="Photo 1"
                class="object-cover w-full h-full transition-transform transform hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-100 md:opacity-0 transition-opacity hover:opacity-100">
                <p class="text-sm">Beautiful Landscape</p>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-md">
              <img
                src="assets/image/IMG_4753.JPG"
                alt="Photo 1"
                class="object-cover w-full h-full transition-transform transform hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-100 md:opacity-0 transition-opacity hover:opacity-100">
                <p class="text-sm">Beautiful Landscape</p>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-md">
              <img
                src="assets/image/B87D291C-AC18-54E0-B03D-F7B7E4C2DC18.png"
                alt="Photo 1"
                class="object-cover w-full h-full transition-transform transform hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-100 md:opacity-0 transition-opacity hover:opacity-100">
                <p class="text-sm">Beautiful Landscape</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="px-4">
          <Events
            Event_name_1="Tournament Tab Round"
            Time_1="17 August, 2023"
            Event_name_2="Tournament Final"
            Time_2="25 August 2023"
            Event_name_3="New Commettee Anouncement"
            Time_3="25 August 2023"
          />
        </div>
      </section>

      <section>
        <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 Designed by{" "}
              <a
                href="https://www.facebook.com/rishad.nur"
                class="hover:underline"
              >
                Rishad Nur™
              </a>
              . . All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a
                  href="https://www.facebook.com/rishad.nur"
                  class="mr-4 hover:underline md:mr-6 "
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rishad.nur/"
                  class="mr-4 hover:underline md:mr-6"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:rishad.nur007@gmail.com"
                  class="mr-4 hover:underline md:mr-6"
                >
                  Gmail
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;

<template>
  <div class="overflow-hidden">
    <div class="">
      <div
        class="max-w-[1280px] px-5 pt-[80px] sm:pt-[90px] lg:pt-[100px] xl:pt-[120px] sm:px-10 mx-auto"
      >
        <div class="flex flex-wrap justify-center sm:justify-between">
          <div class="w-full sm:w-[60%] xl:w-[58%] obs banner">
            <img src="../assets/images/lgbg.svg" alt="" />
            <div
              class="flex w-full justify-center sm:justify-between mt-6 sm:mt-5 flex-wrap gap-3 sm:gap-0"
            >
              <img
                src="../assets/images/Frame 205.svg"
                alt=""
                class="h-[33px] sm:h-[22px] lg:h-[27px] xl:h-[37px]"
              />
              <img
                src="../assets/images/Frame 206.svg"
                alt=""
                class="h-[33px] sm:h-[22px] lg:h-[27px] xl:h-[37px]"
              />
              <img
                src="../assets/images/Frame 207.svg"
                alt=""
                class="h-[33px] sm:h-[22px] lg:h-[27px] xl:h-[37px]"
              />
              <img
                src="../assets/images/Frame 208.svg"
                alt=""
                class="h-[33px] sm:h-[22px] lg:h-[27px] xl:h-[37px]"
              />
              <img
                src="../assets/images/Frame 209.svg"
                alt=""
                class="h-[33px] sm:h-[22px] lg:h-[27px] xl:h-[37px]"
              />
            </div>
            <img
              src="../assets/images/Vector 1.svg"
              alt=""
              class="w-9 mx-auto mt-6 sm:hidden"
            />
            <div
              class="mt-4 lg:mt-12 flex flex-wrap justify-center sm:justify-normal"
            >
              <img
                src="../assets/images/Vector 1.svg"
                alt=""
                class="w-8 sm:w-6 xl:w-10 hidden sm:block"
              />
              <div
                class="text-white sm:ml-3 xl:ml-4 gr border-black border-2 rounded-full w-[85%] py-2 sm:py-0 sm:w-auto sm:px-4 xl:px-8 font-semibold flex items-center justify-center sm:text-[14px] lg:text-[16px] xl:text-[20px]"
              >
                13:00-18:00 | July 6, 2024
              </div>
            </div>
            <div
              class="mt-4 sm:mt-4 xl:mt-5 flex flex-wrap justify-center sm:justify-normal"
            >
              <img
                src="../assets/images/Vector 2.svg"
                alt=""
                class="sm:w-6 xl:w-10 hidden sm:block"
              />
              <div
                class="text-[#4285f4] text-center sm:text-left sm:ml-3 xl:ml-4 rounded-full sm:border-[#34A853] sm:border-2 sm:px-2 lg:px-4 xl:px-8 font-semibold flex items-center justify-center sm:text-[9px] lg:text-[12px] xl:text-[14px]"
              >
                <a
                  href="https://maps.app.goo.gl/xJbnVeKT6F7G6Gwo6"
                  target="_blank"
                  >Posts and Telecommunications Institute of Technology, 96A
                  Tran Phu, Ha Dong, Hanoi</a
                >
              </div>
            </div>

            <img
              src="../assets/images/Vector 1.svg"
              alt=""
              class="w-9 mx-auto mt-4 sm:hidden"
            />

            <img
              @click="goRegister"
              src="../assets/images/Group 877.svg"
              alt=""
              class="hidden sm:block sm:w-28 lg:w-32 xl:w-48 sm:mt-6 lg:mt-8 xl:mt-11 cursor-pointer"
            />
          </div>
          <img
            src="../assets/images/Group 80.png"
            alt=""
            class="w-full sm:w-[40%] hidden sm:block"
          />
        </div>
      </div>
      <div class="sm:hidden block mt-6">
        <div class="gradient-div w-full h-[2px]"></div>
        <marquee
          behavior=""
          scrollamount="8"
          loop="infinite"
          class="pt-2 pb-1 sm:pt-3 sm:pb-2"
          ><div class="flex">
            <div class="flex items-center">
              <span
                class="gradient-text-blue-green font-semibold text-[24px] sm:text-[36px] xl:text-[48px]"
                >Join the Tech Movement!</span
              >
              <img
                src="../assets/images/Vector 3.svg"
                alt=""
                class="w-8 sm:w-14 ml-4"
              />
            </div>
            <div class="flex items-center ml-24">
              <span
                class="gradient-text-blue-green font-semibold text-[24px] sm:text-[36px] xl:text-[48px]"
                >Join the Tech Movement!</span
              >
              <img
                src="../assets/images/Vector 3.svg"
                alt=""
                class="w-8 sm:w-14 ml-4"
              />
            </div>
            <div class="flex items-center ml-24">
              <span
                class="gradient-text-blue-green font-semibold text-[24px] sm:text-[36px] xl:text-[48px]"
                >Join the Tech Movement!</span
              >
              <img
                src="../assets/images/Vector 3.svg"
                alt=""
                class="w-8 sm:w-14 ml-4"
              />
            </div></div
        ></marquee>
      </div>

      <div class="gradient-div w-full h-[2px]"></div>
    </div>
    <div class="max-w-[1280px] px-5 sm:px-10 mx-auto sm:hidden mt-10">
      <img
        @click="goRegister"
        src="../assets/images/Group 877.svg"
        alt=""
        class="mx-auto block w-48"
      />
      <button
        @click="goMeeting()"
        class="mt-6 px-[35px] mx-auto block h-[46px] btn-gd text-white font-semibold rounded-[30px] transition duration-300 ease-in-out"
      >
        "1:1 Meeting with Experts"
      </button>
      <img src="../assets/images/Group 80.png" alt="" class="mx-auto mt-8" />
    </div>
  </div>
  <div class="hidden sm:block">
    <div class="gradient-div w-full h-[2px]"></div>
    <marquee
      behavior=""
      scrollamount="15"
      loop="infinite"
      class="pt-2 pb-1 sm:pt-3 sm:pb-2"
      ><div class="flex">
        <div class="flex items-center">
          <span
            class="gradient-text-blue-green font-semibold text-[28px] sm:text-[36px] xl:text-[48px]"
            >Join the Tech Movement!</span
          >
          <img
            src="../assets/images/Vector 3.svg"
            alt=""
            class="w-8 sm:w-14 ml-4"
          />
        </div>
        <div class="flex items-center ml-24">
          <span
            class="gradient-text-blue-green font-semibold text-[28px] sm:text-[36px] xl:text-[48px]"
            >Join the Tech Movement!</span
          >
          <img
            src="../assets/images/Vector 3.svg"
            alt=""
            class="w-8 sm:w-14 ml-4"
          />
        </div>
        <div class="flex items-center ml-24">
          <span
            class="gradient-text-blue-green font-semibold text-[28px] sm:text-[36px] xl:text-[48px]"
            >Join the Tech Movement!</span
          >
          <img
            src="../assets/images/Vector 3.svg"
            alt=""
            class="w-8 sm:w-14 ml-4"
          />
        </div></div
    ></marquee>

    <div class="gradient-div w-full h-[2px]"></div>
  </div>
  <div
    class="text-center xl:w-[1280px] px-5 sm:px-10 mx-auto mt-20 relative xl:mt-24"
  >
    <img
      src="../assets/images/Group 86.svg"
      alt=""
      class="absolute -z-10 w-[200px] hidden xl:block xl:right-10"
    />
    <img
      src="../assets/images/Group 87.svg"
      alt=""
      class="absolute -z-10 w-[200px] hidden xl:block xl:left-0"
    />
    <img
      src="../assets/images/WEB element_updatelocation (1).svg"
      alt=""
      class="mx-auto block w-[240px] xl:w-[555px] mt-10 xl:mt-20 title-about"
    />
    <span class="block text-[19px] mt-10 xl:mt-6 obs"
      >Dive into the future of tech at Google I/O Extended Hanoi 2024!
    </span>
    <p
      class="mt-8 xl:mt-10 text-[19px] sm:w-[500px] xl:w-[555px] mx-auto text-justify obs"
    >
      It's the local spin on Google's biggest developer conference - Google I/O,
      bringing you the updating of new technology and appropriate topics to meet
      the local community's demand. This year marks 9 years of igniting
      creativity and connections in Hanoi's tech community.
    </p>
    <p
      class="mt-10 xl:mt-8 text-[19px] sm:w-[500px] xl:w-[555px] mx-auto text-justify obs"
    >
      Join a community of passionate developers, entrepreneurs, and tech
      enthusiasts. Whether you're a seasoned pro or just starting out, Google
      I/O Extended Hanoi 2024 has something for you. Get ready to level up your
      skills, deepen your technical expertise, gain fresh perspectives, or
      simply connect with like-minded individuals. Google I/O Extended Hanoi
      2024 is designed to fuel your creativity and push the boundaries of what's
      possible.
    </p>
    <img
      src="../assets/images/Group 49.svg"
      alt=""
      class="block sm:hidden mx-auto mt-5 obs mb-2"
    />
    <div
      class="flex flex-wrap grid-cols-3 items-start justify-between mt-4 sm:mt-10"
    >
      <div class="text-center obs w-full sm:w-[49%] xl:w-[32%] mt-6 xl:mt-10">
        <img src="../assets/images/WEB_asset_01.png" alt="" />
        <span class="font-bold block mt-[15px] text-[18px] xl:text-[20px]"
          >Technical Talk</span
        >
        <span class="block mt-2 opacity-75"
          >Explore Google's latest technologies.</span
        >
      </div>
      <div class="text-center obs w-full sm:w-[49%] xl:w-[32%] mt-6 xl:mt-10">
        <img src="../assets/images/WEB_asset_02.png" alt="" />
        <span class="font-bold block mt-[15px] text-[18px] xl:text-[20px]"
          >Networking & Experience</span
        >
        <span class="block mt-2 opacity-75"
          >Meet and match with the experts & Challenge yourself.</span
        >
      </div>
      <div class="text-center obs w-full sm:w-[49%] xl:w-[32%] mt-6 xl:mt-10">
        <img src="../assets/images/WEB_asset_03.png" alt="" />
        <span class="font-bold block mt-[15px] text-[18px] xl:text-[20px]"
          >Exhibition</span
        >
        <span class="block mt-2 opacity-75"
          >Connect with career opportunities and exclusive experiences.</span
        >
      </div>
      <div
        class="text-center obs w-full sm:w-[49%] xl:w-[32%] mt-6 xl:mt-10 hidden sm:block xl:hidden"
      >
        <img src="../assets/images/image 77.png" alt="" />
        <span class="font-bold block mt-[15px] text-[18px] xl:text-[20px]"
          >Booth AI</span
        >
        <span class="block mt-2 opacity-75"
          >Interact with GDG Hanoi's AI virtual assistant "Bông"</span
        >
      </div>
      <div
        class="text-center obs w-full sm:w-[49%] xl:w-[32%] mt-6 xl:mt-10 hidden sm:block sm:mx-auto xl:mx-0 xl:hidden"
      >
        <img src="../assets/images/image 78.png" alt="" />
        <span class="font-bold block mt-[15px] text-[18px] xl:text-[20px]"
          >DevHunt Challenge</span
        >
        <span class="block mt-2 opacity-75"
          >Become a knowledge hunter and claim your awesome swags.</span
        >
      </div>
      <div
        class="w-full flex flex-wrap gap-x-6 justify-center obs sm:hidden xl:flex"
      >
        <div class="text-center obs w-full sm:w-[49%] xl:w-[32%] mt-6 xl:mt-10">
          <img src="../assets/images/image 77.png" alt="" />
          <span class="font-bold block mt-[15px] text-[18px] xl:text-[20px]"
            >Booth AI</span
          >
          <span class="block mt-2 opacity-75"
            >Interact with GDG Hanoi's AI virtual assistant "Bông".</span
          >
        </div>
        <div class="text-center obs w-full sm:w-[49%] xl:w-[32%] mt-6 xl:mt-10">
          <img src="../assets/images/image 78.png" alt="" />
          <span class="font-bold block mt-[15px] text-[18px] xl:text-[20px]"
            >DevHunt Challenge</span
          >
          <span class="block mt-2 opacity-75"
            >Become a knowledge hunter and claim your awesome swags.</span
          >
        </div>
      </div>
    </div>
  </div>
  <div class="text-[#212023] py-10">
    <div class="max-w-[1280px] px-5 sm:px-10 mx-auto">
      <h1
        class="text-[40px] sm:text-[44px] lg:text-[52px] font-semibold text-center sm:text-left title-speaker"
      >
        Our experts
      </h1>
      <div
        class="mt-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-11"
      >
        <div v-for="(item, index) in expertList" :key="index" class="">
          <img :src="item.image" alt="" class="cursor-pointer" />
          <div class="mt-3 w-full flex items-start">
            <img src="../assets/images/Group 69.svg" alt="" class="w-20" />
            <span class="ml-3 font-semibold">{{ item.topic }}</span>
          </div>
          <span
            @click="toggleExpertDetails(index)"
            class="hidden sm:block mt-3 cursor-pointer underline"
            >View Expert Profile</span
          >
          <span
            v-if="!item.isShowing"
            @click="toggleBio(index)"
            class="sm:hidden block mt-3 cursor-pointer underline"
            >Show Expert Profile</span
          >
          <span
            @click="toggleBio(index)"
            v-if="item.isShowing"
            class="sm:hidden block mt-3 cursor-pointer underline gradient-bio"
            >Hide Expert Profile</span
          >
          <img
            v-if="item.isShowing"
            src="../assets/images/bio-mb.svg"
            alt=""
            class="sm:hidden block mt-3 w-[84px]"
          />
          <p v-if="item.isShowing" class="mt-3 sm:hidden block text-justify">
            {{ item.bio }}
          </p>
        </div>
      </div>
      <img
        @click="goMeeting"
        src="../assets/images/Frame 2046.svg"
        alt=""
        class="block mx-auto w-[360px] mt-8 sm:mt-12 cursor-pointer"
      />
    </div>
  </div>
  <div
    v-if="isOpenExpertDetails"
    class="hidden sm:block fixed w-full z-[101] h-full top-0 left-0 bg-[rgba(0,0,0,0.4)] outer-container"
    @click="toggleExpertDetails"
  >
    <transition name="fade">
      <div v-show="isOpenExpertDetails" class="absolute inset-0 outer-div">
        <transition name="slide-in">
          <div
            v-show="innerVisible"
            class="pop absolute top-1/2 -translate-y-1/2 right-0 h-full bg-[#212023] sm:w-[80%] xl:w-[50%]"
            @click.stop
          >
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            >
              <div class="w-full relative mx-auto">
                <img
                  src="../assets/images/Rectangle 16.png"
                  alt=""
                  class="w-[90%] sm:h-[1100px] lg:h-[1250px] xl:h-auto absolute top-1/2 -translate-y-[calc(50%-1%)] left-1/2 -translate-x-[calc(50%-1%)]"
                />
                <div
                  class="w-[90%] absolute top-1/2 -translate-y-[calc(50%+1%)] left-1/2 -translate-x-[calc(50%+1%)]"
                >
                  <img
                    src="../assets/images/Rectangle 15.png"
                    alt=""
                    class="w-full sm:h-[1100px] lg:h-[1270px] xl:h-auto"
                  />
                  <div
                    class="absolute sm:top-[3%] xl:top-[4%] left-1/2 -translate-x-1/2 w-[93%]"
                  >
                    <img
                      :src="currentExpertImg"
                      alt=""
                      class="mx-auto w-full"
                    />
                    <div
                      class="mt-[5%] flex justify-between items-start pr-4 pb-10"
                    >
                      <img
                        src="../assets/images/Frame 20.svg"
                        alt=""
                        class="w-[18%]"
                      />
                      <p
                        class="block text-white w-[76%] text-justify xl:max-h-[125px] bio cursor-pointer overflow-y-scroll pr-2"
                      >
                        {{ currentExpertBio }}
                      </p>
                    </div>
                  </div>
                  <img
                    @click="toggleExpertDetails"
                    src="../assets/images/Group 5.svg"
                    alt=""
                    class="absolute sm:-top-2 lg:-top-2 xl:-top-2 -right-6 sm:w-[42px] lg:w-[54px] xl:w-[42px] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
  <agenda-compoent />
  <div class="text-center xl:w-[1280px] px-5 sm:px-10 mx-auto relative">
    <div
      v-if="isSuccess === null"
      class="block mt-10 relative overflow-x-hidden"
    >
      <img
        src="../assets/images/WEB_shape_7_1.png"
        alt=""
        class="w-[1000px] h-[2000px] xl:h-[2200px] mx-auto block"
        :class="{ 'h-[2250px]': isResizeImg, 'xl:h-[2350px]': isResizeImg }"
      />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl w-full sm:w-[550px] xl:w-[650px] py-8 px-8 sm:px-10 xl:py-[50px] xl:px-[60px] bg-white shadow-lg"
      >
        <img
          src="../assets/images/WEB_shape_4.png"
          alt=""
          class="absolute -top-8 -right-8 w-14 xl:w-16"
        />
        <span
          class="block mx-auto text-[24px] xl:text-[32px] font-semibold max-w-[400px] xl:max-w-full text-center"
          >Ready to Join Google I/O Extended Hanoi 2024!</span
        >
        <span class="mt-5 xl:mt-8 block"
          >Fill out this form to get the free ticket from GDG Hanoi.</span
        >
        <form
          @submit.prevent="submitForm()"
          action=""
          method="POST"
          class="mt-10 xl:mt-16"
        >
          <div class="relative">
            <label
              for="name"
              class="block text-left font-semibold cursor-pointer"
              >Full name</label
            >
            <input
              @input="onInput($event)"
              @blur="blurInput($event)"
              v-model="name"
              type="text"
              id="name"
              placeholder="Nguyen Van A"
              maxlength="255"
              class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-2 text-[17px]"
            />
            <span
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden"
              >Name is required</span
            >
          </div>
          <div class="relative mt-12">
            <label
              for="email"
              class="block text-left font-semibold cursor-pointer"
              >Email</label
            >
            <input
              @input="onInput($event)"
              @blur="blurInput($event)"
              v-model="email"
              type="email"
              id="email"
              placeholder="example@gmail.com"
              maxlength="255"
              class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-2 text-[17px]"
            />
            <span
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden"
              >Email is required</span
            >
            <h5
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden invalidEmail"
            >
              Invalid email address
            </h5>
          </div>
          <div class="relative mt-12">
            <label
              for="gender"
              class="block text-left font-semibold cursor-pointer"
              >Gender</label
            >
            <select
              @input="changeSelect($event)"
              v-model="gender"
              id="gender"
              class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-2 text-[17px] cursor-pointer"
            >
              <option disable value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <span
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden"
              >Gender is required</span
            >
          </div>
          <div class="relative mt-12">
            <label
              for="phoneNumber"
              class="block text-left font-semibold cursor-pointer"
              >Phone number</label
            >
            <input
              @input="onInput($event)"
              @blur="blurInput($event)"
              v-model="phoneNumber"
              type="tel"
              id="phoneNumber"
              placeholder="0xxx xxx xxx"
              maxlength="255"
              class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-2 text-[17px]"
            />
            <span
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden"
              >Phone number is required</span
            >
            <h5
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden invalidPhone"
            >
              Invalid phone number
            </h5>
          </div>
          <div class="relative mt-12">
            <label
              for="yearOfBirth"
              class="block text-left font-semibold cursor-pointer"
              >Year of birth</label
            >
            <input
              @input="onInput($event)"
              @blur="blurInput($event)"
              v-model="yearOfBirth"
              type="number"
              id="yearOfBirth"
              placeholder="yyyy"
              min="1900"
              max="2024"
              class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-2 text-[17px]"
            />
            <span
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden"
              >Year of birth is required</span
            >
          </div>
          <div class="relative mt-12">
            <label
              for="jobTitle"
              class="block text-left font-semibold cursor-pointer"
              >Job Title</label
            >
            <select
              @input="changeSelect($event)"
              v-model="jobTitle"
              id="jobTitle"
              class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-2 text-[17px] cursor-pointer"
            >
              <option disable value="">Select your occupation</option>
              <option value="CEO/ C-level">CEO/ C-level</option>
              <option value="CTO/ Tech lead">CTO/ Tech lead</option>
              <option value="Mobile Developer">Mobile Developer</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="AI Developer">AI Developer</option>
              <option value="Data">Data Analyst/Engineer/Scientist</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Non Technical">
                Non Technical Position: PM, QA, BA, Marketer,...
              </option>
              <option value="Post Graduate IT Student">
                Post Graduate IT Student
              </option>
              <option value="IT Student">IT Student</option>
              <option value="Other">Other/ Not on Tech field</option>
            </select>
            <span
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden"
              >Job Title is required</span
            >
          </div>
          <div v-if="jobTitle === 'Other'" class="relative mt-12">
            <label
              for="otherJob"
              class="block text-left font-semibold cursor-pointer"
              >Other:</label
            >
            <input
              @input="onInput($event)"
              @blur="blurInput($event)"
              v-model="otherJob"
              type="text"
              id="otherJob"
              placeholder="Your occupation"
              maxlength="255"
              class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-2 text-[17px]"
            />
            <span
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden"
              >Other job is required</span
            >
          </div>
          <div class="relative mt-12">
            <label
              for="company"
              class="block text-left font-semibold cursor-pointer"
              >Company</label
            >
            <input
              @input="onInput($event)"
              @blur="blurInput($event)"
              v-model="company"
              type="text"
              id="company"
              maxlength="255"
              placeholder="The organization that you are studying in or working for"
              class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-2 text-[17px]"
            />
            <span
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden"
              >Company is required</span
            >
          </div>
          <div class="relative mt-12">
            <label
              for="placeOfResidence"
              class="block text-left font-semibold cursor-pointer"
              >Your working location</label
            >
            <select
              @input="changeSelect($event)"
              id="placeOfResidence"
              class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-2 text-[17px] cursor-pointer"
              v-model="placeOfResidence"
            >
              <option selected value="">Place of Residence</option>
              <option v-for="item in dataProvince" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
            <span
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden"
              >Place of Residence is required</span
            >
          </div>
          <div class="relative mt-12">
            <label
              for="yearOfExperience"
              class="block text-left font-semibold cursor-pointer"
            >
              Year of experience in Programming
            </label>
            <select
              @input="changeSelect($event)"
              v-model="yearOfExperience"
              id="yearOfExperience"
              class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-2 text-[17px] cursor-pointer"
            >
              <option value="">Please select a range</option>
              <option value="Not">No experience/ Not a developer</option>
              <option value="0-1">0 - 1</option>
              <option value="1-2">1 - 2</option>
              <option value="2-3">2 - 3</option>
              <option value="3-4">3 - 4</option>
              <option value="4-5">4 - 5</option>
              <option value="5+">5+</option>
            </select>
            <span
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden"
            >
              Year of Experience is required
            </span>
          </div>
          <div class="relative mt-12">
            <label
              for="knowBy"
              class="block text-left font-semibold cursor-pointer"
              >How did you learn about the event?</label
            >
            <select
              @input="changeSelect($event)"
              v-model="knowBy"
              id="knowBy"
              class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-2 text-[17px] cursor-pointer"
            >
              <option selected value="">Select your answer</option>
              <option value="Website">Website</option>
              <option value="Facebook GDG Hanoi">Facebook GDG Hanoi</option>
              <option value="Linkedin">Linkedin</option>
              <option value="Email">Email</option>
              <option value="Your network (Friends, Colleagues, etc.)">
                Your network (Friends, Colleagues, etc.)
              </option>
              <option value="Media/Newspaper">Media/Newspaper</option>
              <option value="Other">Other</option>
            </select>
            <span
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden"
              >This question is required</span
            >
          </div>
          <div v-if="knowBy === 'Other'" class="relative mt-12">
            <label
              for="otherAnswer"
              class="block text-left font-semibold cursor-pointer"
              >Other:</label
            >
            <input
              @input="onInput($event)"
              @blur="blurInput($event)"
              v-model="otherAnswer"
              type="text"
              id="otherAnswer"
              maxlength="255"
              placeholder="How did you learn about the event?"
              class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-2 text-[17px]"
            />
            <span
              class="absolute left-0 bottom-0 translate-y-7 text-[14px] text-yellow hidden"
              >Other answer is required</span
            >
          </div>
          <div class="relative mt-12">
            <label
              for="anyQuestions"
              class="block text-left font-semibold cursor-pointer"
              >Do you have any questions for us?</label
            >
            <input
              v-model="anyQuestions"
              type="text"
              id="anyQuestions"
              maxlength="1024"
              class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-2 text-[17px]"
            />
          </div>
          <div class="mt-8 text-left flex items-center relative">
            <input
              @blur="blurInput($event)"
              @click="checkBox"
              type="checkbox"
              id="confirmTerm"
              class="cursor-pointer"
            />
            <label class="ml-3">
              I accept the
              <span
                @click="togglePrivacy"
                class="underline hover:no-underline cursor-pointer"
                >T&C</span
              ></label
            >
            <span
              class="absolute left-0 bottom-0 translate-y-6 text-[12px] text-yellow hidden term"
              >Term is required</span
            >
          </div>

          <button
            type="submit"
            class="w-full h-[60px] font-bold mt-[44px] bg-blue text-white rounded-lg hover:bg-black transition duration-300 ease-in-out"
          >
            SUBMIT FORM
          </button>
        </form>
      </div>
    </div>
    <div
      v-if="isSuccess === true"
      class="w-full bg-[#F6F9FB] px-5 py-5 sm:px-20 sm:py-20 rounded-lg mt-20"
    >
      <div
        class="px-[50px] py-[50px] sm:py-[70px] text-center mx-auto bg-white rounded-lg max-w-[700px] relative shadow-lg"
      >
        <h1 class="text-[28px] font-bold mrk inline-block">
          Thank you for registering!
          <img
            class="inline-block h-6 ml-2 mb-1"
            src="../assets/images/tick.svg"
            alt=""
          />
        </h1>

        <button
          @click="backToHome()"
          class="bg-blue text-white text-[16px] hover:bg-green transition ease-in-out duration-300 w-[80%] xl:w-[50%] py-3 mt-8 font-bold rounded-md"
        >
          BACK TO HOME
        </button>
        <img
          @click="changeStatus()"
          src="../assets/images/cross.png"
          alt=""
          class="w-10 absolute -top-2 -right-2 cursor-pointer opacity-90 hover:opacity-100"
        />
      </div>
    </div>
    <div
      v-if="isSuccess === false"
      class="w-full bg-[#F6F9FB] px-5 py-5 sm:px-20 sm:py-20 rounded-lg mt-20"
    >
      <div
        class="px-[50px] py-[50px] sm:py-[70px] text-center mx-auto bg-white rounded-lg max-w-[700px] relative shadow-lg"
      >
        <h1 class="text-[28px] font-bold mrk">Something is wrong.</h1>
        <span class="mt-3 block"
          >Please contact
          <a
            class="underline text-blue"
            href="https://www.facebook.com/GDGhanoi"
            >us</a
          >
          for help</span
        >
        <button
          @click="changeStatus()"
          class="bg-blue text-white text-[16px] hover:bg-green transition ease-in-out duration-300 w-[80%] xl:w-[50%] py-3 mt-8 font-bold rounded-md"
        >
          REGISTER AGAIN
        </button>
        <img
          @click="changeStatus()"
          src="../assets/images/cross.png"
          alt=""
          class="w-10 absolute -top-2 -right-2 cursor-pointer opacity-90 hover:opacity-100"
        />
      </div>
    </div>
    <div />

    <sponsor-component />
    <div class="max-w-[1280px] px-5 sm:px-10 mx-auto">
      <iframe
        class="mx-auto mt-20 w-full aspect-video rounded-2xl"
        src="https://www.youtube.com/embed/9IEii6PnuPI?si=Ieihommv4Tnk0UOM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div
      v-if="isShowPrivacy"
      class="h-full w-full bg-[rgba(0,0,0,0.7)] fixed top-0 left-0 z-[102] px-5 sm:px-10 overflow-y-scroll text-left"
    >
      <div
        class="w-full sm:w-[90%] xl:w-[85%] mx-auto my-6 bg-white rounded-lg py-5"
      >
        <div class="flex justify-between items-center px-6">
          <span class="text-[20px] font-semibold">Policy</span>
          <img
            @click="togglePrivacy"
            src="../assets/images/close.svg"
            alt=""
            class="opacity-70 hover:opacity-100 cursor-pointer"
          />
        </div>
        <div class="w-full h-[1px] bg-black mt-[18px] opacity-15"></div>
        <div class="px-6 mt-4 text-left">
          <h3 class="font-semibold text-[20px]">
            Privacy Policy Google I/O Extended Hanoi 2024
          </h3>
          <p class="mt-3">
            This Privacy Policy describes how Google Developer Group Hanoi
            (hereinafter referred to as "GDG Hanoi") collects and uses your
            personal information when you participate in the "Google I/O
            Extended Hanoi 2024" event (hereinafter referred to as "Event").
            This Privacy Policy does not apply to any products, services,
            websites or content that are provided by third parties or that use a
            separate privacy policy.
          </p>
          <span class="font-semibold text-[18px] mt-4 block"
            >This policy includes the following content:</span
          >
          <ul class="list-decimal mt-3 ml-8">
            <li>Personal information we collect</li>
            <li>How we use personal information</li>
            <li>How we share personal information</li>
            <li>Location of personal information</li>
            <li>How we protect personal information</li>
            <li>Access and selection</li>
            <li>Personal information of minors</li>
            <li>Term of storage of personal information</li>
            <li>Contact information, notices and amendments</li>
          </ul>
          <span class="font-semibold text-[18px] mt-4 block"
            >1. Personal information we collect</span
          >
          <span class="mt-3 block"
            >We collect your personal information during your participation in
            the Event. Below are the sources of information we collect:</span
          >
          <ul class="list-disc ml-8 mt-3">
            <li>
              Information you provide to us: We collect any information you
              provide in connection with the Event.
            </li>
            <li>
              Automatic Information: We automatically collect certain types of
              information when you participate in the Event.
            </li>
            <li>
              Information from other sources: We may collect information about
              you from other sources, including service providers, partners and
              publicly available sources.
            </li>
          </ul>
          <span class="mt-3 block"
            >You primarily provide us with information when you:</span
          >
          <ul class="list-disc ml-8 mt-3">
            <li>Search, register the Event;</li>
            <li>
              Create or manage your account on the Event's system, platform, and
              application;
            </li>
            <li>
              Contact us through all official means such as calling, messaging,
              email...;
            </li>
            <li>Complete questionnaires or other informational forms.</li>
          </ul>
          <span class="mt-3 block"
            >Depending on your participation in the Event, you may provide us
            with information such as:</span
          >
          <ul class="list-disc ml-8 mt-3">
            <li>
              Name, email address, address, phone number and other contact
              information;
            </li>
            <li>
              Information about your organization and your contacts, such as
              colleagues or people in your organization;
            </li>
            <li>Feedback, testimonials, questions, and exchanges with us;</li>
            <li>
              Your image (picture, video and in some cases 3-D), your voice and
              other personally identifiable characteristics when you attend the
              Event;
            </li>
            <li>
              Identity-related information, including government-issued
              identification information, and nationality.
            </li>
          </ul>
          <span class="font-semibold text-[18px] mt-4 block"
            >2. How we use personal information</span
          >
          <span class="mt-3 block"
            >Our purposes of using personal information include:</span
          >
          <ul class="list-disc ml-8 mt-3">
            <li>
              Event Organization: We use your personal information to provide
              Event-related information, including but not limited to
              registration, participation in advertising programs, and
              promotion.
            </li>
            <li>
              Make recommendations and personalize your experience: We use your
              personal information to recommend content that may be of interest
              to you, identify your interests, and personalize your experience
              at the Event.
            </li>
            <li>
              Comply with a legal obligation: In certain cases, we have a legal
              obligation to collect, use or store your personal information.
            </li>
            <li>
              Communication with you: We use your personal information to
              communicate with you about the Event-related matters through
              various channels (e.g. email, chat, SMS, phone call, etc.) and to
              answer your request.
            </li>
            <li>
              Marketing: We use your personal information to market and promote
              the Event as required by law.
            </li>
            <li>
              Some specific purposes require your consent: We may ask for your
              consent to use your personal information for a specific purpose
              when we contact you.
            </li>
          </ul>
          <span class="font-semibold text-[18px] mt-4 block"
            >3. How we share personal information</span
          >
          <span class="mt-3 block"
            >Information about you is an important part of our operations, and
            we do not sell your personal information to others. We share your
            information with the Event sponsors, who are subject to this Privacy
            Policy or similar. Besides, we only share personal information as
            outlined below.</span
          >
          <ul class="list-disc ml-8 mt-3">
            <li>
              Transactions involving third parties: We provide you with
              services, software and content provided by third parties for your
              use or through the Event. You can know when a third party is
              involved in your transactions and when we will share information
              related to those transactions with that third party.
            </li>
            <li>
              Restructuring, Business Transfer: During business development, we
              may sell or purchase legal entity or restructure other entity or
              services in accordance with the law. In such transactions,
              personal information, databases and the right to use information
              are generally among the transferred business assets, but the
              transferee is still subject to the provisions of this Policy (or
              with your consent). In addition, in the event that GDG Hanoi or
              most of GDG Hanoi's assets are purchased by another company, your
              information will become one of the transferred assets.
            </li>
            <li>
              Protect us and others: We disclose account and other personal
              information when we believe it is appropriate to comply with the
              law, to enforce or apply terms and agreements or to protect the
              rights, property or security of us, our customers, or any other
              person. The foregoing may include exchanging information with
              other companies and organizations to prevent and detect fraud and
              reduce asset and credit risks.
            </li>
            <li>
              Subject to your choice: In addition to the foregoing, you will
              receive notice when personal information about you may be shared
              with third parties and you will have the right not to consent to
              such use. share information.
            </li>
          </ul>
          <span class="font-semibold text-[18px] mt-4 block"
            >4. Location of personal information</span
          >
          <span class="mt-3 block"
            >GDG Hanoi is a community of programmers active in Hanoi, Vietnam.
            Depending on the extent of your interaction with the Event, your
            personal information may be stored in or accessed not only within
            Vietnam but also from many countries. When we transfer your personal
            information to other countries, we will ensure that it is
            transferred in accordance with this Privacy Policy and is permitted
            under applicable privacy laws.</span
          >
          <span class="font-semibold text-[18px] mt-4 block"
            >5. How we protect personal information</span
          >
          <span class="mt-3 block"
            >With GDG Hanoi, security is our highest priority. Our systems are
            designed with the safety and privacy of your information in mind. We
            have appropriate technical and security measures in place to prevent
            unauthorized access and use of personal information. We also
            regularly coordinate with security experts to update the latest
            information on network security to ensure the safety of personal
            information. When collecting data, we keep and secure personal
            information at the server system and this personal information is
            secured by firewalls, access control measures, data encrypt.</span
          >
          <span class="font-semibold text-[18px] mt-4 block"
            >6. Access and Selection</span
          >
          <span class="mt-3 block"
            >You may view, update and delete certain information about your
            account and interactions at the Event. If you are unable to manually
            access or update your information, you can always contact us for
            assistance.</span
          >
          <span class="mt-3 block"
            >If you want to add, update or delete your information, please
            contact us via email gdghanoi@gmail.com. When you update or delete
            any information, we usually keep a copy of the previous version for
            technical reasons.</span
          >
          <span class="font-semibold text-[18px] mt-4 block"
            >7. Personal information of minors</span
          >
          <span class="mt-3 block"
            >If you are under 18 years of age, you must obtain the consent of a
            parent or guardian before entering into a contract and accepting
            this Privacy Policy.</span
          >
          <span class="font-semibold text-[18px] mt-4 block"
            >8. Term of storage of personal information</span
          >
          <span class="mt-3 block"
            >We store your personal information to ensure your continued ability
            to participate in the Event, and store it for the period necessary
            to fulfill the objectives set forth in this Privacy Policy, or as
            required by law, or to perform other tasks as notified to you in
            advance. The term we retain specific personal information varies
            depending on the purpose of use, and we will delete your personal
            information in accordance with applicable laws.</span
          >
          <span class="font-semibold text-[18px] mt-4 block"
            >9. Contact information, notices and amendments</span
          >
          <span class="mt-3 block"
            >If you have any questions about privacy at GDG Hanoi for the Event,
            please contact us and we will try to answer your questions. You may
            also contact us via email gdghanoi@gmail.com.</span
          >
          <span class="mt-3 block"
            >The Event operations are subject to change and this Privacy Policy
            may also be amended. You should visit and check regularly to stay up
            to date with the most recent changes. Amending this Policy in no
            event will reduce the level of protection of personal information
            collected in the past without notifying you and giving you a
            choice.</span
          >
        </div>
        <div class="w-full h-[1px] bg-black mt-[18px] opacity-15"></div>
        <div class="flex justify-end items-center px-6 mt-5">
          <button
            @click="togglePrivacy"
            class="h-10 px-4 bg-[#6C757D] hover:bg-[#5C636A] rounded-md text-white mr-3 transition-all"
          >
            Close
          </button>
          <button
            @click="acceptPrivacy"
            class="h-10 px-4 bg-blue hover:bg-[#0B5ED7] rounded-md text-white transition-all"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import useCollection from "@/composables/useCollection";
import useDatabase from "@/composables/useDatabase";
import { PROVINCES } from "@/constants/index.js";
// import { register } from "@/api/register";
import SponsorComponent from "@/components/SponsorComponent.vue";
import AgendaCompoent from "@/components/AgendaComponent.vue";
export default {
  components: {
    SponsorComponent: SponsorComponent,
    AgendaCompoent: AgendaCompoent,
  },
  setup() {
    const router = useRouter();

    const name = ref("");
    const email = ref("");
    const gender = ref("");
    const phoneNumber = ref("");
    const yearOfBirth = ref("");
    const jobTitle = ref("");
    const otherJob = ref("");
    const company = ref("");
    const placeOfResidence = ref("");
    const yearOfExperience = ref("");
    const knowBy = ref("");
    const otherAnswer = ref("");
    const anyQuestions = ref("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    const dataProvince = PROVINCES;

    const isResizeImg = ref(false);
    const isShowPrivacy = ref(false);
    const isOk = ref(false);
    const isEmailValid = ref(true);
    const isPhoneValid = ref(true);
    const isAcceptTerm = ref(false);
    const isSuccess = ref(null);

    const currentExpertImg = ref("");
    const currentExpertBio = ref("");
    const innerVisible = ref(false);

    const expertList = reactive([
      {
        image: require("@/assets/images/ep7.png"),
        imageDetails: require("@/assets/images/ep7.png"),
        isShowing: false,
        topic: "Keynote: Google I/O Recap & What for Vietnam?",
        bio: "Tuan Le is an Application Modernization Specialist at Google Cloud which helps customers transform and build the next step for their business. Prior to joining Google Cloud, he was with Red Hat as a Senior Solution Architect and had spent some time working with Cloud Native Computing Foundation (CNCF) ecosystem.",
      },
      {
        image: require("@/assets/images/ep8.png"),
        imageDetails: require("@/assets/images/ep8.png"),
        isShowing: false,
        topic: "Công nghệ đang dịch chuyển 'mình' đi đâu?",
        bio: "Currently, Giap Le focuses on full-stack solutions as an expert in mobile apps, web apps, cloud, AI/ML and big data. With 16 years of experience in software development, he plays a key role such as CEO, CTO, Director of Software Engineering and Ant Solution architects at many large corporations and startups. Over 10 years of contributions to the tech community in Vietnam, he is also well-known for valuable presentations.",
      },
      {
        image: require("@/assets/images/ep9.png"),
        imageDetails: require("@/assets/images/ep9.png"),
        isShowing: false,
        topic: "Công nghệ đang dịch chuyển 'mình' đi đâu?",
        bio: "Ngo Duc Duy is a VJ/ Tech Reviewer/ Content Creator who has a youthful, endlessly creative style with lots of interesting content by acting out humorous situations. He owns the multi-platform channels called Ngo Duc Duy aka Duy Tham including YouTube, TikTok, Facebook from 2018 under Schannel MCN. Ngo Duc Duy was also honored as Content Creator of the Year - the most important category of the TikTok Awards Vietnam 2023 because of his contributions that bring positive values to the community.",
      },
      {
        image: require("@/assets/images/ep1.png"),
        imageDetails: require("@/assets/images/ep1.png"),
        isShowing: false,
        topic:
          "Supercharge Your Chatbot with RAG and Advanced Semantic Methods",
        bio: "Ba Ngoc, Vietnam's first Google-recognized Machine Learning expert and the 66th globally in 2019, is Founder/CEO of ProtonX and VietAI Hanoi. His visionary belief in the potential of machines to exceed human limits shapes his leadership. In 2020 and 2021, Ba Ngoc mentored over 120 programmers to achieve Google's Tensorflow certification, propelling Vietnam to a top-ranking position globally alongside the US, India, and Korea. In 2022, he founded ProtonX that is an AI company focused on using artificial intelligence to tackle critical social challenges.",
      },
      {
        image: require("@/assets/images/ep2.png"),
        imageDetails: require("@/assets/images/ep2.png"),
        isShowing: false,
        topic: "What's New in Android: Embracing the Era of Generative AI",
        bio: "Hassan is a Google Developers Expert for Android since 2016, with over 12 years of full-stack development experience as CTO at BeLive Technology in Singapore. He's known for creating the NexPlayer 360 Unity Plugin for iOS and Android, developing the Swift version of NexPlayer SDK, and contributing significantly to KineMaster, a popular video editing app with over 500 million users. Hassan shares his passion for Android and AI through blog posts, events, and conferences, actively engaging with the tech community.",
      },
      {
        image: require("@/assets/images/ep3.png"),
        imageDetails: require("@/assets/images/ep3.png"),
        isShowing: false,
        topic: "What's new in Flutter 3.22 and how to use them",
        bio: "Suesi is a Google Developer Expert specializing in Dart and Flutter, and holds the position of Senior Developer at Tabcorp, with over 16 years of experience in mobile software development. She also plays a key role in organizing events for the GDG Melbourne Community and serves as a Women Techmaker Ambassador in Melbourne, promoting diversity and empowerment in the IT industry",
      },
      {
        image: require("@/assets/images/ep4.png"),
        imageDetails: require("@/assets/images/ep4.png"),
        isShowing: false,
        topic:
          "Gemma: Gemini's Open-Source Twin and The Rise of Small Language Model for Everyone",
        bio: "A computer scientist turned full-stack ML engineer with 11 years in NLP and a software engineering background. She leads MLOps & AI at a major Vietnamese bank specializing in chatbots and data science as a hobby. She's also known for pioneering Neural Machine Translation and developing AI solutions like grammar correction and dialogue systems. She is founder of Beautiful Mind Vietnam promoting mental health awareness, and NeuroPurrfect AI mentoring in AI/ML and technical writing. Her passions are about AI, philosophy, books, gaming, dogs, cats, and home-brewed coffee.",
      },
      {
        image: require("@/assets/images/ep5.png"),
        imageDetails: require("@/assets/images/ep5.png"),
        isShowing: false,
        topic: "Automating MLOps Pipeline with Vertex AI and Cloud Deploy",
        bio: "Ananda is a Senior Cloud Infrastructure Engineer specializing in integrating cloud infrastructure, CI/CD workflows, and application modernization. Her expertise lies in leveraging AWS services like Amazon Elastic Kubernetes Service (EKS) and open-source tools to build robust, scalable systems. She is an avid technical speaker, presenting at local and regional meetups and conferences such as Kubernetes and OpenInfra Days Indonesia, Google Developers Devfest, and AWS Summit. Since 2017, Ananda has been actively sharing her technical insights on her blog, focusing on AWS services, cloud-native technologies, and open-source tools.",
      },
      {
        image: require("@/assets/images/ep6.png"),
        imageDetails: require("@/assets/images/ep6.png"),
        isShowing: false,
        topic:
          "Leverage and Manage Generative AI LLM Model capabilities with Firebase Genkit",
        bio: "Pradana has more than 7 years of professional experience in leading and mentoring people, driving and implementing technical objectives, collaborating with various stakeholders. Researching technologies and writing extensively on various technical topics such as AI/ML and AR/VR are in his favor. With appetite for success and passion for communities, Pradana has won multiple international hackathons as well as become professional speaker at various tech events.",
      },
    ]);

    const isOpenExpertDetails = ref(false);

    const { addRecord } = useCollection("formRegister");
    const { writeRegisterData } = useDatabase();

    function loadObserver() {
      const items = document.querySelectorAll(".obs");
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("banner")) {
              entry.target.classList.add("fade-in-right");
              observer.unobserve(entry.target);
            } else {
              entry.target.classList.add("fade-in-top");
              observer.unobserve(entry.target);
            }
          }
        });
      });

      items.forEach((item) => {
        observer.observe(item);
      });
    }

    function goMeeting() {
      router.push({ name: "OneOneMeeting", params: {} });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    function goRegister() {
      const form = document.querySelector("form");
      const formRect = form.getBoundingClientRect();
      const formTop = window.pageYOffset + formRect.top - 400;
      window.scrollTo({
        top: formTop,
        behavior: "smooth",
      });
    }

    function blurInput(event) {
      if (!event.target.value) {
        event.target.parentNode
          .querySelector("span")
          .classList.remove("hidden");
        if (event.target.id === "email") {
          event.target.parentNode
            .querySelector(".invalidEmail")
            .classList.add("hidden");
        } else if (event.target.id === "phoneNumber") {
          event.target.parentNode
            .querySelector(".invalidPhone")
            .classList.add("hidden");
        }
      } else {
        if (event.target.id === "email") {
          if (!emailRegex.test(email.value)) {
            event.target.parentNode
              .querySelector(".invalidEmail")
              .classList.remove("hidden");
            isEmailValid.value = false;
          } else {
            event.target.parentNode
              .querySelector(".invalidEmail")
              .classList.add("hidden");
            isEmailValid.value = true;
          }
        } else if (event.target.id === "phoneNumber") {
          if (!phoneRegex.test(phoneNumber.value)) {
            event.target.parentNode
              .querySelector(".invalidPhone")
              .classList.remove("hidden");
            isPhoneValid.value = false;
          } else {
            event.target.parentNode
              .querySelector(".invalidPhone")
              .classList.add("hidden");
            isPhoneValid.value = true;
          }
        }
      }
    }

    function onInput(event) {
      if (event.target.value) {
        event.target.parentNode.querySelector("span").classList.add("hidden");
      }
    }

    function changeSelect(event) {
      if (!event.target.value) {
        event.target.parentNode
          .querySelector("span")
          .classList.remove("hidden");
      } else {
        event.target.parentNode.querySelector("span").classList.add("hidden");
      }
    }

    function togglePrivacy() {
      isShowPrivacy.value = !isShowPrivacy.value;
    }

    function toggleBio(index) {
      expertList.forEach((item, i) => {
        if (index === i) {
          item.isShowing = !item.isShowing;
        }
      });
    }

    function checkBox() {
      const checkbox = document.querySelector("#confirmTerm");
      if (checkbox.checked) {
        document.querySelector(".term").classList.add("hidden");
        isAcceptTerm.value = true;
      } else {
        document.querySelector(".term").classList.remove("hidden");
        isAcceptTerm.value = false;
      }
    }

    function acceptPrivacy() {
      isShowPrivacy.value = !isShowPrivacy.value;
      const checkbox = document.querySelector("#confirmTerm");
      checkbox.checked = true;
      document.querySelector(".term").classList.add("hidden");
    }

    function toggleExpertDetails(index) {
      expertList.forEach((item, i) => {
        if (index === i) {
          currentExpertImg.value = item.imageDetails;
          currentExpertBio.value = item.bio;
        }
      });
      isOpenExpertDetails.value = !isOpenExpertDetails.value;
    }

    watch(isOpenExpertDetails, (newVal) => {
      if (newVal) {
        setTimeout(() => {
          innerVisible.value = true;
        }, 10);
      } else {
        innerVisible.value = false;
      }
    });

    function changeStatus() {
      isSuccess.value = null;
    }

    function backToHome() {
      isSuccess.value = null;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      name.value = "";
      email.value = "";
      gender.value = "";
      phoneNumber.value = "";
      yearOfBirth.value = "";
      jobTitle.value = "";
      otherJob.value = "";
      company.value = "";
      placeOfResidence.value = "";
      yearOfExperience.value = "";
      knowBy.value = "";
      otherAnswer.value = "";
      anyQuestions.value = "";
    }

    function scrollToPopUp() {
      if (window.innerWidth > 600) {
        window.scrollTo({
          top: 1750,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 2300,
          behavior: "smooth",
        });
      }
    }

    function checkData() {
      if (
        (name.value &&
          email.value &&
          gender.value &&
          phoneNumber.value &&
          yearOfBirth.value &&
          jobTitle.value &&
          company.value &&
          placeOfResidence.value &&
          yearOfExperience.value &&
          knowBy.value &&
          isEmailValid.value &&
          isPhoneValid.value &&
          isAcceptTerm.value) ||
        (name.value &&
          email.value &&
          gender.value &&
          phoneNumber.value &&
          yearOfBirth.value &&
          jobTitle.value === "Other" &&
          otherJob.value &&
          company.value &&
          placeOfResidence.value &&
          yearOfExperience.value &&
          knowBy.value &&
          isEmailValid.value &&
          isPhoneValid.value &&
          isAcceptTerm.value) ||
        (name.value &&
          email.value &&
          gender.value &&
          phoneNumber.value &&
          yearOfBirth.value &&
          jobTitle.value === "Other" &&
          otherJob.value &&
          company.value &&
          placeOfResidence.value &&
          yearOfExperience.value &&
          knowBy.value === "Other" &&
          otherAnswer.value &&
          isEmailValid.value &&
          isPhoneValid.value &&
          isAcceptTerm.value) ||
        (name.value &&
          email.value &&
          gender.value &&
          phoneNumber.value &&
          yearOfBirth.value &&
          jobTitle.value &&
          company.value &&
          placeOfResidence.value &&
          yearOfExperience.value &&
          knowBy.value === "Other" &&
          otherAnswer.value &&
          isEmailValid.value &&
          isPhoneValid.value &&
          isAcceptTerm.value)
      ) {
        isOk.value = true;
      } else {
        isOk.value = false;
        if (isEmailValid.value && isPhoneValid.value) {
          const itemInputs = document.querySelectorAll("input,select");
          const itemSelects = document.querySelectorAll("select");
          let firstInvalidElement = null;
          itemInputs.forEach((element) => {
            if (!element.value) {
              if (!firstInvalidElement) {
                firstInvalidElement = element;
              }
            }
          });
          if (firstInvalidElement) {
            const itemRect = firstInvalidElement.getBoundingClientRect();
            const itemTop = window.pageYOffset + itemRect.top - 300;
            window.scrollTo({
              top: itemTop,
              behavior: "smooth",
            });
          }
          itemInputs.forEach((item) => {
            if (!item.value) {
              const warning = item.parentNode.querySelector("span");
              if (warning) {
                warning.classList.remove("hidden");
              }
            }
          });
          itemSelects.forEach((item) => {
            if (!item.value) {
              const warning = item.parentNode.querySelector("span");
              if (warning) {
                warning.classList.remove("hidden");
              }
            }
          });
          if (!isAcceptTerm.value) {
            checkBox();
          }
        } else if (!isPhoneValid.value) {
          const phone = document.getElementById("phoneNumber");
          const phoneRect = phone.getBoundingClientRect();
          const phoneTop = window.pageYOffset + phoneRect.top - 300;
          window.scrollTo({
            top: phoneTop,
            behavior: "smooth",
          });
          const itemInputs = document.querySelectorAll("input, select");
          const itemSelects = document.querySelectorAll("select");
          let firstInvalidElement = null;
          itemInputs.forEach((element) => {
            if (!element.value) {
              if (!firstInvalidElement) {
                firstInvalidElement = element;
              }
            }
          });
          if (firstInvalidElement) {
            const itemRect = firstInvalidElement.getBoundingClientRect();
            const itemTop = window.pageYOffset + itemRect.top - 300;
            window.scrollTo({
              top: itemTop,
              behavior: "smooth",
            });
          }
          itemInputs.forEach((item) => {
            if (!item.value) {
              const warning = item.parentNode.querySelector("span");
              if (warning) {
                warning.classList.remove("hidden");
              }
            }
          });

          itemSelects.forEach((item) => {
            if (!item.value) {
              const warning = item.parentNode.querySelector("span");
              if (warning) {
                warning.classList.remove("hidden");
              }
            }
          });

          if (!isAcceptTerm.value) {
            checkBox();
          }
        }
      }
    }

    async function submitForm() {
      checkData();
      if (isOk.value) {
        const information = {
          Name: name.value,
          Email: email.value,
          Gender: gender.value,
          Phone: phoneNumber.value,
          YoB: yearOfBirth.value,
          JobTitle: jobTitle.value,
          OtherJob: otherJob.value,
          Company: company.value,
          Residence: placeOfResidence.value,
          YoE: yearOfExperience.value,
          KnowFrom: knowBy.value,
          OtherKnowFrom: otherAnswer.value,
          Question: anyQuestions.value,
          RegisterFrom: window.location.href,
          TimeStamp: new Date(Date.now() + 7 * 60 * 60 * 1000).toISOString(),
        };
        try {
          await addRecord(information);
          writeRegisterData(information);
          isSuccess.value = true;
          scrollToPopUp();
        } catch (error) {
          console.log(error);
          isSuccess.value = false;
          scrollToPopUp();
        }
      }
    }

    watch([jobTitle, knowBy], ([newJobTitle, newKnowBy]) => {
      if (newJobTitle === "Other" || newKnowBy === "Other") {
        isResizeImg.value = true;
      } else {
        isResizeImg.value = false;
      }
    });

    onMounted(() => {
      loadObserver();
    });

    return {
      name,
      email,
      gender,
      phoneNumber,
      yearOfBirth,
      jobTitle,
      otherJob,
      company,
      placeOfResidence,
      yearOfExperience,
      knowBy,
      otherAnswer,
      anyQuestions,
      dataProvince,
      isResizeImg,
      isShowPrivacy,
      isEmailValid,
      isPhoneValid,
      isOk,
      isSuccess,
      expertList,
      isOpenExpertDetails,
      currentExpertBio,
      currentExpertImg,
      innerVisible,
      goRegister,
      goMeeting,
      blurInput,
      onInput,
      changeSelect,
      togglePrivacy,
      changeStatus,
      backToHome,
      scrollToPopUp,
      acceptPrivacy,
      checkBox,
      checkData,
      submitForm,
      toggleExpertDetails,
      toggleBio,
    };
  },
};
</script>

<style scoped>
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 40px;
  background: url('data:image/svg+xml;utf8,<svg fill="%23000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')
    no-repeat;
  background-position: calc(100% - 20px) center;
  background-size: 24px;
}

.map-link {
  color: #4285f4 !important;
}

.bio::-webkit-scrollbar {
  width: 8px;
}

/* Track */
.bio::-webkit-scrollbar-track {
  border-radius: 8px;
  background: rgb(39, 39, 39);
}

/* Handle */
.bio::-webkit-scrollbar-thumb {
  background: rgb(56, 56, 56);
  border-radius: 8px;
}

.gradient-div {
  background: linear-gradient(
    90deg,
    #428eff 0%,
    #428eff 11%,
    #9f6cd4 24%,
    #ea4335 37%,
    #ea4335 45%,
    #f46831 50%,
    #ffcb32 60%,
    #ffcb32 70%,
    #34a853 89%,
    #34a853 100%
  );
}

.gr {
  transition-duration: 300ms;
  transition-timing-function: ease;
  transition-property: all;
  background: linear-gradient(
    to right,
    #4285f4 0%,
    #4285f4 25%,
    #9f6cd4 50%,
    #ea4335 76%,
    #ea4335 100%
  );
}

.gradient-bio {
  background: linear-gradient(
    to right,
    #4285f4 0%,
    #4285f4 10%,
    #9f6cd4 15%,
    #ea4335 30%,
    #ea4335 100%
  );
  -webkit-background-clip: text;
  color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.gradient-bio::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    #4285f4 0%,
    #4285f4 10%,
    #9f6cd4 15%,
    #ea4335 30%,
    #ea4335 100%
  );
}

.gradient-text-blue-green {
  background: linear-gradient(
    to right,
    #4285f4 0%,
    #4285f4 33%,
    #34a853 68%,
    #34a853 100%
  );
  -webkit-background-clip: text;
  color: transparent;
  background-clip: text;
}

.btn-gd {
  position: relative;
  transition-duration: 300ms;
  transition-timing-function: ease;
  transition-property: all;
  background: linear-gradient(
    to right,
    #4285f4 0%,
    #4285f4 25%,
    #9f6cd4 50%,
    #ea4335 76%,
    #ea4335 100%
  );
}

.btn-gd:hover {
  background: linear-gradient(
    to bottom right,
    #4285f4 0%,
    #4285f4 25%,
    #9f6cd4 50%,
    #ea4335 76%,
    #ea4335 100%
  );
  -webkit-background-clip: text;
  color: transparent;
  background-clip: text;
}

.btn-gd::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        #4285f4 0%,
        #4285f4 25%,
        #9f6cd4 50%,
        #ea4335 76%,
        #ea4335 100%
      )
      border-box;
  border-radius: 30px;
  border: 2px solid transparent;
  z-index: -1;
}

.outer-container {
  transition: opacity 0.5s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-in-enter-active,
.slide-in-leave-active {
  @apply transition-transform duration-500 ease-in-out;
}
.slide-in-enter-from {
  @apply translate-x-full;
}
.slide-in-enter-to {
  @apply translate-x-0;
}
.slide-in-leave-from {
  @apply translate-x-0;
}
.slide-in-leave-to {
  @apply translate-x-full;
}
</style>

<template>
  <div class="">
    <div class="bg-[#000] relative h-[920px] sm:h-auto overflow-hidden">
      <div
        class="max-w-[1280px] px-5 sm:px-10 mx-auto flex flex-wrap justify-between text-white"
      >
        <div class="mt-24 xl:mt-40 mx-auto sm:mx-0">
          <h1
            class="text-[48px] lg:text-[60px] text-center sm:text-left xl:text-[80px] gradient-text font-semibold leading-none sm:leading-tight"
          >
            "1:1 MEETING" <br />
            PROGRAM
          </h1>
          <p
            class="block w-[300px] lg:w-[370px] xl:w-[490px] max-w-[490px] text-[20px] sm:text-[16px] lg:text-[20px] xl:text-[22px] text-justify leading-relaxed mt-6"
          >
            Schedule your personalized 1:1 meeting with an expert, unlock
            exclusive knowledge and embark on your enlightening journey.
          </p>
          <button
            @click="goRegister()"
            class="mt-8 xl:mt-10 mx-auto block sm:mx-0 sm:text-[18px] w-[230px] h-16 text-[20px] xl:text-[22px] lg:w-[230px] lg:h-14 xl:w-[230px] xl:h-16 sm:h-12 bg-blue rounded-full"
          >
            Register now
          </button>
        </div>
        <div
          class="mt-[64px] sm:translate-x-10 sm:w-[410px] lg:w-[520px] xl:w-[650px] absolute sm:relative bottom-0 -left-8"
        >
          <img
            id="myVideo"
            autoplay
            muted
            loop
            src="../assets/videos/landingpage_dark_mode.gif"
          />
        </div>
      </div>
    </div>
    <div class="bg-[#eee] text-black">
      <div
        class="sm:max-w-[1280px] sm:px-10 mx-auto flex flex-wrap justify-between relative"
      >
        <div class="py-8 xl:pt-8 xl:pb-14 max-w-[1280px] px-5 sm:px-0">
          <h1
            class="text-[39px] text-center sm:text-left sm:text-[44px] lg:text-[52px] font-semibold"
          >
            About the program
          </h1>
          <p
            class="text-[20px] sm:text-[16px] lg:text-[20px] w-full sm:w-[385px] lg:w-[460px] max-w-[460px] text-justify block mt-[14px]"
          >
            An exclusive opportunity to have a personalized 1:1 discussion
            session with a speaker at our event, featuring limited slots. Seize
            this special chance to delve into detailed questions and gain
            invaluable professional advice directly from an expert!
          </p>
        </div>
        <img
          src="../assets/images/image 6.png"
          alt=""
          class="sm:h-[200px] lg:h-[240px] xl:h-full sm:absolute top-0 right-0 lg:-translate-x-10"
        />
      </div>
    </div>
    <div class="bg-[#212023] text-[#eee]">
      <div class="max-w-[1280px] px-5 sm:px-10 mx-auto py-10">
        <h1
          class="text-[40px] sm:text-[44px] lg:text-[52px] font-semibold text-center sm:text-left"
        >
          What you can expect
        </h1>
        <div class="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-5">
          <div v-for="(item, index) in expectList" :key="index" class="">
            <img :src="item.image" alt="" />
            <span class="mt-4 xl:mt-5 block text-[20px] font-semibold">{{
              item.title
            }}</span>
            <span class="mt-1 xl:mt-[10px] text-[14px] block">{{
              item.content
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="text-[#212023] py-10">
      <div class="max-w-[1280px] px-5 sm:px-10 mx-auto">
        <h1
          class="text-[40px] sm:text-[44px] lg:text-[52px] font-semibold text-center sm:text-lelft title-speaker"
        >
          Our experts
        </h1>
        <div
          class="mt-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-11"
        >
          <div v-for="(item, index) in expertList" :key="index" class="">
            <img :src="item.image" alt="" class="cursor-pointer" />
            <span
              @click="toggleExpertDetails(index)"
              class="hidden sm:block mt-5 cursor-pointer underline"
              >View Expert Profile</span
            >
            <span
              v-if="!item.isShowing"
              @click="toggleBio(index)"
              class="sm:hidden block mt-5 cursor-pointer underline"
              >Show Expert Profile</span
            >
            <span
              @click="toggleBio(index)"
              v-if="item.isShowing"
              class="sm:hidden block mt-5 cursor-pointer underline gradient-bio"
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
    <div class="bg-[#212023] text-[#fff] mt-8">
      <div
        class="max-w-[1280px] px-5 sm:px-10 mx-auto flex flex-wrap justify-between relative"
      >
        <div class="py-[36px]">
          <h1
            class="text-[44px] lg:text-[52px] text-center sm:text-left xl:text-[64px] font-semibold"
          >
            Ready to join?
          </h1>
          <p
            class="text-[18px] sm:text-[20px] lg:text-[24px] w-full sm:w-[380px] lg:w-[450px] xl:w-[580px] max-w-[580px] text-justify block mt-3"
          >
            Fill out this form below to get the ticket of the exclusive program
            from GDG Hanoi.
          </p>
        </div>
        <img
          src="../assets/images/image 25.svg"
          alt=""
          class="sm:absolute bottom-0 sm:right-5 lg:right-10 sm:w-[380px] lg:w-[400px] xl:w-[520px]"
        />
      </div>
    </div>
    <div class="max-w-[1280px] px-5 sm:px-10 mx-auto relative">
      <img
        src="../assets/images/Group 10.png"
        alt=""
        id="imgBack"
        class="h-[1320px] sm:h-[1290px] mx-auto block xl:max-w-[1114px]"
        :class="{
          'h-[2050px]': isResizeImg,
          'sm:h-[2080px]': isResizeImg,
          'xl:h-[1850px]': isResizeImg,
          'h-[1850px]': isOpenImg,
          'sm:h-[1870px]': isOpenImg,
          'xl:h-[1650px]': isOpenImg,
        }"
      />
      <div
        v-if="statusRegister !== 1"
        class="gradient-border w-[calc(100%-40px)] sm:w-[65%] xl:w-[50%] max-w-[1000px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[20px]"
      >
        <form
          @submit.prevent="onSubmitForm2()"
          action=""
          class="px-5 sm:px-[40px] py-[40px] text-[#212023] bg-white overflow-hidden rounded-[16px]"
        >
          <span
            v-if="statusRegister === 2"
            class="mx-auto block text-center text-[14px] sm:text-[22px]"
            >You have
            <span class="text-[#34A853] font-semibold"
              >SUCCESSFULLY REGISTERED</span
            >
            for the<br class="hidden lg:block" />
            <span class="font-semibold">“Google I/O Extended Hanoi 2024”</span>
            event.</span
          >
          <span
            v-if="statusRegister === 2"
            class="mx-auto block text-center text-[14px] sm:text-[22px] my-6"
          >
            Now take the last step to get the ticket of the exclusive
            <br class="hidden lg:block" />
            <span class="text-[#4280FF] font-semibold">“1:1 Meeting”</span>
            Program from GDG Hanoi.</span
          >
          <div
            v-if="statusRegister === 2"
            class="mb-8 py-2 border-t border-b flex border-black"
          >
            <div class="flex items-center">
              <div
                class="font-semibold w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#34A853] border border-black flex justify-center items-center text-white"
              >
                1
              </div>
              <span
                class="text-[10px] sm:text-[12px] lg:text-[16px] block leading-snug ml-3"
                >Google I/O Extended <br />
                Hanoi 2024 Registration</span
              >
            </div>
            <div class="flex items-center ml-4 sm:ml-10">
              <div
                class="font-semibold w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#428EFF] border border-black flex justify-center items-center text-white"
              >
                2
              </div>
              <span
                class="text-[10px] sm:text-[12px] lg:text-[16px] block leading-snug ml-3 text-[#428EFF]"
                >“1:1 Meeting” <br />
                Program Registration</span
              >
            </div>
          </div>
          <label
            v-show="statusRegister !== 2"
            for="email"
            class="font-semibold text-[20px] cursor-pointer block"
            >Email</label
          >
          <input
            @blur="checkEmail()"
            v-show="statusRegister !== 2"
            v-model="email"
            type="text"
            id="email"
            maxlength="255"
            placeholder="example@gmail.com"
            class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-3 text-[17px] outline-none"
          />
          <!-- <span
            v-show="statusRegister !== 2"
            class="text-blue mt-3 block font-bold italic text-center sm:text-left suc"
            >You have successfully registered for Google I/O Extended Hanoi
            2024! <br />
            Please continue to sign up for our “1:1 Meeting” Program</span
          > -->
          <span class="font-semibold text-[20px] mt-6 block"
            >Expert you want to meet</span
          >
          <div class="mt-3 flex items-center">
            <input
              v-model="expert"
              type="radio"
              id="ep1"
              name="fav_language"
              value="Mr. Ba Ngoc"
              class="scale-150 cursor-pointer"
              disabled
            />
            <label for="ep1" class="ml-3 text-[18px] cursor-pointer"
              >Mr. Ba Ngoc</label
            >
          </div>
          <div class="mt-3 flex items-center">
            <input
              v-model="expert"
              type="radio"
              id="ep2"
              name="fav_language"
              value="Mr. Hassan Abid"
              class="scale-150 cursor-pointer"
            />
            <label for="ep2" class="ml-3 text-[18px] cursor-pointer"
              >Mr. Hassan Abid</label
            >
          </div>
          <div class="mt-3 flex items-center">
            <input
              v-model="expert"
              type="radio"
              id="ep3"
              name="fav_language"
              value="Ms. Suesi Tran"
              class="scale-150 cursor-pointer"
            />
            <label for="ep3" class="ml-3 text-[18px] cursor-pointer"
              >Ms. Suesi Tran</label
            >
          </div>
          <div class="mt-3 flex items-center">
            <input
              v-model="expert"
              type="radio"
              id="ep4"
              name="fav_language"
              value="Ms. Linh Nguyen Khanh"
              class="scale-150 cursor-pointer"
            />
            <label for="ep4" class="ml-3 text-[18px] cursor-pointer"
              >Ms. Linh Nguyen Khanh</label
            >
          </div>
          <div class="mt-3 flex items-center">
            <input
              v-model="expert"
              type="radio"
              id="ep5"
              name="fav_language"
              value="Ms. Ananda Dwi Rahmawati"
              class="scale-150 cursor-pointer"
            />
            <label for="ep5" class="ml-3 text-[18px] cursor-pointer"
              >Ms. Ananda Dwi Rahmawati</label
            >
          </div>
          <div class="mt-3 flex items-center">
            <input
              v-model="expert"
              type="radio"
              id="ep6"
              name="fav_language"
              value="Mr. Surahutomo Aziz Pradana"
              class="scale-150 cursor-pointer"
            />
            <label for="ep6" class="ml-3 text-[18px] cursor-pointer"
              >Mr. Surahutomo Aziz Pradana</label
            >
          </div>
          <div class="relative">
            <label
              for="introduce"
              class="font-semibold text-[20px] mt-6 block cursor-pointer"
              >Introduce yourself</label
            >
            <textarea
              @input="onInput($event)"
              @blur="blurInput($event)"
              v-model="introduce"
              maxlength="2000"
              id="introduce"
              name="introduce"
              placeholder="Type your answer here (No more than 200 words)"
              class="w-full h-[170px] py-4 border-2 border-black pl-5 pr-14 rounded-lg mt-3 text-[17px] resize-none outline-none"
            ></textarea>
            <span
              class="absolute left-0 bottom-0 translate-y-5 text-[14px] text-yellow hidden"
              >Answer is required</span
            >
          </div>
          <div class="relative">
            <label
              for="discuss"
              class="font-semibold text-[20px] mt-6 block cursor-pointer"
              >Why do you want to apply for this program and what do you intend
              to discuss with the speaker?</label
            >
            <textarea
              @input="onInput($event)"
              @blur="blurInput($event)"
              v-model="discuss"
              maxlength="2000"
              id="discuss"
              name="discuss"
              placeholder="Type your answer here (No more than 200 words)"
              class="w-full h-[170px] py-4 border-2 border-black pl-5 pr-14 rounded-lg mt-3 text-[17px] resize-none outline-none"
            ></textarea>
            <span
              class="absolute left-0 bottom-0 translate-y-5 text-[14px] text-yellow hidden"
              >This question is required</span
            >
          </div>
          <button
            type="submit"
            class="mx-auto block bg-[#2563EB] hover:bg-black transition rounded-full text-white text-[20px] px-8 py-2 mt-8"
          >
            Submit Form
          </button>
        </form>
      </div>
      <div
        v-if="statusRegister === 1"
        class="gradient-border w-[calc(100%-40px)] sm:w-[65%] xl:w-[50%] max-w-[1000px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[20px]"
      >
        <form
          @submit.prevent="onSubmitForm1()"
          action=""
          class="px-5 sm:px-[40px] py-[40px] text-[#212023] bg-white overflow-hidden rounded-[16px]"
        >
          <label
            for="email"
            class="font-semibold text-[20px] cursor-pointer block"
            >Email</label
          >
          <input
            v-model="email"
            disabled
            type="text"
            id="email"
            maxlength="255"
            placeholder="example@gmail.com"
            class="w-full h-[60px] border-2 border-black pl-5 pr-14 rounded-lg mt-3 text-[17px] outline-none"
          />
          <span
            class="text-[#EA4335] mt-3 block font-bold italic text-center sm:text-left"
            >To sign up for this program, please register for joining
            <span class="underline">Google I/O Extended 2024</span>
            beforehand</span
          >
          <div class="mt-5 py-2 border-t border-b flex border-black">
            <div class="flex items-center">
              <div
                class="font-semibold w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#4284F4] border border-black flex justify-center items-center text-white"
              >
                1
              </div>
              <span
                class="text-[10px] sm:text-[12px] lg:text-[16px] block leading-snug ml-3 text-[#4284F4] font-semibold"
                >Google I/O Extended <br />
                Hanoi 2024 Registration</span
              >
            </div>
            <div class="flex items-center ml-4 sm:ml-10">
              <div
                class="font-semibold w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#B7B7B7] border border-black flex justify-center items-center"
              >
                2
              </div>
              <span
                class="text-[10px] sm:text-[12px] lg:text-[16px] block leading-snug ml-3"
                >“1:1 Meeting” <br />
                Program Registration</span
              >
            </div>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
            <div class="relative mt-8">
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
                class="absolute left-0 bottom-0 translate-y-6 text-[14px] text-yellow hidden"
                >Name is required</span
              >
            </div>
            <div class="relative mt-8">
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
                class="absolute left-0 bottom-0 translate-y-6 text-[14px] text-yellow hidden"
                >Gender is required</span
              >
            </div>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
            <div class="relative mt-8">
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
                class="absolute left-0 bottom-0 translate-y-6 text-[14px] text-yellow hidden"
                >Phone number is required</span
              >
              <h5
                class="absolute left-0 bottom-0 translate-y-6 text-[14px] text-yellow hidden invalidPhone"
              >
                Invalid phone number
              </h5>
            </div>
            <div class="relative mt-8">
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
                class="absolute left-0 bottom-0 translate-y-6 text-[14px] text-yellow hidden"
                >Year of birth is required</span
              >
            </div>
          </div>
          <div class="relative mt-8">
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
              class="absolute left-0 bottom-0 translate-y-6 text-[14px] text-yellow hidden"
              >Job Title is required</span
            >
          </div>
          <div v-if="jobTitle === 'Other'" class="relative mt-8">
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
              class="absolute left-0 bottom-0 translate-y-6 text-[14px] text-yellow hidden"
              >Other job is required</span
            >
          </div>
          <div class="relative mt-8">
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
              class="absolute left-0 bottom-0 translate-y-6 text-[14px] text-yellow hidden"
              >Company is required</span
            >
          </div>
          <div class="relative mt-8">
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
              class="absolute left-0 bottom-0 translate-y-6 text-[14px] text-yellow hidden"
              >Place of Residence is required</span
            >
          </div>
          <div class="relative mt-8">
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
              class="absolute left-0 bottom-0 translate-y-6 text-[14px] text-yellow hidden"
            >
              Year of Experience is required
            </span>
          </div>
          <div class="relative mt-8">
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
              class="absolute left-0 bottom-0 translate-y-6 text-[14px] text-yellow hidden"
              >This question is required</span
            >
          </div>
          <div v-if="knowBy === 'Other'" class="relative mt-8">
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
              class="absolute left-0 bottom-0 translate-y-6 text-[14px] text-yellow hidden"
              >Other answer is required</span
            >
          </div>
          <div class="relative mt-8">
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
          <div class="mt-6 text-left flex items-center relative">
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
            class="mx-auto block bg-[#2563EB] hover:bg-black transition rounded-full text-white text-[20px] px-8 py-2 mt-8"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
    <div
      v-if="isSuccess2"
      class="h-full w-full bg-[rgba(0,0,0,0.7)] fixed top-0 left-0 z-[102] px-5 sm:px-10l"
    >
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[600px] max-w-[600px] rounded-2xl overflow-hidden"
      >
        <img src="../assets/images/Group 15.svg" alt="" />
        <div class="bg-white pt-6 pb-8">
          <h1 class="text-black text-[28px] font-bold text-center">
            Thank you for registering!
          </h1>
          <img
            @click="backToHome()"
            src="../assets/images/Group 4.svg"
            alt=""
            class="mx-auto w-40 mt-5 cursor-pointer"
          />
        </div>
        <img
          @click="closePopup()"
          src="../assets/images/Group 5.svg"
          alt=""
          class="absolute top-3 right-3 w-9 cursor-pointer"
        />
      </div>
    </div>
    <div
      v-if="isShowPrivacy"
      class="h-full w-full bg-[rgba(0,0,0,0.7)] fixed top-0 left-0 z-[102] px-5 sm:px-10 overflow-y-scroll"
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
        <div class="px-6 mt-4">
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
import { ref, reactive, watch } from "vue";
import { PROVINCES } from "@/constants/index.js";
import useCollection from "@/composables/useCollection";
import useDatabase from "@/composables/useDatabase";
import useDatabaseMeeting from "@/composables/useDatabaseMeeting";
import testCheckEmailExists from "@/api/checkMail";

export default {
  setup() {
    const expectList = reactive([
      {
        image: require("@/assets/images/Group 1.png"),
        title: "Leverage Expert Insights",
        content:
          "Access knowledge from top professionals and get tailored advice on cutting-edge technologies and industry trends.",
      },
      {
        image: require("@/assets/images/image 20.webp"),
        title: "Advance Your Career",
        content:
          "Forge connections with industry leaders and acquire strategic guidance to excel in the competitive tech market.",
      },
      {
        image: require("@/assets/images/image 21.webp"),
        title: "Build Your Network",
        content:
          "Establish meaningful connections in an exclusive setting, opening doors to future collaborations, mentorships, and valuable professional relationships.",
      },
    ]);
    const expertList = reactive([
      {
        image: require("@/assets/images/ep1.png"),
        imageDetails: require("@/assets/images/ep1.png"),
        isShowing: false,
        bio: "Ba Ngoc, Vietnam's first Google-recognized Machine Learning expert and the 66th globally in 2019, is Founder/CEO of ProtonX and VietAI Hanoi. His visionary belief in the potential of machines to exceed human limits shapes his leadership. In 2020 and 2021, Ba Ngoc mentored over 120 programmers to achieve Google's Tensorflow certification, propelling Vietnam to a top-ranking position globally alongside the US, India, and Korea. In 2022, he founded ProtonX that is an AI company focused on using artificial intelligence to tackle critical social challenges.",
      },
      {
        image: require("@/assets/images/ep2.png"),
        imageDetails: require("@/assets/images/ep2.png"),
        isShowing: false,
        bio: "Hassan is a Google Developers Expert for Android since 2016, with over 12 years of full-stack development experience as CTO at BeLive Technology in Singapore. He's known for creating the NexPlayer 360 Unity Plugin for iOS and Android, developing the Swift version of NexPlayer SDK, and contributing significantly to KineMaster, a popular video editing app with over 500 million users. Hassan shares his passion for Android and AI through blog posts, events, and conferences, actively engaging with the tech community.",
      },
      {
        image: require("@/assets/images/ep3.png"),
        imageDetails: require("@/assets/images/ep3.png"),
        isShowing: false,
        bio: "Suesi is a Google Developer Expert specializing in Dart and Flutter, and holds the position of Senior Developer at Tabcorp, with over 16 years of experience in mobile software development. She also plays a key role in organizing events for the GDG Melbourne Community and serves as a Women Techmaker Ambassador in Melbourne, promoting diversity and empowerment in the IT industry",
      },
      {
        image: require("@/assets/images/ep4.png"),
        imageDetails: require("@/assets/images/ep4.png"),
        isShowing: false,
        bio: "A computer scientist turned full-stack ML engineer with 11 years in NLP and a software engineering background. She leads MLOps & AI at a major Vietnamese bank specializing in chatbots and data science as a hobby. She's also known for pioneering Neural Machine Translation and developing AI solutions like grammar correction and dialogue systems. She is founder of Beautiful Mind Vietnam promoting mental health awareness, and NeuroPurrfect AI mentoring in AI/ML and technical writing. Her passions are about AI, philosophy, books, gaming, dogs, cats, and home-brewed coffee.",
      },
      {
        image: require("@/assets/images/ep5.png"),
        imageDetails: require("@/assets/images/ep5.png"),
        isShowing: false,
        bio: "Ananda is a Senior Cloud Infrastructure Engineer specializing in integrating cloud infrastructure, CI/CD workflows, and application modernization. Her expertise lies in leveraging AWS services like Amazon Elastic Kubernetes Service (EKS) and open-source tools to build robust, scalable systems. She is an avid technical speaker, presenting at local and regional meetups and conferences such as Kubernetes and OpenInfra Days Indonesia, Google Developers Devfest, and AWS Summit. Since 2017, Ananda has been actively sharing her technical insights on her blog, focusing on AWS services, cloud-native technologies, and open-source tools.",
      },
      {
        image: require("@/assets/images/ep6.png"),
        imageDetails: require("@/assets/images/ep6.png"),
        isShowing: false,
        bio: "Pradana has more than 7 years of professional experience in leading and mentoring people, driving and implementing technical objectives, collaborating with various stakeholders. Researching technologies and writing extensively on various technical topics such as AI/ML and AR/VR are in his favor. With appetite for success and passion for communities, Pradana has won multiple international hackathons as well as become professional speaker at various tech events.",
      },
    ]);

    const isOpenExpertDetails = ref(false);
    const innerVisible = ref(false);

    const statusRegister = ref(null);
    const currentExpertImg = ref("");
    const currentExpertBio = ref("");

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

    const expert = ref("");
    const discuss = ref("");
    const introduce = ref("");

    const dataProvince = PROVINCES;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    const isPhoneValid = ref(true);
    const isAcceptTerm = ref(false);
    const isShowPrivacy = ref(false);
    const isResizeImg = ref(false);
    const isOpenImg = ref(false);
    const isOk = ref(false);
    const isOk2 = ref(false);
    const isSuccess = ref(false);
    const isSuccess2 = ref(false);

    const { addRecord } = useCollection("formRegister");
    const { writeRegisterData } = useDatabase();
    const { writeRegisterDataMeeting } = useDatabaseMeeting();

    watch(isOpenExpertDetails, (newVal) => {
      if (newVal) {
        setTimeout(() => {
          innerVisible.value = true;
        }, 10);
      } else {
        innerVisible.value = false;
      }
    });

    watch([jobTitle, knowBy], ([newJobTitle, newKnowBy]) => {
      if (newJobTitle === "Other" || newKnowBy === "Other") {
        isResizeImg.value = true;
      } else {
        isResizeImg.value = false;
      }
    });

    function toggleExpertDetails(index) {
      expertList.forEach((item, i) => {
        if (index === i) {
          currentExpertImg.value = item.imageDetails;
          currentExpertBio.value = item.bio;
        }
      });
      isOpenExpertDetails.value = !isOpenExpertDetails.value;
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

    function goRegister() {
      const form = document.querySelector("form");
      const formRect = form.getBoundingClientRect();
      const formTop = window.pageYOffset + formRect.top - 400;

      // Scroll to the form
      window.scrollTo({
        top: formTop,
        behavior: "smooth", // for smooth scrolling
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
        if (event.target.id === "phoneNumber") {
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

    function closePopup() {
      isSuccess2.value = !isSuccess2.value;
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

      expert.value = "";
      discuss.value = "";
      introduce.value = "";
    }

    function backToHome() {
      isSuccess2.value = null;
      statusRegister.value = null;
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

      expert.value = "";
      discuss.value = "";
      introduce.value = "";
    }

    function checkData1() {
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
          isPhoneValid.value &&
          isAcceptTerm.value)
      ) {
        isOk.value = true;
      } else {
        isOk.value = false;
        if (isPhoneValid.value) {
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

    function checkData2() {
      if (email.value && expert.value && discuss.value && introduce.value) {
        isOk2.value = true;
      } else {
        isOk2.value = false;
        const itemInputs = document.querySelectorAll("input,textarea");
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
      }
    }

    async function checkEmail() {
      if (emailRegex.test(email.value)) {
        if (!(await testCheckEmailExists(email.value))) {
          statusRegister.value = 1;
          isOpenImg.value = true;
        } else {
          statusRegister.value = 2;
        }
      }
    }

    async function onSubmitForm1() {
      checkData1();
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
        await addRecord(information);
        writeRegisterData(information);
        statusRegister.value = 2;
        isResizeImg.value = false;
        isOpenImg.value = false;
        const emailMark = document.getElementById("email");
        const itemRect = emailMark.getBoundingClientRect();
        const itemTop = window.pageYOffset + itemRect.top - 300;
        window.scrollTo({
          top: itemTop,
          behavior: "smooth",
        });
      }
    }

    function onSubmitForm2() {
      checkData2();
      if (isOk2.value && statusRegister.value === 2) {
        const information = {
          Email: email.value,
          Expert: expert.value,
          Discuss: discuss.value,
          introduce: introduce.value,
          RegisterFrom: window.location.href,
          TimeStamp: new Date(Date.now() + 7 * 60 * 60 * 1000).toISOString(),
        };
        writeRegisterDataMeeting(information);
        isSuccess2.value = true;
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
      const video = document.getElementById("myVideo");
      video.controls = false; // Ensure controls are off
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
      expert,
      discuss,
      introduce,
      dataProvince,
      expectList,
      expertList,
      isOpenExpertDetails,
      innerVisible,
      statusRegister,
      isPhoneValid,
      isAcceptTerm,
      isShowPrivacy,
      isResizeImg,
      isOpenImg,
      isOk,
      isOk2,
      isSuccess,
      isSuccess2,
      toggleExpertDetails,
      toggleBio,
      currentExpertImg,
      currentExpertBio,
      onSubmitForm2,
      goRegister,
      checkEmail,
      onInput,
      changeSelect,
      blurInput,
      checkBox,
      acceptPrivacy,
      togglePrivacy,
      checkData1,
      checkData2,
      closePopup,
      backToHome,
      onSubmitForm1,
    };
  },
};
</script>

<style scoped>
.gradient-text {
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

.gradient-border {
  --border-width: 4px;
  padding: var(--border-width);
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

.gradient-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  z-index: -1;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  border-radius: 20px; /* Border radius for the pseudo-element */
}
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

#myVideo::-webkit-media-controls {
  display: none !important;
}

#myVideo::-webkit-media-controls-enclosure {
  display: none !important;
}
</style>

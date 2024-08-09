<template>
  <div class="bg-[#212023]">
    <div class="mx-auto relative pt-12">
      <img
        src="../assets/images/Group 17.png"
        alt=""
        class="sm:absolute relative sm:top-3 sm:left-20 w-[300px] sm:w-[250px] lg:top-2 left-8 lg:w-[320px] xl:w-[450px]"
      />
      <img src="../assets/images/footer-bg-11.svg" alt="" class="w-full" />
      <div
        class="px-5 py-8 sm:py-5 flex flex-wrap justify-between items-center text-[#80868B]"
      >
        <div class="flex flex-wrap items-center">
          <a href="https://www.facebook.com/GDGhanoi/"
            ><img
              src="../assets/images/logo-footer.svg"
              alt=""
              class="w-[150px] sm:w-[130px] cursor-pointer lg:w-[160px] xl:w-[180px] block"
          /></a>
          <span
            @click="goHome()"
            class="block cursor-pointer text-[16px] lg:text-[18px] ml-0 sm:ml-6 lg:ml-12 xl:ml-16 w-full mt-6 sm:mt-0 sm:w-auto"
            >Google I/O Extended Hanoi 2024</span
          >
          <span
            @click="togglePrivacy"
            class="block cursor-pointer text-[16px] lg:text-[18px] ml-0 sm:ml-6 lg:ml-12 xl:ml-16 w-full mt-4 sm:mt-0 sm:w-auto"
            >Privacy & Terms</span
          >
        </div>
        <div class="flex gap-2 items-center mt-10 sm:mt-0">
          <a
            class="block"
            href="https://www.facebook.com/GDGhanoi"
            target="_blank"
            ><img
              src="../assets/images/Frame 63.svg"
              alt=""
              class="w-10 sm:w-6 lg:w-8"
          /></a>
          <a
            class="block"
            href="https://www.youtube.com/@gdghanoi"
            target="_blank"
            ><img
              src="../assets/images/Frame 60.svg"
              alt=""
              class="w-10 sm:w-6 lg:w-8"
          /></a>
          <a
            class="block"
            href="https://www.instagram.com/gdghanoi/"
            target="_blank"
            ><img
              src="../assets/images/Frame 61.svg"
              alt=""
              class="w-10 sm:w-6 lg:w-8"
          /></a>
          <a
            href="https://www.linkedin.com/company/google-developer-group-hanoi---gdg-hanoi/about/"
            target="_blank"
            ><img
              src="../assets/images/Group 16.svg"
              alt=""
              class="w-7 sm:w-4 lg:w-6 xl:w-6"
          /></a>
        </div>
      </div>
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
          personal information when you participate in the "Google I/O Extended
          Hanoi 2024" event (hereinafter referred to as "Event"). This Privacy
          Policy does not apply to any products, services, websites or content
          that are provided by third parties or that use a separate privacy
          policy.
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
          >We collect your personal information during your participation in the
          Event. Below are the sources of information we collect:</span
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
            Information from other sources: We may collect information about you
            from other sources, including service providers, partners and
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
          >Depending on your participation in the Event, you may provide us with
          information such as:</span
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
            registration, participation in advertising programs, and promotion.
          </li>
          <li>
            Make recommendations and personalize your experience: We use your
            personal information to recommend content that may be of interest to
            you, identify your interests, and personalize your experience at the
            Event.
          </li>
          <li>
            Comply with a legal obligation: In certain cases, we have a legal
            obligation to collect, use or store your personal information.
          </li>
          <li>
            Communication with you: We use your personal information to
            communicate with you about the Event-related matters through various
            channels (e.g. email, chat, SMS, phone call, etc.) and to answer
            your request.
          </li>
          <li>
            Marketing: We use your personal information to market and promote
            the Event as required by law.
          </li>
          <li>
            Some specific purposes require your consent: We may ask for your
            consent to use your personal information for a specific purpose when
            we contact you.
          </li>
        </ul>
        <span class="font-semibold text-[18px] mt-4 block"
          >3. How we share personal information</span
        >
        <span class="mt-3 block"
          >Information about you is an important part of our operations, and we
          do not sell your personal information to others. We share your
          information with the Event sponsors, who are subject to this Privacy
          Policy or similar. Besides, we only share personal information as
          outlined below.</span
        >
        <ul class="list-disc ml-8 mt-3">
          <li>
            Transactions involving third parties: We provide you with services,
            software and content provided by third parties for your use or
            through the Event. You can know when a third party is involved in
            your transactions and when we will share information related to
            those transactions with that third party.
          </li>
          <li>
            Restructuring, Business Transfer: During business development, we
            may sell or purchase legal entity or restructure other entity or
            services in accordance with the law. In such transactions, personal
            information, databases and the right to use information are
            generally among the transferred business assets, but the transferee
            is still subject to the provisions of this Policy (or with your
            consent). In addition, in the event that GDG Hanoi or most of GDG
            Hanoi's assets are purchased by another company, your information
            will become one of the transferred assets.
          </li>
          <li>
            Protect us and others: We disclose account and other personal
            information when we believe it is appropriate to comply with the
            law, to enforce or apply terms and agreements or to protect the
            rights, property or security of us, our customers, or any other
            person. The foregoing may include exchanging information with other
            companies and organizations to prevent and detect fraud and reduce
            asset and credit risks.
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
          information to other countries, we will ensure that it is transferred
          in accordance with this Privacy Policy and is permitted under
          applicable privacy laws.</span
        >
        <span class="font-semibold text-[18px] mt-4 block"
          >5. How we protect personal information</span
        >
        <span class="mt-3 block"
          >With GDG Hanoi, security is our highest priority. Our systems are
          designed with the safety and privacy of your information in mind. We
          have appropriate technical and security measures in place to prevent
          unauthorized access and use of personal information. We also regularly
          coordinate with security experts to update the latest information on
          network security to ensure the safety of personal information. When
          collecting data, we keep and secure personal information at the server
          system and this personal information is secured by firewalls, access
          control measures, data encrypt.</span
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
          >If you want to add, update or delete your information, please contact
          us via email gdghanoi@gmail.com. When you update or delete any
          information, we usually keep a copy of the previous version for
          technical reasons.</span
        >
        <span class="font-semibold text-[18px] mt-4 block"
          >7. Personal information of minors</span
        >
        <span class="mt-3 block"
          >If you are under 18 years of age, you must obtain the consent of a
          parent or guardian before entering into a contract and accepting this
          Privacy Policy.</span
        >
        <span class="font-semibold text-[18px] mt-4 block"
          >8. Term of storage of personal information</span
        >
        <span class="mt-3 block"
          >We store your personal information to ensure your continued ability
          to participate in the Event, and store it for the period necessary to
          fulfill the objectives set forth in this Privacy Policy, or as
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
          to date with the most recent changes. Amending this Policy in no event
          will reduce the level of protection of personal information collected
          in the past without notifying you and giving you a choice.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const isShowPrivacy = ref(false);
    function goHome() {
      router.push({ name: "RegisterView", params: {} });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    function togglePrivacy() {
      isShowPrivacy.value = !isShowPrivacy.value;
    }
    return { isShowPrivacy, goHome, togglePrivacy };
  },
};
</script>

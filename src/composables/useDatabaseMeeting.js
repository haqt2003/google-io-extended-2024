import { rtdb, ref as prjRef, push } from "@/configs/firebase";

const useDatabaseMeeting = () => {
  async function writeRegisterDataMeeting(data) {
    try {
      await push(prjRef(rtdb, "formMeeting/"), data);
    } catch (error) {
      console.error("L", error);
    }
  }

  return { writeRegisterDataMeeting };
};
export default useDatabaseMeeting;

import { rtdb, ref as prjRef, push } from "@/configs/firebase";

const useDatabase = () => {
  async function writeRegisterData(data) {
    try {
      await push(prjRef(rtdb, "formRegister/"), data);
    } catch (error) {
      console.error("L", error);
    }
  }

  return { writeRegisterData };
};
export default useDatabase;

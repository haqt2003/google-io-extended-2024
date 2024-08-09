import axios from "axios";

async function testCheckEmailExists(email) {
  const functionUrl =
    "https://us-central1-io24-19747.cloudfunctions.net/checkEmailExists"; // Replace with your actual URL

  try {
    const response = await axios.post(
      functionUrl,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = response.data;
    return result.exists;
  } catch (error) {
    console.error("Error checking email existence:", error);
  }
}

export default testCheckEmailExists;

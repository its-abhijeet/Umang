const generateAbhaId = () => {
  // Define characters that can be used in the random ID
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Set the length of the random ID
  const idLength = 10; // You can adjust the length as needed

  let randomID = "";

  // Generate a random ID by selecting random characters from the 'characters' string
  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters.charAt(randomIndex);
  }

  return randomID;
};
// Function to generate a random 4-digit OTP
function generateOTP() {
  // Generate a random number between 1000 and 9999 (inclusive)
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const generateFingerprintKey = () => {
  // Generate a random number between 1 and 2 (inclusive)
  const min = 1;
  const max = 2;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export { generateAbhaId, generateOTP, generateFingerprintKey };

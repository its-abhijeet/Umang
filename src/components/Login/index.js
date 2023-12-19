import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <ChakraProvider>
      <div>
        <Box
          className="ml-[80%] mt-[2%]"
          as="button"
          borderRadius="3xl"
          bg="black"
          color="white"
          px={8}
          h={14}
          onClick={() => navigate("/")}
        >
          Home
        </Box>
        <h2 className="text-[56px] font-bold drop-shadow-lg text-[#CB60DB] text-center mt-[5%]">
          Please Login
        </h2>
        <p className="text-xl font-semibold text-black text-center">
          Please place your finger on the biometric scanner
        </p>
        <img
          className="ml-[45%] mt-4 items-center justify-center"
          src={require("../../assets/thumbprint.png")}
          height={150}
          width={150}
        />
        <div className="flex flex-row justify-evenly items-center mt-10">
          <Box
            as="button"
            borderRadius="3xl"
            bg="black"
            color="white"
            px={8}
            h={14}
            onClick={() => navigate("/signup")}
          >
            Create ABHA Id
          </Box>
          <Box
            as="button"
            borderRadius="3xl"
            bg="black"
            color="white"
            px={8}
            h={14}
            onClick={() => navigate("/signup")}
          >
            Login Via OTP
          </Box>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Login;

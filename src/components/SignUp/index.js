import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  return (
    <ChakraProvider>
      <div>
        <div className="flex flex-row justify-evenly items-center">
          <Box
            as="button"
            borderRadius="3xl"
            bg="black"
            color="white"
            px={8}
            h={14}
            onClick={() => navigate("/login")}
          >
            Login
          </Box>
          <h2 className="text-[56px] font-bold drop-shadow-lg text-[#CB60DB] text-center ">
            New user SignUp
          </h2>
          <Box
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
        </div>
        <h1 className="text-xl font-semibold text-black text-center mt-[2%]">
          Please Enter Your Details
        </h1>
        <div></div>
        <Box
          className="font-semibold "
          as="button"
          borderRadius="3xl"
          bg="gray"
          color="white"
          px={8}
          h={10}
          onClick={() => navigate("/login")}
        >
          Continue
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default SignUp;

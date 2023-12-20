import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
function ConnectingToDoctors() {
  const navigate = useNavigate();
  setTimeout(() => navigate("/doctorsfound"), 5000);
  return (
    <ChakraProvider>
      <div>
        <div className="flex flex-row justify-evenly ml-[20%] items-center">
          <h2 className="text-[56px] font-bold drop-shadow-lg text-[#CB60DB] text-center ">
            Welcome To Umang
          </h2>
          <Box
            className="font-semibold "
            as="button"
            borderRadius="3xl"
            bg="black"
            color="white"
            px={8}
            h={10}
            //   onClick={() => navigate("/login")}
          >
            Dashboard
          </Box>
        </div>
        <div className="ml-[17%] p-[4%] bg-[#CDE4CB8F] overflow-y-auto mt-[2%] w-[300px] md:w-[600px] lg:w-[1000px] h-[500px] shadow-inner shadow-slate-900 rounded-2xl justify-center">
          <h1 className="text-xl font-semibold text-center">
            Finding a gastroenterologist for you..
          </h1>
          <FiLoader className="ml-[40%] mt-[10%]" size={150} />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default ConnectingToDoctors;

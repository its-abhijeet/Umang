import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
function VideoConsult() {
  const navigate = useNavigate();
  //   setTimeout(() => navigate("/doctorsfound"), 5000);
  return (
    <ChakraProvider>
      <div>
        <div className="flex flex-row justify-evenly ml-[5%] items-center">
          <h2 className="text-[56px] font-bold drop-shadow-lg text-[#CB60DB] text-center ">
            You are connected to Dr. Rohit
          </h2>
        </div>
        <h1 className="text-3xl font-semibold text-center">
          Video Consultation
        </h1>
        <div className="ml-[17%] p-[4%] bg-[#FEB2B2] overflow-y-auto mt-[2%] w-[300px] md:w-[600px] lg:w-[1000px] h-[500px] shadow-inner shadow-slate-900 rounded-2xl justify-center"></div>
        <Box
          className="font-semibold ml-[43%] mt-4"
          as="button"
          borderRadius="3xl"
          bg="black"
          color="white"
          px={8}
          h={10}
          //   onClick={() => navigate("/login")}
        >
          Upload Report
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default VideoConsult;

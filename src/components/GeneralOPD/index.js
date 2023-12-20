import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function GeneralOPD() {
  const navigate = useNavigate();
  setTimeout(() => navigate("/connectingtodocters"), 5000);
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
        <h1 className="text-2xl font-semibold text-center mt-[2%]">
          Please tell me your symptom
        </h1>
        <div className="ml-[17%] p-[4%] overflow-y-auto mt-[2%] w-[300px] md:w-[600px] lg:w-[1000px] h-[500px] shadow-inner shadow-slate-900 rounded-2xl justify-center">
          <h1 className="text-xl font-semibold">
            Umang: Hi please tell me your symptom!
          </h1>
          <h1 className="text-xl font-semibold ml-[55%] mt-4">
            You: Hi am heaving severe stomach ache
          </h1>
          <h1 className="text-xl font-semibold mt-8">
            Umang: On a scale of 1 to 10 how will you rate the intensity
          </h1>
          <h1 className="text-xl font-semibold ml-[55%] mt-8">
            You: Its pretty bad. I will rate it 7
          </h1>
          <h1 className="text-xl font-semibold mt-8 pr-[40%]">
            Umang: I feel you have symptoms of gastritis or acid reflux. I will
            connect you to a gastroenterologist
          </h1>
        </div>
        <img
          src={require("../../assets/pngtree-vector-microphone-icon-png-image_695343.jpg")}
          height={50}
          width={50}
          className="ml-[50%]"
          alt=""
        />
      </div>
    </ChakraProvider>
  );
}

export default GeneralOPD;

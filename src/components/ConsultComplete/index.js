import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
function Prescription() {
  const navigate = useNavigate();
  //   setTimeout(() => navigate("/doctorsfound"), 5000);
  return (
    <ChakraProvider>
      <div>
        <div className="flex flex-row justify-evenly ml-[20%] items-center">
          <h2 className="text-[56px] font-bold drop-shadow-lg text-[#CB60DB] text-center ">
            Consultation Complete
          </h2>
        </div>
        <h1 className="text-3xl font-semibold text-center">Prescription</h1>
        <div className="ml-[17%] p-[4%] bg-[#FEB2B2] overflow-y-auto mt-[2%] w-[300px] md:w-[600px] lg:w-[1000px] h-[500px] shadow-inner shadow-slate-900 rounded-2xl justify-center"></div>
      </div>
    </ChakraProvider>
  );
}

export default Prescription;

import React, {useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import axios from "axios";

function DoctorFound() {
  const [docData, setDocData] = useState();
  const keywordVariable = "Dentist";
  const navigate = useNavigate();
  // setTimeout(() => navigate("/videoconsult"), 5000);
  useEffect(() => {
    axios
      .post(
        "http://localhost:3001/api/doctors/get?specialization=Dermatologist"
      )
      .then((res) => {
        console.log(res.data);
        if (res) {
          setDocData(res.data);
          //navigate("/videoconsult");
        }
      })
      .catch((erro) => {
        console.log(erro);
      });
  });
  return (
    <ChakraProvider>
      <div>
        <div className="flex flex-row justify-evenly ml-[20%] items-center">
          <h2 className="text-[56px] font-bold drop-shadow-lg text-[#CB60DB] text-center ">
            Connecting to Doctor
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
            I have found {docData?docData.length:""} Doctors for you
          </h1>
          {docData && docData.map((doc) => {
            return (
              <div
                key={doc.id}
                className="flex flex-row justify-evenly items-center mt-[5%]"
              >

                <div className="bg-white rounded-lg shadow-md p-4"   onClick={() => window.location.href="https://meet.google.com/yvr-vrfc-cvd"}>

                  {/* Doctor information */}
                  <h2 className="text-xl font-semibold">{doc.name}</h2>
                  <p className="text-gray-500">{doc.specialization}</p>

                  {/* Additional doctor details */}
                  <div className="mt-4">
                    
                    <p>Qualification: {doc.qualification}</p>
                  </div>

                  {/* Add more details as needed */}
                </div>
              </div>
            );
          })}

          {/* <div className="flex flex-row justify-evenly items-center mt-[5%]">
            <img
              height={200}
              width={200}
              src={require("../../assets/doctor1.png")}
              alt=""
            />
            <img
              height={200}
              width={200}
              src={require("../../assets/doctor1.png")}
              alt=""
            />
            <img
              height={200}
              width={200}
              src={require("../../assets/doctor1.png")}
              alt=""
            /> */}
          {/* </div> */}
        </div>
      </div>
    </ChakraProvider>
  );
}

export default DoctorFound;

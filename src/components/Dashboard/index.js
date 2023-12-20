import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
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
             onClick={() => navigate("/")}
          >
            Log Out
          </Box>
        </div>
        <div className="bg-[#BDEADF] flex flex-row justify-around items-center py-6 mt-8">
          <div>
            <p className="font-semibold">ABHA ID: 21PH10042</p>
            <p className="font-semibold">Mobile No.: 8290732551</p>
          </div>
          <div className="text-[28px] font-semibold ">
            Please Select an option
          </div>
          <div>
            <p className="font-semibold">Tanishq Pratap Singh</p>
            <p className="font-semibold">Age : 21 Yr</p>
          </div>
        </div>
        <div className="flex flex-row justify-around items-center mt-16">
          {data.map(({ id, head1, color }) => {
            return <Card key={id} head1={head1} color={color} />;
          })}
        </div>
        <div className="flex flex-row justify-evenly items-center mt-[4%]">
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
            Past Consultations
          </Box>
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
            View Profile
          </Box>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Dashboard;
const Card = ({ id, head1, color }) => {
  const navigate = useNavigate();
  // const [activeId, setActiveId] = useState(0);
  // const handleClick = (id) => {
  //   setActiveId(3);
  //   if (activeId == 3) {
  //     navigate("/generalopd");
  //   }
  // };
  return (
    <div
      className="w-[200px] h-[300px] drop-shadow-2xl border-r-2 border-2 border-[#fff] rounded-xl"
      onClick={() => navigate("/dashboard/generalopd")}
    >
      <div
        className={`rounded-t-xl w-[100%] h-[54%]`}
        style={{ backgroundColor: color }}
      ></div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-semibold text-2xl mt-[4%]">{head1}</h1>
        <p className="font-normal text-gray-500">Connect within 60 seconds</p>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    head1: "Post Operative",
    color: "#E49292",
  },
  {
    id: 2,
    head1: "Follow Up",
    color: "#AFEDDE",
  },
  {
    id: 3,
    head1: "General OPD",
    color: "#AFCFED",
  },
  {
    id: 4,
    head1: "Pregnancy Care",
    color: "#ECC291",
  },
  {
    id: 5,
    head1: "First Aid",
    color: "#FFCBFD",
  },
];

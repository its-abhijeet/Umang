import React from "react";
import Background from "../../assets/background.png";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <ChakraProvider>
      <div
        style={{
          background: `url(${Background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <h1 className="text-[56px] font-bold drop-shadow-xl text-white pl-[10%] pt-[15%]">
          Welcome to
          <h1 className="text-[56px] font-bold drop-shadow-xl text-white">
            Umang
          </h1>
        </h1>
        <h2 className="text-3xl font-semibold drop-shadow-lg text-black pl-[10%] pt-[2%]">
          Seamless Healthcare for All
        </h2>
        <Box
          className="ml-[10%] mt-[2%]"
          as="button"
          borderRadius="3xl"
          bg="black"
          color="white"
          px={8}
          h={12}
          onClick={() => navigate("/login")}
        >
          Consult Now
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default Home;

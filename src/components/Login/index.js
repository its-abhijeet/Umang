import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";
import  axios  from "axios";
import { useZxing } from "react-zxing";


function Login() {
  const navigate = useNavigate();
  const handleError = (err) => {
    console.error(err);
  };

  const handleScan = (scanData) => {
    console.log(scanData);
    axios.post("http://localhost:3001/api/users/login", {
      qrCodeKey:scanData.toString()

      
    }) 
    .then((res) => {
      console.log(res);
      if (res) {
        navigate("/dashboard");
      }
    }).catch((erro) => {
      console.log(erro);
    });
  }
  const { ref } = useZxing({
    onDecodeResult(result) {
      console.log(result.getText())
    },
  });
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
      <div className="w-60 ml-[42%] mt-6 items-center justify-center">  
      <video
          ref={ref}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "500px",
            maxHeight: "300px",
          }}
        />
            <QrReader
              className="qr-reader"
              facingMode="environment"
              delay={50}
              onError={handleError}
              onScan={handleScan}
              onResult={(result, error) => {
                if (!!result) {
                  console.log(result);
                  // setStartScan(!startScan);
                  handleScan(result.text);
                }
              }}
              // chooseDeviceId={()=>selected}
              style={{
                width: "250px",
                // outerHeight: "100vh",
                // innerHeight: "60%",
              }}
            /></div>
        {/* <img
          className="ml-[45%] mt-4 items-center justify-center"
          src={require("../../assets/thumbprint.png")}
          height={150}
          width={150}
        /> */}
        <div className="flex flex-row justify-evenly items-center mt-10">
          <Box
            as="button"
            borderRadius="3xl"
            bg="black"
            color="white"
            px={8}
            h={14}
            onClick={() => navigate("/dashboard")}
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
            onClick={() => navigate("/dashboard")}
          >
             Login with QR
          </Box>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Login;

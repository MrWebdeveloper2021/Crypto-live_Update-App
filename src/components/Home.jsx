import { Box, Image, Text } from "@chakra-ui/react";
// import React from "react";
import btcSrc from "../assets/btc.png"
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import React from "react";

const Home = () => {

  return (
    <>
    <Box bgColor={"whiteAlpha.100"} w={"full"} h={["80vh","90vh"]} mt={'30px'}>
      
      <motion.div
        style={{
          height: "80vh",
          marginTop:"30px"
        }}
        animate={{
          translateY: "15px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        
        <Image
        mt={['45px','40px']}
          w={["95vw" ,"full"]}
          h={["70vh","full"]}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={["4xl","6xl"]}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"blackAlpha.900"}
        mt={['-60px', '-40px']}
      >
        XTcrypto
      </Text>
    </Box>
    <Footer />
    </>
  );
};

export default Home;
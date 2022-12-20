import { Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Text bg={'blackAlpha.900'} color={'white'} textAlign={'center'} css={{position:"fixed", bottom:"0",left:"0"}} width={'full'} >
        Copyright © 2022 Crypto Currency Update App  || Develop By Zubair Akram || 

    </Text>
  );
};

export default Footer;
import { Text, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <HStack bg={"whatsapp.400"} color={"black"} p={'4'} css={{position:"fixed",fontSize:"20px", top:"0", left:"0", width:"100%",  zIndex:"10"}}>
        <HStack>
        <Link to={'/'}>Home</Link>
        <Link to={'/coins'}>Coins</Link>
        <Link to={'/exchanges'}>Exchanges</Link>
        </HStack>
    </HStack>
  )
}

export default Navbar
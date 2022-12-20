import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack h="100vh" justifyContent={"center"} css={{zIndex:"99999999999999999999"}}>
      <Box transform={"scale(1)"}>
        <Spinner  css={{height:"80px", width:"80px"}} />
      </Box>

    </VStack>
  )
}

export default Loader
import { Heading, VStack,Image, Text } from '@chakra-ui/react'
import React from 'react'

const ExchangeCard = ({name,imge,rank,url,bornDate = "2010"}) => {
  return (
    <>
    <a href={url} target='_blank'>
        <VStack w={"52"} shadow={"lg"} p={"4"} borderRadius={"lg"} m={"4"} transition={"all 0.5s"} css={{
            "&:hover":{
                transform:"scale(1.1)"
            }}}>
            <Image src={imge} alt={"Exchanges"} w={"10"} h={"10"} objectFit={"contain"} />
            <Heading  size={"md"} noOfLines={1}>
                {rank}
            </Heading>
               <Text noOfLines={1}> {name} </Text>
               <Text > {bornDate} </Text> 
        </VStack>

    </a>
    </> 
  )
}

export default ExchangeCard


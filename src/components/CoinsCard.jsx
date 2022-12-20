import { Heading, VStack,Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const CoinsCard = ({id,name,imge,symbol,price,currencySymbol =  "RS"}) => {
  return (
    <>
    
       <Link to={`/coin/${id}`} >
        <VStack w={"52"} shadow={"lg"} p={"4"} borderRadius={"lg"} m={"4"} transition={"all 0.5s"} css={{
        
            "&:hover":{
                transform:"scale(1.1)"
            }}}>
            <Image src={imge} alt={"Exchanges"} w={"10"} h={"10"} objectFit={"contain"} />
               { symbol ?  <Heading size={"md"} noOfLines={1}> {symbol} </Heading> : "NA"}
               <Text noOfLines={1}> {name} </Text>
               <Text noOfLines={1}>{price ? `${currencySymbol}:${price}` : "NA"}</Text>
        </VStack>

    </Link>  
    </>
  )
}

export default CoinsCard


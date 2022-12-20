import {Badge,Box,Container,HStack,Image,Progress,Radio,RadioGroup,Stat,StatArrow,StatHelpText,StatLabel,StatNumber,Text,VStack, } from '@chakra-ui/react'
import React, {useState,useEffect} from 'react'
import Loader from './Loader'
import { base_url } from './Exchanges'
// import {base_url} from '../main'
import { useParams } from 'react-router-dom'

const CoinDetials = ({setProgress}) => {
  const params = useParams();
    const [coin, setCoin]=useState({})
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(false)
    const [currency, setCurrency]=useState("pkr")

    const currencySymbol =
  currency === "pkr" ? "RS" : currency === "eur" ? "€" : currency === "aed" ? "AED": "$";
  

    useEffect(() => {
      setProgress(10)
        const fetchCoin  = async() => {
          setProgress(30)
          try {
            setProgress(60)
          await fetch(`${base_url}coins/${params.id}`)
         .then((response) => response.json())
         .then((data) => { setCoin(data)
          setProgress(85)
          setLoading(false)
          setProgress(100)
        })        
      } catch (error) {
        setError(true)
        setLoading(false) 
        }
      }
      fetchCoin ()
    
      }, [currency])
      if (error) return <Text>This is a Error</Text>

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} css={{marginTop:"65px", marginBottom:"-90px",marginLeft:"60px"}}>
            <HStack spacing={"4"}>
              <Radio value={"pkr"}>RS</Radio>
              <Radio value={"aed"}>AED</Radio>
              <Radio value={"eur"}>EUR</Radio>
              <Radio value={"usd"}>USD</Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
            <Text fontSize={"small"} alignSelf="center" opacity={0.7} css={{marginTop:"50px",marginBottom:"-5px"}}>
              Last Updated On{" "}
              {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>

            <Image
              src={coin.image.large}
              w={"16"}
              h={"16"}
              objectFit={"contain"}
            />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}:
                {coin.market_data.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

            <Badge
              fontSize={"2xl"}
              bgColor={"blackAlpha.800"}
              color={"white"}
            >{`#${coin.market_cap_rank}`}</Badge>

            <CustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
            />
          
            <Box w={"full"} p="4">
              <Item title={"Max Supply"} value={coin.market_data.max_supply} />
        
              <Item
                title={"Circulating Supply"}
                value={coin.market_data.circulating_supply}
              />
              <Item
                title={"Market Cap"}
                value={`${currencySymbol}:${coin.market_data.market_cap[currency]}`}
              />
              <Item
                title={"All Time Low"}
                value={`${currencySymbol}:${coin.market_data.atl[currency]}`}
              />
              <Item
                title={"All Time High"}
                value={`${currencySymbol}:${coin.market_data.ath[currency]}`}
              />
            </Box>
          </VStack>
        </>
      )}
    </Container>
  )
}

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
);

export default CoinDetials
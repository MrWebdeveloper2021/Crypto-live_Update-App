import {Button, Container, Heading, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import React,{useState, useEffect} from 'react'
import CoinsCard from './CoinsCard'
import Loader from './Loader'
// import {base_url} from '../main'
import { base_url } from './Exchanges'
import Footer from "../components/Footer"

const Coins = ({setProgress}) => {
  const [coins, setCoins]=useState([])
  const [loader, setLoader]=useState(true)
  const [error, setError]=useState(false)
  const [page, setPage]=useState(1)
  const [currency, setCurrency]=useState("pkr")

  const currencySymbol =
  currency === "pkr" ? "RS" : currency === "eur" ? "€" : currency === "aed" ? "AED": "$";

  const changePage = (page) => {
    setPage(page)
    setLoader(true)
  }

  const btns = new Array(50).fill(1)

  useEffect(() => {
    setProgress(10)
    const exchangeFatchdata = async() => {
      setProgress(30)
      try {
        setProgress(60)
        await fetch(`${base_url}coins/markets?vs_currency=${currency}&page=${page}`)
     .then((response) => response.json())
    //  setProgress(80)
     .then((data) => { setCoins(data)
      setProgress(90)
      setLoader(false)
      setProgress(100)
    })        
  } catch (error) {
    setError(true)
    setLoader(false) 
    }

  }
  exchangeFatchdata()

  }, [page,currency])
  if(error) return <Heading textAlign={"center"} marginTop={"50px"}>404 Error Page Not Found</Heading>
  return (
    <>
    <Container maxW={'container.xl'} >
      {
        loader ? ( <Loader />) : ( <>

          <RadioGroup value={currency} onChange={setCurrency} css={{marginTop:"70px", marginBottom:"-75px",marginLeft:"60px"}}>
            <HStack spacing={"4"}>
              <Radio value={"pkr"}>PKR</Radio>
              <Radio value={"aed"}>AED</Radio>
              <Radio value={"eur"}>EUR</Radio>
              <Radio value={"usd"}>USD</Radio>
            </HStack>
          </RadioGroup>
        { <HStack flexWrap={'wrap'} justifyContent={"space-evenly"} paddingTop={"80px"}>
          {coins.map((i) => (
            <CoinsCard  id={i.id} key={i.id} name={i.name}  imge={i.image} symbol={i.symbol}  price={i.current_price}
            currencySymbol={currencySymbol}  />
          ))}
        </HStack> }
        <HStack p={"8"} paddingTop={['10px','30px']} paddingBottom={['60px', '30px']} overflowX={"auto"} maxW={'container.xl'}>
        {btns.map((item,index) => (
          <Button  key={index} bgColor={"blackAlpha.900"} color={"white"} onClick={() => changePage(index+ 1)}>
            {index+1}
          </Button>
        ))}
        </HStack>
        </>
      
      )}          
    </Container>
      {/* <Footer/> */}
    </>

  )
}

export default Coins
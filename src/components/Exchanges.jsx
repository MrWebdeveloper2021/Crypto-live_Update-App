import { Button,Container, Heading, HStack } from '@chakra-ui/react'
import React,{useState, useEffect} from 'react'
import ExchangeCard from './ExchangeCard'
import Footer from './Footer'
import Loader from './Loader'
export const base_url = 'https://api.coingecko.com/api/v3/'

const Exchanges = ({setProgress}) => {
  const [exchanged, setExchanged]=useState([])
  const [loader, setLoader]=useState(true)
  const [error, setError]=useState(false)
  const [page, setPage]=useState(1)

  const changePage = (page) => {
    setPage(page)
    setLoader(true)
  }
  const btns = new Array(5).fill(1)

  useEffect(() => {
    setProgress(10)
    const exchangeFatchdata = async() => {
      setProgress(30)
      try {
        setProgress(60)
        await fetch(`${base_url}exchanges?page=${page}`)
     .then((response) => response.json())
     .then((data) => { setExchanged(data)
      setProgress(85)
      setLoader(false)
      setProgress(100)
    })        
  } catch (error) {
    setError(true)
    setLoader(false) 
    }

  }
  exchangeFatchdata()

  }, [page])
  if(error) return <Heading textAlign={"center"} marginTop={"50px"}>404 Error Page Not Found</Heading>
  return (
    <>
    <Container maxW={'container.xl'} >
      {
        loader ? ( <Loader />) : ( <>

          { <HStack flexWrap={'wrap'} justifyContent={"space-evenly"} paddingTop={"80px"}>
          
          {exchanged.map((i) => (
            <ExchangeCard  key={i.id} name={i.name} url={i.url} imge={i.image} rank={i.trust_score_rank}
             yestablished={i.year_established} bornDate={i.year_established} />
          ))}
        </HStack> }
        <HStack p={"8"} paddingTop={['10px','20px']} paddingBottom={['60px', '40px']} overflowX={"auto"} maxW={'container.xl'} >
        {btns.map((item,index) => (
          <Button  key={index} bgColor={"blackAlpha.900"} color={"white"} onClick={() => changePage(index+ 1)}>
            {index+1}
          </Button>
        ))}
        </HStack>
        {/* <Footer/> */}
        </>
      
    )}          
    </Container>
    </>
  )
}

export default Exchanges
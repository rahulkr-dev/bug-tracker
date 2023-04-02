import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
        <Flex mb="2rem" align={"center"} justify={"center"} p="1rem" bg="gray.500">
            <Text color="whatsapp.100" fontSize={"1.3rem"} letterSpacing={"8px"} fontFamily={"cursive"} _firstLetter={{color:"black",fontSize:"2rem"}}>Bug Tracker</Text>
        </Flex>
    )
}

export default Navbar
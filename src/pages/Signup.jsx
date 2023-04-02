import React from 'react'
import { Box, Input, Text, Button, Heading, Grid, InputGroup, InputRightElement, FormLabel } from "@chakra-ui/react";
import { BiHide } from "react-icons/bi"
import { AiOutlineEye } from "react-icons/ai"
const Signup = () => {
    const [showPassword, setShowPassword] = React.useState(true);
    const [showConfirmPass, setShowConfirmPass] = React.useState(true)
    return (
        <Box 
        boxShadow={"md"}
        clipPath={"polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0 0)"}
        p="2rem" pb="5rem" w={["90%", "80%", "70%", "45%"]} m="auto" bg="gray.100">
            <Heading p="1rem" fontFamily={"cursive"} as="h2" size={"2xl"}>Register User</Heading>
            <Grid p="1rem" gap="12px" fontWeight={"bold"}>
                <Input variant={"flushed"} focusBorderColor='gray.300' type="text" placeholder='Enter your name' />
                <Input variant={"flushed"} focusBorderColor='gray.300' type="email" placeholder='Enter your email' />
                <InputGroup>
                    <Input variant={"flushed"} focusBorderColor='gray.300' type={showPassword?"password":"text"} placeholder="Enter your password" />
                    <InputRightElement onClick={()=>setShowPassword(!showPassword)}>
                        {
                            showPassword ? <BiHide /> : <AiOutlineEye />
                        }
                    </InputRightElement>
                </InputGroup>
                <InputGroup>
                <Input variant={"flushed"} focusBorderColor='gray.300' type={showConfirmPass?"password":"text"} placeholder="Re-enter your password" />
                    <InputRightElement onClick={()=>setShowConfirmPass(!showConfirmPass)}>
                        {
                            showConfirmPass ? <BiHide /> : <AiOutlineEye />
                        }
                    </InputRightElement>
                </InputGroup>
                <Button m="auto" mt="1rem" w="50%" colorScheme="linkedin" >Singup</Button>
            </Grid>
        </Box>
    )
}

export default Signup
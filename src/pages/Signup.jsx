import React from 'react'
import { Box, Input, Text, Button, Heading, Grid, InputGroup, InputRightElement, FormLabel } from "@chakra-ui/react";
import { BiHide } from "react-icons/bi"
import { AiOutlineEye } from "react-icons/ai";
// for custom alert Box
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const init = {
    name:"",
    email:"",
    password:"",
    confirmPassword:""
}
const alertObject = {
    title: 'Custom width, padding, color, background.',
    width: 400,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  }
const Signup = () => {
    const [showPassword, setShowPassword] = React.useState(true);
    const [showConfirmPass, setShowConfirmPass] = React.useState(true);
    const [user,setUser] = React.useState(init);
    // Controlled Input
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser(
            {...user,[name]:value}
        )
    }
    // Form Submit
    const handleSubmit = ()=>{
        const {name,email,password,confirmPassword} = user;
        if(!name || !email || !password || !confirmPassword){
            // alert("Enter Credentials")
            Swal.fire({
                ...alertObject,
                title:"All the fields are required"
            })
            return
        };
        if(password!==confirmPassword){
            // alert("Password and RePassword not match");
            Swal.fire({
                ...alertObject,
                title:"Password and Confirm Password not Match Try again"
            })
            return;
        };

    }
    return (
        <Box 
        boxShadow={"md"}
        clipPath={"polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0 0)"}
        p="2rem" pb="5rem" w={["90%", "80%", "70%", "45%"]} m="auto" bg="gray.100">
            <Heading p="1rem" fontFamily={"cursive"} as="h2" size={"2xl"}>Register User</Heading>
            <Grid p="1rem" gap="12px" fontWeight={"bold"}>
                <Input name="name" value={user.name} onChange={handleChange} variant={"flushed"} focusBorderColor='gray.300' type="text" placeholder='Enter your name' />
                <Input name="email" value={user.email} onChange={handleChange} variant={"flushed"} focusBorderColor='gray.300' type="email" placeholder='Enter your email' />
                <InputGroup>
                    <Input name="password" value={user.password} onChange={handleChange} variant={"flushed"} focusBorderColor='gray.300' type={showPassword?"password":"text"} placeholder="Enter your password" />
                    <InputRightElement onClick={()=>setShowPassword(!showPassword)}>
                        {
                            showPassword ? <BiHide /> : <AiOutlineEye />
                        }
                    </InputRightElement>
                </InputGroup>
                <InputGroup>
                <Input name="confirmPassword" value={user.confirmPassword} onChange={handleChange} variant={"flushed"} focusBorderColor='gray.300' type={showConfirmPass?"password":"text"} placeholder="Re-enter your password" />
                    <InputRightElement onClick={()=>setShowConfirmPass(!showConfirmPass)}>
                        {
                            showConfirmPass ? <BiHide /> : <AiOutlineEye />
                        }
                    </InputRightElement>
                </InputGroup>
                <Button onClick={handleSubmit} m="auto" mt="1rem" w="50%" colorScheme="linkedin" >Singup</Button>
            </Grid>
        </Box>
    )
}

export default Signup
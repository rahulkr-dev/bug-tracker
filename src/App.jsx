import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import {BugTrackerApp} from "./components"

const App = () => {
  return (
    <ChakraProvider>
      <BugTrackerApp />
    </ChakraProvider>
  )
}

export default App
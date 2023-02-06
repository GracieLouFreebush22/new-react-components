import { Accordion, CircularProgress } from "@chakra-ui/react";
import { AccordianSection } from "./accordian";
import { CircularProgressSection } from "./CircularProgressSection";
import { greet } from "./utils/greet";

function App(): JSX.Element {
  return (
  <>
    <h1>Introucing the Accordian...</h1>
    <AccordianSection/>
    <CircularProgressSection />
  </>
 
  
  )
}

export default App;

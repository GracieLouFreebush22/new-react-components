import { Accordion, CircularProgress } from "@chakra-ui/react";
import { AccordianSection } from "./accordian";
import { CircularProgressSection } from "./CircularProgressSection";
import { TabsSection } from "./TabSection";
import { greet } from "./utils/greet";


function App(): JSX.Element {
  return (
  <>
    <h1 >Introucing the Accordian...</h1>
    <TabsSection/>
    <AccordianSection/>
    <CircularProgressSection />
  </>
 
  
  )
}

export default App;

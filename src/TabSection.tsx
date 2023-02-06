import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


export function TabsSection(): JSX.Element{
    return(
        <Tabs variant='soft-rounded'>
  <TabList>
    <Tab>HOME</Tab>
    <Tab>SHTUFF</Tab>
    <Tab>ABOUT</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p> this is the home section</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>put a contact form in here</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    )
}
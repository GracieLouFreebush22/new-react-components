import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'


export function CircularProgressSection():JSX.Element{
    return(
  
<CircularProgress value={40} color='green.400' size='400px'>
  <CircularProgressLabel>40%</CircularProgressLabel>
</CircularProgress>
    )
}
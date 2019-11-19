import React from 'react'
import { CircularProgress } from '@material-ui/core';
const Progress = (props: any) => {
    if(props.withValue){
    return(
        <CircularProgress />
    )}else{
        return(
        <CircularProgress variant="determinate" value={props.progress} />  
    )}
    
}
export default Progress
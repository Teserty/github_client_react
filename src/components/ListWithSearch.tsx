import React from "react"
import {TextField, Select, MenuItem, IconButton, Container } from '@material-ui/core';
const ListWithSearch: React.FC = (props: any)=>{
    const selectorChange = (event:any) => {
        console.log(event.target.value)
    }
    return(
        <Container>
            <TextField variant="outlined"/>
            <Select defaultValue="user" onChange={selectorChange}>
            <MenuItem value="user" >
                <em>Users</em>
            </MenuItem>
            <MenuItem value="repo">Repos</MenuItem>
            </Select>
            <IconButton>Search</IconButton>
        </Container>
    )
}
export default ListWithSearch
// import React from 'react'

// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// eslint-disable-next-line react/prop-types
const WhiteButton = ({ text, onClick }) => {
    return (
        // <Stack spacing={2} direction="row">
        <Button onClick={onClick} sx={{ color: 'gray', borderColor: 'gray', fontWeight: '700', fontSize: '15px' }} variant="outlined">{text ? text : "text"}</Button>
        // </Stack>
    )
}

export default WhiteButton

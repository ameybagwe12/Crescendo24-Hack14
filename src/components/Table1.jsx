import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function IntroDivider(props) {
  return (
    
    <Card variant="outlined" sx={{ maxWidth: 360 }} style={{marginBottom: "10px",backgroundColor:props.bg}}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
           <b> {props.name}</b>
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
           <img src={props.img} style={{width: "30px"}}/>
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2" style={{color:"black"}}>
          {props.pnnData}
        </Typography>
      </Box>
      <Divider />
    
    </Card>
  );
}
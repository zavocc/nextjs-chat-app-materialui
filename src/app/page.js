import Button from '@mui/material/Button';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function Home() {
  return (
    <Box sx={
      {
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh',
        overflow: 'hidden',
      }
    }>
      <Typography level="h2" sx={{ fontWeight: 'bold' }} >Chat with Claude 3 Opus</Typography>
      <Box sx={
        { 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          marginLeft: '5px', 
          marginRight: '5px', 
          marginBottom: '5px',
          bgcolor: 'background.paper',
        }
      }>

        <Grid container spacing={2}>
          <TextField label="Chat" variant="outlined" multiline fullWidth />
          <Button variant='outlined'>Send</Button>
          <FormControl sx={{ width:250 }}>
            <InputLabel id="models-selection">Select Model</InputLabel>
            <Select defaultValue={20} label="Models" id="models-selection">
              <MenuItem value={10}>claude-3.5-sonnet</MenuItem>
              <MenuItem value={20}>claude-3.5-haiku</MenuItem>
              <MenuItem value={30}>gpt-4o</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Box>
    </Box>
  );
}

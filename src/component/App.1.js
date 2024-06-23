import { Typography ,Button,Stack,TextField} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
export function App1() {
  return (
    <>
    <Typography variant="h5" sx={{ color: "red" ,mt:"1rem"}}>
      Hello this is my first Material ui program
     
      <Button variant="contained" href="#text-buttons" sx={{color:"coral" ,margin:"1rem",background:"white"}} size="small">
      submit1
    </Button>
    </Typography>
    <Typography variant="h6" sx={{color:"blue",padding:"1rem"}}>
      How are you
      <Button variant="contained" onClick={()=>{alert("you clicked button 2")}} sx={{color:"aqua",margin:"1rem"}} size='large'>
      submit2
    </Button>
    </Typography>
    <Stack direction="row" spacing={2}>
    <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
    <Stack direction="row" spacing={2}>
    <h3>Name :</h3>
    <TextField variant="standard" namespace="name "/>
    </Stack>
    <br></br>
    <Stack direction="row" spacing={2}>
    <h3>Roll NO:</h3>
    <TextField variant="outlined" namespace="name "/>
    </Stack>
    <br></br>
    <Stack direction="row" spacing={2}>
    <h3>standard:</h3>
    <TextField variant="filled" namespace="name " padding="5px" mt="1px"/>
    </Stack>
    </>
  );
}

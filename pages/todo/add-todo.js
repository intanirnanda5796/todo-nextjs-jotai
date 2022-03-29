import { useRouter } from "next/router";
import { Box, Button, Container, TextField } from "@mui/material";
import { useAtom } from "jotai";
import { newTodo, addTodoAtom } from "../../store";

export default function AddTodo() {
  const [data, setData] = useAtom(newTodo);
  const [, addTodo] = useAtom(addTodoAtom);
  const route = useRouter();

  console.log(data);

  const handleSubmit = () => {
      addTodo(data);
      route.push('/todo');
  }

  return (
    <Container sx={{ width: "500px", marginTop: "20px" }}>
      <Box component="form" autoComplete="off">
        <TextField
          label="Title"
          type="text"
          value={data.title || ''}
          onChange={(e) => setData({ title: e.target.value }) }
        />
        <Button type="submit" variant="contained" onClick={() => handleSubmit()}>Submit</Button>
      </Box>
    </Container>
  );
}

import { useRouter } from "next/router";
import {
  Container,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useAtom } from "jotai";
import { todo, deleteTodoAtom } from "../../store";

export default function Todo() {
  const [data] = useAtom(todo);
  const [, deleteTodo] = useAtom(deleteTodoAtom);
  const route = useRouter();

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleAdd = () => {
      route.push('/todo/add-todo');
  }

  return (
    <Container maxWidth="xl">
      <Button variant="contained" startIcon={<Add />} sx={{ marginTop: '20px' }} onClick={() => handleAdd()}>Add New</Button>
      <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val) => (
              <TableRow key={val.id}>
                <TableCell>{val.title}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteTodo(val.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

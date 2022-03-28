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
import { useAtom } from "jotai";
import { todo, deleteTodoAtom } from "../../store";

export default function Todo() {
  const [data] = useAtom(todo);
  const [, deleteTodo] = useAtom(deleteTodoAtom);

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  return (
    <Container maxWidth="xl">
      <TableContainer component={Paper}>
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

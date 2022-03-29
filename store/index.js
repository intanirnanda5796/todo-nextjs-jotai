import { atom } from "jotai";

const handleAddTodo = (todo, data) => [
  ...todo,
  {
    id: Math.max(0, Math.max(...todo.map((listTodo) => listTodo.id))) + 1,
    title: data.title,
    complete: false,
  },
];

const handleCompleteTodo = (todo, id) => {
  const completeTodo = todo.map((listTodo) => {
    if (listTodo.id === id) {
      return {
        id: listTodo.id,
        title: listTodo.title,
        complete: true,
      };
    }

    return listTodo;
  });

  return completeTodo;
};

const handleUncompleteTodo = (todo, id) => {
  const unCompleteTodo = todo.map((listTodo) => {
    if (listTodo.id === id) {
      return {
        id: listTodo.id,
        title: listTodo.title,
        complete: false,
      };
    }

    return listTodo;
  });

  return unCompleteTodo;
};

const handleRemoveTodo = (todo, id) =>
  todo.filter((listTodo) => listTodo.id !== id);

const todo = atom([
  { id: 1, title: "belajar jotai 1", complete: true },
  { id: 2, title: "belajar jotai 2", complete: false },
  { id: 3, title: "belajar jotai 3", complete: false },
]);

const newTodo = atom({ title: "" });

const addTodoAtom = atom(
  () => "",
  (get, set) => {
    set(todo, handleAddTodo(get(todo), get(newTodo)));
    set(newTodo, { title: "" });
  }
);

const deleteTodoAtom = atom(
  () => "",
  (get, set, id) => {
    set(todo, handleRemoveTodo(get(todo), id));
  }
);

const completeTodoAtom = atom(
  () => "",
  (get, set, id) => {
    set(todo, handleCompleteTodo(get(todo), id));
  }
);

const unCompleteAtom = atom(
  () => "",
  (get, set, id) => {
    set(todo, handleUncompleteTodo(get(todo), id));
  }
);

export {
  todo,
  newTodo,
  addTodoAtom,
  deleteTodoAtom,
  completeTodoAtom,
  unCompleteAtom,
};

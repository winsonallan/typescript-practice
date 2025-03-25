// TYPESCRIPT'S GOAL IS TO CATCH ERRORS AS FAST AS POSSIBLE TO MINIMIZE DEVELOPMENT TIME THAT GETS USED BY DEBUGGING JAVASCRIPT

import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users/1";

interface Todo {
  //interfaces define structure of an object inside the code
  id: number;
  name: string;
  email: string;
}

// axios.get(url).then((response) => {
//   const todo = response.data as Todo;
//   const id = todo.Id; //error caught here due to interface
//   const name = todo.name;
//   const email = todo.email;

//   logTodo(id, name, email);
// });

const logTodo = (id: number, name: string, email: string) => {
  console.log(`
      The Todo with ID: ${id}
      Has a name of ${name}
      Has email of ${email}
    `);
};

// axios.get(url).then((response) => {
//   const todo = response.data as Todo;
//   const id = todo.id; //error caught here due to interface
//   const name = todo.name;
//   const email = todo.email;

//   logTodo(id, id, email); //error caught here
// });

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id; //error caught here due to interface
  const name = todo.name;
  const email = todo.email;

  logTodo(id, name, email);
});

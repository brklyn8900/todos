import { System, Protobuf, authority } from "@koinos/sdk-as";
import { todos } from "./proto/todos";

export class Todos {
  todo(args: todos.todo_arguments): todos.todo_result {
    // const task = args.task;

    // YOUR CODE HERE

    const res = new todos.todo_result();
    // res.value = ;

    return res;
  }
}

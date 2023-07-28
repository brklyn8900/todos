import { System } from "@koinos/sdk-as";
import { todos } from "./proto/todos";

export class Todos {
  todo(args: todos.todo_arguments): todos.todo_result {
    const task = args.task!;

    const res = new todos.todo_result();
    res.value = `${task}!`;

    System.log(res.value!);

    return res;
  }
}

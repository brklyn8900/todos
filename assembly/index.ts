import { System, Protobuf, authority } from "@koinos/sdk-as";
import { Todos as ContractClass } from "./Todos";
import { todos as ProtoNamespace } from "./proto/todos";

export function main(): i32 {
  const contractArgs = System.getArguments();
  let retbuf = new Uint8Array(1024);

  const c = new ContractClass();

  switch (contractArgs.entry_point) {
    case 0x602fae58: {
      const args = Protobuf.decode<ProtoNamespace.todo_arguments>(
        contractArgs.args,
        ProtoNamespace.todo_arguments.decode
      );
      const res = c.todo(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.todo_result.encode);
      break;
    }

    default:
      System.exit(1);
      break;
  }

  System.exit(0, retbuf);
  return 0;
}

main();

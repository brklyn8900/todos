import { Writer, Reader } from "as-proto";

export namespace todos {
  export class todo_arguments {
    static encode(message: todo_arguments, writer: Writer): void {
      const unique_name_task = message.task;
      if (unique_name_task !== null) {
        writer.uint32(10);
        writer.string(unique_name_task);
      }
    }

    static decode(reader: Reader, length: i32): todo_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new todo_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.task = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    task: string | null;

    constructor(task: string | null = null) {
      this.task = task;
    }
  }

  export class todo_result {
    static encode(message: todo_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.string(unique_name_value);
      }
    }

    static decode(reader: Reader, length: i32): todo_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new todo_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: string | null;

    constructor(value: string | null = null) {
      this.value = value;
    }
  }

  export class todo_object {
    static encode(message: todo_object, writer: Writer): void {
      const unique_name_task = message.task;
      if (unique_name_task !== null) {
        writer.uint32(10);
        writer.string(unique_name_task);
      }
    }

    static decode(reader: Reader, length: i32): todo_object {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new todo_object();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.task = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    task: string | null;

    constructor(task: string | null = null) {
      this.task = task;
    }
  }
}

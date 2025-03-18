import { type Task } from "wasp/entities";
import { type CreateTask, type UpdateTask, type DeleteTasks } from "wasp/server/operations";
type CreateArgs = Pick<Task, "description">;
export declare const createTask: CreateTask<CreateArgs, Task>;
type UpdateArgs = Pick<Task, "id" | "isDone">;
export declare const updateTask: UpdateTask<UpdateArgs>;
export declare const deleteTasks: DeleteTasks<Task["id"][]>;
export {};

import TodoForm from "../components/to-do/TodoForm";

export default function CreateTodo() {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
        Create New Task
      </h1>
      <TodoForm />
    </div>
  );
}

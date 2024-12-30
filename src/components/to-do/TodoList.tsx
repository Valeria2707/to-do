import { useDeleteTodoMutation } from "../../features/todosApi";
import { Todo } from "../../types/todo";

type Props = {
  filteredTodos: Todo[];
};

export default function TodoList({ filteredTodos }: Props) {
  const [deleteTodo] = useDeleteTodoMutation();
  return (
    <div className="mt-8 w-full">
      {filteredTodos.length === 0 ? (
        <p className="text-center text">No tasks are found</p>
      ) : (
        <ul className="space-y-4">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg dark:hover:shadow-gray-900 transition-shadow flex items-center justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {todo.title}
                </h2>
                <p className="text">{todo.description}</p>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition-all"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import { useState } from "react";
import { useGetTodosQuery } from "../features/todosApi";
import { Link } from "react-router-dom";
import TodoList from "../components/to-do/TodoList";

export default function Home() {
  const { data: todos = [], isLoading, isError } = useGetTodosQuery();
  const [search, setSearch] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <p className="text text-center">Loading...</p>;

  if (isError)
    return (
      <p className="text-red-500 dark:text-red-400 text-center">
        Ooops... Try again
      </p>
    );

  return (
    <div className="w=full flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
        To Do List
      </h1>
      <input
        type="text"
        placeholder="Searching..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input-field w-1/2"
      />
      <Link to="/create" className="btn">
        Create new task
      </Link>
      <TodoList filteredTodos={filteredTodos} />
    </div>
  );
}

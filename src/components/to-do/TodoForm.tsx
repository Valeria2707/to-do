import { useState } from "react";
import { useCreateTodoMutation } from "../../features/todosApi";
import { useNavigate } from "react-router-dom";

export default function TodoForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [createTodo] = useCreateTodoMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTodo(formData).unwrap();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (value: string, key: string) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <div className="mb-6">
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => handleChange(e.target.value, "title")}
          className="input-field w-full"
          placeholder="Enter task title"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="label">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange(e.target.value, "description")}
          className="input-field w-full"
          placeholder="Enter task description"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="btn">
          Create Task
        </button>
      </div>
    </form>
  );
}

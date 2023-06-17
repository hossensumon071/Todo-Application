import { useRef, useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [taks, setTask] = useState("");

  const inputRef = useRef(null);

  // add task handle event
  const addTaskHandler = (e) => {
    e.preventDefault();

    // post task into a server
    taskposting(taks);

    inputRef.current.blur();
    setTask("");
  };

  const taskposting = async (text) => {
    const res = await fetch(
      "https://whispering-dour-beechnut.glitch.me/tasks",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ text }),
      }
    );
    const data = await res.json()
    setTasks([...tasks, data])
  };
  return (
    <form
      className="bg-gray-900 container mx-auto flex justify-between p-10"
      onSubmit={addTaskHandler}
    >
      <input
        value={taks}
        onChange={(e) => setTask(e.target.value)}
        ref={inputRef}
        type="text"
        placeholder="what do you thing?"
        required
        className="bg-transparent outline-none border-b-2 border-gray-400 py-2 px-5 focus:border-teal-600"
      />
      <button
        type="submit"
        className="bg-teal-900/30 py-2 px-5 border-2 border-teal-500 rounded text-teal-500 hover:bg-teal-500 hover:text-gray-900 duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;

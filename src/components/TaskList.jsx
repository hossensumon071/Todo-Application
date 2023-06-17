import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div className="container mx-auto flex-flex-col gap-3 bg-gray-900 p-10">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;

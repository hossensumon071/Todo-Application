import TaskItem from "./TaskItem"

const TaskList = () => {
  return (
    <div className="container mx-auto flex-flex-col gap-3 bg-gray-900 p-10">
      <TaskItem/>
    </div>
  )
}

export default TaskList
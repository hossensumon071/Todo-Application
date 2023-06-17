import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  error,
  loading,
  handleEditSubmitter,
  editedText,
  setEditedText,
}) => {
  return (
    <div className="container mx-auto flex-flex-col gap-3 bg-gray-900 p-10">
      {loading ? (
        <p className="text-center">{error ? error : "Loading..."}</p>
      ) : (
        tasks.length === 0 && <p className="text-center">Not Task to Show</p>
      )}

      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          handleEditSubmitter={handleEditSubmitter}
          editedText={editedText}
          setEditedText={setEditedText}
        />
      ))}
    </div>
  );
};

export default TaskList;

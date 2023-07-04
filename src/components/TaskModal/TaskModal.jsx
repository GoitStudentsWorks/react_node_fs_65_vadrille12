import { TaskForm } from 'components/TaskForm/TaskForm';
import { Modal } from 'components/shared/Modal/Modal';

export const TaskModal = ({ onClose, action, column, taskToEdit }) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm
        onClose={onClose}
        action={action}
        column={column}
        taskToEdit={taskToEdit}
      />
    </Modal>
  );
};

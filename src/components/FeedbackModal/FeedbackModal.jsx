import { Modal } from 'components/shared/Modal/Modal';
import { FeedbackForm } from 'components/FeedbackModal/FeedbackForm/FeedbackForm';

export const FeedbackModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <FeedbackForm onClose={onClose} />
    </Modal>
  );
};

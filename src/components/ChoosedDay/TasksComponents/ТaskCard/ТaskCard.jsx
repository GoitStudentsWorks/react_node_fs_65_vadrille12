import { EditBtnBar } from '../EditBtnBar/EditBtnBar';
import {
  Avatar,
  AvatarGroupContainer,
  StatusLow,
  TaskCardStyled,
  TaskContainer,
  TaskText,
  StatusMedium,
  StatusHigh,
} from './ТaskCard.styled';

export const TaskCard = ({ task, onOpen, setAction, setColumn, onEdit }) => {
  const { title, priority, category } = task;

  return (
    <TaskCardStyled>
      <TaskText>{title}</TaskText>
      <TaskContainer>
        <AvatarGroupContainer>
          <Avatar>ava</Avatar>
          {priority === 'low' && <StatusLow>Low</StatusLow>}
          {priority === 'medium' && <StatusMedium>Medium</StatusMedium>}
          {priority === 'high' && <StatusHigh>High</StatusHigh>}
        </AvatarGroupContainer>
        <EditBtnBar
          onOpen={onOpen}
          setAction={setAction}
          setColumn={setColumn}
          category={category}
          task={task}
          onEdit={onEdit}
        />
      </TaskContainer>
    </TaskCardStyled>
  );
};

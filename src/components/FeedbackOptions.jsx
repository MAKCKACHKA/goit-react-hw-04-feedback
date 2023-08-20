import { Button } from './Styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Button key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </Button>
  ));
};

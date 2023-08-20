import './Styled';
import { Stat } from './Styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul>
        <Stat>
          <p>Good: {good}</p>
        </Stat>
        <Stat>
          <p>Neutral: {neutral}</p>
        </Stat>
        <Stat>
          <p>Bad: {bad}</p>
        </Stat>
        <Stat>
          <p>Total: {total}</p>
        </Stat>
        <Stat>
          <p>Positive feedback: {positivePercentage}</p>
        </Stat>
      </ul>
    </div>
  );
};

import styled from "styled-components";

export default function Player({
  name,
  score,
  id,
  onIncreaseScore,
  onDecreaseScore,
}) {
  return (
    <PlayerContainer>
      <span>{name}</span>
      <ChangeScore>
        <button onClick={() => onDecreaseScore(id)}>
          <Operater>-</Operater>
        </button>
        <span>{score}</span>
        <button onClick={() => onIncreaseScore(id)}>
          <Operater>+</Operater>
        </button>
      </ChangeScore>
    </PlayerContainer>
  );
}

const PlayerContainer = styled.li`
  box-sizing: border-box;
  list-style: none;
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;
const ChangeScore = styled.div`
  display: flex;
  gap: 1rem;
`;

const Operater = styled.span`
  padding: 1rem;
`;

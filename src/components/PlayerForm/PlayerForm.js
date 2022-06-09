import styled from "styled-components";

export default function PlayerForm({ onCreatePlayer }) {
  function createNewPlayer(event) {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    onCreatePlayer(name.value);
    form.reset();
    name.focus();
  }

  return (
    <Form aria-labelledby="Player" onSubmit={createNewPlayer}>
      <h2 id="Player"> Add new Player</h2>
      <label htmlFor="name"></label>
      <Input type="text" id="name" aria-label="Player name"></Input>
      <SubmitButton>Create Player</SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  margin: 4rem 1rem;
  gap: 0.5rem;
`;

const Input = styled.input`
  margin-top: 0.2rem;
  height: 1.5rem;
`;

const SubmitButton = styled.button`
  color: var(--dark-purple);
  background-color: var(--color-secondary);
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  font: inherit;
  width: 100%;
  margin: 0 auto;
`;

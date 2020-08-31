import styled from 'styled-components';

export const Form = styled.form`
  display:grid;

  @media (min-width:786px){
  & {
    grid-template-columns: auto 1fr auto;
    grid-gap: 1rem;
    align-items: center;
  }
}
`;

Form.label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
  text-transform: uppercase;
`;

Form.input = styled.input`
  font-size: 1.6rem;
  padding: 0.5rem 2rem;
  line-height: 2.8rem;
  border-radius: 20px;
  border: 1px solid var(--input_border);
  margin-bottom: 1rem;
  background: var(--input_background);
  color: var(--input_text);

  &:focus {
    border: 1px solid var(--input_focus);
  }

  @media (min-width:786px){
    & {
      margin-bottom: 0;
    }
  }
`;

Form.button = styled.button`
  background-color: var(--button_background);
  color: var(--button_text);
  padding: 1rem 2rem;
  border: none;
  border-radius: 20px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background-color 250ms;

  &:hover {
    background-color: var(--button_background_hover);
  }
`;

export const Card = styled.div`
  margin-top: 4rem;
`;
import styled from 'styled-components';

export const Card = styled.div`
  padding: 2rem 4rem;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.25);
  margin-bottom: 2rem;
  background-color: var(--card_background);
`;

Card.title = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 3.2rem;
`;

Card.image = styled.img`
  margin: 0 auto;
  display: block;
`;
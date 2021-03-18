import styled, { css } from 'styled-components';

interface ContainerProps {
  highlightBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--shape);
  border-radius: 0.25rem;
  color: var(--text-title);
  padding: 1.5rem 2rem;

  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  strong {
    display: block;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
    margin-top: 1rem;
  }

  ${({ highlightBackground }) =>
    highlightBackground &&
    css`
      background: var(--green);
      color: #fff;
    `}
`;

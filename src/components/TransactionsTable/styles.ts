import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    border-spacing: 0 0.5rem;
    width: 100%;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      background: var(--shape);
      border: 0;
      border-radius: 0.25rem;
      color: var(--text-body);
      padding: 1rem 2rem;

      &:first-child {
        color: var(--text-title);
      }
    }
  }
`;
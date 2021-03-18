import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title-color);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 400;
    height: 4rem;
    padding: 0 1.5rem;
    width: 100%;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    transition: filter 0.2s;
    width: 100%;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  margin: 1rem 0;

  button {
    align-items: center;
    background: transparent;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    display: flex;
    height: 4rem;
    justify-content: center;
    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
      height: 20px;
      width: 20px;
    }

    span {
      color: var(--text-title);
      display: inline-block;
      font-size: 1rem;
      margin-left: 1rem;
    }
  }
`;

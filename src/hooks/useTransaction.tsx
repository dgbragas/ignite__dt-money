import { useContext } from 'react';
import {
  TransactionsContext,
  ITransactionsContextData,
} from '../contexts/TransactionsContext';

export function useTransactions(): ITransactionsContextData {
  const context = useContext(TransactionsContext);

  return context;
}

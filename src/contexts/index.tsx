import { ReactNode } from 'react';

import { TransactionsProvider } from './TransactionsContext';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps): JSX.Element {
  return <TransactionsProvider>{children}</TransactionsProvider>;
}

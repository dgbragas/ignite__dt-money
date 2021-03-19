import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { AppProvider } from './contexts';

import { Dashboard } from './pages/Dashboard';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App(): JSX.Element {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false,
  );

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <AppProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseTransactionModal}
        />
      </AppProvider>

      <GlobalStyle />
    </>
  );
}

import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

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
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
    </>
  );
}

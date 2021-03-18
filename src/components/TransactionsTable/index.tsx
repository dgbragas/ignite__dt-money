import { useEffect } from 'react';
import { Container } from './styles';

import { api } from '../../services/api';

// interface TransactionsTableProps {}

export function TransactionsTable(): JSX.Element {
  useEffect(() => {
    (async () => {
      const response = await api.get('transactions');
      console.log(response);
    })();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

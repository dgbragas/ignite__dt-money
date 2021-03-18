import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';

import { Container } from './styles';

// interface DashboardProps {}

export function Dashboard(): JSX.Element {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}

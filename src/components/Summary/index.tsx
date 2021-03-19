import { useTransactions } from '../../hooks/useTransaction';

import { SummaryCard } from './SummaryCard';
import * as S from './styles';

export function Summary(): JSX.Element {
  const { transactions } = useTransactions();

  const { deposits, total, withdraws } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      }

      if (transaction.type === 'withdraw') {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  );

  return (
    <S.Container>
      <SummaryCard title="Entradas" type="income" value={deposits} />
      <SummaryCard title="Saídas" type="outcome" value={withdraws} />
      <SummaryCard title="Total" type="total" value={total} />
    </S.Container>
  );
}

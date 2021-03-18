import incomeImg from '../../../assets/income.svg';
import outcomeImg from '../../../assets/outcome.svg';
import totalImg from '../../../assets/total.svg';

import * as S from './styles';

type IType = 'income' | 'outcome' | 'total';

interface SummaryCardProps {
  title: string;
  value: string | number;
  type: IType;
}

function getSummaryCardIcon(type: IType) {
  const icons = {
    income: {
      img: incomeImg,
      altText: 'Entradas',
    },
    outcome: {
      img: outcomeImg,
      altText: 'Saídas',
    },
    total: {
      img: totalImg,
      altText: 'Total',
    },
  };

  const targetIcon = icons[type];

  return targetIcon;
}

export function SummaryCard({
  title,
  value,
  type = 'income',
}: SummaryCardProps): JSX.Element {
  return (
    <S.Container highlightBackground={type === 'total'}>
      <header>
        <p>{title}</p>
        <img
          src={getSummaryCardIcon(type).img}
          alt={getSummaryCardIcon(type).altText}
        />
      </header>
      <strong>{value}</strong>
    </S.Container>
  );
}

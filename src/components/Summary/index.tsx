import { SummaryCard } from './SummaryCard';
import * as S from './styles';

export function Summary(): JSX.Element {
  return (
    <S.Container>
      <SummaryCard title="Entradas" type="income" value="R$1000,00" />
      <SummaryCard title="Saídas" type="outcome" value="- R$500,00" />
      <SummaryCard title="Total" type="total" value="R$500,00" />
    </S.Container>
  );
}

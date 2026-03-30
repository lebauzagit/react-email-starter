import { Section } from '@react-email/components';
import { KpiCard } from './KpiCard';
import { KPI } from '../types/kpi.types';

interface Props {
  kpis: KPI[];
}

export const KpiGrid = ({ kpis }: Props) => {
  return (
    <Section style={grid}>
      {kpis.map((kpi, index) => (
        <KpiCard key={index} {...kpi} />
      ))}
    </Section>
  );
};

const grid = {
  marginTop: '16px',
  marginBottom: '16px',
};

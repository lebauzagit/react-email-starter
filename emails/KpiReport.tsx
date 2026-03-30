import { Heading, Text } from '@react-email/components';
import { EmailLayout } from '../components/EmailLayout';
import { PrimaryButton } from '../components/PrimaryButton';
import { KpiGrid } from '../components/KpiGrid';
import { KPI } from '../types/kpi.types';
import { mockKpis } from '../data/mock-kpis';

interface Props {
  userName?: string;
  kpis?: KPI[];
  dashboardUrl?: string;
}

export default function KpiReportEmail({
  userName = 'Lolo',
  kpis = mockKpis,
  dashboardUrl = 'https://dashboard.example.com',
}: Props) {
  return (
    <EmailLayout>
      <Heading style={heading}>Weekly KPI Report</Heading>

      <Text>Hola {userName}, aquí tienes el resumen:</Text>

      <KpiGrid kpis={kpis} />

      <PrimaryButton href={dashboardUrl}>
        Ver dashboard completo
      </PrimaryButton>

      <Text style={footer}>
        Reporte generado automáticamente.
      </Text>
    </EmailLayout>
  );
}

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const footer = {
  fontSize: '12px',
  color: '#9ca3af',
};

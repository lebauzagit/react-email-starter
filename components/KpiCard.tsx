import { Section, Text } from '@react-email/components';

export const KpiCard = ({
  title,
  value,
  change,
  trend = 'neutral',
}: {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}) => {
  const trendColor =
    trend === 'up'
      ? '#10b981'
      : trend === 'down'
      ? '#ef4444'
      : '#6b7280';

  return (
    <Section style={card}>
      <Text style={titleStyle}>{title}</Text>
      <Text style={valueStyle}>{value}</Text>
      {change && (
        <Text style={{ ...changeStyle, color: trendColor }}>
          {change}
        </Text>
      )}
    </Section>
  );
};

const card = {
  border: '1px solid #e5e7eb',
  padding: '16px',
  borderRadius: '6px',
  marginBottom: '12px',
};

const titleStyle = {
  fontSize: '12px',
  color: '#6b7280',
};

const valueStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#111827',
};

const changeStyle = {
  fontSize: '12px',
};



/* import { Section, Text } from '@react-email/components';

export const KpiCard = ({
  title,
  value,
  change,
}: {
  title: string;
  value: string;
  change?: string;
}) => {
  return (
    <Section style={card}>
      <Text style={titleStyle}>{title}</Text>
      <Text style={valueStyle}>{value}</Text>
      {change && <Text style={changeStyle}>{change}</Text>}
    </Section>
  );
};

const card = {
  border: '1px solid #e5e7eb',
  padding: '16px',
  borderRadius: '6px',
  marginBottom: '12px',
};

const titleStyle = {
  fontSize: '12px',
  color: '#6b7280',
};

const valueStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#111827',
};

const changeStyle = {
  fontSize: '12px',
  color: '#10b981',
};
 */
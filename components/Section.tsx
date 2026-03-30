import { Section as BaseSection } from '@react-email/components';

export const Section = ({ children }: { children: React.ReactNode }) => {
  return <BaseSection style={{ marginBottom: '20px' }}>{children}</BaseSection>;
};

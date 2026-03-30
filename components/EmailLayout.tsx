import {
  Html,
  Body,
  Container,
  Section,
} from '@react-email/components';

export const EmailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Html>
      <Body style={body}>
        <Container style={container}>
          {children}
        </Container>
      </Body>
    </Html>
  );
};

const body = {
  backgroundColor: '#f4f4f7',
  fontFamily: 'Arial, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
};

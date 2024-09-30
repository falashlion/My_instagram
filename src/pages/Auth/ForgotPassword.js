import React from 'react';
import { useTheme, Heading, Text } from '@aws-amplify/ui-react';

export const ForgotPasswordComponents = {
  Header() {
    const { tokens } = useTheme();

    return (
      <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
        Enter Information:
      </Heading>
    );
  },
  Footer() {
    return <Text>Footer Information</Text>;
  },
};

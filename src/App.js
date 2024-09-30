import React from 'react';
import { Authenticator, useTheme, View, Image, Text, Heading, Button, useAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import './AmplifyStyles.css';
import { SignInComponents } from '../src/pages/Auth/SignIn';
import { SignUpComponents } from '../src/pages/Auth/SignUp';
import { ForgotPasswordComponents } from '../src/pages/Auth/ForgotPassword';
import HomePage from '../src/pages/HomePage/HomePage';
import MessagesPage from './components/messages/MessagesPage'
import ProfilePage from './components/profile/ProfilePage';
import PostFlow from './components/post/PostFlow';
import Layout from './layouts/Layout';

// const components = {
//   SignIn: SignInComponents,
//   SignUp: SignUpComponents,
//   ForgotPassword: ForgotPasswordComponents,
// };

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large} margin={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
    },
  },
  signUp: {
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: 'Confirm Password:',
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  forgotPassword: {
    username: {
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTotp: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

export default function App() {
  return (
    <Router>
      <Authenticator.Provider components={components}>
        <Authenticator formFields={formFields} components={components}>
          {({ signOut }) => (
            <div style={{ position: 'relative' }}>
              {/* Main content */}
              <Routes>
                <Route path="/" element={<Layout signOut={signOut} />}>
                  <Route index element={<HomePage />} />
                  <Route path="/signin" element={<SignInComponents />} />
                  <Route path="/signup" element={<SignUpComponents />} />
                  <Route path="/forgot-password" element={<ForgotPasswordComponents />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/messages" element={<MessagesPage />} />
                  <Route path="/post/*" element={<PostFlow />} />
                </Route>
              </Routes>
            </div>
          )}
        </Authenticator>
      </Authenticator.Provider>
    </Router>
  );
}

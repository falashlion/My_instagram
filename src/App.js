import React from 'react';
import { Authenticator, useTheme, View, Image, Text, Heading, Button, useAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import './AmplifyStyles.css';
import { ForgotPasswordComponents } from '../src/pages/Auth/ForgotPassword';
import HomePage from '../src/pages/HomePage/HomePage';
import MessagesPage from './components/messages/MessagesPage'
import ProfilePage from './components/profile/ProfilePage';
import PostFlow from './components/post/PostFlow';
import Layout from './layouts/Layout';
import SearchBar from './components/search/SearchBar';
import ExplorePost from './components/Explore/ExplorePost';
import Notifications from './components/Notifications/Notifications';
import EditProfile from './components/editProfile/EditProfile';
import { Amplify } from 'aws-amplify';
import outputs from './amplifyconfiguration.json';
import '@aws-amplify/ui-react/styles.css';
import UserProvider from './context/userContext';
import CommentModal from './components/comment/CommentModal';

Amplify.configure(outputs);



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
      label: 'Username',
      placeholder: 'Enter your username or email',
    },
  },
  signUp: {
    email: {
      label: 'Email:',
      placeholder: 'Enter your Email',
      isRequired: true,
      order: 3,
    },
    picture: {
      label: 'Profile Picture:',
      placeholder: 'Upload your profile picture',
      inputType: 'file',  
      accept: 'image/*',  
      isRequired: false,
      order: 7,
    },
    name: {
      label: 'Name:',
      placeholder: 'Enter your full name',
      isRequired: true,
      order: 2,
    },
    preferred_username: {
      label: 'Preferred Username:',
      placeholder: 'Enter your preferred username',
      isRequired: false,
      order: 1,
    },
    gender: {
      label: 'Gender:',
      placeholder: 'Enter your gender',
      isRequired: false,
      order: 4,
    },
    password: {
      label: 'Password:',
      placeholder: 'Enter your password',
      isRequired: true,
      order: 5,
    },
    confirm_password: {
      label: 'Confirm Password:',
      placeholder: 'Confirm your password',
      isRequired: true,
      order: 6,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your new password',
    },
  },
  forgotPassword: {
    username: {
      placeholder: 'Enter your username or email',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your confirmation code',
      label: 'Confirmation Code',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Confirm your new password',
    },
  },
  setupTotp: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'Confirmation Code',
      placeholder: 'Enter your confirmation code',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'Confirmation Code',
      placeholder: 'Enter your confirmation code',
      isRequired: false,
    },
  },
};


export default function App() {
  return (
    <Router>
      <UserProvider>
      
        <Authenticator 
        formFields={formFields} 
        components={components}>
          {({ signOut, user })=> (
            <div style={{ position: 'relative' }}>
              {/* <Button onClick={signOut} style={{ position: 'absolute', top: 10, right: 10 }}>
            Sign Out
          </Button> */}
              {/* Main content */}
              <Routes>
                <Route path="/" element={<Layout signOut={signOut} />}>
                  <Route index element={<HomePage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordComponents />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/messages" element={<MessagesPage />} />
                  <Route path="/post/*" element={<PostFlow />} />
                  <Route path="/search" element={<SearchBar />} />
                  <Route path="/explore" element={<ExplorePost />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/settings" element={<EditProfile />} />
                  <Route path="/comments" element={<CommentModal />} />
                </Route>
              </Routes>
            </div>
          )}
        </Authenticator>
        </UserProvider>
    </Router>
  );
}

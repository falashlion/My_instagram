// import React from 'react';
// import { useTheme, Heading, View, Button, useAuthenticator } from '@aws-amplify/ui-react';

// export const SignInComponents = {
//   Header() {
//     const { tokens } = useTheme();

//     return (
//       <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
//         Sign in to your account
//       </Heading>
//     );
//   },
//   Footer() {
//     const { toForgotPassword } = useAuthenticator();

//     return (
//       <View textAlign="center">
//         <Button
//           fontWeight="normal"
//           onClick={toForgotPassword}
//           size="small"
//           variation="link"
//         >
//           Reset Password
//         </Button>
//       </View>
//     );
//   },
// };
import React from 'react';
import { useTheme, Heading, View, Button, useAuthenticator, Image } from '@aws-amplify/ui-react';

export const SignInComponents = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View className="amplify-auth-header" textAlign="center" padding={140} >
        <Image
          alt="Instagram logo"
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
        />
      </View>
    );
  },
  Footer() {
    const { toForgotPassword } = useAuthenticator();

    return (
      <View className="amplify-auth-footer" textAlign="center">
        <Button
          fontWeight="normal"
          onClick={toForgotPassword}
          size="small"
          variation="link"
        >
          Forgot password?
        </Button>
      </View>
    );
  },
};

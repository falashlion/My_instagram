import React from 'react';
import { useTheme, Heading, View, Button, useAuthenticator, Image } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import { signUp } from "aws-amplify/auth";
import './style.css'

const client = generateClient();

// const UserDetails = 

// const createUser = await client.graphql({
//   query: mutations.createUser,
//   variables: { input: UserDetails }
// })



export const SignUpComponents = {


  Header() {
    const { tokens } = useTheme();

    return (
      <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
        <View className="amplify-auth-header" textAlign="center" padding={120} >
        <Image
          alt="Instagram logo"
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
        />
      </View>
      <p className='text-xl pb-5'>Sign up to see photos and videos from your friends.</p>
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
};


import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SingOut from '../../components/sign-up/sign-up';

import './sign-in-sign-up.style.scss';

const SignInAndSingUpPage = (props) => (
    <div className='sign-in-and-sign-up'><SignIn /><SingOut /></div>
);

export default SignInAndSingUpPage;
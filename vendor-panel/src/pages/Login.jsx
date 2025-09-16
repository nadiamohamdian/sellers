import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import BrandPanel from '../components/auth/BrandPanel';
import LoginForm from '../components/auth/LoginForm';

export default function Login() {
  return (
    <AuthLayout>
      <BrandPanel />
      <LoginForm />
    </AuthLayout>
  );
}

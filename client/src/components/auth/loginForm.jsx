import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import { Logo } from "../marketing/logo";
import { ShieldAlert } from "lucide-react";
import { useLogin } from "@/hooks/useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <>
      <div className='mt-5'>
        <div className='py-4 flex justify-center'>
          <Logo />
        </div>
        <Card className='mx-auto lg:w-96 max-w-sm py-4 px-4'>
          <form method='post' onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className='text-xl flex justify-center'>
                Welcome.
              </CardTitle>
              <CardDescription className='flex justify-center'>
                Login in to your account
              </CardDescription>
            </CardHeader>

            <CardContent className='text-left'>
              {error && (
                <div className='error-message'>
                  <span className='flex uppercase px-2 py-1 mr-1'>
                    <ShieldAlert />
                  </span>
                  <span className='font-bold text-sm text-left flex-auto'>
                    {error}
                  </span>
                </div>
              )}
              <div className='grid gap-4'>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    type='email'
                    id='email'
                    placeholder='Email address'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    type='password'
                    id='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
                <Button
                  disabled={isLoading}
                  variant='scarlet'
                  type='submit'
                  className='w-full'
                >
                  Login
                </Button>
              </div>
              <div className='mt-4 text-center text-sm'>
                Don't have an account?{" "}
                <Link to='/register' className='underline'>
                  Register
                </Link>
              </div>
            </CardContent>
          </form>
        </Card>
      </div>
    </>
  );
};

export default LoginForm;

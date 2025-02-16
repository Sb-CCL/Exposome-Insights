import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import { Logo } from "../marketing/logo";
import { ShieldAlert } from "lucide-react";
import { useRegister } from "@/hooks/useRegister";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, error, isLoading } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(firstName, lastName, email, password);
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
                Join us.
              </CardTitle>
              <CardDescription className='flex justify-center'>
                Create an account today
              </CardDescription>
            </CardHeader>

            <CardContent className='text-left'>
              {error && (
                <div className='error-message dark:bg-[#242424]'>
                  <span className='flex uppercase px-2 py-1 mr-1'>
                    <ShieldAlert />
                  </span>
                  <span className='font-bold text-sm text-left flex-auto'>
                    {error}
                  </span>
                </div>
              )}
              <div className='grid gap-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='first-name'>First name</Label>
                    <Input
                      type='firstName'
                      id='first-name'
                      placeholder='First name'
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='last-name'>Last name</Label>
                    <Input
                      type='lastName'
                      id='last-name'
                      placeholder='Last name'
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      required
                    />
                  </div>
                </div>
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
                <div className='flex items-center space-x-2'>
                  <Checkbox id='terms' required />
                  <label
                    htmlFor='terms'
                    className='text-sm font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    I agree with the{" "}
                    <Link to='/terms-of-service' className='underline'>
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to='/privacy-policy' className='underline'>
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>
                <Button
                  disabled={isLoading}
                  variant='scarlet'
                  type='submit'
                  className='w-full'
                >
                  Create an account
                </Button>
              </div>
              <div className='mt-4 text-center text-sm'>
                Already have an account?{" "}
                <Link to='/login' className='underline'>
                  Login
                </Link>
              </div>
            </CardContent>
          </form>
        </Card>
      </div>
    </>
  );
};

export default RegisterForm;

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/shared/Logo";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import { useLogin } from "@/features/auth/services/auth.api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ usernameOrEmail: email, password: password });
  };

  return (
    <main className="w-full lg:w-[45%] h-full flex flex-col justify-center items-center px-gutter relative z-10 bg-background">
      {/* Brand Logo Anchor */}
      <div className="absolute top-10 left-10">
        <Logo />
      </div>
      <div className="w-full max-w-md space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-on-surface">
            Welcome Back
          </h1>
          <p className="text-sm text-on-surface-variant">
            The future of high-performance communication is here.
          </p>
        </header>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel
                className="text-on-surface-variant ml-1"
                htmlFor="username"
              >
                Username or Email
              </FieldLabel>
              <div className="relative">
                <MdAlternateEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 group-focus-within:text-primary transition-colors" />
                <Input
                  className="pr-4 pl-10 h-12 bg-surface-container-low border border-white/5 rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/30 outline-none transition-all input-glow"
                  id="username"
                  placeholder="Enter Username or Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </Field>
            <Field>
              <FieldLabel
                className="text-on-surface-variant ml-1"
                htmlFor="password"
              >
                Password
              </FieldLabel>
              <div className="relative">
                <MdLockOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 group-focus-within:text-primary transition-colors" />
                <Input
                  className="pr-4 pl-10 h-12 bg-surface-container-low border border-white/5 rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/30 outline-none transition-all input-glow"
                  id="password"
                  placeholder="Enter Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </Field>
            <Field orientation="horizontal" className="mt-2">
              <Button
                className="w-full bg-primary text-on-primary h-12 rounded-xl transition-all duration-300 btn-hover-glow active:scale-[0.98] font-bold text-lg"
                type="submit"
                size="lg"
                disabled={mutation.isPending || !email || !password}
              >
                {mutation.isPending ? "Logging in..." : "Login"}
                <FaArrowRight className="ml-2" />
              </Button>
            </Field>
          </FieldGroup>
        </form>
        <footer className="text-center pt-4">
          <p className="text-sm text-on-surface-variant">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-primary font-bold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default LoginForm;

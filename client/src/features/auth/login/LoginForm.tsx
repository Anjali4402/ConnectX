"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/shared/Logo";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaGoogle } from "react-icons/fa6";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";

const LoginForm = () => {
  return (
    <main className="w-full lg:w-[45%] h-full flex flex-col justify-center items-center px-gutter relative z-10 bg-background">
      {/* <!-- Brand Logo Anchor --> */}
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

        <form className="space-y-6">
          <FieldGroup>
            <Field>
              <FieldLabel
                className="text-on-surface-variant ml-1"
                htmlFor="username"
              >
                Username
              </FieldLabel>
              <div className="relative">
                <MdAlternateEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 group-focus-within:text-primary transition-colors" />

                <Input
                  className="pr-4 pl-10 h-12 bg-surface-container-low border border-white/5 rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/30 outline-none transition-all input-glow"
                  id="username"
                  placeholder="Enter Username"
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
                />
              </div>
            </Field>

            <Field orientation="horizontal" className="mt-2">
              <Button
                className="w-full bg-primary text-on-primary h-12 rounded-xl transition-all duration-300 btn-hover-glow active:scale-[0.98] font-bold text-lg"
                type="submit"
                size="lg"
              >
                Login
                <FaArrowRight />
              </Button>
            </Field>
          </FieldGroup>

          {/* or continue with */}
          <div className="relative py-4 flex items-center justify-center">
            <div className="grow border-t border-white/5"></div>
            <span className="px-4 text-sm text-outline-variant uppercase tracking-widest">
              Or continue with
            </span>
            <div className="grow border-t border-white/5"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="flex items-center justify-center cursor-pointer gap-2 py-3 px-4 rounded-xl border border-white/5 hover:bg-white/5 transition-all text-on-surface-variant font-label-md"
              type="button"
            >
              <FaGoogle className="size-5" />
              Google
            </button>
            <button
              className="flex items-center justify-center cursor-pointer gap-2 py-3 px-4 rounded-xl border border-white/5 hover:bg-white/5 transition-all text-on-surface-variant font-label-md"
              type="button"
            >
              <FaGithub className="size-5" />
              GitHub
            </button>
          </div>
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

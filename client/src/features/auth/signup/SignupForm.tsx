"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { MdOutlinePersonOutline, MdVisibility } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";

const SignupForm = () => {
  return (
    <div className="w-full md:w-1/2 bg-surface-dim p-8 md:p-16 flex flex-col justify-center">
      <div className="max-w-md mx-auto w-full">
        <header className="mb-10">
          <h2 className="text-2xl font-semibold text-on-surface mb-2">
            Create Account
          </h2>
          <p className="text-on-surface-variant">
            Join the community and start chatting today.
          </p>
        </header>
        <form className="space-y-6" id="registrationForm">
          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel
                  className="text-on-surface-variant ml-1"
                  htmlFor="fullName"
                >
                  Full Name
                </FieldLabel>
                <div className="relative">
                  <MdOutlinePersonOutline className="size-5 absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 group-focus-within:text-primary transition-colors" />

                  <Input
                    className=" input-recessed text-2xl font-semibold pr-4 pl-12 h-12  text-on-surface focus:ring-0 placeholder:text-outline-variant  outline-none "
                    id="fullName"
                    placeholder="Enter full Name"
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel
                  className="text-on-surface-variant ml-1"
                  htmlFor="username"
                >
                  Username
                </FieldLabel>
                <div className="relative">
                  <MdAlternateEmail className=" size-5 absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 group-focus-within:text-primary transition-colors" />

                  <Input
                    className=" input-recessed text-2xl font-semibold pr-4 pl-12 h-12  text-on-surface focus:ring-0 placeholder:text-outline-variant  outline-none "
                    id="username"
                    placeholder="Enter Username"
                  />
                </div>
              </Field>
            </div>

            <Field>
              <FieldLabel
                className="text-on-surface-variant ml-1"
                htmlFor="password"
              >
                Password
              </FieldLabel>
              <div className="relative">
                <MdLockOutline className="size-5 absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 group-focus-within:text-primary transition-colors" />

                <Input
                  className=" input-recessed text-2xl font-semibold pr-4 pl-12 h-12  text-on-surface focus:ring-0 placeholder:text-outline-variant  outline-none "
                  id="password"
                  placeholder="Enter Password"
                />

                <Button
                  type="button"
                  className="cursor-pointer absolute  right-2 top-1/2 -translate-y-1/2"
                  size="icon-lg"
                  variant="link"
                >
                  <MdVisibility className="size-5 text-outline-variant" />
                  {/* <MdVisibilityOff className="size-5" /> */}
                </Button>
              </div>
            </Field>

            <Field orientation="horizontal" className="mt-2">
              <Button
                className="w-full bg-primary text-on-primary h-12 rounded-xl transition-all duration-300 btn-hover-glow active:scale-[0.98] text-lg font-bold"
                type="submit"
                size="lg"
              >
                Sign Up
              </Button>
            </Field>
          </FieldGroup>

          {/* <!-- Social Login Options --> */}
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
        <footer className="mt-10 text-center">
          <p className="font-body-md text-on-surface-variant">
            Already have an account?
            <Link
              className="text-primary font-bold hover:underline underline-offset-4 ml-1 transition-all"
              href="/login"
            >
              Login
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SignupForm;

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/shared/Logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {
  MdOutlinePersonOutline,
  MdVisibility,
  //   MdVisibilityOff,
} from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
const SignUpFormField = () => {
  return (
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
        <FieldLabel className="text-on-surface-variant ml-1" htmlFor="password">
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
  );
};

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-0 overflow-y-auto">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="floating-orb top-0 left-0"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="floating-orb bottom-0 right-0"
          style={{ animationDelay: "-5s" }}
        />
      </div>
      <main className="relative z-10 w-full max-w-300 min-h-175 flex flex-col md:flex-row bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl border border-white/5">
        {/* <!-- Left Side: Branding & Illustration --> */}
        <div className="w-full md:w-1/2 relative bg-surface-container overflow-hidden flex flex-col justify-between p-12">
          {/* <!-- Background Elements --> */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-background/40"></div>
          </div>
          {/* <!-- Content --> */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-16">
              <Logo />
            </div>
            <h1 className="text-5xl font-bold text-on-surface mb-6 max-w-sm">
              Connect with clarity.
            </h1>
            <p className="text-on-surface-variant max-w-xs leading-relaxed opacity-80">
              Experience the next generation of secure, high-performance
              communication designed for the modern era.
            </p>
          </div>
          <div className="relative z-10 mt-auto">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 max-w-85">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-2">
                  <Image
                    alt="User 1"
                    height={32}
                    width={32}
                    className="rounded-full border-2 border-surface-container"
                    data-alt="A professional headshot of a young man with glasses and a friendly expression, set against a soft blurred studio background with purple and blue ambient lighting. High-end photography style with sharp focus on eyes and soft bokeh."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK06XtGhPzdpqaohAl5vXx4vBgrdQzyEHxgXBRksUakGgWdd28UG7mqJWalE0tmRg-VxG4vJpRmSynOJmXemeiT0P777o7yuzsmXpqdfKrR2Od0lTN4aeZUtJbpSybi3kaispLdwWiL9qwa4vclHVFaxYTCZZY8c-5Cxmc-ggCCrcOnZ8Dak0sn3Cbc-A4nsw4Af8u8jskMAJr530T6_BTbelTOXyuYvWf7aeh78rjx0A_hInZTTKAQ48zy8MUmXai-hT31N8gNGM"
                  />
                  <Image
                    alt="User 2"
                    height={32}
                    width={32}
                    className="rounded-full border-2 border-surface-container"
                    data-alt="A close-up portrait of a woman with vibrant hair, smiling warmly. The lighting is dramatic with cool cyan and warm indigo highlights, matching a sleek technology brand aesthetic. Shallow depth of field with a clean minimalist background."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYukPVCibqo3qmTYJKsfRqTuYC36aNweRetK-sIdTtmVT48bDXmbfbobo1RCnfuvii2gMAz672uUyP85VoHgqBH4nluXcV2ckCAtW6AALReM4aPDwz9nWVfQqneUSNSfxPnEhToA9uLLWh8t8Z8yYpLwsUesV_Q8OLbwj7njtlv0k69KqAk5oDzTn-N8LNaL_zQAC9c3uZQrjuUuLaNkgyVGCRmvGJhdTxoeweUmQkc-rDOA7iMFyF4haPz0XpuX633wdeVt2yCxc"
                  />
                  <Image
                    alt="User 3"
                    height={32}
                    width={32}
                    className="rounded-full border-2 border-surface-container"
                    data-alt="A detailed portrait of a creative professional with a neutral expression. Soft rim lighting in Electric Indigo colors defines the silhouette against a dark, tech-oriented studio background. Cinematic quality with natural skin textures and high-resolution details."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACI88OaxkGxNAlIbIN0osOEd8kvMfv5sy5ihjkZIHSWJ8zar62EXSxMVPJ_bOtJZw-5es_XdqdfZRDiOOzPbs9PBuUdO2gPjMj0LK5_jkoOFKfx_2pfwXq9KiHNzogT9eKtEgcStX_8V1ZoSQ8ZEqBZRtesSY3k79t8PTnBTCRAE6qnfWwsFPMiSKGuc3dx8OCJCAkB8ZwnxQHzYQLOhQ-OSYoFVFcIoxdChvYPKJyRuH3FVN2wEvgwRBUErbb2bfaBsGpRIKNLME"
                  />
                </div>
                <span className="font-label-md text-on-surface-variant">
                  +2.4k active users
                </span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-2/3 shadow-[0_0_10px_#c0c1ff]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Right Side: Registration Form --> */}
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
              <SignUpFormField />

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
      </main>
    </div>
  );
};

export default Signup;

import SignupBanner from "@/features/auth/signup/SignupBanner";
import SignupForm from "@/features/auth/signup/SignupForm";

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
        <SignupBanner />
        {/* <!-- Right Side: Registration Form --> */}
        <SignupForm />
      </main>
    </div>
  );
};

export default Signup;

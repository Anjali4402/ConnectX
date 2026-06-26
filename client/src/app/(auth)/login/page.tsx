import LoginBanner from "@/features/auth/login/LoginBanner";
import LoginForm from "@/features/auth/login/LoginForm";

const Login = () => {
  return (
    <body className="h-screen w-full flex overflow-hidden">
      {/* <!-- Left Side: Login Form --> */}
      <LoginForm />
      {/* <!-- Right Side: Branded Illustration Area --> */}
      <LoginBanner />
    </body>
  );
};

export default Login;

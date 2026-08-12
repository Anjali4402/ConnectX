import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
// import { toast } from "@/components/ui/toaster";
import { toast } from "sonner";
import { _post } from "@/lib/api";
import { API_ROUTES } from "@/services/endpoints";

// API endpoints
export const loginApi = async (data: Record<string, any>) => {
  return await _post(API_ROUTES.LOGIN, data);
};

export const registerApi = async (data: Record<string, any>) => {
  return await _post(API_ROUTES.REGISTER, data);
};

export const login = loginApi;
export const register = registerApi;

// Custom mutation hooks that handle the entire flow (API call, toast messages, redirecting)
export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Record<string, any>) => loginApi(data),
    onSuccess: (res: any) => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      const message = res?.message || "Logged in successfully!";
      toast.success(message);
      router.push("/");
    },
    onError: (err: any) => {
      const errorMessage =
        err?.message ||
        err?.response?.data?.message ||
        "Login failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};

export const useRegister = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Record<string, any>) => registerApi(data),
    onSuccess: (res: any) => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      const message = res?.message || "Registered successfully!";
      toast.success(message);
      router.push("/");
    },
    onError: (err: any) => {
      const errorMessage =
        err?.message ||
        err?.response?.data?.message ||
        "Registration failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};

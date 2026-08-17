import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProfile, logout } from "../api/profileAPI";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useGetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
};

const useLogout = () => {
  const router = useRouter();
  //   const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: (res) => {
      // queryClient.invalidateQueries()
      console.log("Fall in success response");
      const message = res?.message || "Logout successfully!";
      toast.success(message);
      router.push("/login");
    },
    onError: (err) => {
      console.log("Fall in Failed response");
      const errorMessage =
        err?.message ||
        err?.response?.data?.message ||
        "Logout failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};

export { useGetProfile, useLogout };

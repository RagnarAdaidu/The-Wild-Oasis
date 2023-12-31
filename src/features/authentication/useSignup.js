import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignUp(){
  const { mutate: signup, isLoading} = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user)
      toast.success('Account successfully created!, please verify account from the users email address')
    }
  })

  return { signup, isLoading }
}
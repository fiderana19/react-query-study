import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { deletePlayer } from "../api/user";

export const useDeletePlayer = () => {

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (mutateData: string) => deletePlayer(mutateData),
    onSuccess : (response) => {
      console.log(response)
      queryClient.invalidateQueries({
        queryKey: ["players"],
        exact: true,
      })
    },
    onError: (error: AxiosError) => {
      console.log(error);
    }
  })
  return mutation;
}
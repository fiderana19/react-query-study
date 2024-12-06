import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreatePlayerDto } from "../dto/create-player.dto";
import { AxiosError } from "axios";
import { addPlayer } from "../api/user";

export const usePostPlayer = () => {

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (mutateData: CreatePlayerDto) => addPlayer(mutateData),
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { deletePlayer } from "../api/user";
import { Bounce, toast } from "react-toastify";

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
      toast("Player deleted !" , {
        type: "success",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition:  Bounce 
      });
    },
    onError: (error: AxiosError) => {
      console.log(error);
      toast("Error deleting player !" , {
        type: "error",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition:  Bounce 
      });
    }
  })
  return mutation;
}
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreatePlayerDto } from "../dto/create-player.dto";
import { AxiosError } from "axios";
import { addPlayer } from "../api/user";
import { Bounce, toast } from "react-toastify";
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import '../../node_modules/react-toastify/dist/ReactToastify.min.css';

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
      toast("Player added !" , {
        type: "success",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce 
    });
    },
    onError: (error: AxiosError) => {
      console.log(error);
      toast("Error adding player !" , {
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
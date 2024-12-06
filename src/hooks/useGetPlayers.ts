import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAllPlayers } from "../api/user";

export const useGetPlayers = () => {
    const [message, setMessage] = useState<string>('');
    const { isLoading, data, refetch, error } = useQuery({
        queryKey: ['players'],
        queryFn: () => getAllPlayers(),
        staleTime: Infinity
    })
    const loading = isLoading;

    useEffect(() => {
      if(error) {
        console.log("Erreur lors de la recuperation des users : " ,error?.message);
        setMessage(error?.message);
      }
    }, [error])

    return {
        refetch,
        loading,
        data,
        error,
        message
    }
}
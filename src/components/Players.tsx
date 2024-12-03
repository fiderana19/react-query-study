import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react"
import { addPlayer, fetchPlayers, fetchTags } from "../api/api";

function Player() {
  const [credentials,setCredentials] = useState<any>({ id: 0, title: '', tags: [] });
  const queryClient = useQueryClient();

  const { data: players, error, isLoading, isError } = useQuery({
    queryKey: ["players"],
    queryFn: fetchPlayers,
    staleTime: Infinity
  })

  const { data: tags  } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
    staleTime: Infinity
  })


  const {
    mutate,
    isPending,
    isError: isAddError,
    reset
  } = useMutation({
    mutationFn: addPlayer,
    onMutate(variables) {
      return {id: 1}
    },
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: ["players"],
        exact: true,
      })
    },
  })

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if(!credentials) return
    mutate(credentials);
    setCredentials({title: '', tags: []})
    e.target.reset();
  }

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials((prev: any) => ({...prev, [name]: value, id: players.length + 1}));
  }

  const onSelectChange = (e: any) => {
    credentials.tags.push(e.target.name);
  }

  return (
      <div className="mx-auto">
        <form onSubmit={handleSubmit} className="rounded mt-20 border p-2 bg-gray-100">
            <div className="text-xl font-bold my-1" >New player</div>
            <input 
              value={credentials.title}
              onChange={onChange}
              name="title"
              type="text" 
              className="bg-transparent border rounded px-4 py-1 mb-4" 
              placeholder="Type the player name..." />
            <div className="flex gap-1 my-1">
              {tags?.map((tag: any) => {
                return <div key={tag} className="rounded-full border border-gray-100 bg-gray-300 px-2 py-0.5 text-xs text-gray-900 flex gap-1 items-center">
                            <input onChange={onSelectChange} type="checkbox" name={tag} id={tag} />
                            <label htmlFor={tag}>#{tag}</label>
                        </div>
              })}
            </div>
            <button 
              className="rounded border border-green-400 bg-green-600 hover:bg-green-700 transition-colors text-white px-4 py-1.5 w-1/3 mt-4"
              type="submit"
            >
              Add
            </button>
        </form>
        {isLoading && isPending && <div className="px-4 py-2 border border-gray-100 rounded bg-gray-200 text-gray-400 my-1">Loading...</div>}
        {isError && <div className="px-4 py-2 border border-red-100 rounded bg-red-200 text-red-400 my-1">{error?.message}</div>}
        {isAddError && <div onClick={() => reset()} className="cursor-pointer px-4 py-2 border border-red-100 rounded bg-red-200 text-red-400 my-1">Unable to post</div>}
        <div className="text-3xl font-bold my-4" >PLAYERS</div>
        {players?.map((player: any, index: any) => {
          return <div key={index} className="border border-gray-400 rounded px-4 py-2 bg-gray-100 bg-opacity-60 my-1 flex gap-2 justify-between">
            <div className="font-bold">{player.title}</div>
            <div className="flex gap-1">
              {player.tags.map((tag: any) => {
                return <div key={tag} className="rounded-full border border-gray-100 bg-gray-300 px-2 py-0.5 text-xs text-gray-900">
                    #{tag}
                  </div>
              })}
            </div>
          </div>
        })}
      </div>
  )
}

export default Player;

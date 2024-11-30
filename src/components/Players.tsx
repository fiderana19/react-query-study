import { useQuery } from "@tanstack/react-query"
import { fetchPlayers, fetchTags } from "../api/api"

function Player() {

  const { data: players, isLoading, isError, error } = useQuery({
    queryKey: ["players"],
    queryFn: fetchPlayers,
    staleTime: Infinity,
  })

  const { data: tags } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
    staleTime: Infinity,
  })

  return (
      <div className="mx-auto">
        <div className="rounded border p-2 bg-gray-100">
            <div className="text-xl font-bold my-1" >New player</div>
            <input type="text" className="bg-transparent border rounded px-4 py-1 mb-4" placeholder="Type the player name..." />
            <div className="flex gap-1 my-1">
              {tags?.map((tag: any) => {
                return <div key={tag} className="rounded-full border border-gray-100 bg-gray-300 px-2 py-0.5 text-xs text-gray-900 flex gap-1 items-center">
                            <input type="checkbox" name={tag} id={tag} />
                            <label htmlFor={tag}>#{tag}</label>
                        </div>
              })}
            </div>
            <button className="rounded border border-green-400 bg-green-600 hover:bg-green-700 transition-colors text-white px-4 py-1.5 w-1/3 mt-4">Add</button>
        </div>
        {isLoading && <div className="px-4 py-2 border border-gray-100 rounded bg-gray-200 text-gray-400 my-1">Loading...</div>}
        {isError && <div className="px-4 py-2 border border-red-100 rounded bg-red-200 text-red-400 my-1">{error?.message}</div>}
        <div className="text-3xl font-bold my-4" >PLAYERS</div>
        {players?.map((player: any, index: any) => {
          return <div key={index} className="border border-gray-400 rounded px-4 py-2 bg-gray-100 bg-opacity-60 my-1 flex gap-2 justify-between">
            <div className="font-bold">{player.title}</div>
            <div className="flex gap-1">
              {player.tags.map((tag: any) => {
                return <div className="rounded-full border border-gray-100 bg-gray-300 px-2 py-0.5 text-xs text-gray-900">
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

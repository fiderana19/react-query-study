import { useQuery } from "@tanstack/react-query"
import { fetchPlayers } from "./api/api"

function App() {

  const { data: players, isLoading, isError, error } = useQuery({
    queryKey: ["players"],
    queryFn: fetchPlayers,
    staleTime: Infinity,
  })

  return (
    <div className="flex flex-col justify-center h-screen text-center">
      <div className="mx-auto">
        {isLoading && <div className="px-4 py-2 border border-gray-100 rounded bg-gray-200 text-gray-400 my-1">Loading...</div>}
        {isError && <div className="px-4 py-2 border border-red-100 rounded bg-red-200 text-red-400 my-1">{error?.message}</div>}
        <div className="text-3xl font-bold mb-4" >PLAYERS</div>
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
    </div>
  )
}

export default App

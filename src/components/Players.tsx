import { useDeletePlayer } from "../hooks/useDeletePlayer";
import { useGetPlayers } from "../hooks/useGetPlayers";
import AddPlayer from "./AddPlayer";

function Player() {
  const {data: players, loading} = useGetPlayers();
  const { mutateAsync: deletePlayer } = useDeletePlayer(); 

  const handleDelete = async (id: string) => {
    deletePlayer(id);
  }

  return (
      <div>
        <div className="flex justify-between w-full px-10">
          <div className="w-2/3">
            <div className="font-bold text-2xl my-4">PLAYER LIST</div>
            <div className="grid grid-cols-customized gap-2 w-full justify-center">
              {players && players.map((player: any) => {
                return <div key={player._id} className="bg-gray-100 rounded px-4 pt-10 pb-1 w-60 relative">
                        <div className="text-5xl font-bold text-right text-gray-500"> { player.shirt } </div>
                        <div className="font-semibold">{ player.nom }</div>
                        <div className="font-bold text-teal-600"> { player.club } </div>
                        <button onClick={() => handleDelete(player._id)} className="border border-red-500 bg-red-400 px-2 py-1 hover:bg-red-500 transition-colors text-red-700 text-xs absolute top-2 right-2 rounded">X</button>
                      </div>
              })}
            </div>
            {players && players.length < 1 && <div className="">No player yet</div> }
            {loading && <div className="">Loading...</div>}
          </div>
          <div>
            <AddPlayer />
          </div>
        </div>
      </div>
  )
}

export default Player;

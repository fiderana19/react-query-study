import AddPlayer from "./AddPlayer";

function Player() {

  return (
      <div>
        <div className="flex justify-between w-full px-10">
          <div className="w-2/3">
            <div className="font-bold text-2xl my-4">PLAYER LIST</div>
            <div className="grid grid-cols-customized gap-2 w-full justify-center">
              <div className="bg-gray-100 rounded px-4 pt-10 pb-1 w-60 relative">
                <div className="text-5xl font-bold text-right text-gray-500">11</div>
                <div className="font-semibold">Player name</div>
                <div className="font-bold text-teal-600">Club name</div>
                <button className="border border-red-500 bg-red-400 px-2 py-1 hover:bg-red-500 transition-colors text-red-700 text-xs absolute top-2 right-2 rounded">X</button>
              </div>
            </div>
          </div>
          <div>
            <AddPlayer />
          </div>
        </div>
      </div>
  )
}

export default Player;

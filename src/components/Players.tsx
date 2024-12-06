import React, { useState } from "react"
import { CreatePlayerDto } from "../dto/create-player.dto";

function Player() {
  const [credentials,setCredentials] = useState<CreatePlayerDto>({ nom: '', club: '', shirt: 0});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev: any) => {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(credentials)
  }

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
            <div className="bg-gray-100 border border-gray-200 shadow-md mx-auto p-4 rounded">
              <div className="text-xl font-bold">New Player</div>
              <div className="w-60 my-1">
                <div className="text-left text-xs font-bold">Player name : </div>
                <input type="text" onChange={handleChange} name="nom" className="w-full bg-transparent border px-2 py-1 border-gray-500 rounded" placeholder="Player name..." />
              </div>
              <div className="w-60 my-1">
                <div className="text-left text-xs font-bold">Club name : </div>
                <input type="text" name="club" onChange={handleChange} className="w-full bg-transparent border px-2 py-1 border-gray-500 rounded" placeholder="Club name..." />
              </div>
              <div className="w-60 my-1">
                <div className="text-left text-xs font-bold">Shirt number : </div>
                <input type="text" name="shirt" onChange={handleChange} className="w-full bg-transparent border px-2 py-1 border-gray-500 rounded" placeholder="Shirt number..." />
              </div>
              <div className="w-60 mt-4">
                <button onClick={handleSubmit} className="font-bold px-2 py-1 bg-green-500 w-full rounded text-white uppercase border border-green-600 transition-colors hover:bg-green-600">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Player;

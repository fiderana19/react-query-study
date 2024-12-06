import React, { useState } from "react"
import { CreatePlayerDto } from "../dto/create-player.dto";
import { usePostPlayer } from "../hooks/usePostPlayer";

function AddPlayer() {
  const [credentials,setCredentials] = useState<CreatePlayerDto>({ nom: '', club: '', shirt: 0});

  const { mutateAsync: postPlayer } = usePostPlayer();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev: any) => {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await postPlayer(credentials);
    setCredentials({ nom: '', club: '', shirt: 0});
  }

  return (
    <div>
      <div className="bg-gray-100 border border-gray-200 shadow-md mx-auto p-4 rounded">
        <div className="text-xl font-bold">New Player</div>
        <div className="w-60 my-1">
          <div className="text-left text-xs font-bold">Player name : </div>
          <input type="text" onChange={handleChange} value={credentials.nom} name="nom" className="w-full bg-transparent border px-2 py-1 border-gray-500 rounded" placeholder="Player name..." />
        </div>
        <div className="w-60 my-1">
          <div className="text-left text-xs font-bold">Club name : </div>
          <input type="text" name="club" onChange={handleChange} value={credentials.club} className="w-full bg-transparent border px-2 py-1 border-gray-500 rounded" placeholder="Club name..." />
        </div>
        <div className="w-60 my-1">
          <div className="text-left text-xs font-bold">Shirt number : </div>
          <input type="text" name="shirt" onChange={handleChange} value={credentials.shirt} className="w-full bg-transparent border px-2 py-1 border-gray-500 rounded" placeholder="Shirt number..." />
        </div>
        <div className="w-60 mt-4">
          <button onClick={handleSubmit} className="font-bold px-2 py-1 bg-green-500 w-full rounded text-white uppercase border border-green-600 transition-colors hover:bg-green-600">Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddPlayer;

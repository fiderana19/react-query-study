import axios from "axios";

const UserAPIURL = "http://localhost:3001/player";

export const getAllPlayers = async () => {
    const response = await axios({
        method: 'GET',
        url: `${UserAPIURL}/all`,
    })

    return response.data;
}

export const addPlayer = async (user: any) => {
    const response = await axios({
        method: 'POST',
        url: `${UserAPIURL}/create`,
        data: user,
    })
        
    return response;
}

export const deletePlayer = async (id: string) => {
    const response = await axios({
        method: 'DELETE',
        url: `${UserAPIURL}/delete/${id}`,
    })
  
    return response;
}


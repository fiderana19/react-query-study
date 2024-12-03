import axios from "axios";

const UserAPIURL = "http://localhost:3001/user";

export const fetchUser = async () => {
        const response = await axios({
            method: 'GET',
            url: UserAPIURL,
        })
        return response;
}

export const addUser = async (user: any) => {
        const response = await axios({
            method: 'POST',
            url: UserAPIURL,
            data: user,
        })
        
        return response;
}
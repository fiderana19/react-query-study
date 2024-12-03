export const fetchPlayers = async () => {
    const response = await fetch(`http://localhost:3000/players?_sort=-id`);
    
    const playerData = await response.json();
    return playerData;
};
    
export const fetchTags = async () => {
    const response = await fetch(`http://localhost:3000/tags?_sort=-id`);
    
    const tagsData = await response.json();
    return tagsData;
};

export const addPlayer = async (player: any) => {
    const response = await fetch(`http://lsocalhost:3000/players`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(player)
    });
    
    return response.json();
};
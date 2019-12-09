import axios from 'axios'

export const baseUrl = 'https://api.spotify.com/v1/search';

export const search =(query, access_token) => 
{
    let config = {
        headers: {"Authorization": `Bearer ${access_token}`},
        params: {"q":query, "type": "track"}
      }
    const result = axios.get(baseUrl, config)
        .then((data) => data)
        .catch((e) => {
            if(e.response.status === 401)
                //refresh token
                alert("Fin de la demo. No se refresca el token :(")
            else
                alert("Error no controlado.")
        })
        
        return result;
};

export const changePage = (page, access_token) =>
{
    let config = {
        headers: {"Authorization": `Bearer ${access_token}`},
    }
    
    const result = axios.get(page, config)
    .then((res)=>res)
    .catch((e) => {
        if(e.response.status === 401)
                //refresh token
                alert("Fin de la demo. No se refresca el token :(")
            else
                alert("Error no controlado.")
    })

    return result;
}





        

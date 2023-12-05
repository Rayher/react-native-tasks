export const get = async ({ path }) => {
  try {
    const response = await fetch(path, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
        
    if(response.ok){
      return {
        success: true,
        data: await response.json(),
        status: response.status
      }
    }

    return{
      success: false,
      data: await response.json(),
      status: response.status
    }
    
  } catch (error) {    
    return {
      success: false,
      data: error.message
    }
  }
}

export const getThePokemons = async () => {  
  return await get({ path: "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10" })  
}

export const getChangeRefresh = async (offset=0) => {  
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const result = await response.json();
    
    return {
      success: true,
      data: result,
      status: response.status
    }    
  } catch (error) {
    return {
      success: false,
      result: error
    }
  } 
}
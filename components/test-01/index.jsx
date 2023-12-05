import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getThePokemons } from '../../helpers/api';
import { Loading } from '../../icons/LoadingAnimated';
import { Link } from 'expo-router';

export const Test01 = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getPokemons = () => {
    setLoading(true)

    // A set time out is used to simulate a 2 second loading time and see the loading animation.
    setTimeout(async () => {
      const res = await getThePokemons()
      if(res.success){
        setPokemons(res.data.results)
      }else{
        setError(res)
      }

      setLoading(false)
    }, 2000)
  }
  
  useEffect(() => getPokemons() , [])

  return(
    <View 
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',        
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      }}
    >
      {loading ? 
        <View style={{ display: "flex", width: "100%", height: "100%", justifyContent: "center"}}>
          <Loading />
        </View>
      :
        <>
          {error &&
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FF9B55',
                padding: 10,
                borderRadius: 10,
                width: '80%'
              }}
            >
              <Text>An error occurred while loading data</Text>
              <Text style={{ color: '#000' }}>
                <Text style={{ fontWeight: 700 }}>Server message:</Text> 
                &nbsp;{error.data}
              </Text>       
              {error.status && 
                <Text>Status code: {error.status.toString()}</Text>
              }
            </View>
          }
          
          <Link href="/"><Text style={{ fontSize: 20, textDecorationLine: "underline" }}>Regresar</Text></Link>

          <View 
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              flexDirection: 'column',        
              justifyContent: 'flex-center',
              alignItems: 'center'
            }}
          >
          <Text style={{ fontSize: 25, fontWeight: "700"}}>Lista de Pokemons</Text>
          <br />
          {pokemons?.map(pokemon => (
            <Text 
              key={pokemon.name}
              style={{
                fontSize: 20,
                marginBottom: 5
              }}
            >{pokemon.name}</Text>
          ))}
          </View>
        </>
      }      
    </View>
  )
}
import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { getThePokemons } from '../../helpers/api';
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
    <View style={styles.container}>
      {loading ? 
        <View style={styles.loadingContainer}>
          <ActivityIndicator color='#5567FF' />
        </View>
      :
        <>
          {error &&
            <View style={styles.errorContainer}>
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
          
          <Link href="/"><Text style={styles.returnButton}>Regresar</Text></Link>

          <View style={styles.subContainer}>
          <Text style={styles.title}>Lista de Pokemons</Text>          
          {pokemons?.map(pokemon => (
            <>            
            <Text 
              key={pokemon.name}
              style={styles.item}
            >{pokemon.name}</Text>
            </>
          ))}
          </View>
        </>
      }      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',        
    justifyContent: 'flex-start',
    alignItems: 'flex-start'   
  },
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FF9B55',
    padding: 10,
    borderRadius: 10,
    width: '80%'
  },
  loadingContainer:{
    display: "flex", 
    width: "100%", 
    height: "100%", 
    justifyContent: "center"
  },
  subContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',        
    justifyContent: 'flex-center',
    alignItems: 'center'
  },  
  title:{
    fontSize: 25, 
    fontWeight: "700", 
    marginBottom: 10
  },
  item: {
    fontSize: 20,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 5,
    borderColor: '#5567FF',
    borderWidth: 3
  },
  returnButton:{
    fontSize: 20,
    textDecorationLine: "underline"    
  }
});
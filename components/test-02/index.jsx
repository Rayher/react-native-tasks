import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl, View, Text, StyleSheet } from 'react-native';
import { getChangeRefresh } from '../../helpers/api';
import { Link } from 'expo-router';

export const Test02 = () => {
  const [offset, setOffset] = useState(0)
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // Simulating data fetching
  const fetchData = async () => {
    setRefreshing(true);    
    const res = await getChangeRefresh()
    if(res.success) {
       setData(res.data.results.map(p => { return { key: p.name, value: p.name }}))
       setOffset(offset + 10)
    }

    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Link href="/">
        <Text style={{ fontSize: 20, textDecorationLine: "underline" }}>Regresar</Text>
      </Link>
            
      <View style={styles.subContainer}>
        <Text style={styles.title}>Swipe down to load other pokemon</Text>        
        <FlatList
          data={data}          
          renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
          keyExtractor={item => item.key}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={fetchData}
              colors={['#55A5FF']} // Android spinner color
              tintColor={'#55A5FF'} // ios spinner color
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',        
    justifyContent: 'flex-start',
    alignItems: 'flex-start'    
  },
  subContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',        
    justifyContent: 'flex-center',
    alignItems: 'center',
    marginTop: 10
  },  
  title:{
    fontSize: 25, 
    fontWeight: "700",
    marginBottom: 10
  },
  item: {
    padding: 5,
    fontSize: 20,
    height: 40,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 5,
    borderColor: '#5567FF',
    borderWidth: 3    
  },
});
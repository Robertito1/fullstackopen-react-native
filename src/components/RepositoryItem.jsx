import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  flexItemImage: {
    flexGrow: 0,
    width: 50,
    height: 50,
    margin: 10
  },
  flexItem: {
    display: 'flex'   
  },
  flexItemDetails: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
});
const RepositoryItem = ({repository}) => {
 const toOneDecimal = (num) =>{
  const inThousands = num/1000
  return inThousands.toFixed(1)
 }
  return (
      <View>
       <View style={styles.flexContainer}>
            <Image
            style={styles.flexItemImage}
            source={{
              uri: repository.ownerAvatarUrl,
            }}
          />
         <View>
           <Text>{repository.fullName}</Text>
           <Text>{repository.description}</Text>
           <Text>{repository.language}</Text>
         </View>
       </View>
       <View style={styles.flexItemDetails}>
         <View style={styles.flexItem}> 
             <Text>{repository.stargazersCount > 1000 ? toOneDecimal(repository.stargazersCount) : repository.stargazersCount}k</Text>
             <Text>Stars</Text>
         </View>
         <View style={styles.flexItem}> 
             <Text>{repository.forksCount > 1000 ? toOneDecimal(repository.forksCount) : repository.forksCount}k</Text>
             <Text>Forks</Text>
         </View>
         <View style={styles.flexItem}> 
             <Text>{repository.reviewCount}</Text>
             <Text>Reviews</Text>
         </View>
         <View style={styles.flexItem}> 
             <Text>{repository.ratingAverage}</Text>
             <Text>Rating</Text>
         </View>
       </View>
      </View>
  );
};

export default RepositoryItem

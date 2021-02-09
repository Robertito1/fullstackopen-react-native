import React from 'react';
import {View, Image, StyleSheet} from 'react-native'
import Text from './Text'


const styles = StyleSheet.create({
  itemContainer:{
   borderRadius: 4
  },
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
  language: {
    padding: 4,
    backgroundColor: 'blue',
    borderRadius: 6,
    alignSelf: 'start',
    color: 'white'
  }
});
const RepositoryItem = ({repository}) => {
 const toOneDecimal = (num) =>{
  const inThousands = num/1000
  return inThousands.toFixed(1)
 }
  return (
      <View style={styles.itemContainer}>
       <View style={styles.flexContainer}>
            <Image
            style={styles.flexItemImage}
            source={{
              uri: repository.ownerAvatarUrl,
            }}
          />
         <View>
           <Text fontSize='subheading' fontWeight='bold'>{repository.fullName}</Text>
           <Text>{repository.description}</Text>
           <Text style={styles.language}>{repository.language}</Text>
         </View>
       </View>
       <View style={styles.flexItemDetails}>
         <View style={styles.flexItem}> 
             <Text fontWeight='bold'>{repository.stargazersCount > 1000 ? toOneDecimal(repository.stargazersCount) : repository.stargazersCount}k</Text>
             <Text>Stars</Text>
         </View>
         <View style={styles.flexItem}> 
             <Text fontWeight='bold'>{repository.forksCount > 1000 ? toOneDecimal(repository.forksCount) : repository.forksCount}k</Text>
             <Text>Forks</Text>
         </View>
         <View style={styles.flexItem}> 
             <Text fontWeight='bold'>{repository.reviewCount}</Text>
             <Text>Reviews</Text>
         </View>
         <View style={styles.flexItem}> 
             <Text fontWeight='bold'>{repository.ratingAverage}</Text>
             <Text>Rating</Text>
         </View>
       </View>
      </View>
  );
};

export default RepositoryItem

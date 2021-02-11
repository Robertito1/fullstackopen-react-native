import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native'
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
    alignSelf: 'flex-start',
    color: 'white'
  }
});
const RepositoryItem = ({repository, isAPage}) => {
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
           <Text fontSize='subheading' fontWeight='bold' testID="fullName">{repository.fullName}</Text>
           <Text testID="description">{repository.description}</Text>
           <Text style={styles.language} testID="language">{repository.language}</Text>
         </View>
       </View>
       <View style={styles.flexItemDetails}>
         <View style={styles.flexItem}> 
             <Text fontWeight='bold' testID="stargazersCount">{repository.stargazersCount > 1000 ? toOneDecimal(repository.stargazersCount) : repository.stargazersCount}k</Text>
             <Text>Stars</Text>
         </View>
         <View style={styles.flexItem}> 
             <Text fontWeight='bold' testID="forksCount">{repository.forksCount > 1000 ? toOneDecimal(repository.forksCount) : repository.forksCount}k</Text>
             <Text>Forks</Text>
         </View>
         <View style={styles.flexItem}> 
             <Text fontWeight='bold' testID="reviewCount">{repository.reviewCount}</Text>
             <Text>Reviews</Text>
         </View>
         <View style={styles.flexItem} testID="ratingAverage"> 
             <Text fontWeight='bold'>{repository.ratingAverage}</Text>
             <Text>Rating</Text>
         </View>
       </View>
       {isAPage && (
         //fix url redirect by intalling the tight version of expo-web-browser
        <TouchableOpacity onPress={() => {WebBrowser.openBrowserAsync(repository.url)}}>
          <View style={styles.containerButton}>
            <Text color='textSecondary' fontWeight='bold'>
              Open in Github
            </Text>
          </View>
        </TouchableOpacity>
      )}
      </View>
  );
};

export default RepositoryItem

import React from 'react';
import { useHistory } from "react-router-native";
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';


import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#808080'
  },
});



const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
    const history = useHistory()
    const gotoRepository =(id)=>{
    history.push(`/${id}`)
}
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => 
      <TouchableOpacity onPress={()=>gotoRepository(item.id)}>
        <RepositoryItem repository={item}/>
      </TouchableOpacity> 
      }
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};


export default RepositoryList;
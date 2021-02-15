import React, { useState } from 'react';
import { useHistory } from "react-router-native";
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import theme from '../theme';



import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#808080'
  },
});

const OrderBy = ({order, setOrder}) => {
  const styles = StyleSheet.create({
    container: {
      margin: 15,
      marginVertical: 5,
      marginRight: 25,
    },
    inputWeb: {
      borderWidth: 1,
      backgroundColor: theme.colors.main,
      fontSize: theme.fontSizes.body,
      height: 30,
      paddingRight: 60,
    },
    inputAndroid: {
      borderWidth: 1,
      height: 60,
      fontSize: theme.fontSizes.body,
      paddingRight: 30,
    },
    inputIOS: {
      borderWidth: 1,
      height: 60,
      fontSize: theme.fontSizes.body,
      paddingRight: 30,
    }
  });
  return (
    <View style={styles.container}>
    <RNPickerSelect
      style={styles}
      onValueChange={(value) => setOrder(value)}
      items={[
        { label: 'Latest repositories', value: 'latestRelated' },
        { label: 'Highest rated repositories', value: 'highestRated' },
        { label: 'Lowest rated repositories', value: 'lowestRated' },
      ]}
      placeholder={{}}
      value={order}
    />
  </View>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, onEndReach, setOrder, order }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
    const history = useHistory();
    const gotoRepository =(id)=>{
    history.push(`/${id}`);
};
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => 
      <TouchableOpacity onPress={()=>gotoRepository(item.id)}>
        <RepositoryItem repository={item}/>
      </TouchableOpacity> 
      }
      ListHeaderComponent={() => <OrderBy setOrder={setOrder} order={order}/>}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState('latestCreated');
  const { repositories, fetchMore } = useRepositories({order, first: 10});

 const handleOrderChange = (value) =>{
    setOrder(value);
  };

  const onEndReach = () => {
    fetchMore();
  };
  return <RepositoryListContainer 
  repositories={repositories} 
  setOrder={handleOrderChange} 
  onEndReach={onEndReach}
  order={order}/>;
};


export default RepositoryList;
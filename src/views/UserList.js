import React, { useContext } from 'react';
import {Text, View, FlatList, Alert} from 'react-native';
import {ListItem, Button, Icon} from 'react-native-elements';

import UsersContext from '../context/UsersContext';
import Data from '../services/api';

export default props => {
    
   const { state, dispatch } = useContext(UsersContext);

    const confirmUserDeletion = (user) => {
     Alert.alert('Excluir Usuário', 'Deseja excluir o usuário', [
         {
            text: 'Sim',
           onPress(){
            dispatch({
                type: 'deleteUser',
                payload: user,
            })
           }
         },
         {
            text: 'Não'
         },
     ])

    }
    const handleActions = (user) => {
    return(
    <>
        <Button 
        onPress={() => props.navigation.navigate('UserForm', user)}
        type="clear"
        icon={<Icon name="edit" size={25} color="orange"  />}
        />
        <Button 
        onPress={() => confirmUserDeletion(user)}
        type="clear"
        icon={<Icon name="delete" size={25} color="red"  />}
        />
    </>
)
    }
    const Item = ({item: user}) =>{
     return (
     <ListItem 
        leftAvatar={{source: {uri : user.avatarUrl}}}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        rightElement={handleActions(user)}
        onPress={() => props.navigation.navigate('UserForm')}
     />
     )
    }
    return (
        <View>
            <FlatList 
                data={state.users}
                keyExtractor={user => user.id}
                renderItem={Item}
            />
        </View>
    )
};
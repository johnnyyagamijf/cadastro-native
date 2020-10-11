import React, {useState, useContext} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import UsersContext from '../context/UsersContext';

export default UserForm = ({route, navigation}) => {
 const [user, setUser] = useState(route.params ? route.params : {})
 const [dispatch] = useContext(UsersContext);
    return (
    <View style={style.form}>
        <Text>Name</Text>
        <TextInput 
            style={style.input} 
            onChangeText={name => setUser({...user, name})}
            placeholder="Informe o nome"
            value={user.name}
        />
        <Text>Email</Text>
        <TextInput 
            style={style.input} 
            onChangeText={email => setUser({...user, email})}
            placeholder="Informe o email"
            value={user.email}
        />
        <Text>Url do Avatar</Text>
        <TextInput 
            style={style.input} 
            onChangeText={avatarUrl => setUser({...user, avatarUrl})}
            placeholder="Informe o url do avatar"
            value={user.avatarUrl}
        />
        <Button 
            title="Salvar"
            onPress={() => {
                dispatch({
                    type: user.id? 'updateUser': 'createUser',
                    payload: user
                })
                navigation.goBack()
            }}
        />
    </View>
    )
};

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';
import Colors from '../../Utilis/AppColors';



const StoresScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const getStores = useCallback(async() => {
        setIsLoading(true);
        let action = actions.get_store_action();
        try{
            await dispatch(action);
            setIsLoading(false);
        } catch(err) {
            setIsLoading(false)
        }
    },[setIsLoading,actions.get_store_action, dispatch]);

    useEffect(() => {
        getStores();
    },[getStores]);

    const allStores = useSelector(state => state.allStores);
    let appStores = allStores.allStores.Stores;       
    
    return(
        <View>
            {
                isLoading ?
                (
                    <ActivityIndicator
                        color={Colors.red1}
                        size='large'
                    />
                )
                :
                (
                    <FlatList
                        data={appStores}
                        keyExtractor={item => item._id}
                        renderItem={store => <Text style={{fontSize:50}}>{store.item.storeName}</Text>}
                    />
                )
            }
        </View>
    )
}


export default StoresScreen;
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';
import StoreItem from '../../../components/storeItem';
import Styles from '../../Utilis/styles';
import Colors from '../../Utilis/AppColors';


const StoresScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
   

    const allStores = useSelector(state => state.allStores);
    let appStores = allStores.allStores.Stores;        
    
    return(
        <View>
            {
                appStores? 
                (
                    <FlatList
                      data={appStores}
                      keyExtractor={item => item._id}
                      renderItem= {
                          store =>
                          <TouchableOpacity onPress={() => props.navigation.navigate('store', {store:store.item})}>
                          <StoreItem  
                            store = {store.item} 
                          />
                          </TouchableOpacity>
                        }  
                    />
                )
                :
                (
                    <Text>222</Text>
                )
            }        
        </View>
    )
}


export default StoresScreen;
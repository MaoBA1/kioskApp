import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import Styles from '../../Utilis/styles';
import Colors from '../../Utilis/AppColors';



const StorePage = props => {
        console.log(props.route.params.store);
        const store = props.route.params.store;
    return(
        <View>
            <Image
                source={{uri: store.logo}}
                style={{width:"100%", height:200, resizeMode:'stretch'}}
            />
            
        </View>
    )
}

export const screenOptions = props => {
    const storeName = props.route.params.store.storeName;
    return {
        headerTitle: storeName    
    }
    
}

export default StorePage;
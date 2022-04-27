import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import Styles from '../src/Utilis/styles';
import Colors from '../src/Utilis/AppColors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StoreItem = props => {
    console.log(props);
    const storeName = props.store.storeName;
    const email = props.store.contactInfo.email;
    const address = props.store.contactInfo.address;
    const city = props.store.contactInfo.city;
    const mobile = props.store.contactInfo.mobile;
    const phone = props.store.contactInfo.phone;
    const logo = props.store.logo;
    const isDelivery = props.store.isDelivery
    return(
        <View style={Styles.storeItem}>

            <View style={Styles.storeDetailsView}> 
                <Image
                    source={{uri: logo}}
                    style={{width:50, height: 50}}
                />
            </View>

            <View>
                <Text style={Styles.storeTitle}>{storeName}</Text>
                <Text style={Styles.storeDetails}>{city}, {address}</Text>
                <View>
                    {
                        isDelivery?
                        (
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <MaterialIcons 
                                    name="delivery-dining"
                                    color={Colors.blue1}
                                    size={25}
                                />
                                <Text>Dilvery: (yse)</Text>
                            </View>
                        )
                        :
                        (
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Feather 
                                    name="x"
                                    color={Colors.red1}
                                    size={25}
                                />
                                <Text>Dilvery: (no)</Text>
                            </View>
                        )
                    }
                </View>
            </View>

            
            
        </View>
    )
}


export default StoreItem;
import { StyleSheet } from 'react-native';
import Colors from '../Utilis/AppColors';
export default StyleSheet.create({

    storeTitle:{
       fontSize:25 
    },
    storeItem:{
        backgroundColor: Colors.white,
        margin:20,
        width:"100%",        
        borderRadius: 20,        
        padding: 20,
        flexDirection:'row'
    },
    storeDetails:{
        fontSize: 20
    },
    storeDetailsView:{
        marginRight:20
    }
})
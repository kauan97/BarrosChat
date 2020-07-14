import { StyleSheet, YellowBox } from 'react-native'

const styles = StyleSheet.create({
    container: {
        maxHeight: 75,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        backgroundColor: '#fff',
        height: 40,
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 17,
        fontFamily: 'Roboto'
    },
    iconText: {
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 24,
        marginTop: 5
    },
    submenuContainer: { 
        height: 110, 
        flexDirection: 'row', 
        backgroundColor: '#fff', 
        justifyContent: 'space-around', 
        alignItems: 'center' 
    },
    submenuButton: { 
        flex: 1, 
        marginHorizontal: 10, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})

export default styles
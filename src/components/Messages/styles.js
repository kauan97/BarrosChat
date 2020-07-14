import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    messagesList: {
        paddingHorizontal: 10,
        paddingBottom: 20
    },
    messageContainer: {
        borderRadius: 20,
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    messageText: {
        fontFamily: 'Roboto',
        fontSize: 15,
        lineHeight: 20
    },
    messageDateContainer: {
        flex: 1,
        minHeight: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    messageDateText: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 11,
        lineHeight: 11,
        fontFamily: 'Roboto'
    },
    photo: {
        height: 40,
        width: 40,
        resizeMode: 'stretch',
        borderRadius: 40,
        marginRight: 15
    }
})

export default styles
import React from 'react'
import { Text, View, Image, FlatList, SafeAreaView } from 'react-native'

import styles from './styles'
export default function Messages() {
    const loggedUser = {
        _id: '1'
    }
    const messages = [
        {
            _id: '6',
            user: {
                _id: '1',
                name: 'Kauan Barros',
                picture: 'https://media-exp1.licdn.com/dms/image/C4D03AQEfkuMCEuk6FQ/profile-displayphoto-shrink_100_100/0?e=1599696000&v=beta&t=eOuONryzltQWje_jkeMc4OtuGJNN_72otBYleROhElc'
            },
            content: "Test test",
            delivered: true,
            createdAt: '2020-07-14T00:18:07.713Z'
        },
        {
            _id: '7',
            user: {
                _id: '2',
                name: 'Natasha Miata',
                picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQGfZCvPTK5QGg/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=5kmoJ4W-Jm5QhyYkQRFhWF9MFrtnuBrwngrdMbbGZWw'
            },
            content: "Test test",
            delivered: false,
            createdAt: '2020-07-14T00:18:08.713Z'
        },
        {
            _id: '8',
            user: {
                _id: '1',
                name: 'Kauan Barros',
                picture: 'https://media-exp1.licdn.com/dms/image/C4D03AQEfkuMCEuk6FQ/profile-displayphoto-shrink_100_100/0?e=1599696000&v=beta&t=eOuONryzltQWje_jkeMc4OtuGJNN_72otBYleROhElc'
            },
            content: "Test test :)",
            delivered: true,
            createdAt: '2020-07-14T00:18:07.713Z'
        },
        {
            _id: '9',
            user: {
                _id: '2',
                name: 'Natasha Miata',
                picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQGfZCvPTK5QGg/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=5kmoJ4W-Jm5QhyYkQRFhWF9MFrtnuBrwngrdMbbGZWw'
            },
            content: "...",
            delivered: false,
            createdAt: '2020-07-14T00:18:08.713Z'
        },
        {
            _id: '10',
            user: {
                _id: '1',
                name: 'Kauan Barros',
                picture: 'https://media-exp1.licdn.com/dms/image/C4D03AQEfkuMCEuk6FQ/profile-displayphoto-shrink_100_100/0?e=1599696000&v=beta&t=eOuONryzltQWje_jkeMc4OtuGJNN_72otBYleROhElc'
            },
            content: "Test test",
            delivered: true,
            createdAt: '2020-07-14T00:18:07.713Z'
        },
    ]

    const isMessageAuthor = userId => userId === loggedUser._id 
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                style={styles.messagesList}
                data={ messages }
                keyExtractor={ message => message._id }
                renderItem={({ item: message }) => (
                    <>
                        <View style={ styles.messageDateContainer }>
                            <Text style={ styles.messageDateText }>Monday・11:50 AM</Text>
                        </View>
                        <View style={[{ flexDirection: 'row', flex: 1 }, { justifyContent: isMessageAuthor(message.user._id) ? 'flex-end' : 'flex-start' }]}>
                            { !isMessageAuthor(message.user._id)
                                ? <Image style={ styles.photo } source={{ uri: message.user.picture }} /> 
                                : null
                            }
                            
                            <View style={ styles.messageContainer }>
                                <Text style={ styles.messageText }>{ message.content }</Text>
                            </View>
                        </View>
                    </>
                )}
            />
            
        </SafeAreaView>
    )
}

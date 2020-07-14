import React, { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native'

import AddIcon from '../../assets/icons/Add.png'
import SMSIcon from '../../assets/icons/SMS.png'
import VideocamIcon from '../../assets/icons/Videocam.png'
import CameraIcon from '../../assets/icons/Camera.png'
import MicrophoneIcon from '../../assets/icons/Microphone.png'
import AttachIcon from '../../assets/icons/Attach.png'

import styles from './styles'
export default function BottomBar() {

    const [message, setMessage] = useState('')
    const [submenuActive, setSubmenuActive] = useState(0)

    return (
        <>
            <View style={ styles.container }>
                <TouchableOpacity style={ styles.button } onPress={() => setSubmenuActive(!submenuActive)}>
                    <Image source={ AddIcon } />
                </TouchableOpacity>

                <TextInput 
                    style={ styles.textInput }
                    placeholder='Add text to this message'
                    placeholderTextColor='rgba(0, 0, 0, 0.5)' 
                    onChangeText={message => setMessage(message)}
                    defaultValue={message}
                />
                <TouchableOpacity style={ styles.button } onPress={() => {}}>
                    <Image source={ SMSIcon } />
                </TouchableOpacity>
            </View>
            {submenuActive ?
                <View style={ styles.submenuContainer }>
                    <TouchableOpacity style={ styles.submenuButton } onPress={() => {}}>
                        <Image source={ AttachIcon } />
                        <Text style={ styles.iconText }>File</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.submenuButton } onPress={() => {}}>
                        <Image source={ CameraIcon } />
                        <Text style={ styles.iconText }>Picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.submenuButton } onPress={() => {}}>
                        <Image source={ MicrophoneIcon } />
                        <Text style={ styles.iconText }>Audio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.submenuButton } onPress={() => {}}>
                        <Image source={ VideocamIcon } />
                        <Text style={ styles.iconText }>Video</Text>
                    </TouchableOpacity>
                </View>
                : null
            }
        </>
    )
}

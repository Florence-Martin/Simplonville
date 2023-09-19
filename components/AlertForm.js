import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, Pressable, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonImage from './ButtonImage';
import emailjs from 'emailjs-com';

export default function AlertForm() {

    const [alertType, setAlertType] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [address, setAddress] = useState('');
    const [postcode, setPostcode] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [time, setTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [photo, setPhoto] = useState(null);

    const handleChoosePhoto = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission non accordée pour accéder à la bibliothèque de médias.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setPhoto(result);
        }
    };

    const handleSubmit = () => {
        // Envoyer les données au serveur ou effectuer d'autres actions ici
        if (!alert) {
            return;
        }

        const templateParams = {
            alertType,
        };

        emailjs
            .send(
                'EMAILJS_SERVICE_ID',
                'EMAILJS_TEMPLATE_ID',
                templateParams,
                'YOUR_USER_ID'
            )
            .then((response) => {
                console.log('E-mail envoyé avec succès', response);
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi de l\'e-mail', error);
            });

    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const onChangeTime = (event, selectedTime) => {
        setShowTimePicker(false);
        if (selectedTime !== undefined) {
            setTime(selectedTime);
        }
    };

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <Text>Type d'alerte :</Text>
            <TextInput
                style={styles.input}
                required
                placeholder="Entrez le type d'alerte"
                value={alertType}
                onChangeText={(text) => setAlertType(text)}
            />

            <Text style={styles.label}>Description :</Text>
            <TextInput
                style={[styles.input, styles.multilineInput]}
                placeholder="Entrez la description"
                value={description}
                onChangeText={(text) => setDescription(text)}
                multiline
            />

            <Text style={styles.label}>Nom :</Text>
            <TextInput
                style={styles.input}
                placeholder="Nom"
                value={name}
                onChangeText={(text) => setName(text)}

            />
            <Text style={styles.label}>Prenom :</Text>
            <TextInput

                style={styles.input}
                placeholder="Prenom"
                value={firstname}
                onChangeText={(text) => setFirstname(text)}

            />
            <Text style={styles.label}>Adresse :</Text>
            <TextInput
                style={styles.input}
                placeholder="Adresse"
                value={address}
                onChangeText={(text) => setAddress(text)}

            />
            <Text style={styles.label}>Code postal :</Text>
            <TextInput
                style={styles.input}
                placeholder="Code postal"
                value={postcode}
                onChangeText={(text) => setPostcode(text)}

            />
            <Text style={styles.label}>Ville :</Text>
            <TextInput
                style={styles.input}
                placeholder="Ville"
                value={city}
                onChangeText={(text) => setCity(text)}

            />
            <Text style={styles.label}>Email :</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}

            />
            <Text style={styles.label}>T&eacute;l&eacute;phone :</Text>
            <TextInput
                style={styles.input}
                placeholder="T&eacute;l&eacute;phone"
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}

            />
            <View>
                <Text style={styles.label}>Date :</Text>
                <Pressable onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
                    <Ionicons name="calendar" size={24} color='#25292e' />
                </Pressable>
                {showDatePicker && (
                    <DateTimePicker
                        testID="datePicker"
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChangeDate}
                    />
                )}
            </View>


            <Text style={styles.label}>Heure :</Text>
            <Pressable onPress={() => setShowTimePicker(true)} style={styles.timePickerButton}>
                <Ionicons name="time" size={24} color="black" />
            </Pressable>
            {showTimePicker && (
                <DateTimePicker
                    testID="timePicker"
                    value={time}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={onChangeTime}
                />
            )}

                <Button title="Choisir une photo" onPress={handleChoosePhoto} />
           

            {photo && (
                <View>
                    <Text>Photo sélectionnée :</Text>
                    <Image source={{ uri: photo.uri }} style={{ width: 200, height: 200 }} />
                </View>
            )}

            <Pressable style={styles.footerContainer} onPress={handleSubmit}>
                <ButtonImage label="Envoyer l'alerte" />
            </Pressable>
        </ScrollView>
    )


}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        color: '#383E42',
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    multilineInput: {
        height: 100,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
    photoContainer: {
        alignItems: 'center',
    },
    footerContainer: {
        alignItems: 'center',
        backgroundColor: '#383E42',
        borderRadius: 8,
        marginTop:4,
        marginBottom:4,
        marginLeft:24,
        marginRight:24,
    },
    datePickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
    },
    timePickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
    },
});


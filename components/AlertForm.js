import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function AlertForm() {

    const [alertType, setAlertType] = useState('');
    const [description, setDescription] = useState('');
    const [nom, setNom] = useState('');
    const [Prenom, setPrenom] = useState('');
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

        if (!result.cancelled) {
            setPhoto(result);
        }
    };

    const handleSubmit = () => {
        // Envoyer les données au serveur ou effectuer d'autres actions ici
        console.log('Type d\'alerte :', alertType);
        console.log('Description :', description);
        console.log('Nom :', description);
        console.log('Prénom :', description);
        console.log('Date :', date);
        console.log('Heure :', time);
        console.log('Photo :', photo);
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
                value={description}
                onChangeText={(text) => setNom(text)}

            />
            <Text style={styles.label}>Prenom :</Text>
            <TextInput
                style={styles.input}
                placeholder="Prenom"
                value={description}
                onChangeText={(text) => setPrenom(text)}

            />
            <View>
                <Text style={styles.label}>Date :</Text>
                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
                    <Ionicons name="calendar" size={24} color='#25292e' />
                </TouchableOpacity>
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
            <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.timePickerButton}>
                <Ionicons name="time" size={24} color="black" /> 
            </TouchableOpacity>
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

            <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.text}>Envoyer l'alerte</Text>
            </TouchableOpacity>
        </ScrollView>
    )


}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        color: '#25292e',
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
        flex: 1 / 3,
        alignItems: 'center',
    },
    datePickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
    },
 
});


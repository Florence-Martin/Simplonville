import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

export default function AlertForm() {
    const AlertForm = () => {
        const [alertType, setAlertType] = useState('');
        const [description, setDescription] = useState('');
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
            const currentTime = selectedTime || time;
            setShowTimePicker(false);
            setTime(currentTime);
        };

        return (
            <View style={styles.container }>
                <Text>Type d'alerte :</Text>
                <TextInput
                    style={styles.input }
                    placeholder="Entrez le type d'alerte"
                    value={alertType}
                    onChangeText={(text) => setAlertType(text)}
                />

                <Text style={styles.label}>Description :</Text>
                <TextInput
                    style={[styles.input, styles.multilineInput] }
                    placeholder="Entrez la description"
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                    multiline
                />

                <Text style={styles.label}>Date :</Text>
                <Button title="Sélectionner une date" onPress={() => setShowDatePicker(true)} />
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

                <Text style={styles.label }>Heure :</Text>
                <Button title="Sélectionner l'heure" onPress={() => setShowTimePicker(true)} />
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
                    <Text>Envoyer l'alerte</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        color: '#25292e',
    },
    label: {
        fontSize: 16,
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
});


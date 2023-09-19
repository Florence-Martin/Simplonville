import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

export default function ImageViewer({ placeholderImageSource }) {
    return (
        <ScrollView >
            <Image source={placeholderImageSource} style={styles.image} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
    },
});

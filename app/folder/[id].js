import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Button, Image, View, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Folder() {
    const route = useRoute();
    const folderId = route.params?.id || 'Folder';
    const [images, setImages] = useState([]);

    // Load images from AsyncStorage when the component mounts
    useEffect(() => {
        const loadImages = async () => {
            try {
                const storedImages = await AsyncStorage.getItem(`selectedImages_${folderId}`);
                if (storedImages) {
                    setImages(JSON.parse(storedImages));
                }
            } catch (error) {
                console.error('Error loading images from AsyncStorage:', error);
            }
        };

        loadImages();
    }, [folderId]);

    // Save images to AsyncStorage whenever the images state changes
    useEffect(() => {
        const saveImages = async () => {
            try {
                await AsyncStorage.setItem(`selectedImages_${folderId}`, JSON.stringify(images));
            } catch (error) {
                console.error('Error saving images to AsyncStorage:', error);
            }
        };

        saveImages();
    }, [images, folderId]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImages([...images, result.assets[0].uri]);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>FOLDER: {folderId}</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />

                <FlatList
                    data={images}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={{ width: 200, height: 200, marginVertical: 5 }} />
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


{/* {images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image }}
                            style={{ width: 200, height: 200, marginVertical: 5 }}
                        />
                    ))} */}
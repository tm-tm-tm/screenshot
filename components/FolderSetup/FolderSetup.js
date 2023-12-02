import React, { useState } from 'react';
import { View, TextInput, Button, Stylesheet } from 'react-native';

const FolderSetup = ({ onFolderCreate }) => {
    const [folderName, setFolderName] = useState('');

    const handleCreate = () => {
        if (folderName !== '') {
            onFolderCreate(folderName);
            setFolderName('');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Enter folder name"
                value={folderName}
                onChangeText={(text) => setFolderName(text)}
            />
            <Button title="Create" onPress={handleCreate} />
        </View>
    );
};

export default FolderSetup;




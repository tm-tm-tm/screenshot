import { useState, useEffect } from 'react'
import { SafeAreaView, View, FlatList, Button, Text, Image, StyleSheet } from 'react-native'
import { Stack, Link } from 'expo-router'
import FolderSetup from '../components/FolderSetup/FolderSetup'

export default function Home() {
  const [folders, setFolders] = useState([])

  const handleFolderCreate = (folderName) => {
    setFolders([...folders, folderName])
  }

  return (
    <>
      <SafeAreaView style={styles.container}>

        <View style={styles.main}>
          <Text>
            SCREENSHOTS
          </Text>
        </View>

        <View>
          <FolderSetup onFolderCreate={handleFolderCreate} />
        </View>

        <View>
          {/* {folders.map((folder, index) => (
            <Text key={index}>{folder}</Text>
          ))} */}

          {folders.map((folder, index) => (
            <Link
              key={index}
              href={{
                pathname: "/folder/[id]",
                params: { id: encodeURIComponent(folder) }
              }}
              style={styles.folderLink}
            >
              <Text>{folder}</Text>
            </Link>
          ))}
        </View>

      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  folderLink: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  }
})








import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}

// import { Tabs } from 'expo-router';

// export default function Layout() {
//   return <Tabs />;
// }

// import { Drawer } from 'expo-router/drawer';

// export default function Layout() {
//   return <Drawer />;
// }


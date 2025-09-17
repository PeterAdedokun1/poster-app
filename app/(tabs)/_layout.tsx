import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0a0a0a',
          borderTopWidth: 0,
          height: 0, // Hide the tab bar since we're using custom tabs
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Smart Script',
        }}
      />
      <Tabs.Screen
        name="advanced"
        options={{
          title: 'Advanced Script',
        }}
      />
    </Tabs>
  );
}
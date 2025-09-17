import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

interface SettingRowProps {
  label: string;
  value: string;
  onPress?: () => void;
}

export default function SettingRow({ label, value, onPress }: SettingRowProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <ChevronRight size={20} color="#666666" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  label: {
    color: '#cccccc',
    fontSize: 16,
    marginBottom: 4,
    lineHeight: 20,
  },
  value: {
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 18,
  },
});
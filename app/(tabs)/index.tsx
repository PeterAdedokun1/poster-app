import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface PosterTypeProps {
  label: string;
  imageUri: string;
  subLabel: string;
  isSelected: boolean;
}
const { width } = Dimensions.get("window");

const PosterTypeItem: React.FC<PosterTypeProps> = ({ label, imageUri, subLabel, isSelected }) => {
  return (
    <TouchableOpacity style={[styles.posterTypeItem, isSelected && styles.selectedPosterType]}>
      <Image source={{ uri: imageUri }} style={styles.posterImage} />
      {/* <Text style={styles.posterLabel}>{label}</Text> */}
      {/* <Text style={styles.posterLabelSmall}>{subLabel}</Text> */}
    </TouchableOpacity>
  );
};

interface SettingsItemProps {
  label: string;
  value: string;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ label, value }) => {
  return (
    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingLabel}>{label}</Text>
      <View style={styles.settingValueContainer}>
        <Text style={styles.settingValue}>{value}</Text>
        <Ionicons name="chevron-forward" size={20} color="#888" />
      </View>
    </TouchableOpacity>
  );
};

const PosterCreationScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>

      </View>
      <View style={styles.headerTabText}>
        {/* Smart Script (active) */}
        <View style={styles.tab}>
          <Text style={styles.activeText}>Smart script</Text>
          <View style={styles.underlineContainer}>
            <View style={styles.underlineLeft} />
            <View style={styles.underlineRight} />
          </View>
        </View>

        {/* Advanced Script (inactive) */}
        <View style={styles.tab}>
          <Text style={styles.inactiveText}>Advanced script</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Title */}
        <Text style={styles.title}>What type of posters do you want to create?</Text>

        {/* Poster Type Selection */}
        <View style={styles.posterTypeContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Using the PosterTypeItem component */}
            <PosterTypeItem
              label="New Limited Edition"
              imageUri="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=400"
              subLabel="Display"
              isSelected={false}
            />
            <PosterTypeItem
              label="Up to 50% Off"
              imageUri="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300&h=400"
              subLabel="Promotion"
              isSelected={true}
            />
            <PosterTypeItem
              label="Up to 50% Off"
              imageUri="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300&h=400"
              subLabel="Promotion"
              isSelected={false}
            />
            <PosterTypeItem
              label="Editor's Choice"
              imageUri="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300&h=400"
              subLabel="Branding"
              isSelected={false}
            />
            <PosterTypeItem
              label="Editor's Choice"
              imageUri="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300&h=400"
              subLabel="Branding"
              isSelected={false}
            />
            {/* Add more poster types here */}
          </ScrollView>
        </View>

        {/* Description Input */}
        <View style={styles.descriptionContainer}>
          <TextInput
            style={styles.descriptionInput}
            multiline
            placeholder="stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an enticing setting."
            placeholderTextColor="white"
          />
          <TouchableOpacity style={styles.imagePlaceholder}>
            <Ionicons name="image-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Settings */}
        <Text style={styles.settingsTitle}>Settings</Text>

        {/* Using the SettingsItem component */}
        <SettingsItem label="Size" value="1080 x 1920 px" />
        <SettingsItem label="Category" value="Foods and beverage" />
      </ScrollView>

      {/* Generate Button */}
      <View style={{ marginVertical: 30, marginHorizontal: 10 }}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.inner}>
            {/* Glow circle */}
            <View style={styles.glowCircle} />

            {/* Text */}
            <Text style={styles.text}>Generate</Text>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTabText: {
    flexDirection: "row",
    backgroundColor: "#000",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderWidth: 1,
  },
  closeButton: {
    marginRight: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20,
  },
  headerTextInactive: {
    color: '#888',
    fontSize: 16,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  posterTypeContainer: {
    marginBottom: 20,
  },
  activeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  inactiveText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#888",
  },
  underlineContainer: {
    flexDirection: "row",
    marginTop: 4,
    width: width / 2
  },
  underlineLeft: {
    height: 2,
    flex: 1,
    backgroundColor: "#00CFFF", // cyan
  },
  underlineRight: {
    height: 2,
    width: 40,
    backgroundColor: "#8B5CF6", // purple
  },
  posterTypeItem: {
    width: 110,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  selectedPosterType: {
    borderWidth: 2,
    borderColor: 'white',
  },
  posterImage: {
    width: 100,
    height: 100,
    borderRadius: 6,
    marginBottom: 5,
  },
  posterLabel: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  tab: {
    marginRight: 20,
    alignItems: "center",
  },
  underline: {
    marginTop: 4,
    height: 2,
    width: "100%",
    backgroundColor: "#fff", // underline color (white here)
    borderRadius: 2,
  },
  posterLabelSmall: {
    color: '#aaa',
    fontSize: 12,
  },
  descriptionContainer: {
    backgroundColor: '#1c1c1e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    position: 'relative',
  },
  descriptionInput: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  imagePlaceholder: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  settingsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#888',
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  settingLabel: {
    color: '#fff',
    fontSize: 16,
  },
  settingValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    color: '#888',
    fontSize: 16,
    marginRight: 5,
  },
  generateButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    margin: 20,
    alignItems: 'center',
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // for Android shadow
    marginTop: -20
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
  },
  glowCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#4F46E5", // purple base
    marginRight: 10,

    // Glow effect
    shadowColor: "#00CFFF",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});

export default PosterCreationScreen;
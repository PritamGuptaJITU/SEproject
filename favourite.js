import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Navigation bar */}
      <View style={styles.navBar}>
        {/* Menu icon */}
        {/* Light mode indicator */}
        <Text style={styles.lightMode}>Light Mode</Text>
        {/* Signal and battery icons */}
        {/* You should replace these with your actual signal and battery icons */}
      </View>

      {/* Header */}
      <Text style={styles.header}>Favourites</Text>

      {/* Search bar */}
      <TextInput style={styles.searchBar} placeholder="Search" />

      {/* List view */}
      <ScrollView style={styles.listView}>
        {/* Item */}
        <View style={styles.item}>
          {/* Circular placeholder */}
          <View style={styles.placeholder} />
          {/* Text content */}
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Netflix</Text>
            <Text style={styles.itemPrice}>$45.89</Text>
            <Text style={styles.itemDate}>20 May 2022</Text>
          </View>
        </View>
        <View style={styles.item}>
          {/* Circular placeholder */}
          <View style={styles.placeholder} />
          {/* Text content */}
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Netflix</Text>
            <Text style={styles.itemPrice}>$45.89</Text>
            <Text style={styles.itemDate}>20 May 2022</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom navigation bar */}
      <View style={styles.bottomNavBar}>
        {/* Home icon */}
        {/* Favorite icon */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  lightMode: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
  },
  searchBar: {
    padding: 8,
    margin: 16,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
  },
  listView: {
    marginHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  placeholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#cccccc',
    marginRight: 16,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
  },
  itemDate: {
    fontSize: 14,
    color: '#666666',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default App;
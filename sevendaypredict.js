import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Navigation bar */}
      <View style={styles.navBar}>
        {/* Menu icon */}
        {/* Heart icon */}
      </View>

      {/* Header */}
      <Text style={styles.header}>Netflix</Text>

      {/* Price */}
      <Text style={styles.price}>$45.89</Text>

      {/* Chart */}
      <View style={styles.chartContainer}>
        {/* Chart component */}
        {/* You should replace this with your actual chart component */}
        <Text style={styles.chartPlaceholder}>Chart goes here</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>5D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1Y</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ALL</Text>
        </TouchableOpacity>
      </View>

      {/* Info */}
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.infoLabel}>Open Price</Text>
          <Text style={styles.infoValue}>$9,453.76</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoLabel}>Volume</Text>
          <Text style={styles.infoValue}>$2,782,002</Text>
        </View>
        <View style={styles.info}>
          <Text style={[styles.infoLabel, styles.green]}>24H High</Text>
          <Text style={[styles.infoValue, styles.green]}>$782.00</Text>
        </View>
        <View style={styles.info}>
          <Text style={[styles.infoLabel, styles.red]}>24H Low</Text>
          <Text style={[styles.infoValue, styles.red]}>$982.82</Text>
        </View>
      </View>

      {/* Forecast buttons */}
      <View style={styles.forecastButtons}>
        <TouchableOpacity style={styles.forecastButton}>
          <Text style={styles.forecastButtonText}>FORECAST 3 DAYS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forecastButton}>
          <Text style={styles.forecastButtonText}>FORECAST 7 DAYS</Text>
        </TouchableOpacity>
      </View>

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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  chartContainer: {
    height: 200,
    marginHorizontal: 16,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPlaceholder: {
    fontSize: 16,
    color: '#666666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#cccccc',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  info: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
  forecastButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  forecastButton: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  forecastButtonText: {
    fontSize: 16,
    color: '#ffffff',
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
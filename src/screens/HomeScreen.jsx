import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Category from '../components/Category';
import Carousal from '../components/Carousal';
import Services from '../components/Services';
import Deals from '../components/Deals';
import Brands from '../components/Brands';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer} // ✅ Fix applied
    >
      <View style={styles.fullWidth}>
        <Header />
      </View>
      <View style={styles.fullWidth}>
        <SubHeader />
      </View>
      <View style={styles.fullWidth}>
        <Category />
      </View>
      <View style={styles.fullWidth}>
        <Carousal />
      </View>
      <View style={styles.fullWidth}>
        <Services />
      </View>
      <View style={styles.fullWidth}>
        <Deals />
      </View>
      <View style={styles.fullWidth}>
        <Brands/>
      </View>

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'stretch', // ✅ Corrected: Move alignment here
    justifyContent: 'flex-start',
  },
  fullWidth: {
    width: '100%', // ✅ Avoids repetitive inline styles
  }
});

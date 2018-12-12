import React from 'react';
import { Text, View } from 'react-native';
import { GOOGLE_RED } from '../constants/colors';

const Footer = () => {
  return (
    <View style={{
      paddingBottom: 8,
      paddingTop: 8,
    }}>
      <Text style={{ color: GOOGLE_RED }}>TODO: Remove completed item.</Text>
    </View>
  );
}

export default Footer;

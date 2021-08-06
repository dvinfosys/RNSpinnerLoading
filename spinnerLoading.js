import React, { useState } from 'react';
import {
  Modal,
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

export default function SpinnerLoading(props) {
  return(
    <Modal
      transparent={true}
      visible={props.visible}>

      <View style={[style.container, props.containerStyle]}>
        <View style={[style.bgView, props.customStyle]}>
          <ActivityIndicator
              animating={true}
              color={'#fff'}
              size={'large'}/>
        </View>
      </View>

    </Modal>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgView: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 8,
    padding: 20.5,
  }
});

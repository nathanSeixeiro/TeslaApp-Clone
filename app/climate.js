import { View, Text, StyleSheet } from 'react-native';

const ClimateScreen = () => {
  return (
    <View styles={style.container}>
      <Text>climate</Text>
    </View>
  )
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyCenter: 'center',
    }
})

export default ClimateScreen;
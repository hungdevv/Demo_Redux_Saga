import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      flex: 2,
      alignItems: "center",
      paddingTop: 40,
      position: "relative",
      width: "100%",
      height: "100%",
    },
    textStyle: {
      color: "white",
    },
    contentView: {
      alignItems: 'center',
      flexDirection: "row",
      marginHorizontal: 20,
      paddingVertical: 10,
      borderBottomWidth: 0.3,
      borderBottomColor: '#ddd'
    },
    content: {
      width: "100%",
      marginTop: 80,
      flex: 6,
    },
    textStyleContent: {
      flex: 1,
      color: "white",
    },
    linearGradient: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    titleHeader: {
      paddingTop: 30,
      marginBottom: 6,
    },
  });

  export default styles
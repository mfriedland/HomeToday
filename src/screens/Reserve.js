import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export class Reserve extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.apple}></View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Reserve your bed(s)</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            <Text style={styles.numberofBedsText}># of beds</Text>
            <View style={styles.row}>
              <TouchableHighlight style={styles.bedsButton}>
                <Text style={styles.bedsText}>1</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.bedsButton}>
                <Text style={styles.bedsText}>2</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.bedsButton}>
                <Text style={styles.bedsText}>3+</Text>
              </TouchableHighlight>
            </View>
          </View>
          <TextInput style={styles.inputBox}
            placeholder="Last Name"
            placeholderTextColor='lightgrey'
            onChangeText={text => this.setState({ firstName : text })}
          />
          <View style={styles.line} />
          <TextInput style={styles.inputBox}
            placeholder="Estimated Arrival Time"
            placeholderTextColor='lightgrey'
            onChangeText={text => {
              `${text} pm`
              this.setState({ firstName : `${text} pm` })}
            }
          />
          <View style={styles.line} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.reserveButton} onPress={()=>{}}>
            <Text style={styles.reserveButtonText}>Reserve</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  apple: {
    height: 24,
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
    backgroundColor: 'white'
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#f2f2f2',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
    color: '#232323'
  },
  numberofBedsText: {
    fontSize: 20.7,
    fontWeight: "normal",
    letterSpacing: 0,
    color: "#232323",
    marginRight: 30,
    marginLeft: 10,
  },
  bedsButton: {
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 10,
    backgroundColor: '#232323',
    width: 60,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bedsText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f2f2f2',
  },
  inputBox: {
    width: 300.3,
    height: 15.3,
    fontSize: 20.7,
    color: "#232323",
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    marginTop: 25,
    marginBottom: 10,
    paddingLeft: 20,
  },
  reserveButton: {
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 50,
    backgroundColor: '#232323',
  },
  reserveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  line: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    width: '80%',
  }
});

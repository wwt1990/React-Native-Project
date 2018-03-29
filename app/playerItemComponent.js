import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { List, ListItem } from 'react-native-elements';

const hotnessIcon = require('../assets/hotness.png');
const upIcon = require('../assets/upicon.png');
const downIcon = require('../assets/downicon.png');
const teamColor = '#8a8a8f';
const numberFont = 'Arial-BoldMT';
const numberSize = 15;

const styles = StyleSheet.create({
  playerItemContainer: {
    flexDirection: 'row',
    height: 68,
    width: 343,
    marginTop: 8,
    // backgroundColor: 'pink',
  },
  playerInfo: {
    flexDirection: 'row',
  },
  playerAvatar: {
    backgroundColor: '#e6e6e6',
    width: 36,
    height: 36,
    borderRadius: 18,
    marginTop: 16,
    marginLeft: 5,
  },
  playerText: {
    marginTop: 20,
    marginLeft: 10,
  },
  playerName: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 12,
    width: 119,
    height: 16,
  },
  playerTeam: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 10,
    color: teamColor,
    marginTop: 3,
  },
  hotnessContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hotnessIcon: {
    width: 11.3,
    height: 14,
  },
  hotnessValue: {
    fontFamily: numberFont,
    fontSize: numberSize,
    width: 55,
    height: 21,
    marginLeft: 3,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 70,
    height: 36,
    borderRadius:  4,
    marginTop: 16,
  },
  greenTrend: {
    backgroundColor: '#1dd760',
  },
  redTrend: {
    backgroundColor: '#fc2249',
  },
  trendIcon: {
    width: 11,
    height: 9,
    marginLeft: 6,
  },
  trendValue: {
    fontFamily: numberFont,
    fontSize: numberSize,
    width:51,
    height: 36,
    textAlign: 'center',
    color: 'white',
  },
});



class PlayerItemComponent extends Component {
  render() {
    const trendIcon = this.props.trendUp ? upIcon : downIcon;
    const trendBackground = this.props.trendUp ? styles.greenTrend : styles.redTrend;
    return (
      <View style={styles.playerItemContainer}>
        <View style={styles.playerInfo}>
          <Image style={styles.playerAvatar} source={this.props.avatar} />
          <View style={styles.playerText}>
            <Text style={styles.playerName}
                  numberOfLines={1}
                  elliosizeMode='tail'>
              {this.props.name}
            </Text>
            <Text style={styles.playerTeam}>
              {this.props.team}
            </Text>
          </View>
        </View>

        <View style={styles.hotnessContainer}>
          <Image style={styles.hotnessIcon} source={hotnessIcon} />
          <Text style={styles.hotnessValue}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
                minimunFontScale={0.2}>
            {this.props.hotness.toLocaleString()}
          </Text>
        </View>

        <View style={[styles.trendContainer, trendBackground]} >
          <Image style={styles.trendIcon} source={trendIcon} />
          <Text style={styles.trendValue}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
                minimunFontScale={0.2}>
            {this.props.trend.toLocaleString()}
          </Text>
        </View>
      </View>
    )
  }
}
export default PlayerItemComponent;
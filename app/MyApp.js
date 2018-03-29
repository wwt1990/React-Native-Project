import React, { Component } from "react";
import { View, FlatList, ListItem, StyleSheet } from "react-native";

import PlayerItemComponent from './playerItemComponent';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 25,
    borderColor: '#4b8fe2',
    borderRadius: 8,
    borderWidth: 5,
    alignItems: 'center',
  }
});


class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          avatar: require('../assets/james_harden.png'),
          name: 'James Harden',
          team: 'HOU',
          hotness: 1333,
          trendUp: false,
          trend: 1,
        }, {
          avatar: require('../assets/giannis_antetokounmpo.png'),
          name: 'Giannis Antetokounmpo',
          team: 'MIL',
          hotness: 10207,
          trendUp: true,
          trend: 8997,
        }, {
          avatar: require('../assets/harrison_barnes.png'),
          name: 'Harrison Barnes',
          team: 'DAL',
          hotness: 881,
          trendUp: true,
          trend: 1,
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList data={this.state.data}
                  keyExtractor={item => item.name}
                  renderItem={({ item }) => (
                    <PlayerItemComponent avatar={item.avatar}
                                         name={item.name}
                                         team={item.team}
                                         hotness={item.hotness}
                                         trendUp={item.trendUp}
                                         trend={item.trend}
                    />
                  )}
        />
      </View>
    )
  }
}

export default MyApp;
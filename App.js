import React, { Component } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { List, ListItem } from "react-native-elements";

import Content from './content';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 12,
    width: 119,
    height: 16,
  },
  subtitle:{
    fontFamily: 'AvenirNext-Regular',
    fontSize: 10,
  },
});



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          avatar: require('./assets/james_harden.png'),
          name: 'James Harden',
          team: 'HOU',
          hotness: 1333333333,
          trendUp: false,
          trend: 1,
        }, {
          avatar: require('./assets/giannis_antetokounmpo.png'),
          name: 'Giannis Antetokounmpo',
          team: 'MIL',
          hotness: 10207,
          trendUp: true,
          trend: 8997,
        }, {
          avatar: require('./assets/harrison_barnes.png'),
          name: 'Harrison Barnes',
          team: 'DAL',
          hotness: 881,
          trendUp: true,
          trend: 1,
        },
      ],
    };
  }


  render() {
    return (
      <View>
        <List>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <View style={{ marginLeft: 8, marginRight: 8, marginTop: 8 }}>
                <ListItem
                  style={{width: 343, height: 68}}
                  roundAvatar
                  avatar={item.avatar}
                  title={item.name}
                  titleStyle={styles.title}
                  subtitle={item.team}
                  subtitleStyle={styles.subtitle}
                  label={<Content hotness={item.hotness} trendUp={item.trendUp} trend={item.trend} />}
                  hideChevron={true}
                />
              </View>
            )}
          />
        </List>
      </View>
    );
  }
}

export default App;
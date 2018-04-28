import React from 'react';
import{ View, Text} from 'react-native';

const EventTile = ({ //argument that comes in is props
  event
}) => (
  <View>
      <Text>This is an event tile</Text>
      <Text>{event.name}</Text>
  </View>
);

export default EventTile;
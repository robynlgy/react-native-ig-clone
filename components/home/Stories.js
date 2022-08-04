import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { USERS } from '../../data/users';

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={story.user} style={styles.container}>
            <TouchableOpacity>
              <Image source={{ uri: story.image }} style={styles.story} />
            </TouchableOpacity>
            <Text style={styles.user}>
              {story.user.length > 9
                ? story.user.slice(0, 9) + '...'
                : story.user}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 85,
    height: 85,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#5dd39e',
  },

  user: {
    marginTop: 5,
    color: 'white',
  },

  container: {
    alignItems: 'center',
  },
});

export default Stories;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YouTube from 'react-youtube';

const Project = ({ title, description, videoId }) => {
  return (
    <View style={styles.projectContainer}>
      <View style={styles.videoContainer}>
        <YouTube
          videoId={videoId}
          style={styles.video}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.projectTitle}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  projectContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40, 
    marginLeft: 60, 
  },
  projectTitle: {
    fontSize: 23, 
    marginTop: 40,
    marginBottom: 20,
    color: '#F48474',
  },
  description: {
    fontSize: 18, 
    fontStyle: "italic",
    marginRight: 50,
    color: '#747474', 
  },
  videoContainer: {
    marginRight: 20, 
  },
  video: {
    alignSelf: 'stretch',
    aspectRatio: 16 / 9, // Aspect ratio for YouTube videos
    width: '100%', // Ensure the video takes up the full width
    height: 'auto', // Adjust height automatically based on aspect ratio
  },
  infoContainer: {
    flex: 2,
    marginLeft: 60, 
  },
});

export default Project;

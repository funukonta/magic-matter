import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Video">;

const DUMMY_VIDEO_URL =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoScreen({ route }: Props) {
  const userName = route.params?.userName ?? "Teman";
  const videoRef = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setIsPlaying(status.isPlaying);
    }
  };

  return (
    <View className="flex-1 bg-[#F0F4FF]">
      {/* Header */}
      <View className="bg-[#00C9A7] px-6 pt-10 pb-5">
        <Text className="text-white text-xl font-bold">🎬 Video Pembelajaran</Text>
        <Text className="text-white/80 text-sm mt-1">
          Halo {userName}, tonton video berikut ya!
        </Text>
      </View>

      <View className="flex-1 px-4 pt-6">
        {/* Video Player */}
        <View className="bg-black rounded-2xl overflow-hidden mb-4">
          <Video
            ref={videoRef}
            source={{ uri: DUMMY_VIDEO_URL }}
            style={styles.video}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
          />
        </View>

        {/* Video Info */}
        <View className="bg-white rounded-2xl p-4 mb-4">
          <Text className="text-base font-bold text-gray-800 mb-1">
            📺 Perubahan Wujud Benda
          </Text>
          <Text className="text-sm text-gray-500">
            Video pembelajaran tentang perubahan wujud benda: mencair, membeku,
            menguap, mengembun, dan menyublim.
          </Text>
        </View>

        {/* Controls */}
        <View className="flex-row justify-center">
          <TouchableOpacity
            className="bg-[#00C9A7] rounded-xl px-6 py-3 mx-2"
            onPress={() => {
              if (isPlaying) {
                videoRef.current?.pauseAsync();
              } else {
                videoRef.current?.playAsync();
              }
            }}
          >
            <Text className="text-white font-bold">
              {isPlaying ? "⏸ Pause" : "▶️ Play"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-gray-200 rounded-xl px-6 py-3 mx-2"
            onPress={() => {
              videoRef.current?.replayAsync();
            }}
          >
            <Text className="text-gray-700 font-bold">🔄 Ulang</Text>
          </TouchableOpacity>
        </View>

        {/* Note */}
        <View className="bg-yellow-50 rounded-xl p-3 mt-4 mx-2">
          <Text className="text-xs text-yellow-700 text-center">
            💡 Tip: Tonton video sampai selesai untuk memahami materi dengan baik!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
});

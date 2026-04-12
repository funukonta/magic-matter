import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Result">;

export default function ResultScreen({ navigation, route }: Props) {
  const { userName, score, stars, totalLevels, result } = route.params;

  const getGrade = () => {
    if (stars === totalLevels)
      return { emoji: "🏆", text: "SEMPURNA!", color: "#FFD93D" };
    if (stars >= totalLevels * 0.8)
      return { emoji: "🌟", text: "Luar Biasa!", color: "#00C9A7" };
    if (stars >= totalLevels * 0.6)
      return { emoji: "👏", text: "Bagus Sekali!", color: "#6C63FF" };
    return { emoji: "💪", text: "Ayo Coba Lagi!", color: "#FF6584" };
  };

  const grade = getGrade();

  return (
    <ScrollView className="flex-1 bg-[#F0F4FF]">
      <View className="items-center px-6 pt-16 pb-8">
        {/* Trophy */}
        <Text className="text-7xl mb-4">{grade.emoji}</Text>

        <Text
          className="text-3xl font-bold text-center mb-2"
          style={{ color: grade.color }}
        >
          {grade.text}
        </Text>

        <Text className="text-base text-gray-500 text-center mb-8">
          Selamat {userName}! Kamu sudah menyelesaikan{"\n"}Petualangan Si Wujud
          Ajaib!
        </Text>

        {/* Score Card */}
        <View className="bg-white rounded-3xl p-6 w-full mb-6">
          <Text className="text-center text-gray-400 font-semibold text-xs mb-4 uppercase tracking-wider">
            Hasil Petualanganmu
          </Text>

          <View className="flex-row justify-around mb-4">
            <View className="items-center">
              <Text className="text-4xl mb-1">⭐</Text>
              <Text className="text-2xl font-bold text-[#FFD93D]">
                {stars}/{totalLevels}
              </Text>
              <Text className="text-xs text-gray-400">Bintang</Text>
            </View>
            <View className="items-center">
              <Text className="text-4xl mb-1">🏆</Text>
              <Text className="text-2xl font-bold text-[#6C63FF]">{score}</Text>
              <Text className="text-xs text-gray-400">Total Skor</Text>
            </View>
          </View>

          {/* Stars display */}
          <View className="flex-row justify-center mt-2">
            {Array.from({ length: totalLevels }).map((_, i) => (
              <Text key={i} className="text-3xl mx-1">
                {i < stars ? "⭐" : "☆"}
              </Text>
            ))}
          </View>
        </View>

        {/* Level Summary */}
        <View className="bg-white rounded-2xl p-4 w-full mb-6">
          <Text className="font-bold text-gray-700 mb-3">
            📋 Ringkasan Level:
          </Text>
          {result.map((gameResult, i) => (
            <View
              key={i}
              className="flex-row items-center py-2 border-b border-gray-100"
            >
              <Text className="text-lg mr-2">
                {gameResult.isCorrect ? "✅" : "❌"}
              </Text>
              <Text className="text-sm text-gray-600 flex-1">
                Level {i + 1}: {gameResult.levelTransformation}
              </Text>
            </View>
          ))}
        </View>

        {/* Buttons */}
        <TouchableOpacity
          className="bg-[#6C63FF] rounded-xl py-4 w-full items-center mb-3"
          onPress={() => navigation.replace("Game", { userName })}
        >
          <Text className="text-white font-bold text-base">🔄 Main Lagi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white rounded-xl py-4 w-full items-center border-2 border-[#6C63FF]"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="text-[#6C63FF] font-bold text-base">
            🏠 Kembali ke Menu
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { gameLevels, LevelData } from "../data/gameData";

type Props = NativeStackScreenProps<RootStackParamList, "Game">;

const { width } = Dimensions.get("window");

export default function GameScreen({ navigation, route }: Props) {
  const userName = route.params?.userName ?? "Teman";
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showCorrectModal, setShowCorrectModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [results, setResults] = useState<
    { levelTransformation: string; isCorrect: boolean }[]
  >([]);

  const level: LevelData = gameLevels[currentLevel];

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleAnswer = (answerId: string) => {
    setSelectedAnswer(answerId);
    animateButton();

    if (answerId === level.correctAnswer) {
      const pointsEarned = 20;
      setScore((prev) => prev + pointsEarned);
      setStars((prev) => prev + 1);
      addGameResult(true);
      setShowCorrectModal(true);
    } else {
      addGameResult(false);
      setShowModal(true);
    }
  };

  const handleNextLevel = () => {
    setShowCorrectModal(false);
    setSelectedAnswer(null);

    goToNext();
  };

  const handleRetry = () => {
    setShowModal(false);
    setSelectedAnswer(null);

    goToNext();
  };

  const addGameResult = (isCorrect: boolean) => {
    setResults((prev) => [
      ...prev,
      { levelTransformation: level.transformation, isCorrect },
    ]);
  };

  const goToNext = () => {
    if (currentLevel < gameLevels.length - 1) {
      setCurrentLevel((prev) => prev + 1);
    } else {
      navigation.replace("Result", {
        userName,
        score,
        stars,
        totalLevels: gameLevels.length,
        result: results,
      });
    }
  };

  const progressPercent = ((currentLevel + 1) / gameLevels.length) * 100;

  return (
    <View className="flex-1 bg-[#F0F4FF]">
      {/* Header */}
      <View className="bg-[#6C63FF] px-6 pt-10 pb-5">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white text-lg font-bold">
              🎮 {level.world}
            </Text>
            <Text className="text-white/70 text-xs mt-1">
              Petualangan Si Wujud Ajaib
            </Text>
          </View>
          <View className="flex-row items-center">
            <View className="bg-white/20 rounded-full px-3 py-1 mr-2">
              <Text className="text-white font-bold text-sm">⭐ {stars}</Text>
            </View>
            <View className="bg-white/20 rounded-full px-3 py-1">
              <Text className="text-white font-bold text-sm">🏆 {score}</Text>
            </View>
          </View>
        </View>

        {/* Progress Bar */}
        <View className="mt-3 bg-white/20 rounded-full h-2">
          <View
            className="bg-[#FFD93D] rounded-full h-2"
            style={{ width: `${progressPercent}%` }}
          />
        </View>
        <Text className="text-white/60 text-xs mt-1">
          Level {currentLevel + 1} dari {gameLevels.length}
        </Text>
      </View>

      {/* Game Content */}
      <View className="flex-1 px-5 pt-6">
        {/* Level description */}
        <View className="bg-white rounded-2xl p-4 mb-4">
          <Text className="text-5xl text-center mb-2">{level.emoji}</Text>
          <Text className="text-sm text-gray-500 text-center">
            {level.description}
          </Text>
        </View>

        {/* Question */}
        <View className="bg-[#6C63FF] rounded-2xl p-4 mb-4">
          <Text className="text-white font-bold text-base text-center">
            ❓ {level.question}
          </Text>
        </View>

        {/* Options */}
        <View>
          {level.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            return (
              <Animated.View
                key={option.id}
                style={isSelected ? { transform: [{ scale: scaleAnim }] } : {}}
              >
                <TouchableOpacity
                  className={`bg-white rounded-2xl p-4 mb-3 flex-row items-center border-2 ${
                    isSelected ? "border-[#6C63FF]" : "border-transparent"
                  }`}
                  onPress={() => handleAnswer(option.id)}
                  disabled={selectedAnswer !== null}
                  activeOpacity={0.7}
                >
                  <Text className="text-2xl mr-3">{option.emoji}</Text>
                  <Text className="text-gray-800 font-medium flex-1 text-sm">
                    {option.text}
                  </Text>
                  <View
                    className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
                      isSelected
                        ? "border-[#6C63FF] bg-[#6C63FF]"
                        : "border-gray-300"
                    }`}
                  >
                    {isSelected && (
                      <Text className="text-white text-xs">✓</Text>
                    )}
                  </View>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>
      </View>

      {/* Wrong Answer Modal */}
      <Modal visible={showModal} transparent animationType="fade">
        <View className="flex-1 bg-black/50 justify-center items-center px-6">
          <View className="bg-white rounded-3xl p-6 w-full">
            <Text className="text-5xl text-center mb-3">😅</Text>
            <Text className="text-xl font-bold text-[#FF6584] text-center mb-2">
              Oops, Kurang Tepat!
            </Text>
            <Text className="text-gray-600 text-sm text-center mb-4 leading-5">
              {level.explanation}
            </Text>
            <View className="bg-[#F0F4FF] rounded-xl p-3 mb-4">
              <Text className="text-xs text-center text-[#6C63FF] font-semibold">
                💡 {level.changeType}
              </Text>
            </View>
            <TouchableOpacity
              className="bg-[#6C63FF] rounded-xl py-4 items-center"
              onPress={handleRetry}
            >
              <Text className="text-white font-bold text-base">
                {currentLevel < gameLevels.length - 1
                  ? "➡️ Level Selanjutnya"
                  : "🏆 Lihat Hasil"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Correct Answer Modal */}
      <Modal visible={showCorrectModal} transparent animationType="fade">
        <View className="flex-1 bg-black/50 justify-center items-center px-6">
          <View className="bg-white rounded-3xl p-6 w-full">
            <Text className="text-5xl text-center mb-3">🎉</Text>
            <Text className="text-xl font-bold text-[#00C9A7] text-center mb-2">
              Benar! Hebat!
            </Text>
            <Text className="text-gray-600 text-sm text-center mb-4 leading-5">
              {level.explanation}
            </Text>
            <View className="bg-[#F0F4FF] rounded-xl p-3 mb-4">
              <Text className="text-center">
                <Text className="text-[#FFD93D] text-lg">⭐</Text>
                <Text className="text-sm text-gray-600 font-semibold">
                  {" "}
                  +20 poin!
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              className="bg-[#00C9A7] rounded-xl py-4 items-center"
              onPress={handleNextLevel}
            >
              <Text className="text-white font-bold text-base">
                {currentLevel < gameLevels.length - 1
                  ? "➡️ Level Selanjutnya"
                  : "🏆 Lihat Hasil"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

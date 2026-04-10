import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const menuItems = [
  { id: "Materi", label: "Materi", emoji: "📖", color: "#FF6B6B" },
  { id: "Game", label: "Game", emoji: "🎮", color: "#6C63FF" },
  { id: "Video", label: "Video", emoji: "🎬", color: "#00C9A7" },
  { id: "Rangkuman", label: "Rangkuman", emoji: "📝", color: "#FFD93D" },
  { id: "CPTP", label: "CP & TP", emoji: "🎯", color: "#FF6584" },
  { id: "TimPengembang", label: "Tim Pengembang", emoji: "👨‍💻", color: "#6EC1E4" },
] as const;

export default function HomeScreen({ navigation }: Props) {
  const [name, setName] = useState("");

  const handleNavigate = (screen: keyof RootStackParamList) => {
    if (screen === "Home") return;
    navigation.navigate(screen as any, { userName: name || "Teman" } as any);
  };

  return (
    <ScrollView className="flex-1 bg-[#F0F4FF]">
      <StatusBar barStyle="dark-content" backgroundColor="#F0F4FF" />
      <View className="items-center px-6 pt-12 pb-6">
        {/* Header */}
        <Text className="text-4xl mb-2">✨🔮✨</Text>
        <Text className="text-2xl font-bold text-[#6C63FF] text-center">
          Magic Matter
        </Text>
        <Text className="text-base text-gray-500 text-center mt-1">
          Dunia Perubahan Benda
        </Text>

        {/* Name Input */}
        <View className="w-full mt-6 bg-white rounded-2xl p-4 shadow-sm">
          <Text className="text-sm font-semibold text-gray-600 mb-2">
            👋 Siapa namamu?
          </Text>
          <TextInput
            className="bg-[#F0F4FF] rounded-xl px-4 py-3 text-base text-gray-800"
            placeholder="Ketik namamu di sini..."
            placeholderTextColor="#A0AEC0"
            value={name}
            onChangeText={setName}
          />
        </View>

        {name.length > 0 && (
          <Text className="text-base text-[#6C63FF] font-semibold mt-3">
            Halo, {name}! 🎉 Ayo mulai belajar!
          </Text>
        )}

        {/* Menu Grid */}
        <View className="w-full mt-6 flex-row flex-wrap justify-between">
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="w-[48%] rounded-2xl p-5 items-center mb-4"
              style={{ backgroundColor: item.color }}
              onPress={() => handleNavigate(item.id as keyof RootStackParamList)}
              activeOpacity={0.8}
            >
              <Text className="text-4xl mb-2">{item.emoji}</Text>
              <Text className="text-white font-bold text-base">
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer */}
        <Text className="text-xs text-gray-400 mt-4 text-center">
          Media Pembelajaran IPAS - Perubahan Wujud Benda
        </Text>
      </View>
    </ScrollView>
  );
}

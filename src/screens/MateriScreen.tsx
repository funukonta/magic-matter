import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { wujudBenda, perubahanWujud } from "../data/materi";

type Props = NativeStackScreenProps<RootStackParamList, "Materi">;

export default function MateriScreen({ route }: Props) {
  const [activeTab, setActiveTab] = useState<"wujud" | "perubahan">("wujud");
  const userName = route.params?.userName ?? "Teman";

  return (
    <View className="flex-1 bg-[#F0F4FF]">
      {/* Header */}
      <View className="bg-[#6C63FF] px-6 pt-10 pb-5 rounded-b-3xl">
        <Text className="text-white text-xl font-bold">📖 Materi</Text>
        <Text className="text-white/80 text-sm mt-1">
          Halo {userName}, yuk belajar tentang wujud benda!
        </Text>
      </View>

      {/* Tab Buttons */}
      <View className="flex-row mx-4 mt-4 bg-white rounded-xl p-1">
        <TouchableOpacity
          className={`flex-1 py-3 rounded-lg items-center ${
            activeTab === "wujud" ? "bg-[#6C63FF]" : ""
          }`}
          onPress={() => setActiveTab("wujud")}
        >
          <Text
            className={`font-bold ${
              activeTab === "wujud" ? "text-white" : "text-gray-500"
            }`}
          >
            🧱 Wujud Benda
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 py-3 rounded-lg items-center ${
            activeTab === "perubahan" ? "bg-[#6C63FF]" : ""
          }`}
          onPress={() => setActiveTab("perubahan")}
        >
          <Text
            className={`font-bold ${
              activeTab === "perubahan" ? "text-white" : "text-gray-500"
            }`}
          >
            🔄 Perubahan Wujud
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 mt-4" showsVerticalScrollIndicator={false}>
        {/* Intro */}
        <View className="bg-white rounded-2xl p-4 mb-4">
          <Text className="text-sm text-gray-600 leading-5">
            <Text className="font-bold text-[#6C63FF]">Tahukah kamu? </Text>
            Perubahan wujud benda adalah perubahan bentuk suatu benda dari satu
            wujud ke wujud lainnya, tanpa mengubah jenis bendanya. 🤓
          </Text>
        </View>

        {activeTab === "wujud" ? (
          <>
            {wujudBenda.map((item) => (
              <View
                key={item.id}
                className="bg-white rounded-2xl p-5 mb-4 border-l-4"
                style={{ borderLeftColor: item.color }}
              >
                <Text className="text-3xl mb-2">{item.emoji}</Text>
                <Text
                  className="text-lg font-bold mb-1"
                  style={{ color: item.color }}
                >
                  {item.title}
                </Text>
                <Text className="text-gray-600 text-sm mb-2">
                  {item.description}
                </Text>
                <View className="bg-[#F0F4FF] rounded-xl p-3 mt-1">
                  <Text className="text-xs font-semibold text-gray-500 mb-1">
                    📌 Ciri-ciri:
                  </Text>
                  <Text className="text-sm text-gray-700">
                    {item.characteristics}
                  </Text>
                </View>
                <View className="mt-3">
                  <Text className="text-xs font-semibold text-gray-500 mb-1">
                    💡 Contoh:
                  </Text>
                  <View className="flex-row flex-wrap">
                    {item.examples.map((ex, i) => (
                      <View
                        key={i}
                        className="bg-[#F0F4FF] rounded-lg px-3 py-1 mr-2 mb-1"
                      >
                        <Text className="text-sm">{ex}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            ))}
          </>
        ) : (
          <>
            {perubahanWujud.map((item) => (
              <View
                key={item.id}
                className="bg-white rounded-2xl p-5 mb-4 border-l-4"
                style={{ borderLeftColor: item.color }}
              >
                <Text className="text-3xl mb-2">{item.emoji}</Text>
                <Text
                  className="text-lg font-bold mb-1"
                  style={{ color: item.color }}
                >
                  {item.title}
                </Text>
                <View className="flex-row mb-2">
                  <View className="bg-[#F0F4FF] rounded-lg px-3 py-1 mr-2">
                    <Text className="text-xs text-gray-600">
                      Dari: <Text className="font-bold">{item.from}</Text>
                    </Text>
                  </View>
                  <Text className="self-center">➡️</Text>
                  <View className="bg-[#F0F4FF] rounded-lg px-3 py-1 ml-2">
                    <Text className="text-xs text-gray-600">
                      Ke: <Text className="font-bold">{item.to}</Text>
                    </Text>
                  </View>
                </View>
                <Text className="text-gray-600 text-sm mb-2">
                  {item.description}
                </Text>
                <View className="bg-yellow-50 rounded-xl p-3 mt-1">
                  <Text className="text-xs font-semibold text-yellow-700">
                    🔍 Contoh:
                  </Text>
                  <Text className="text-sm text-gray-700 mt-1">
                    {item.example}
                  </Text>
                </View>
              </View>
            ))}
          </>
        )}

        <View className="h-8" />
      </ScrollView>
    </View>
  );
}

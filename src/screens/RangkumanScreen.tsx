import React from "react";
import { View, Text, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Rangkuman">;

export default function RangkumanScreen({ route }: Props) {
  const userName = route.params?.userName ?? "Teman";

  return (
    <View className="flex-1 bg-[#F0F4FF]">
      {/* Header */}
      <View className="bg-[#FFD93D] px-6 pt-10 pb-5">
        <Text className="text-gray-800 text-xl font-bold">📝 Rangkuman</Text>
        <Text className="text-gray-700/80 text-sm mt-1">
          Kesimpulan materi untuk {userName}
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6" showsVerticalScrollIndicator={false}>
        {/* Greeting */}
        <View className="bg-white rounded-2xl p-5 mb-4">
          <Text className="text-3xl text-center mb-3">🎉</Text>
          <Text className="text-base text-gray-700 leading-6 text-center">
            Nah, bagaimana teman-teman? Seru bukan belajar tentang perubahan
            wujud benda? Yuk kita rangkum apa yang sudah kita pelajari!
          </Text>
        </View>

        {/* Key Points */}
        <View className="bg-white rounded-2xl p-5 mb-4">
          <Text className="text-base font-bold text-[#6C63FF] mb-3">
            🔑 Poin-poin Penting:
          </Text>

          {[
            {
              emoji: "🌡️",
              text: "Perubahan wujud benda terjadi karena perubahan suhu (panas atau dingin).",
            },
            {
              emoji: "🧊",
              text: "Mencair: Padat → Cair (contoh: es batu menjadi air karena dipanaskan).",
            },
            {
              emoji: "❄️",
              text: "Membeku: Cair → Padat (contoh: air menjadi es di dalam freezer).",
            },
            {
              emoji: "♨️",
              text: "Menguap: Cair → Gas (contoh: air mendidih menjadi uap air).",
            },
            {
              emoji: "💧",
              text: "Mengembun: Gas → Cair (contoh: uap air menjadi titik air di gelas dingin).",
            },
            {
              emoji: "✨",
              text: "Menyublim: Padat → Gas (contoh: kapur barus yang lama-lama habis).",
            },
          ].map((item, i) => (
            <View key={i} className="flex-row mb-3">
              <Text className="text-lg mr-3">{item.emoji}</Text>
              <Text className="flex-1 text-sm text-gray-600 leading-5">
                {item.text}
              </Text>
            </View>
          ))}
        </View>

        {/* Rain Cycle */}
        <View className="bg-blue-50 rounded-2xl p-5 mb-4">
          <Text className="text-base font-bold text-blue-700 mb-2">
            🌧️ Contoh dalam Kehidupan: Siklus Hujan
          </Text>
          <Text className="text-sm text-gray-600 leading-5">
            Tahukah kamu? Hujan adalah contoh nyata perubahan wujud benda!{"\n\n"}
            1️⃣ Air di laut, sungai, dan danau{" "}
            <Text className="font-bold">menguap</Text> karena panas matahari.
            {"\n"}
            2️⃣ Uap air naik ke atas dan bertemu udara dingin, lalu{" "}
            <Text className="font-bold">mengembun</Text> menjadi awan.{"\n"}
            3️⃣ Awan yang penuh air akan turun sebagai hujan.{"\n"}
            4️⃣ Siklus ini terus berulang!
          </Text>
          <Text className="text-center mt-3 text-2xl">
            ☀️ → 💧 → ☁️ → 🌧️ → 🔄
          </Text>
        </View>

        {/* Closing */}
        <View className="bg-[#6C63FF] rounded-2xl p-5 mb-8">
          <Text className="text-white text-center text-sm leading-5">
            Perubahan wujud benda adalah proses alami yang terjadi di sekitar
            kita setiap hari. Dengan memahami konsep ini, kita bisa lebih
            menghargai fenomena alam! 🌍✨
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

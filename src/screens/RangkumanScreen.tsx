import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Rangkuman">;

// ─── Cycle Diagram Component ─────────────────────────────────────────────────
function CycleDiagram() {
  const changes = [
    {
      label: "Mencair",
      from: "PADAT",
      to: "CAIR",
      emoji: "🧊→💧",
      bg: "#FF6B6B",
    },
    {
      label: "Membeku",
      from: "CAIR",
      to: "PADAT",
      emoji: "💧→🧊",
      bg: "#6EC1E4",
    },
    {
      label: "Menguap",
      from: "CAIR",
      to: "GAS",
      emoji: "💧→💨",
      bg: "#FF9F43",
    },
    {
      label: "Mengembun",
      from: "GAS",
      to: "CAIR",
      emoji: "💨→💧",
      bg: "#26de81",
    },
    {
      label: "Menyublim",
      from: "PADAT",
      to: "GAS",
      emoji: "🪨→💨",
      bg: "#6C63FF",
    },
    {
      label: "Mengkristal",
      from: "GAS",
      to: "PADAT",
      emoji: "💨→🪨",
      bg: "#fd79a8",
    },
  ];

  return (
    <View className="bg-white rounded-2xl p-5 mb-4">
      <Text className="text-base font-bold text-[#6C63FF] mb-4 text-center">
        🔄 Diagram Perubahan Wujud
      </Text>

      {/* 3 state boxes */}
      <View className="flex-row justify-around mb-5">
        {[
          { label: "PADAT", emoji: "🪨", color: "#FF6B6B" },
          { label: "CAIR", emoji: "💧", color: "#4ECDC4" },
          { label: "GAS", emoji: "💨", color: "#A78BFA" },
        ].map((s) => (
          <View
            key={s.label}
            className="items-center rounded-2xl px-4 py-3 w-[30%]"
            style={{
              backgroundColor: s.color + "20",
              borderWidth: 2,
              borderColor: s.color,
            }}
          >
            <Text className="text-3xl">{s.emoji}</Text>
            <Text className="text-xs font-bold mt-1" style={{ color: s.color }}>
              {s.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Change cards grid */}
      <View className="flex-row flex-wrap justify-between gap-y-2">
        {changes.map((c) => (
          <View
            key={c.label}
            className="rounded-xl p-3 w-[48%]"
            style={{
              backgroundColor: c.bg + "18",
              borderLeftWidth: 3,
              borderLeftColor: c.bg,
            }}
          >
            <Text className="text-base mb-1">{c.emoji}</Text>
            <Text className="text-sm font-bold" style={{ color: c.bg }}>
              {c.label}
            </Text>
            <Text className="text-xs text-gray-500">
              {c.from} → {c.to}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function RangkumanScreen({ route, navigation }: Props) {
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

      <ScrollView
        className="flex-1 px-4 pt-6"
        showsVerticalScrollIndicator={false}
      >
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
            Tahukah kamu? Hujan adalah contoh nyata perubahan wujud benda!
            {"\n\n"}
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

        {/* Cycle Diagram */}
        <CycleDiagram />

        {/* Closing */}
        <View className="bg-[#6C63FF] rounded-2xl p-5 mb-4">
          <Text className="text-white text-center text-sm leading-5">
            Perubahan wujud benda adalah proses alami yang terjadi di sekitar
            kita setiap hari. Dengan memahami konsep ini, kita bisa lebih
            menghargai fenomena alam! 🌍✨
          </Text>
        </View>

        {/* CTA */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Game", { userName })}
          className="rounded-2xl py-4 items-center mb-8"
          style={{ backgroundColor: "#6C63FF" }}
          activeOpacity={0.85}
        >
          <Text className="text-white font-bold text-base">
            🎮 Mulai Kuis Sekarang!
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

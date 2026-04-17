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
  {
    id: "SlideViewer",
    label: "Presentasi",
    description: "Lihat slide materi",
    emoji: "🎞️",
    bg: "#6C63FF",
  },
  {
    id: "Materi",
    label: "Materi",
    description: "Baca materi lengkap",
    emoji: "📖",
    bg: "#FF6B6B",
  },
  {
    id: "Game",
    label: "Kuis",
    description: "Uji pengetahuanmu",
    emoji: "🎮",
    bg: "#00C9A7",
  },
  {
    id: "Video",
    label: "Video",
    description: "Tonton video belajar",
    emoji: "🎬",
    bg: "#FF9F43",
  },
  {
    id: "Rangkuman",
    label: "Rangkuman",
    description: "Ringkasan materi",
    emoji: "📝",
    bg: "#FFD93D",
  },
  {
    id: "CPTP",
    label: "CP & TP",
    description: "Capaian pembelajaran",
    emoji: "🎯",
    bg: "#FF6584",
  },
  {
    id: "TimPengembang",
    label: "Tim",
    description: "Kenalan dengan kami",
    emoji: "👥",
    bg: "#6EC1E4",
  },
] as const;

export default function HomeScreen({ navigation }: Props) {
  const [name, setName] = useState("");

  const handleNavigate = (screen: string) => {
    if (screen === "Home") return;
    navigation.navigate(screen as any, { userName: name || "Teman" } as any);
  };

  return (
    <View className="flex-1 bg-[#F0F4FF]">
      <StatusBar barStyle="light-content" backgroundColor="#6C63FF" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ── Hero Cover (Canva-style) ────────────────────────── */}
        <View
          className="px-6 pt-14 pb-10 items-center"
          style={{
            backgroundColor: "#6C63FF",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          {/* Floating badge */}
          <View
            className="px-4 py-1 rounded-full mb-5"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <Text className="text-white text-xs font-semibold tracking-widest uppercase">
              IPAS · Kelas 3 SD
            </Text>
          </View>

          {/* Big emoji constellation */}
          <View className="flex-row items-center mb-2">
            <Text className="text-5xl">🪨</Text>
            <Text className="text-7xl mx-2">🔮</Text>
            <Text className="text-5xl">💧</Text>
          </View>
          <Text className="text-4xl">💨</Text>

          {/* Title */}
          <Text className="text-4xl font-bold text-white text-center mt-4 leading-tight">
            Wujud Benda
          </Text>
          <Text className="text-lg text-white/80 text-center mt-1">
            Magic Matter
          </Text>
          <Text className="text-sm text-white/60 text-center mt-2 leading-5">
            Pelajari perubahan wujud benda dengan cara{"\n"}yang menyenangkan!
          </Text>

          {/* Name input card */}
          <View className="w-full mt-8 bg-white rounded-2xl p-4">
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
            {name.length > 0 && (
              <Text className="text-sm text-[#6C63FF] font-semibold mt-2">
                Halo, {name}! 🎉 Ayo mulai belajar!
              </Text>
            )}
          </View>

          {/* Primary CTA */}
          <TouchableOpacity
            onPress={() => handleNavigate("SlideViewer")}
            className="w-full rounded-2xl py-4 mt-4 items-center"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            activeOpacity={0.8}
          >
            <Text className="text-white font-bold text-base">
              🎞️ Mulai Presentasi →
            </Text>
          </TouchableOpacity>
        </View>

        {/* ── Menu Grid ──────────────────────────────────────────── */}
        <View className="px-5 pt-6 pb-10">
          <Text className="text-base font-bold text-gray-700 mb-4">
            Menu Belajar
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="mb-4 rounded-2xl p-4 items-center"
                style={{
                  width: "48%",
                  backgroundColor: item.bg,
                  shadowColor: item.bg,
                  shadowOpacity: 0.3,
                  shadowRadius: 8,
                  shadowOffset: { width: 0, height: 4 },
                  elevation: 4,
                }}
                onPress={() => handleNavigate(item.id)}
                activeOpacity={0.85}
              >
                <Text className="text-4xl mb-2">{item.emoji}</Text>
                <Text className="text-white font-bold text-base text-center">
                  {item.label}
                </Text>
                <Text className="text-white/70 text-xs text-center mt-0.5">
                  {item.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Footer tag */}
          <Text className="text-xs text-gray-400 text-center mt-2">
            Media Pembelajaran IPAS · Perubahan Wujud Benda
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

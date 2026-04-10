import React from "react";
import { View, Text, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "TimPengembang">;

interface TeamMember {
  name: string;
  role: string;
  emoji: string;
  color: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Aulia Luthfi Dewi Pramesta",
    role: "Pengembang Konten",
    emoji: "👩‍💻",
    color: "#FF6B6B",
  },
  {
    name: "Tutik Ernawati",
    role: "Pengembang Konten",
    emoji: "👩‍🏫",
    color: "#6C63FF",
  },
  {
    name: "Erwin Ardianzah",
    role: "Pengembang Konten",
    emoji: "👨‍💻",
    color: "#00C9A7",
  },
  {
    name: "Prof. Dr. Ambarwati, M.Si",
    role: "Pembimbing",
    emoji: "👩‍🔬",
    color: "#FFD93D",
  },
  {
    name: "Dr. Anatri Desstya, M.Pd",
    role: "Pembimbing",
    emoji: "👩‍🎓",
    color: "#FF6584",
  },
];

export default function TimPengembangScreen({ route }: Props) {
  const userName = route.params?.userName ?? "Teman";

  return (
    <View className="flex-1 bg-[#F0F4FF]">
      {/* Header */}
      <View className="bg-[#6EC1E4] px-6 pt-10 pb-5">
        <Text className="text-white text-xl font-bold">
          👨‍💻 Tim Pengembang
        </Text>
        <Text className="text-white/80 text-sm mt-1">
          Kenalan dengan pembuat aplikasi ini, {userName}!
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6" showsVerticalScrollIndicator={false}>
        {/* Team Logo */}
        <View className="items-center mb-6">
          <Text className="text-5xl mb-2">🔮</Text>
          <Text className="text-lg font-bold text-[#6C63FF]">
            Magic Matter Team
          </Text>
          <Text className="text-xs text-gray-400 mt-1">
            Dunia Perubahan Benda
          </Text>
        </View>

        {/* Team Members */}
        {teamMembers.map((member, index) => (
          <View
            key={index}
            className="bg-white rounded-2xl p-4 mb-3 flex-row items-center border-l-4"
            style={{ borderLeftColor: member.color }}
          >
            <View
              className="w-14 h-14 rounded-full items-center justify-center mr-4"
              style={{ backgroundColor: member.color + "20" }}
            >
              <Text className="text-3xl">{member.emoji}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-gray-800">
                {member.name}
              </Text>
              <Text className="text-xs text-gray-400 mt-1">{member.role}</Text>
            </View>
          </View>
        ))}

        {/* Thanks */}
        <View className="bg-[#6C63FF] rounded-2xl p-5 mt-4 mb-8">
          <Text className="text-white text-center text-sm leading-5">
            Terima kasih telah menggunakan aplikasi Magic Matter! 🙏{"\n"}
            Semoga pembelajaran ini bermanfaat untuk adik-adik semua! ✨
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

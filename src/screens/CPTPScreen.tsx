import React from "react";
import { View, Text, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "CPTP">;

export default function CPTPScreen({ route }: Props) {
  const userName = route.params?.userName ?? "Teman";

  return (
    <View className="flex-1 bg-[#F0F4FF]">
      {/* Header */}
      <View className="bg-[#FF6584] px-6 pt-10 pb-5">
        <Text className="text-white text-xl font-bold">
          🎯 Capaian & Tujuan Pembelajaran
        </Text>
        <Text className="text-white/80 text-sm mt-1">
          Yuk kenali target belajar kita, {userName}!
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6" showsVerticalScrollIndicator={false}>
        {/* CP Section */}
        <View className="bg-white rounded-2xl p-5 mb-4 border-l-4 border-[#FF6584]">
          <View className="flex-row items-center mb-3">
            <Text className="text-3xl mr-2">📋</Text>
            <Text className="text-lg font-bold text-[#FF6584]">
              Capaian Pembelajaran (CP)
            </Text>
          </View>
          <View className="bg-pink-50 rounded-xl p-4">
            <Text className="text-sm text-gray-700 leading-5">
              Peserta didik mampu mengidentifikasi proses perubahan wujud zat dan
              bentuk energi serta mengaitkannya dengan fenomena alam dan
              kehidupan sehari-hari.
            </Text>
          </View>
        </View>

        {/* TP Section */}
        <View className="bg-white rounded-2xl p-5 mb-4 border-l-4 border-[#6C63FF]">
          <View className="flex-row items-center mb-3">
            <Text className="text-3xl mr-2">🎯</Text>
            <Text className="text-lg font-bold text-[#6C63FF]">
              Tujuan Pembelajaran (TP)
            </Text>
          </View>

          {[
            {
              num: "1",
              text: "Mengenali karakteristik tiga wujud benda (padat, cair, dan gas) melalui pengamatan sifat-sifatnya.",
              emoji: "🔍",
            },
            {
              num: "2",
              text: "Mendeskripsikan proses perubahan wujud benda (mencair, membeku, menguap, mengembun, menyublim) dan faktor penyebabnya.",
              emoji: "📝",
            },
            {
              num: "3",
              text: "Mengidentifikasi contoh-contoh perubahan wujud benda yang terjadi dalam kehidupan sehari-hari.",
              emoji: "🌍",
            },
          ].map((item) => (
            <View
              key={item.num}
              className="bg-[#F0F4FF] rounded-xl p-4 mb-3 flex-row"
            >
              <View className="bg-[#6C63FF] w-7 h-7 rounded-full items-center justify-center mr-3 mt-0.5">
                <Text className="text-white font-bold text-xs">
                  {item.num}
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm text-gray-700 leading-5">
                  {item.emoji} {item.text}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Info Box */}
        <View className="bg-green-50 rounded-2xl p-4 mb-8">
          <Text className="text-xs text-green-700 text-center leading-4">
            💡 Dengan mempelajari materi ini, kamu akan memahami bagaimana benda
            di sekitarmu bisa berubah wujud dan mengapa hal itu terjadi!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

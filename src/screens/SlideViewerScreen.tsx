import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ViewToken,
  Animated,
} from "react-native";
import * as Haptics from "expo-haptics";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { slides, Slide } from "../data/slides";

type Props = NativeStackScreenProps<RootStackParamList, "SlideViewer">;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// ─── Animated wrapper: fades + slides up content when isActive ────────────────
function AnimatedSlideContent({
  isActive,
  children,
}: {
  isActive: boolean;
  children: React.ReactNode;
}) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    if (isActive) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 380,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          friction: 7,
          tension: 60,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      opacity.setValue(0);
      translateY.setValue(30);
    }
  }, [isActive]);

  return (
    <Animated.View style={{ flex: 1, opacity, transform: [{ translateY }] }}>
      {children}
    </Animated.View>
  );
}

function CoverSlide({ slide }: { slide: Slide }) {
  return (
    <View
      className="flex-1 items-center justify-center px-8"
      style={{ backgroundColor: slide.bg }}
    >
      <Text
        className="text-xs font-bold tracking-widest uppercase mb-4 opacity-70"
        style={{ color: slide.textColor }}
      >
        {slide.tag}
      </Text>
      <Text className="text-8xl mb-6">{slide.emoji}</Text>
      <Text
        className="text-4xl font-bold text-center leading-tight"
        style={{ color: slide.textColor }}
      >
        {slide.title}
      </Text>
      {slide.subtitle && (
        <View
          className="mt-3 px-4 py-2 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        >
          <Text
            className="text-base font-semibold"
            style={{ color: slide.textColor }}
          >
            {slide.subtitle}
          </Text>
        </View>
      )}
      {slide.body && (
        <Text
          className="text-base text-center mt-6 leading-6 opacity-90"
          style={{ color: slide.textColor }}
        >
          {slide.body}
        </Text>
      )}
    </View>
  );
}

function BulletSlide({ slide }: { slide: Slide }) {
  return (
    <View
      className="flex-1 px-8 pt-10 pb-6"
      style={{ backgroundColor: slide.bg }}
    >
      <Text className="text-6xl mb-4 text-center">{slide.emoji}</Text>
      <Text
        className="text-3xl font-bold text-center mb-2"
        style={{ color: slide.textColor }}
      >
        {slide.title}
      </Text>
      {slide.subtitle && (
        <Text
          className="text-base text-center mb-6 opacity-80"
          style={{ color: slide.textColor }}
        >
          {slide.subtitle}
        </Text>
      )}
      {slide.body && (
        <View
          className="rounded-2xl p-4 mb-4"
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        >
          <Text
            className="text-sm leading-5 text-center"
            style={{ color: slide.textColor }}
          >
            {slide.body}
          </Text>
        </View>
      )}
      <View className="gap-y-3">
        {slide.bullets?.map((b, i) => (
          <View
            key={i}
            className="rounded-xl px-4 py-3"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <Text
              className="text-sm leading-5"
              style={{ color: slide.textColor }}
            >
              {b}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function DiagramSlide({ slide }: { slide: Slide }) {
  const pairs = [
    { from: "PADAT", to: "CAIR", name: "Mencair", emoji: "🧊→💧", dir: "→" },
    { from: "CAIR", to: "PADAT", name: "Membeku", emoji: "💧→🧊", dir: "→" },
    { from: "CAIR", to: "GAS", name: "Menguap", emoji: "💧→💨", dir: "→" },
    { from: "GAS", to: "CAIR", name: "Mengembun", emoji: "💨→💧", dir: "→" },
    { from: "PADAT", to: "GAS", name: "Menyublim", emoji: "🪨→💨", dir: "→" },
    { from: "GAS", to: "PADAT", name: "Mengkristal", emoji: "💨→🪨", dir: "→" },
  ];

  return (
    <View
      className="flex-1 px-6 pt-8 pb-4"
      style={{ backgroundColor: slide.bg }}
    >
      <Text className="text-5xl text-center mb-3">{slide.emoji}</Text>
      <Text
        className="text-3xl font-bold text-center mb-1"
        style={{ color: slide.textColor }}
      >
        {slide.title}
      </Text>
      <Text
        className="text-sm text-center mb-5 opacity-70"
        style={{ color: slide.textColor }}
      >
        {slide.subtitle}
      </Text>

      {/* 3-state boxes */}
      <View className="flex-row justify-around mb-5">
        {[
          { label: "PADAT", emoji: "🪨" },
          { label: "CAIR", emoji: "💧" },
          { label: "GAS", emoji: "💨" },
        ].map((s) => (
          <View
            key={s.label}
            className="items-center rounded-2xl px-4 py-3 w-[30%]"
            style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          >
            <Text className="text-3xl">{s.emoji}</Text>
            <Text
              className="text-xs font-bold mt-1"
              style={{ color: slide.textColor }}
            >
              {s.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Pairs grid */}
      <View className="flex-row flex-wrap gap-2 justify-center">
        {pairs.map((p, i) => (
          <View
            key={i}
            className="rounded-xl px-3 py-2 w-[47%]"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <Text
              className="text-xs font-bold"
              style={{ color: slide.textColor }}
            >
              {p.name}
            </Text>
            <Text
              className="text-xs opacity-80"
              style={{ color: slide.textColor }}
            >
              {p.from} → {p.to}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function ClosingSlide({
  slide,
  onGoToGame,
}: {
  slide: Slide;
  onGoToGame: () => void;
}) {
  return (
    <View
      className="flex-1 items-center justify-center px-8"
      style={{ backgroundColor: slide.bg }}
    >
      <Text className="text-8xl mb-6">{slide.emoji}</Text>
      <Text
        className="text-3xl font-bold text-center mb-2"
        style={{ color: slide.textColor }}
      >
        {slide.title}
      </Text>
      {slide.subtitle && (
        <Text
          className="text-base text-center mb-4 opacity-80"
          style={{ color: slide.textColor }}
        >
          {slide.subtitle}
        </Text>
      )}
      {slide.body && (
        <Text
          className="text-sm text-center leading-6 mb-6 opacity-90"
          style={{ color: slide.textColor }}
        >
          {slide.body}
        </Text>
      )}
      <View className="gap-y-2 w-full mb-8">
        {slide.bullets?.map((b, i) => (
          <View
            key={i}
            className="rounded-xl px-4 py-3"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <Text className="text-sm" style={{ color: slide.textColor }}>
              {b}
            </Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        onPress={onGoToGame}
        className="rounded-2xl px-8 py-4"
        style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
        activeOpacity={0.8}
      >
        <Text className="text-[#6C63FF] font-bold text-base">
          🎮 Mulai Kuis!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function SlideItem({
  slide,
  isActive,
  onGoToGame,
}: {
  slide: Slide;
  isActive: boolean;
  onGoToGame: () => void;
}) {
  let content: React.ReactNode;
  if (slide.type === "cover") content = <CoverSlide slide={slide} />;
  else if (slide.type === "diagram") content = <DiagramSlide slide={slide} />;
  else if (slide.type === "closing")
    content = <ClosingSlide slide={slide} onGoToGame={onGoToGame} />;
  else content = <BulletSlide slide={slide} />;

  return (
    <AnimatedSlideContent isActive={isActive}>{content}</AnimatedSlideContent>
  );
}

// ─── Main Screen ────────────────────────────────────────────────────────────────

export default function SlideViewerScreen({ navigation, route }: Props) {
  const userName = route.params?.userName ?? "Teman";
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatRef = useRef<FlatList>(null);
  // progress bar animation
  const progressAnim = useRef(new Animated.Value(0)).current;

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        const idx = viewableItems[0].index ?? 0;
        setCurrentIndex(idx);
        // Light selection tick on every slide change (swipe)
        Haptics.selectionAsync();
        Animated.spring(progressAnim, {
          toValue: ((idx + 1) / slides.length) * 100,
          friction: 6,
          useNativeDriver: false,
        }).start();
      }
    },
  ).current;

  const goNext = () => {
    if (currentIndex < slides.length - 1) {
      // Medium impact on button press
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      flatRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      flatRef.current?.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      });
    }
  };

  const goToGame = () => {
    // Strong impact when launching quiz
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    navigation.navigate("Game", { userName });
  };

  const current = slides[currentIndex];

  return (
    <View className="flex-1" style={{ backgroundColor: current.bg }}>
      <StatusBar barStyle="light-content" />

      {/* ── Top Bar ── */}
      <View
        className="absolute top-0 left-0 right-0 z-10 px-4 pt-10 pb-3"
        style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
      >
        <View className="flex-row items-center justify-between mb-2">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-white text-sm font-semibold">✕ Tutup</Text>
          </TouchableOpacity>
          <Text className="text-white text-xs opacity-80">
            {currentIndex + 1} / {slides.length}
          </Text>
          <Text className="text-white text-xs opacity-80 w-10" />
        </View>
        {/* Progress Bar */}
        <View className="h-1.5 bg-white/20 rounded-full overflow-hidden">
          <Animated.View
            className="h-full rounded-full bg-white"
            style={{
              width: progressAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            }}
          />
        </View>
      </View>

      {/* ── Slides ── */}
      <FlatList
        ref={flatRef}
        data={slides}
        keyExtractor={(item) => String(item.id)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT,
              paddingTop: 80,
            }}
          >
            <SlideItem
              slide={item}
              isActive={index === currentIndex}
              onGoToGame={goToGame}
            />
          </View>
        )}
      />

      {/* ── Bottom Navigation ── */}
      <View
        className="absolute bottom-0 left-0 right-0 flex-row justify-between items-center px-6 pb-8 pt-4"
        style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
      >
        <TouchableOpacity
          onPress={goPrev}
          disabled={currentIndex === 0}
          className="rounded-xl px-5 py-3"
          style={{
            backgroundColor:
              currentIndex === 0
                ? "rgba(255,255,255,0.1)"
                : "rgba(255,255,255,0.25)",
          }}
          activeOpacity={0.7}
        >
          <Text
            className="text-white font-semibold text-sm"
            style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
          >
            ← Sebelumnya
          </Text>
        </TouchableOpacity>

        {/* Dot Indicators */}
        <View className="flex-row gap-x-1">
          {slides.map((_, i) => (
            <TouchableOpacity
              key={i}
              onPress={() =>
                flatRef.current?.scrollToIndex({ index: i, animated: true })
              }
            >
              <View
                className="rounded-full"
                style={{
                  width: i === currentIndex ? 16 : 6,
                  height: 6,
                  backgroundColor:
                    i === currentIndex ? "#FFFFFF" : "rgba(255,255,255,0.35)",
                }}
              />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          onPress={currentIndex === slides.length - 1 ? goToGame : goNext}
          className="rounded-xl px-5 py-3"
          style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
          activeOpacity={0.7}
        >
          <Text className="text-white font-semibold text-sm">
            {currentIndex === slides.length - 1 ? "Kuis 🎮" : "Berikutnya →"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

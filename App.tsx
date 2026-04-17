import "./global.css";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import MateriScreen from "./src/screens/MateriScreen";
import GameScreen from "./src/screens/GameScreen";
import ResultScreen from "./src/screens/ResultScreen";
import VideoScreen from "./src/screens/VideoScreen";
import RangkumanScreen from "./src/screens/RangkumanScreen";
import CPTPScreen from "./src/screens/CPTPScreen";
import TimPengembangScreen from "./src/screens/TimPengembangScreen";
import SlideViewerScreen from "./src/screens/SlideViewerScreen";

type gameResult = {
  levelTransformation: string;
  isCorrect: boolean;
};

export type RootStackParamList = {
  Home: undefined;
  Materi: { userName: string };
  Game: { userName: string };
  Result: {
    userName: string;
    score: number;
    stars: number;
    totalLevels: number;
    result: gameResult[];
  };
  Video: { userName: string };
  Rangkuman: { userName: string };
  CPTP: { userName: string };
  TimPengembang: { userName: string };
  SlideViewer: { userName: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          contentStyle: { backgroundColor: "#F0F4FF" },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Materi"
          component={MateriScreen}
          options={{
            headerShown: true,
            title: "Materi",
            headerTintColor: "#6C63FF",
          }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Video"
          component={VideoScreen}
          options={{
            headerShown: true,
            title: "Video Pembelajaran",
            headerTintColor: "#00C9A7",
          }}
        />
        <Stack.Screen
          name="Rangkuman"
          component={RangkumanScreen}
          options={{
            headerShown: true,
            title: "Rangkuman",
            headerTintColor: "#FFD93D",
          }}
        />
        <Stack.Screen
          name="CPTP"
          component={CPTPScreen}
          options={{
            headerShown: true,
            title: "CP & TP",
            headerTintColor: "#FF6584",
          }}
        />
        <Stack.Screen
          name="TimPengembang"
          component={TimPengembangScreen}
          options={{
            headerShown: true,
            title: "Tim Pengembang",
            headerTintColor: "#6EC1E4",
          }}
        />
        <Stack.Screen
          name="SlideViewer"
          component={SlideViewerScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

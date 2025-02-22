import { Image, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

const TabIcon = ({
  icon,
  focused,
  title,
}: {
  icon: any;
  focused: boolean;
  title: string;
}) => {
  return (
    <View className="flex-1 mt-3 flex flex-col items-center">
      <Image
        source={icon}
        tintColor={focused ? "#0061ff" : "#666876"}
        resizeMode="contain"
        className="size-6"
      />
      <Text
        className={`${
          focused
            ? "text-primary-300 font-rubik-medium"
            : "font-rubik text-black-200"
        } text-xs w-full text-center mt-1`}
      >
        {title}
      </Text>
    </View>
  );
};

const TabsLayput = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FFA1",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({focused}) => <TabIcon title="Home" icon={icons.home} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({focused}) => <TabIcon title="Home" icon={icons.search} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({focused}) => <TabIcon title="Home" icon={icons.person} focused={focused} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayput;

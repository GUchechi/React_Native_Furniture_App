import React, { useState, useEffect } from "react";
import { View, Text, Image, Alert } from "react-native";
import styles from "./Profile.style";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constants";
import { TouchableOpacity } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(userId);
      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {}
  };

  // Logout
  const userLogout = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;

    try {
      await AsyncStorage.multiRemove([userId, "id"]);
      navigation.replace("Login");
    } catch (error) {
      console.log("Error logging out the user", error);
    }
  };

  // Logout Alert
  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", onPress: () => console.log("Cancel Press") },
      { text: "Continue", onPress: () => userLogout() },
      // { defaultIndex: 1 },
    ]);
  };

  // Clear Cache
  const clearCache = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to delete all saved data on your device?",
      [
        { text: "Cancel", onPress: () => console.log("Cancel clear cache") },
        { text: "Continue", onPress: () => console.log("Clear cache pressed") },
        { defaultIndex: 1 },
      ]
    );
  };

  // Logout
  const deleteAccount = () => {
    Alert.alert("Logout", "Are you sure you want to delete your account?", [
      { text: "Cancel", onPress: () => console.log("Cancel Press") },
      { text: "Continue", onPress: () => console.log("Continue delete") },
      { defaultIndex: 1 },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor={COLORS.gray} /> */}
      <View style={styles.container}>
        <View style={{ width: "100%" }}>
          <Image
            source={require("../../assets/images/space.jpg")}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../assets/images/profile.jpeg")}
            style={styles.profile}
          />
          <Text style={styles.name}>
            {userData ? userData.username : "Please login into your account"}
          </Text>

          {userLogin === false ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>L O G I N</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>{userData && userData.email}</Text>
            </View>
          )}

          {userLogin === false ? (
            <View></View>
          ) : (
            <View style={styles.menuWrapper}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Favorites");
                }}
              >
                <View style={styles.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Favorites</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Orders");
                }}
              >
                <View style={styles.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Orders</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              >
                <View style={styles.menuItem(0.5)}>
                  <SimpleLineIcons
                    name="bag"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Cart</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  clearCache();
                }}
              >
                <View style={styles.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="cached"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Clear Cache</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  deleteAccount();
                }}
              >
                <View style={styles.menuItem(0.5)}>
                  <AntDesign
                    name="deleteuser"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Delete Account</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  logout();
                }}
              >
                <View style={styles.menuItem(0.5)}>
                  <AntDesign name="logout" size={24} color={COLORS.primary} />
                  <Text style={styles.menuText}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;

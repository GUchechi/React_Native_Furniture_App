import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./Login.styles";
import BackBtn from "../../components/BackBtn";
import Button from "../../components/Button";
import { COLORS } from "../../constants";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Must be at least 8 characters or less")
    .required("Required"),

  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
});

const Login = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 10, marginTop: 10 }}>
        <View>
          <BackBtn
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Image
            source={require("../../assets/images/bk.png")}
            style={styles.cover}
          />

          <Text style={styles.title}>Unlimited Luxurious Furniture</Text>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldTouched,
              touched,
            }) => (
              <View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? "grey" : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      color="grey"
                      style={styles.iconStyle}
                    />

                    <TextInput
                      placeholder="Enter Email"
                      onFocus={() => {
                        setFieldTouched("email");
                      }}
                      onBlur={() => setFieldTouched("email", "")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      style={{ flex: 1 }}
                    />
                  </View>

                  {touched.email && errors.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                  )}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Password</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? "grey" : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={20}
                      color="grey"
                      style={styles.iconStyle}
                    />

                    <TextInput
                      placeholder="Enter Password"
                      onFocus={() => {
                        setFieldTouched("password");
                      }}
                      onBlur={() => setFieldTouched("password", "")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      style={{ flex: 1 }}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        setObsecureText(!obsecureText);
                      }}
                    >
                      <MaterialCommunityIcons
                        name={obsecureText ? "eye-outline" : "eye-off-outline"}
                        size={18}
                        color={"grey"}
                      />
                    </TouchableOpacity>
                  </View>

                  {touched.password && errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  )}
                </View>
                <Button title={"L O G I N"} onPress={() => {}} />
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;

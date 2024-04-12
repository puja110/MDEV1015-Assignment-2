import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { logOutUser } from '../../../service/api.service';
import AuthContext from '../../../providers/AppContext';

interface MyProfileProps {
  navigation: any;
}

const MyProfile: React.FC<MyProfileProps> = ({ navigation }) => {
  const { userData } = useContext(AuthContext); 
  // const { userEmail } = useContext(AuthContext); // Access email and logout function from context

  const handleUserLogout = async () => {
    logOutUser()
      .then(data => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
        Alert.alert("User signed out!")
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
            source={require('../../../../assets/taylor.png')}
            style={styles.avatarImage}
        />
        <View>
          <Text style={styles.userName}>{userData.fullName}</Text>
          <Text style={styles.email}>{userData.email}</Text>
          <Text style={styles.password}>{userData.phoneNumber}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.subContainer}
        // onPress={() => navigation.push("EditProfile")}
      >
        <Ionicons name="person" size={28} color="white" />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>My Account</Text>
          <Text style={styles.subText}>Edit your details</Text>
        </View>
        {/* <TouchableOpacity
          style={styles.editProfile}
          onPress={() => navigation.push("EditProfile")}
        >
          <Text style={styles.editProfileText}>Edit</Text>
        </TouchableOpacity> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.subContainer}>
        <Ionicons name="star" size={28} color="white" />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>My Orders</Text>
          <Text style={styles.subText}>View all your orders</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subContainer}>
        <Ionicons name="settings" size={28} color="white" />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Settings</Text>
          <Text style={styles.subText}>View settings</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signOutButton}
        onPress={() => handleUserLogout()}
      >
        <Text style={styles.signOutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    flexDirection: "row",
    backgroundColor: "grey",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: "90%",
  },
  textContainer: {
    marginStart: 26,
  },
  titleText: {
    color: "white",
    fontSize: 18,
  },
  subText: {
    fontSize: 12,
    color: "white",
  },
  signOutButton: {
    backgroundColor: "orange",
    padding: 12,
    marginTop: 26,
    borderRadius: 30,
    paddingHorizontal: 26,
  },
  signOutButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  profileInfo: {
    flexDirection: "row",
    width: "90%",
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 20,
  },
  userName: {
    color: "orange",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 4,
  },
  email: {
    color: "black",
    fontSize: 16,
    paddingVertical: 6,
  },
  password: {
    color: "black",
    fontSize: 16,
    paddingBottom: 4,
  },
  avatarImage: {
    backgroundColor: "#c4c4c4",
    borderRadius: 10,
    height: 60,
    width: 60,
    // borderRadius: 50,
    marginRight: 20,
  },
  editProfile: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "orange",
    marginStart: 130,
    borderRadius: 6,
    width: 50,
    
  },
  editProfileText: {
    // paddingHorizontal: 12,
    color: "white",
    // fontStyle: "bold",
    fontSize: 16,
    alignSelf: 'center'
  },
});

export default MyProfile;

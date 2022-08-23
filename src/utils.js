import * as ImagePicker from "react-native-image-picker";
import "react-native-get-random-values";
import { nanoid } from 'nanoid'
import storage from '@react-native-firebase/storage';
export async function pickImage() {
    let result = await ImagePicker.launchCamera({
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
    });
    return result;
}
// export async function askForPermission() {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     return status;
// }

export async function uploadImage(uri, path, fName) {

    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    // const blob = await new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.onload = function () {
    //         resolve(xhr.response);
    //     };
    //     xhr.onerror = function (e) {
    //         console.log(e);
    //         reject(new TypeError("Network request failed"));
    //     };
    //     xhr.responseType = "blob";
    //     xhr.open("GET", uri, true);
    //     xhr.send(null);
    // });

    const fileName = fName || nanoid();
    // const imageRef = ref(storage, `${path}/${fileName}.jpeg`);

    // const snapshot = await uploadBytes(imageRef, blob, {
    //     contentType: "image/jpeg",
    // });

    // blob.close();

    const reference = storage().ref(`${fileName}.jpeg`);
    await reference.putFile(`${path}/${fileName}.jpeg`);
    const url = await reference.getDownloadURL();

    return { url, fileName };
}




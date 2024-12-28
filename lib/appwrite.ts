import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";

import * as linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";

export const config = {
  platform: "com.real.mouhamed",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectID: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();

client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectID!)
  .setPlatform(config.platform!);

export const avatars = new Avatars(client);
export const account = new Account(client);

export async function login() {
  try {
    const link = linking.createURL("/");
    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      link
    );

    if (!response) throw new Error("Failed to login");

    const result = await openAuthSessionAsync(response.toString(), link);

    if (result.type != "success") throw new Error("Failed to login");

    const url = new URL(result.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();

    if (!secret || !userId) throw new Error("Failed to login");

    const session = await account.createSession(userId, secret);

    if (!session) throw new Error("Failed to creae session");

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function logout() {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getUser() {
  try {
    const user = await account.get();

    if (user.$id) {
      const avatar = avatars.getInitials(user.name);

      return {
        ...user,
        avatar,
      };
    }
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}

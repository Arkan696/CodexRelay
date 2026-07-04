import type { ConfigContext, ExpoConfig } from "expo/config";

export default function appConfig(_context: ConfigContext): ExpoConfig {
  return {
    name: "Codex Relay",
    slug: "codex-relay",
    version: "1.2.1",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "codex-relay",
    userInterfaceStyle: "automatic",
    ios: {
      icon: "./assets/images/icon.png",
      bundleIdentifier: "com.gronstudio.codexrelay",
      supportsTablet: true,
      infoPlist: {
        NSAppTransportSecurity: {
          NSAllowsArbitraryLoads: true,
          NSAllowsLocalNetworking: true,
        },
        ITSAppUsesNonExemptEncryption: false,
        NSLocalNetworkUsageDescription:
          "Codex Relay 需要使用本地网络，将此设备连接到你电脑上运行的 Codex Relay 服务器。",
        "UISupportedInterfaceOrientations~ipad": [
          "UIInterfaceOrientationPortrait",
          "UIInterfaceOrientationPortraitUpsideDown",
          "UIInterfaceOrientationLandscapeLeft",
          "UIInterfaceOrientationLandscapeRight",
        ],
      },
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#191919",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      predictiveBackGestureEnabled: false,
      package: "com.gronstudio.codexrelay",
      permissions: ["android.permission.CAMERA"],
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-dev-client",
        {
          launchMode: "most-recent",
        },
      ],
      [
        "expo-splash-screen",
        {
          backgroundColor: "#191919",
          image: "./assets/images/splash-icon.png",
          imageWidth: 112,
          android: {
            image: "./assets/images/splash-icon.png",
            imageWidth: 112,
          },
        },
      ],
      [
        "expo-camera",
        {
          cameraPermission:
            "Codex Relay 需要使用相机扫描包含本地中继服务器地址的二维码，以连接你电脑上运行的 Codex Relay 服务器。",
          microphonePermission: false,
          recordAudioAndroid: false,
          barcodeScannerEnabled: true,
        },
      ],
      [
        "expo-image-picker",
        {
          photosPermission:
            "Codex Relay 需要访问照片图库，以便你向 Codex 聊天附加图片，例如让 Codex 检查截图。",
          microphonePermission: false,
        },
      ],
      "expo-font",
      "expo-image",
      "expo-system-ui",
      "expo-web-browser",
      "@hot-updater/react-native",
      "react-native-enriched-markdown",
      [
        "expo-secure-store",
        {
          faceIDPermission: false,
        },
      ],
      [
        "expo-build-properties",
        {
          ios: {
            deploymentTarget: "16.4",
          },
          android: {
            usesCleartextTraffic: true,
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: "6659e28f-2ac7-4055-8f56-7b4ca5e65847",
      },
    },
  };
}

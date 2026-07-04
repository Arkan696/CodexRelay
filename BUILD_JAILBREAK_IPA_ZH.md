# 无 Mac 设备构建越狱 IPA

这个项目已经加入 `.github/workflows/jailbreak-ios-ipa.yml`。它会使用 GitHub Actions 的 macOS runner 编译 iOS 版本，并生成一个未正式签名的 IPA：`CodexRelay-jailbreak-unsigned.ipa`。

这个 IPA 只适合越狱设备通过 AppSync Unified、TrollStore、Filza 等工具安装。普通未越狱 iPhone 不能安装。

## 使用步骤

1. 在 GitHub 新建一个私有仓库。
2. 上传这个源码包里的全部文件到仓库根目录。
3. 打开仓库的 `Actions` 页面。
4. 选择 `Build Jailbreak IPA` 工作流。
5. 点击 `Run workflow`。
6. 等构建完成后，打开该次 workflow run。
7. 在 `Artifacts` 里下载 `CodexRelay-jailbreak-unsigned-ipa`。
8. 解压 artifact，里面就是 `CodexRelay-jailbreak-unsigned.ipa`。

## 越狱设备安装

可选路线：

- AppSync Unified + Filza：把 IPA 传到手机，用 Filza 打开并安装。
- TrollStore：如果你的系统版本支持 TrollStore，可用 TrollStore 安装 IPA。
- Sideloadly/AltStore：通常仍需要可用签名，不是越狱无签名安装的首选。

## 注意事项

- 如果 GitHub Actions 构建失败，通常是某个原生依赖在当前 Xcode 版本下不兼容。把失败日志发回来即可继续修。
- 这个 workflow 不需要 Apple 开发者账号，也不需要你有 Mac。
- 这是越狱/调试安装包，不是 App Store/TestFlight 包。
- App 名、bundle id 仍沿用原项目：`Codex Relay` / `com.gronstudio.codexrelay`。

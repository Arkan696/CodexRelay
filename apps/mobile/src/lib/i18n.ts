import { cloneElement, isValidElement, type ReactNode } from "react";

const uiText: Record<string, string> = {
  "1.5x faster, uses more tokens": "速度提升 1.5 倍，但会使用更多 token",
  Account: "账户",
  ACTIVE: "当前",
  Active: "当前",
  "Add context": "添加上下文",
  "Add context before implementing": "实现前补充上下文",
  "Add context instead": "补充上下文",
  "Add image": "添加图片",
  "Add photos from library": "从图库添加照片",
  "Additional context for Codex": "给 Codex 的补充上下文",
  "Allow camera access to scan the connection QR, or close this screen and pair another way.":
    "允许相机权限以扫描连接二维码，也可以关闭此页面后用其他方式配对。",
  "Allow workspace changes without prompting": "允许直接修改工作区，不再弹出确认",
  "Approval code": "批准码",
  "Approve this phone": "批准此手机",
  "Ask before sensitive actions": "敏感操作前询问",
  "Ask Codex anything. Try $skills or @files.": "向 Codex 提问，可试试 $skills 或 @files。",
  "Ask Codex for a plan. Try $skills or @files.": "让 Codex 先制定计划，可试试 $skills 或 @files。",
  "Ask Codex to plan before editing": "让 Codex 编辑前先制定计划",
  Auto: "自动",
  "Back to threads": "返回会话",
  "Balanced reasoning": "平衡推理",
  "Base URL": "基础 URL",
  Blocked: "已阻塞",
  "Budget limited": "预算受限",
  "Camera access is off": "相机权限已关闭",
  "Camera access is off. Allow camera access to scan the connection QR.":
    "相机权限已关闭。请允许相机权限以扫描连接二维码。",
  "Cancel goal edit": "取消编辑目标",
  Checking: "正在检查",
  CHECKING: "检查中",
  "Checking current usage": "正在检查当前用量",
  "Choose images from your library": "从图库选择图片",
  "Choose the model for the next reply.": "选择下一次回复使用的模型。",
  "Choose Wi-Fi, Tailscale, or tunnel": "选择 Wi-Fi、Tailscale 或隧道",
  "Choose Wi-Fi or Tailscale": "选择 Wi-Fi 或 Tailscale",
  Clear: "清除",
  "Clear goal": "清除目标",
  "Clear HotUpdater logs": "清除 HotUpdater 日志",
  Close: "关闭",
  "Close file editor": "关闭文件编辑器",
  "Close image viewer": "关闭图片查看器",
  "Close pairing status": "关闭配对状态",
  "Close QR scanner": "关闭二维码扫描器",
  "Codex needs input": "Codex 需要输入",
  "Codex Relay": "Codex Relay",
  Complete: "已完成",
  "Connect to the Codex Relay server first": "请先连接 Codex Relay 服务器",
  "Connect to your computer": "连接你的电脑",
  Connected: "已连接",
  "Connected Computer": "已连接电脑",
  "Connecting to your computer": "正在连接你的电脑",
  "Context usage": "上下文用量",
  "Copy failed": "复制失败",
  "Copied to clipboard": "已复制到剪贴板",
  "Could not connect. Use Wi-Fi/LAN, Tailscale, or a public tunnel URL, then scan again.":
    "无法连接。请使用 Wi-Fi/LAN、Tailscale 或公网隧道 URL 后再扫描。",
  "Could not connect. Use the same Wi-Fi or turn on Tailscale, then scan again.":
    "无法连接。请使用同一 Wi-Fi，或打开 Tailscale 后再扫描。",
  "Could not read the selected image.": "无法读取所选图片。",
  "Could not reach the selected server address.": "无法访问选中的服务器地址。",
  Default: "默认",
  "Default permissions": "默认权限",
  "Deeper reasoning": "更深入推理",
  "Deepest reasoning": "最深入推理",
  Delete: "删除",
  "Dismiss plan decision": "关闭计划选择",
  Discard: "放弃",
  "Discard changes?": "放弃更改？",
  Done: "完成",
  Downloading: "正在下载",
  "Edit goal": "编辑目标",
  "Extra High": "极高",
  "Fast mode": "高速模式",
  "Fast replies": "快速回复",
  "File Editor": "文件编辑器",
  "Finish pairing from the Terminal window where codex-relay is running.":
    "请在运行 codex-relay 的终端窗口中完成批准。",
  "Full access": "完全访问",
  "Give Codex more context": "给 Codex 更多上下文",
  "Goal objective": "目标内容",
  GitHub: "GitHub",
  High: "高",
  Hide: "隐藏",
  "Hide HotUpdater logs": "隐藏 HotUpdater 日志",
  Image: "图片",
  "Image attach failed": "图片附加失败",
  "Image unavailable": "图片不可用",
  "Implement plan": "执行计划",
  "Invalid QR code": "二维码无效",
  "Keep Editing": "继续编辑",
  "Loading file": "正在加载文件",
  Logs: "日志",
  Low: "低",
  Medium: "中",
  Model: "模型",
  "No computer paired": "未配对电脑",
  "No matching files": "没有匹配文件",
  "No matching skills": "没有匹配技能",
  "No models": "没有模型",
  "No OTA download events captured in this session.": "本次会话中没有捕获到 OTA 下载事件。",
  "No paired computer": "未配对电脑",
  "No paired computer yet": "尚未配对电脑",
  "Not paired": "未配对",
  Offline: "离线",
  OFFLINE: "离线",
  ONLINE: "在线",
  "Open add menu": "打开添加菜单",
  "Open app settings for camera access": "打开应用设置以允许相机权限",
  "Open Codex Relay GitHub repository": "打开 Codex Relay GitHub 仓库",
  "Open gronxb GitHub Sponsors": "打开 gronxb GitHub Sponsors",
  "Open new chat": "打开新聊天",
  "Open settings": "打开设置",
  "Open Settings": "打开设置",
  "Open Tailscale on App Store": "在 App Store 打开 Tailscale",
  "Open Tailscale on the App Store": "在 App Store 打开 Tailscale",
  "Open thread search": "打开会话搜索",
  "Opening photo library": "正在打开图库",
  "Pair again on this device": "在这台设备上重新配对",
  "Pair this device from the main screen to choose a relay server.":
    "请从主屏幕配对此设备，以选择中继服务器。",
  "Pair this phone once": "只需配对此手机一次",
  Pairing: "正在配对",
  "Pairing failed": "配对失败",
  "Pause goal": "暂停目标",
  Permissions: "权限",
  Photos: "照片",
  "Plan first, then wait": "先制定计划，然后等待确认",
  "Plan mode": "计划模式",
  "Plan mode is on": "计划模式已开启",
  "Point the camera at the connection QR.": "请将相机对准连接二维码。",
  "Preparing app update": "正在准备应用更新",
  Project: "项目",
  "QR detected. Pairing...": "已检测到二维码，正在配对...",
  "QR recognized. Connecting to the relay...": "已识别二维码，正在连接中继...",
  "Rate limits": "用量限制",
  Ready: "就绪",
  Reasoning: "推理",
  Reconnect: "重新连接",
  "Reconnecting to your computer": "正在重新连接你的电脑",
  "Refresh connection": "刷新连接",
  Remaining: "剩余",
  "Reset image zoom": "重置图片缩放",
  "Restart app": "重启应用",
  Restart: "重启",
  Restarting: "正在重启",
  "Resume goal": "继续目标",
  "Run in workspace, ask after sandbox failures": "在工作区内运行，沙盒失败后再询问",
  "Run npx codex-relay@latest on your computer, then scan the QR shown there.":
    "请先在电脑上运行 npx codex-relay@latest，然后扫描那里显示的二维码。",
  "Same Wi-Fi is enough nearby. Away from that Wi-Fi, connect both devices with Tailscale or start codex-relay with a public tunnel URL, then scan the new QR.":
    "近距离使用同一 Wi-Fi 即可。不在这个 Wi-Fi 时，请让两台设备连接 Tailscale，或用公网隧道 URL 启动 codex-relay，然后扫描新的二维码。",
  "Run one command on your computer, scan the QR code, then approve the phone in that same terminal.":
    "在电脑上运行一条命令，扫描二维码，然后在同一个终端中批准此手机。",
  "Run this on your computer:": "在电脑上运行：",
  Save: "保存",
  "Save goal": "保存目标",
  Saving: "正在保存",
  "Scan and approve": "扫描并批准",
  "Scan connection QR": "扫描连接二维码",
  "Scan QR": "扫描二维码",
  "Searching files": "正在搜索文件",
  "Select another file from Workspace Preview.": "请从工作区预览中选择其他文件。",
  Send: "发送",
  "Send running input": "发送运行中输入",
  Server: "服务器",
  "Server unavailable": "服务器不可用",
  Session: "会话",
  "Set how much permission Codex can use.": "设置 Codex 可使用的权限范围。",
  Settings: "设置",
  "Show threads": "显示会话",
  "Sign out": "退出登录",
  "Skills unavailable": "技能不可用",
  Speed: "速度",
  Sponsor: "赞助",
  "Start the relay": "启动中继",
  Stop: "停止",
  "This is not the Codex Relay QR. Scan the QR shown on your computer.":
    "这不是 Codex Relay 二维码。请扫描电脑上显示的二维码。",
  "This workspace preview request is invalid.": "此工作区预览请求无效。",
  Threads: "会话",
  "Try Again": "重试",
  "Try camera permission again": "再次请求相机权限",
  "Turn off Plan mode": "关闭计划模式",
  "Turn on Plan mode": "开启计划模式",
  "Unable to open Markdown": "无法打开 Markdown",
  "Unable to open preview": "无法打开预览",
  "Unable to reach the Codex Relay server.": "无法连接 Codex Relay 服务器。",
  "Unavailable from this runtime": "当前运行环境不可用",
  USE: "使用",
  Usage: "用量",
  "Usage limited": "用量受限",
  "Usage Limits": "用量限制",
  Use: "使用",
  Used: "已用",
  "Make sure your phone can reach the Mobile URL printed by the relay. If the devices are on different networks, use Tailscale or start codex-relay with --public-url <https-url>.":
    "请确认手机能访问中继打印的 Mobile URL。若两台设备不在同一网络，请使用 Tailscale，或用 --public-url <https-url> 启动 codex-relay。",
  "Use the same Wi-Fi on your phone and computer. If that is not possible, turn on Tailscale on both devices and scan again.":
    "请让手机和电脑使用同一 Wi-Fi。若无法做到，请在两台设备上打开 Tailscale 后重新扫描。",
  "Waiting for approval": "等待批准",
  Workspace: "工作区",
  "Yes, implement this plan": "是，执行这个计划",
  "Your unsaved edits will be lost.": "未保存的编辑将会丢失。",
};

const dynamicTextRules: Array<[RegExp, (match: RegExpMatchArray) => string]> = [
  [/^Connected\s*[·路-]\s*(.+)$/i, (match) => `已连接 · ${match[1]}`],
  [/^Checking\s*[·路-]\s*(.+)$/i, (match) => `正在检查 · ${match[1]}`],
  [/^Offline\s*[·路-]\s*(.+)$/i, (match) => `离线 · ${match[1]}`],
  [/^Waiting for (.+)$/i, (match) => `正在等待 ${match[1]}`],
  [/^Version (.+)$/i, (match) => `版本 ${match[1]}`],
  [/^(.+) left$/i, (match) => `剩余 ${match[1]}`],
  [/^Used (\d+)%$/i, (match) => `已用 ${match[1]}%`],
  [/^Remaining (\d+)%$/i, (match) => `剩余 ${match[1]}%`],
  [/^(\d+)% used$/i, (match) => `已用 ${match[1]}%`],
  [/^Reasoning (.+)$/i, (match) => `推理 ${translateUiText(match[1] ?? "")}`],
  [/^Model (.+)$/i, (match) => `模型 ${match[1]}`],
  [/^Runtime mode (.+)$/i, (match) => `运行模式 ${translateUiText(match[1] ?? "")}`],
  [/^Use (.+)$/i, (match) => `使用 ${match[1]}`],
  [/^Insert (.+) skill$/i, (match) => `插入 ${match[1]} 技能`],
  [/^Insert (.+)$/i, (match) => `插入 ${match[1]}`],
  [/^Remove image (\d+)$/i, (match) => `移除图片 ${match[1]}`],
  [/^Steer queued prompt (\d+)$/i, (match) => `接管队列提示 ${match[1]}`],
  [/^Restore queued prompt (\d+) to composer$/i, (match) => `恢复队列提示 ${match[1]} 到输入框`],
  [/^Remove queued prompt (\d+)$/i, (match) => `移除队列提示 ${match[1]}`],
];

export function translateUiText(value: string): string {
  if (!value) {
    return value;
  }

  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const normalized = value.replace(/\s+/g, " ").trim();
  if (!normalized) {
    return value;
  }

  const direct = uiText[normalized];
  if (direct) {
    return `${leading}${direct}${trailing}`;
  }

  for (const [pattern, render] of dynamicTextRules) {
    const match = normalized.match(pattern);
    if (match) {
      return `${leading}${render(match)}${trailing}`;
    }
  }

  return value;
}

export function localizeNode(node: ReactNode): ReactNode {
  if (typeof node === "string") {
    return translateUiText(node);
  }
  if (Array.isArray(node)) {
    return node.map((child) => localizeNode(child));
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    const children = node.props.children;
    if (children === undefined) {
      return node;
    }
    return cloneElement(node, { children: localizeNode(children) });
  }
  return node;
}

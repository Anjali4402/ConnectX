import { LogEntry, MessageStream, ModItem } from "./types";

export const initialMessages: MessageStream[] = [
  {
    id: "1",
    sender: {
      name: "Elena Vance",
      id: "#4920",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCcPPFWqxKLj-7RDX0RkTkBxgQG7wTU6p7hk4KvEWhlfCAiMkoUMbDlKgraif7dX-YuhRV0_yJ8A61dERW70qf06PGxm78ExCfh70LDZtSX-jqWXeSwDlnNLvDy4oafYXGDnrrBy1ocRmxp19c_x_jsX0cHDAp00a1EhdXiOMi2hCzBlUulW2mNxGkw6_hx1avI2Gdo_cZWDT8XVKWjvc9TUHtPfFq1Z7cjLr79EKwaeDnqvJXnseFvIYAil4lOZFdKGX2bX6nNEwM",
    },
    receiver: {
      name: "John Doe",
      isGroup: false,
    },
    text: "I've shared the encrypted credentials in the secure vault...",
    status: "SAFE",
    time: "Just now",
  },
  {
    id: "2",
    sender: {
      name: "S. Young",
      id: "#8812",
    },
    receiver: {
      name: "Marcus Wei",
      isGroup: false,
    },
    text: "URGENT: Requesting unauthorized bypass for node #229...",
    status: "SUSPICIOUS",
    time: "12m ago",
  },
  {
    id: "3",
    sender: {
      name: "Sarah K.",
      id: "#1109",
    },
    receiver: {
      name: "Team Alpha",
      isGroup: true,
    },
    text: "The deployment for the Aetheric cluster is complete.",
    status: "SYSTEM",
    time: "45m ago",
  },
  {
    id: "4",
    sender: {
      name: "Leila Omar",
      id: "#5521",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDIBnhXnaHictwly0ZdI4BC85t3A7870dAQT47H9_HCEdmL3d2TqBLI9GpjuaYlBq-CiE9tZkYNqMCHqK6UdT4ARqEyemVhp-2WPyE5cB16f3BP8b5gwOcvYipJIeLptxigNSQZ2UB3gDu9OXR3H5RCr9ivb6p_6e1gIesfTJobi7ru92Di53XtqNeOOQUjhbxiirBoScqORJBTvbuo90NDgM5IRnpCLubFaGKqeI1Bj3x9NgO8hePdLCx2AFWBpcZhvbEc_9EH4uA",
    },
    receiver: {
      name: "Rick Sanchez",
      isGroup: false,
    },
    text: "Can we schedule a sync for the new UI redesign?",
    status: "SAFE",
    time: "1h ago",
  },
];

export const initialLogs: LogEntry[] = [
  {
    time: "14:22:01.032",
    tag: "MODERATION_AGENT",
    color: "text-primary",
    content: "Scanned packet ID_39221: No policy violations found.",
  },
  {
    time: "14:22:05.118",
    tag: "CRITICAL_ALERT",
    color: "text-error",
    content: "Bypass attempt detected by user #8812 in Private Channel B.",
  },
  {
    time: "14:22:12.449",
    tag: "GATEWAY",
    color: "text-secondary",
    content: "User Elena Vance connected via TLS 1.3 (Node: EU-West-1)",
  },
  {
    time: "14:22:15.891",
    tag: "HEARTBEAT",
    color: "text-on-surface-variant/60",
    content: "Shard 04 active, latency 22ms.",
  },
  {
    time: "14:22:20.001",
    tag: "MODERATION_AGENT",
    color: "text-primary",
    content: "Sentiment analysis complete for Thread_Alpha: Positive (0.88)",
  },
];

export const initialModQueue: ModItem[] = [
  {
    id: "m1",
    type: "Spam Filter",
    risk: "High Risk",
    title: "Repeated crypto link detection",
    snippet: '"Join our new airdrop now! Free tokens..."',
  },
  {
    id: "m2",
    type: "Conduct Policy",
    risk: "Medium",
    title: "Potential aggressive language",
    snippet: '"I don\'t think you understand how this works..."',
  },
];

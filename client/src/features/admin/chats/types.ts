export interface MessageStream {
  id: string;
  sender: {
    name: string;
    id: string;
    avatar?: string;
  };
  receiver: {
    name: string;
    isGroup: boolean;
  };
  text: string;
  status: "SAFE" | "SUSPICIOUS" | "SYSTEM";
  time: string;
}

export interface LogEntry {
  time: string;
  tag: string;
  color: string;
  content: string;
}

export interface ModItem {
  id: string;
  type: string;
  risk: "High Risk" | "Medium" | "Low";
  title: string;
  snippet: string;
}

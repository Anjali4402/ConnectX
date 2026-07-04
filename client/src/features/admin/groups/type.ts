export interface Group {
  id: string;
  name: string;
  description: string;
  creator: {
    name: string;
    avatar?: string;
  };
  members: number;
  iconType: "terminal" | "palette" | "security" | "global";
}

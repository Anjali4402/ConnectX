export interface FeedMessage {
  id: string;
  name: string;
  avatar: string;
  time: string;
  text: string;
  category?: string;
  isNew?: boolean;
}

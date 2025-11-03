import { v4 as uuidv4 } from "uuid";

 export function truncateText(text: string, maxLength: number): string {
    if(!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trimEnd() + '...';
  }

export function getorCreateUserId() {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = uuidv4();
    localStorage.setItem("userId", userId);
  }
  return userId;
}
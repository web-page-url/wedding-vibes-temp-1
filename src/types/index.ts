export interface StoryChapter {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  imageUrl: string;
}

export interface WeddingEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  attire: string;
  imageUrl: string;
  bgColor: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface RSVPFormData {
  name: string;
  email: string;
  phone: string;
  attending: boolean;
  events: string[];
  songRequest?: string;
  message?: string;
}
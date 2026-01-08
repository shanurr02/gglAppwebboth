
export type Screen = 
  | 'SPLASH' 
  | 'LOGIN' 
  | 'REGISTER' 
  | 'FORGOT_PASSWORD' 
  | 'DASHBOARD' 
  | 'WALLET' 
  | 'NETWORK' 
  | 'COURSES' 
  | 'COURSE_DETAILS' 
  | 'CHECKOUT' 
  | 'CONFIRMATION' 
  | 'WITHDRAWAL_LOCKED' 
  | 'WITHDRAWAL_FORM' 
  | 'KYC_DETAILS' 
  | 'WITHDRAWAL_PREVIEW' 
  | 'WITHDRAWAL_HISTORY'
  | 'AUTOCLUB_LANDING'
  | 'AUTOCLUB_ONBOARDING'
  | 'AUTOCLUB_DASHBOARD'
  | 'AUTOCLUB_WALLET'
  | 'AUTOCLUB_TRANSFER'
  | 'OFFICIAL_DOCUMENTS'
  | 'SUPPORT_CHAT'
  | 'RESOURCE_CENTER'
  | 'SOCIAL_CONNECT'
  | 'TERMS_CONDITIONS'
  | 'COMMUNITY'
  | 'PROFILE_SETTINGS'
  | 'HELP_SUPPORT'
  | 'TESTIMONIALS';

export enum Role {
  USER = 'user',
  MODEL = 'model'
}

export interface Attachment {
  mimeType: string;
  data: string;
  url: string;
}

export interface Message {
  id: string;
  role: Role;
  text: string;
  attachments?: Attachment[];
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
}

export interface User {
  name: string;
  mobile: string;
  referralCode: string;
  balance: number;
  autoclubBalance: number;
  activeTeam: number;
  isKycVerified: boolean;
  withdrawalUnlocked: boolean;
  isAutoclubMember: boolean;
}

export interface Transaction {
  id: string;
  type: string;
  amount: number;
  date: string;
  time: string;
  icon: string;
}

export interface NetworkMember {
  id: string;
  name: string;
  level: number;
  directs: number;
  mobile: string;
  joinedDate: string;
  status: 'Active' | 'Inactive';
  children?: NetworkMember[];
}

export interface Course {
  id: string;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Expert' | 'Advanced';
  duration: string;
  progress?: number;
  status?: 'IN PROGRESS' | 'COMPLETED' | 'NOT STARTED';
  thumbnail: string;
  price?: number;
}

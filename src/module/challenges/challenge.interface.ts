export interface IChallenge {
    id?: string;
    challengeId?: string;
    name: string;
    description?: string;
    image?: string;
    duration?: string;
    startedAt?: Date | null;
    completedAt?: Date | null;
    isActive: boolean;
    isLoop?: boolean;
    isFeatured?: boolean;
    templateId: string[]; 
    isResettable?: boolean;
    reminderTime?: string;
    userInfo?: string[];
    category?: string;
    visibility: "FREE" | "PRO";
    streak?: number;
    createdAt?: Date;
    createdBy?: string;
    updatedAt?: Date;
    updatedBy?: string;
  }
  
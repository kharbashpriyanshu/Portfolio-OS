export interface ContactPlatform {
  id: string;
  name: string;
  url: string;
  icon: string;
  description: string;
  color?: string;
}

export interface AvailabilityItem {
  id: string;
  label: string;
  active: boolean;
}

export interface AvailabilityStatus {
  status: "Available" | "Busy" | "Not Looking";
  message: string;
  items: AvailabilityItem[];
}

export interface ContactConfig {
  heading: string;
  label: string;
  subtitle?: string;
  introduction: string;
  email: string;
  phone?: string;
  location: string;
  resumeUrl?: string;
  calendarUrl?: string;
  platforms: ContactPlatform[];
  availability: AvailabilityStatus;
}

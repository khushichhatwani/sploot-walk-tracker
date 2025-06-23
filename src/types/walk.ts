export interface Walk {
  id: string;
  duration: number;
  coordinates: { latitude: number; longitude: number }[];
  timestamp: number; 
}

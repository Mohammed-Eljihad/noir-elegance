export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  location?: string;
  text: string;
  rating: number;
  avatarUrl: string;
}

export interface Fragrance {
  id: string;
  name: string;
  description: string;
  notes: string[];
  imageUrl: string;
}

export interface NavLink {
  href: string;
  label: string;
}

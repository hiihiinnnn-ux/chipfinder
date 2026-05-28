export type Shop = {
  id: string;
  name: string;
  city: string;
  address: string;
  rating: number;
  reviews: number;
  tags: string[];
  hours: string;
  phone: string;
  // normalized coords 0..1 for our stylized map
  x: number;
  y: number;
};

export const SHOPS: Shop[] = [
  { id: "1", name: "BitForge Computers", city: "New York", address: "212 Lex Ave, Manhattan", rating: 4.8, reviews: 412, tags: ["Custom Builds", "Repairs", "Apple"], hours: "Mon–Sat 10–8", phone: "+1 212 555 0142", x: 0.72, y: 0.32 },
  { id: "2", name: "Pixel & Port", city: "New York", address: "88 Bedford St, Brooklyn", rating: 4.6, reviews: 287, tags: ["Repairs", "Used Gear"], hours: "Daily 11–7", phone: "+1 212 555 0133", x: 0.74, y: 0.36 },
  { id: "3", name: "Silicon Bay", city: "San Francisco", address: "1450 Market St", rating: 4.9, reviews: 612, tags: ["Custom Builds", "Workstations", "Gaming"], hours: "Mon–Sun 9–9", phone: "+1 415 555 0188", x: 0.12, y: 0.42 },
  { id: "4", name: "Foggy Bit", city: "San Francisco", address: "300 Valencia St", rating: 4.4, reviews: 154, tags: ["Repairs", "Apple"], hours: "Tue–Sun 10–6", phone: "+1 415 555 0121", x: 0.14, y: 0.46 },
  { id: "5", name: "Chip & Circuit", city: "Austin", address: "1100 S Lamar Blvd", rating: 4.7, reviews: 329, tags: ["Custom Builds", "Linux"], hours: "Mon–Sat 10–8", phone: "+1 512 555 0117", x: 0.40, y: 0.66 },
  { id: "6", name: "ATX PC Lab", city: "Austin", address: "500 E 6th St", rating: 4.5, reviews: 198, tags: ["Repairs", "Gaming"], hours: "Daily 11–9", phone: "+1 512 555 0190", x: 0.42, y: 0.64 },
  { id: "7", name: "Shoreditch Silicon", city: "London", address: "42 Old Street, EC1", rating: 4.6, reviews: 372, tags: ["Repairs", "Used Gear", "Custom Builds"], hours: "Mon–Sat 10–7", phone: "+44 20 7946 0822", x: 0.55, y: 0.22 },
  { id: "8", name: "Camden Computer Co.", city: "London", address: "9 Camden High St", rating: 4.3, reviews: 145, tags: ["Apple", "Repairs"], hours: "Daily 10–8", phone: "+44 20 7946 0411", x: 0.53, y: 0.24 },
  { id: "9", name: "Akihabara Build Co.", city: "Tokyo", address: "1-15-16 Sotokanda", rating: 4.9, reviews: 821, tags: ["Custom Builds", "Workstations", "Gaming"], hours: "Daily 11–9", phone: "+81 3 5555 8290", x: 0.88, y: 0.40 },
  { id: "10", name: "Shibuya Chip Shop", city: "Tokyo", address: "2-22-3 Dogenzaka", rating: 4.5, reviews: 256, tags: ["Used Gear", "Repairs"], hours: "Daily 12–10", phone: "+81 3 5555 4412", x: 0.86, y: 0.44 },
  { id: "11", name: "Mitte Mainboards", city: "Berlin", address: "Torstraße 92", rating: 4.7, reviews: 301, tags: ["Custom Builds", "Linux", "Workstations"], hours: "Mon–Sat 10–7", phone: "+49 30 5555 1290", x: 0.58, y: 0.26 },
  { id: "12", name: "Kreuzberg Repair Lab", city: "Berlin", address: "Bergmannstr. 14", rating: 4.4, reviews: 178, tags: ["Repairs", "Used Gear"], hours: "Tue–Sat 11–7", phone: "+49 30 5555 8722", x: 0.59, y: 0.28 },
];

export const ALL_CITIES = Array.from(new Set(SHOPS.map((s) => s.city))).sort();
export const ALL_TAGS = Array.from(new Set(SHOPS.flatMap((s) => s.tags))).sort();

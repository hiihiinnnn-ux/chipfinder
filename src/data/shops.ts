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
  x: number;
  y: number;
};

export const SHOPS: Shop[] = [
  { id: "1", name: "Baghdad Byte Center", city: "Baghdad", address: "Karrada Dakhil, near Al-Sadeer Mall", rating: 4.8, reviews: 412, tags: ["Custom Builds", "Repairs", "Apple"], hours: "Sat–Thu 10–9", phone: "+964 770 123 4567", x: 0.55, y: 0.45 },
  { id: "2", name: "Mansour Tech Hub", city: "Baghdad", address: "14th Ramadan St, Mansour", rating: 4.6, reviews: 287, tags: ["Repairs", "Used Gear"], hours: "Daily 11–10", phone: "+964 771 234 5678", x: 0.52, y: 0.47 },
  { id: "3", name: "Al-Sinak Computers", city: "Baghdad", address: "Al-Sinak Market, Rusafa", rating: 4.5, reviews: 521, tags: ["Used Gear", "Repairs", "Parts"], hours: "Sat–Thu 9–8", phone: "+964 780 345 6789", x: 0.57, y: 0.44 },
  { id: "4", name: "Erbil PC Lab", city: "Erbil", address: "100m Road, near Family Mall", rating: 4.9, reviews: 612, tags: ["Custom Builds", "Workstations", "Gaming"], hours: "Daily 10–10", phone: "+964 750 456 7890", x: 0.62, y: 0.18 },
  { id: "5", name: "Citadel Computers", city: "Erbil", address: "Bakhtiari, Shar Park area", rating: 4.4, reviews: 154, tags: ["Repairs", "Apple"], hours: "Sat–Thu 10–8", phone: "+964 751 567 8901", x: 0.60, y: 0.20 },
  { id: "6", name: "Basra Bit Store", city: "Basra", address: "Al-Jazair St, Al-Ashar", rating: 4.7, reviews: 329, tags: ["Custom Builds", "Gaming"], hours: "Sat–Thu 10–9", phone: "+964 772 678 9012", x: 0.68, y: 0.85 },
  { id: "7", name: "Shatt Al-Arab Tech", city: "Basra", address: "Corniche St, near the river", rating: 4.5, reviews: 198, tags: ["Repairs", "Used Gear"], hours: "Daily 11–10", phone: "+964 773 789 0123", x: 0.70, y: 0.83 },
  { id: "8", name: "Mosul Mainboards", city: "Mosul", address: "Al-Dawasa, Right Bank", rating: 4.6, reviews: 372, tags: ["Repairs", "Custom Builds", "Parts"], hours: "Sat–Thu 10–8", phone: "+964 774 890 1234", x: 0.48, y: 0.18 },
  { id: "9", name: "Nineveh Networks", city: "Mosul", address: "Al-Majmoo'a Al-Thaqafia St", rating: 4.3, reviews: 145, tags: ["Repairs", "Networking"], hours: "Sat–Thu 9–7", phone: "+964 775 901 2345", x: 0.50, y: 0.20 },
  { id: "10", name: "Najaf Digital", city: "Najaf", address: "Al-Sahla St, near Old City", rating: 4.7, reviews: 256, tags: ["Repairs", "Apple", "Used Gear"], hours: "Sat–Thu 9–9", phone: "+964 776 012 3456", x: 0.50, y: 0.62 },
  { id: "11", name: "Karbala Computer Co.", city: "Karbala", address: "Al-Abbas St, city center", rating: 4.5, reviews: 178, tags: ["Repairs", "Custom Builds"], hours: "Sat–Thu 10–8", phone: "+964 777 123 4567", x: 0.52, y: 0.58 },
  { id: "12", name: "Sulaymaniyah Silicon", city: "Sulaymaniyah", address: "Salim St, near Azadi Park", rating: 4.8, reviews: 301, tags: ["Custom Builds", "Workstations", "Gaming"], hours: "Daily 10–10", phone: "+964 778 234 5678", x: 0.74, y: 0.28 },
  { id: "13", name: "Kirkuk Chip Shop", city: "Kirkuk", address: "Al-Jumhuriya St", rating: 4.4, reviews: 132, tags: ["Repairs", "Used Gear"], hours: "Sat–Thu 10–8", phone: "+964 779 345 6789", x: 0.60, y: 0.32 },
  { id: "14", name: "Duhok Tech Bazaar", city: "Duhok", address: "Nahda Quarter, main market", rating: 4.6, reviews: 167, tags: ["Repairs", "Parts", "Networking"], hours: "Sat–Thu 9–8", phone: "+964 750 456 7891", x: 0.52, y: 0.10 },
  { id: "15", name: "Babylon Byte House", city: "Hillah", address: "Al-Hilla St, near Babel University", rating: 4.7, reviews: 224, tags: ["Custom Builds", "Repairs", "Gaming"], hours: "Sat–Thu 10–9", phone: "+964 781 456 7892", x: 0.54, y: 0.52 },
  { id: "16", name: "Hillah Hardware Hub", city: "Hillah", address: "40 St, city center", rating: 4.5, reviews: 168, tags: ["Repairs", "Used Gear", "Parts"], hours: "Daily 10–8", phone: "+964 782 567 8903", x: 0.55, y: 0.54 },
  { id: "17", name: "Mesopotamia Micro", city: "Hillah", address: "Babylon Ruins Rd", rating: 4.6, reviews: 142, tags: ["Apple", "Repairs", "Networking"], hours: "Sat–Thu 9–8", phone: "+964 783 678 9014", x: 0.53, y: 0.53 },
  // More Baghdad shops
  { id: "18", name: "Karrada Compu-Mall", city: "Baghdad", address: "Karrada Kharij, opposite Babylon Hotel", rating: 4.7, reviews: 388, tags: ["Custom Builds", "Gaming", "Parts"], hours: "Daily 10–10", phone: "+964 770 111 2233", x: 0.56, y: 0.46 },
  { id: "19", name: "Bab Al-Sharqi Electronics", city: "Baghdad", address: "Bab Al-Sharqi, Tahrir Sq area", rating: 4.3, reviews: 245, tags: ["Used Gear", "Parts", "Repairs"], hours: "Sat–Thu 9–8", phone: "+964 771 222 3344", x: 0.58, y: 0.45 },
  { id: "20", name: "Zayouna Gaming Den", city: "Baghdad", address: "Zayouna, near Al-Rasheed Mall", rating: 4.8, reviews: 511, tags: ["Gaming", "Custom Builds", "Workstations"], hours: "Daily 12–11", phone: "+964 780 333 4455", x: 0.59, y: 0.46 },
  { id: "21", name: "Al-Jadriya Mac Bar", city: "Baghdad", address: "Al-Jadriya, near University of Baghdad", rating: 4.7, reviews: 198, tags: ["Apple", "Repairs"], hours: "Sat–Thu 10–9", phone: "+964 781 444 5566", x: 0.56, y: 0.48 },
  { id: "22", name: "Adhamiya Repair Lab", city: "Baghdad", address: "Adhamiya, Antar Sq", rating: 4.4, reviews: 162, tags: ["Repairs", "Parts"], hours: "Sat–Thu 9–7", phone: "+964 782 555 6677", x: 0.56, y: 0.43 },
  { id: "23", name: "Dora Tech Market", city: "Baghdad", address: "Dora, Mechanic St", rating: 4.2, reviews: 119, tags: ["Used Gear", "Networking"], hours: "Sat–Thu 10–8", phone: "+964 783 666 7788", x: 0.55, y: 0.50 },
  { id: "24", name: "Harthiya Workstations", city: "Baghdad", address: "Harthiya, Kindi St", rating: 4.6, reviews: 213, tags: ["Workstations", "Custom Builds", "Apple"], hours: "Sat–Thu 10–9", phone: "+964 784 777 8899", x: 0.53, y: 0.46 },
  // More Hillah shops
  { id: "25", name: "Hillah Gamer Lounge", city: "Hillah", address: "Al-Tahmaziya, near old bridge", rating: 4.7, reviews: 196, tags: ["Gaming", "Custom Builds"], hours: "Daily 12–11", phone: "+964 785 888 9900", x: 0.55, y: 0.53 },
  { id: "26", name: "Furat PC World", city: "Hillah", address: "Al-Mahdiya Quarter, main road", rating: 4.5, reviews: 154, tags: ["Custom Builds", "Parts", "Repairs"], hours: "Sat–Thu 10–9", phone: "+964 786 999 0011", x: 0.54, y: 0.54 },
  { id: "27", name: "Babel Apple Service", city: "Hillah", address: "Al-Jamaa St, near Babel Hospital", rating: 4.8, reviews: 187, tags: ["Apple", "Repairs"], hours: "Sat–Thu 10–8", phone: "+964 787 000 1122", x: 0.53, y: 0.52 },
  { id: "28", name: "Hillah Used Tech Souq", city: "Hillah", address: "Al-Jumhuri St, central market", rating: 4.3, reviews: 211, tags: ["Used Gear", "Parts"], hours: "Sat–Thu 9–8", phone: "+964 788 111 2233", x: 0.55, y: 0.52 },
  { id: "29", name: "Nader Networks Hillah", city: "Hillah", address: "Al-Wardiya, near Babylon College", rating: 4.6, reviews: 138, tags: ["Networking", "Repairs", "Workstations"], hours: "Sat–Thu 10–8", phone: "+964 789 222 3344", x: 0.54, y: 0.53 },

];

export const ALL_CITIES = Array.from(new Set(SHOPS.map((s) => s.city))).sort();
export const ALL_TAGS = Array.from(new Set(SHOPS.flatMap((s) => s.tags))).sort();

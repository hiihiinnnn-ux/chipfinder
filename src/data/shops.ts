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
  // Even more Baghdad shops
  { id: "30", name: "Palestine St Computers", city: "Baghdad", address: "Palestine St, near Al-Mustansiriya Univ", rating: 4.5, reviews: 276, tags: ["Repairs", "Parts", "Custom Builds"], hours: "Sat–Thu 10–9", phone: "+964 770 321 4567", x: 0.58, y: 0.44 },
  { id: "31", name: "Al-Mansour Apple Store", city: "Baghdad", address: "Mansour, Al-Amerat St", rating: 4.8, reviews: 421, tags: ["Apple", "Repairs"], hours: "Daily 10–10", phone: "+964 771 432 5678", x: 0.52, y: 0.46 },
  { id: "32", name: "Saadoun Gaming Gear", city: "Baghdad", address: "Saadoun St, near Tahrir", rating: 4.6, reviews: 338, tags: ["Gaming", "Custom Builds", "Parts"], hours: "Daily 11–11", phone: "+964 772 543 6789", x: 0.57, y: 0.46 },
  { id: "33", name: "Kadhimiya Computer Center", city: "Baghdad", address: "Kadhimiya, near the shrine area", rating: 4.4, reviews: 184, tags: ["Repairs", "Used Gear"], hours: "Sat–Thu 9–8", phone: "+964 773 654 7890", x: 0.54, y: 0.42 },
  { id: "34", name: "Yarmouk Workstations", city: "Baghdad", address: "Yarmouk, 14 Ramadan St", rating: 4.7, reviews: 245, tags: ["Workstations", "Custom Builds", "Networking"], hours: "Sat–Thu 10–9", phone: "+964 774 765 8901", x: 0.51, y: 0.47 },
  { id: "35", name: "Al-Waziriya Repair Hub", city: "Baghdad", address: "Al-Waziriya, near Al-Nahrain Univ", rating: 4.5, reviews: 167, tags: ["Repairs", "Parts"], hours: "Sat–Thu 9–7", phone: "+964 775 876 9012", x: 0.56, y: 0.43 },
  { id: "36", name: "Ghazaliya PC Builders", city: "Baghdad", address: "Ghazaliya, main commercial road", rating: 4.6, reviews: 198, tags: ["Custom Builds", "Gaming"], hours: "Daily 10–10", phone: "+964 776 987 0123", x: 0.50, y: 0.45 },
  { id: "37", name: "Shorja Electronics Souq", city: "Baghdad", address: "Shorja Market, Rusafa", rating: 4.2, reviews: 502, tags: ["Used Gear", "Parts"], hours: "Sat–Thu 8–7", phone: "+964 777 098 1234", x: 0.58, y: 0.44 },
  { id: "38", name: "Al-Amiriya Mac Service", city: "Baghdad", address: "Al-Amiriya, near the highway", rating: 4.7, reviews: 156, tags: ["Apple", "Repairs", "Workstations"], hours: "Sat–Thu 10–8", phone: "+964 778 109 2345", x: 0.50, y: 0.46 },
  { id: "39", name: "Baya'a Tech Outlet", city: "Baghdad", address: "Baya'a, central market", rating: 4.3, reviews: 142, tags: ["Used Gear", "Repairs", "Parts"], hours: "Sat–Thu 9–8", phone: "+964 779 210 3456", x: 0.54, y: 0.49 },
  // Even more Hillah shops
  { id: "40", name: "Hillah Custom PC Lab", city: "Hillah", address: "Al-Askari Quarter, near sports stadium", rating: 4.8, reviews: 234, tags: ["Custom Builds", "Gaming", "Workstations"], hours: "Daily 10–10", phone: "+964 780 321 4567", x: 0.55, y: 0.53 },
  { id: "41", name: "Al-Furat Repairs", city: "Hillah", address: "Al-Saiyed Quarter, market area", rating: 4.5, reviews: 178, tags: ["Repairs", "Parts"], hours: "Sat–Thu 9–8", phone: "+964 781 432 5678", x: 0.54, y: 0.52 },
  { id: "42", name: "Babel Networks", city: "Hillah", address: "Al-Imam Ali St", rating: 4.6, reviews: 163, tags: ["Networking", "Workstations", "Repairs"], hours: "Sat–Thu 10–8", phone: "+964 782 543 6789", x: 0.53, y: 0.54 },
  { id: "43", name: "Hillah iRepair", city: "Hillah", address: "Al-Tabaqchaliya St, opposite city hall", rating: 4.7, reviews: 209, tags: ["Apple", "Repairs"], hours: "Sat–Thu 10–9", phone: "+964 783 654 7890", x: 0.54, y: 0.53 },
  { id: "44", name: "Babylon Used Parts", city: "Hillah", address: "Al-Nadir Quarter, side market", rating: 4.2, reviews: 124, tags: ["Used Gear", "Parts"], hours: "Sat–Thu 9–7", phone: "+964 784 765 8901", x: 0.55, y: 0.54 },
  { id: "45", name: "Hillah Esports Arena Shop", city: "Hillah", address: "Al-Jamiyin St, near university gate", rating: 4.8, reviews: 287, tags: ["Gaming", "Custom Builds", "Parts"], hours: "Daily 12–12", phone: "+964 785 876 9012", x: 0.54, y: 0.53 },
  { id: "46", name: "Mesopotamia Workstations", city: "Hillah", address: "Industrial zone, north Hillah", rating: 4.6, reviews: 145, tags: ["Workstations", "Custom Builds", "Networking"], hours: "Sat–Thu 9–6", phone: "+964 786 987 0123", x: 0.54, y: 0.51 },
  // Expansion batch
  { id: "47", name: "Hillah Smart Repair", city: "Hillah", address: "Al-Bakerli Quarter, main street", rating: 4.6, reviews: 151, tags: ["Repairs", "Apple", "Parts"], hours: "Sat–Thu 10–9", phone: "+964 787 101 2020", x: 0.54, y: 0.53 },
  { id: "48", name: "Babylon Gaming PCs", city: "Hillah", address: "Al-Thawra Quarter, near Hillah mall", rating: 4.7, reviews: 203, tags: ["Gaming", "Custom Builds"], hours: "Daily 12–11", phone: "+964 788 202 3030", x: 0.55, y: 0.52 },
  { id: "49", name: "Al-Kifl Road Computers", city: "Hillah", address: "Kifl Rd, south Hillah", rating: 4.3, reviews: 98, tags: ["Used Gear", "Repairs"], hours: "Sat–Thu 9–8", phone: "+964 789 303 4040", x: 0.54, y: 0.55 },
  { id: "50", name: "Hillah Laptop Clinic", city: "Hillah", address: "Al-Akrameen Quarter", rating: 4.6, reviews: 172, tags: ["Repairs", "Parts"], hours: "Sat–Thu 10–9", phone: "+964 780 404 5050", x: 0.53, y: 0.53 },
  { id: "51", name: "Euphrates Network Solutions", city: "Hillah", address: "Al-Shawi St, near the river", rating: 4.5, reviews: 119, tags: ["Networking", "Workstations"], hours: "Sat–Thu 9–6", phone: "+964 781 505 6060", x: 0.55, y: 0.54 },
  { id: "52", name: "Hillah Monitor & Parts", city: "Hillah", address: "Al-Jumhuri St, electronics row", rating: 4.4, reviews: 140, tags: ["Parts", "Used Gear"], hours: "Sat–Thu 9–8", phone: "+964 782 606 7070", x: 0.55, y: 0.53 },
  { id: "53", name: "Al-Hashimiya Tech", city: "Hillah", address: "Hashimiya Rd, north Babil", rating: 4.4, reviews: 87, tags: ["Repairs", "Used Gear"], hours: "Sat–Thu 10–7", phone: "+964 783 707 8080", x: 0.53, y: 0.51 },
  { id: "54", name: "Babil Pro Builds", city: "Hillah", address: "60 St, near Babil Governorate", rating: 4.9, reviews: 256, tags: ["Custom Builds", "Workstations", "Gaming"], hours: "Daily 10–11", phone: "+964 784 808 9090", x: 0.54, y: 0.52 },
  { id: "55", name: "Karrada GPU House", city: "Baghdad", address: "Karrada, Arasat St", rating: 4.8, reviews: 344, tags: ["Gaming", "Parts", "Custom Builds"], hours: "Daily 11–11", phone: "+964 770 909 1010", x: 0.56, y: 0.47 },
  { id: "56", name: "New Baghdad PC Repair", city: "Baghdad", address: "Baghdad Al-Jadida, main market", rating: 4.4, reviews: 176, tags: ["Repairs", "Used Gear"], hours: "Sat–Thu 9–8", phone: "+964 771 010 2121", x: 0.60, y: 0.46 },
  { id: "57", name: "Sadr City Electronics", city: "Baghdad", address: "Sadr City, Jamila market", rating: 4.2, reviews: 230, tags: ["Used Gear", "Parts"], hours: "Sat–Thu 8–7", phone: "+964 772 121 3232", x: 0.60, y: 0.43 },
  { id: "58", name: "Jamia Mac & PC", city: "Baghdad", address: "Al-Jamia district, Al-Rubaie St", rating: 4.6, reviews: 189, tags: ["Apple", "Repairs"], hours: "Sat–Thu 10–9", phone: "+964 773 232 4343", x: 0.51, y: 0.46 },
  { id: "59", name: "Erbil Gaming Zone", city: "Erbil", address: "Gulan St, near Majidi Mall", rating: 4.7, reviews: 288, tags: ["Gaming", "Custom Builds"], hours: "Daily 11–11", phone: "+964 750 343 5454", x: 0.62, y: 0.19 },
  { id: "60", name: "Ankawa Computers", city: "Erbil", address: "Ankawa main road", rating: 4.5, reviews: 141, tags: ["Repairs", "Apple", "Networking"], hours: "Sat–Thu 10–9", phone: "+964 751 454 6565", x: 0.61, y: 0.17 },
  { id: "61", name: "Basra Gulf Tech", city: "Basra", address: "Al-Manawi, Al-Watan St", rating: 4.6, reviews: 207, tags: ["Repairs", "Parts", "Networking"], hours: "Sat–Thu 10–9", phone: "+964 772 565 7676", x: 0.69, y: 0.84 },
  { id: "62", name: "Najaf PC Builders", city: "Najaf", address: "Al-Kufa Rd", rating: 4.6, reviews: 160, tags: ["Custom Builds", "Gaming"], hours: "Daily 10–10", phone: "+964 776 676 8787", x: 0.50, y: 0.63 },
  { id: "63", name: "Karbala Tech Plaza", city: "Karbala", address: "Al-Hussein St, Plaza building", rating: 4.5, reviews: 134, tags: ["Parts", "Used Gear", "Repairs"], hours: "Sat–Thu 9–9", phone: "+964 777 787 9898", x: 0.52, y: 0.59 },
  { id: "64", name: "Sulaymaniyah Net Shop", city: "Sulaymaniyah", address: "Sarchnar, Bakhtiari St", rating: 4.6, reviews: 150, tags: ["Networking", "Repairs"], hours: "Sat–Thu 10–8", phone: "+964 778 898 0909", x: 0.75, y: 0.29 },
  { id: "65", name: "Mosul Rebuild Computers", city: "Mosul", address: "Al-Zuhur, Left Bank", rating: 4.5, reviews: 121, tags: ["Repairs", "Used Gear"], hours: "Sat–Thu 9–8", phone: "+964 774 909 1212", x: 0.49, y: 0.19 },
  { id: "66", name: "Kirkuk Gaming Hub", city: "Kirkuk", address: "Al-Qadisiya St", rating: 4.4, reviews: 97, tags: ["Gaming", "Parts"], hours: "Daily 12–10", phone: "+964 779 010 2323", x: 0.60, y: 0.31 },
  { id: "67", name: "Diwaniyah Digital", city: "Diwaniyah", address: "Al-Iskan St, city center", rating: 4.5, reviews: 113, tags: ["Repairs", "Parts"], hours: "Sat–Thu 10–8", phone: "+964 780 121 3434", x: 0.57, y: 0.62 },
  { id: "68", name: "Kut Computer Center", city: "Kut", address: "Al-Hawra St, near the barrage", rating: 4.4, reviews: 102, tags: ["Repairs", "Used Gear"], hours: "Sat–Thu 9–8", phone: "+964 781 232 4545", x: 0.66, y: 0.55 },
  { id: "69", name: "Ramadi Tech Store", city: "Ramadi", address: "20th St, city center", rating: 4.3, reviews: 89, tags: ["Repairs", "Parts"], hours: "Sat–Thu 9–7", phone: "+964 782 343 5656", x: 0.40, y: 0.46 },
  { id: "70", name: "Nasiriyah PC World", city: "Nasiriyah", address: "Al-Habboubi Sq", rating: 4.5, reviews: 118, tags: ["Custom Builds", "Repairs"], hours: "Sat–Thu 10–9", phone: "+964 783 454 6767", x: 0.64, y: 0.72 },
];

export const ALL_CITIES = Array.from(new Set(SHOPS.map((s) => s.city))).sort();
export const ALL_TAGS = Array.from(new Set(SHOPS.flatMap((s) => s.tags))).sort();

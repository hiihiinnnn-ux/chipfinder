export type Part = {
  id: string;
  name: string;
  category: "RAM" | "SSD" | "HDD" | "CPU" | "GPU" | "PSU" | "Motherboard" | "Cooling" | "Laptop Battery" | "Screen" | "Keyboard" | "Charger" | "Cable";
  brand: string;
  price: number; // IQD
  condition: "New" | "Used" | "Refurbished";
  compatibility: string;
  inStock: number;
  shopIds: string[]; // matches Shop.id
};

export const PARTS: Part[] = [
  { id: "p1", name: "DDR4 8GB 3200MHz", category: "RAM", brand: "Kingston", price: 35000, condition: "New", compatibility: "Desktop / Laptop SODIMM variant", inStock: 24, shopIds: ["1", "4", "15"] },
  { id: "p2", name: "DDR4 16GB 3600MHz", category: "RAM", brand: "Corsair Vengeance", price: 78000, condition: "New", compatibility: "Desktop DIMM", inStock: 12, shopIds: ["4", "6", "12"] },
  { id: "p3", name: "DDR5 16GB 5600MHz", category: "RAM", brand: "G.Skill", price: 110000, condition: "New", compatibility: "Intel 12th/13th gen, AMD AM5", inStock: 7, shopIds: ["4", "12"] },

  { id: "p4", name: "NVMe SSD 500GB", category: "SSD", brand: "Samsung 980", price: 75000, condition: "New", compatibility: "M.2 2280 PCIe 3.0", inStock: 18, shopIds: ["1", "3", "6", "15"] },
  { id: "p5", name: "NVMe SSD 1TB", category: "SSD", brand: "WD Black SN770", price: 135000, condition: "New", compatibility: "M.2 2280 PCIe 4.0", inStock: 9, shopIds: ["4", "12", "16"] },
  { id: "p6", name: "SATA SSD 240GB", category: "SSD", brand: "Crucial BX500", price: 32000, condition: "New", compatibility: "2.5'' SATA III", inStock: 30, shopIds: ["2", "3", "8", "10"] },

  { id: "p7", name: "1TB 7200rpm", category: "HDD", brand: "Seagate Barracuda", price: 45000, condition: "New", compatibility: "3.5'' SATA", inStock: 22, shopIds: ["3", "8", "10", "16"] },
  { id: "p8", name: "2TB Laptop Drive", category: "HDD", brand: "WD Blue", price: 70000, condition: "New", compatibility: "2.5'' 7mm SATA", inStock: 6, shopIds: ["1", "5"] },

  { id: "p9", name: "Core i5-12400F", category: "CPU", brand: "Intel", price: 220000, condition: "New", compatibility: "LGA1700", inStock: 5, shopIds: ["4", "12"] },
  { id: "p10", name: "Ryzen 5 5600", category: "CPU", brand: "AMD", price: 195000, condition: "New", compatibility: "AM4", inStock: 8, shopIds: ["4", "6", "15"] },
  { id: "p11", name: "Core i7-10700 (Used)", category: "CPU", brand: "Intel", price: 160000, condition: "Used", compatibility: "LGA1200", inStock: 2, shopIds: ["3", "10"] },

  { id: "p12", name: "RTX 3060 12GB", category: "GPU", brand: "MSI Ventus", price: 520000, condition: "New", compatibility: "PCIe 4.0 x16", inStock: 3, shopIds: ["4", "12"] },
  { id: "p13", name: "GTX 1660 Super", category: "GPU", brand: "Gigabyte", price: 280000, condition: "Refurbished", compatibility: "PCIe 3.0 x16", inStock: 4, shopIds: ["3", "6", "15"] },
  { id: "p14", name: "RX 6600", category: "GPU", brand: "Sapphire Pulse", price: 410000, condition: "New", compatibility: "PCIe 4.0 x16", inStock: 2, shopIds: ["4"] },

  { id: "p15", name: "650W 80+ Bronze", category: "PSU", brand: "Cooler Master MWE", price: 95000, condition: "New", compatibility: "ATX", inStock: 11, shopIds: ["1", "4", "6", "12"] },
  { id: "p16", name: "750W 80+ Gold", category: "PSU", brand: "Corsair RM750", price: 175000, condition: "New", compatibility: "ATX, fully modular", inStock: 5, shopIds: ["4", "12"] },

  { id: "p17", name: "B550 Gaming Plus", category: "Motherboard", brand: "MSI", price: 175000, condition: "New", compatibility: "AM4, ATX", inStock: 4, shopIds: ["4", "6", "15"] },
  { id: "p18", name: "H610M-K", category: "Motherboard", brand: "ASUS Prime", price: 130000, condition: "New", compatibility: "LGA1700, mATX", inStock: 9, shopIds: ["1", "4", "12"] },

  { id: "p19", name: "Hyper 212 Black", category: "Cooling", brand: "Cooler Master", price: 55000, condition: "New", compatibility: "Most modern sockets", inStock: 14, shopIds: ["4", "6", "15"] },
  { id: "p20", name: "120mm RGB Fan (3-pack)", category: "Cooling", brand: "Arctic", price: 42000, condition: "New", compatibility: "120mm chassis", inStock: 20, shopIds: ["1", "4", "12", "15"] },

  { id: "p21", name: "Laptop Battery — HP Pavilion", category: "Laptop Battery", brand: "HP OEM", price: 65000, condition: "New", compatibility: "HP Pavilion 14/15 (2018+)", inStock: 7, shopIds: ["2", "5", "10", "16"] },
  { id: "p22", name: "Laptop Battery — Dell Latitude", category: "Laptop Battery", brand: "Dell OEM", price: 72000, condition: "New", compatibility: "Dell Latitude 5000 series", inStock: 5, shopIds: ["2", "8", "16"] },
  { id: "p23", name: "MacBook Pro Battery A1989", category: "Laptop Battery", brand: "Apple-compatible", price: 145000, condition: "New", compatibility: "MacBook Pro 13'' 2018–2019", inStock: 3, shopIds: ["1", "5", "10", "17"] },

  { id: "p24", name: "15.6'' FHD Screen", category: "Screen", brand: "Generic LED", price: 95000, condition: "New", compatibility: "Most 15.6'' laptops, 30-pin eDP", inStock: 8, shopIds: ["2", "5", "8", "16"] },
  { id: "p25", name: "14'' HD Screen", category: "Screen", brand: "Generic LED", price: 80000, condition: "New", compatibility: "14'' laptops, 30-pin", inStock: 6, shopIds: ["2", "5", "10"] },

  { id: "p26", name: "Lenovo ThinkPad Keyboard", category: "Keyboard", brand: "Lenovo OEM", price: 45000, condition: "New", compatibility: "ThinkPad T/L series", inStock: 4, shopIds: ["1", "8", "16"] },
  { id: "p27", name: "MacBook Air Keyboard A2179", category: "Keyboard", brand: "Apple-compatible", price: 120000, condition: "New", compatibility: "MacBook Air 13'' 2020", inStock: 2, shopIds: ["5", "10", "17"] },

  { id: "p28", name: "65W USB-C Charger", category: "Charger", brand: "Anker", price: 38000, condition: "New", compatibility: "USB-C PD laptops", inStock: 25, shopIds: ["1", "2", "5", "10", "15"] },
  { id: "p29", name: "90W Dell Charger 4.5mm", category: "Charger", brand: "Dell OEM", price: 45000, condition: "New", compatibility: "Dell Latitude / Inspiron", inStock: 12, shopIds: ["2", "8", "16"] },
  { id: "p30", name: "MagSafe 2 85W", category: "Charger", brand: "Apple-compatible", price: 85000, condition: "Refurbished", compatibility: "MacBook Pro 2012–2015", inStock: 3, shopIds: ["1", "5", "17"] },

  { id: "p31", name: "SATA Cable (pack of 4)", category: "Cable", brand: "Generic", price: 8000, condition: "New", compatibility: "All SATA drives", inStock: 50, shopIds: ["3", "8", "10", "16"] },
  { id: "p32", name: "HDMI 2.1 8K 2m", category: "Cable", brand: "Ugreen", price: 18000, condition: "New", compatibility: "HDMI 2.1 devices", inStock: 30, shopIds: ["1", "2", "4", "15"] },
];

export const PART_CATEGORIES = Array.from(new Set(PARTS.map((p) => p.category)));
export const PART_BRANDS = Array.from(new Set(PARTS.map((p) => p.brand))).sort();

export function formatIQD(n: number) {
  return new Intl.NumberFormat("en-IQ").format(n) + " IQD";
}

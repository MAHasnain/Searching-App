addEventListener("DOMContentLoaded", techCatergoryDropdown)

// function selectTechProduct() {
//     const tech_category_select = document.querySelector("#tech_category");
//     event.preventDefault();
//     tech_category_select.innerHTML = "<option value=''>-- Select Category --</option>";
//     console.log(tech_category_select);


//     for (let category in techProducts) {
//         console.log(category);
//         tech_category_select.innerHTML += `<option value="${category}">${category}</option>`;
//     };
// };

// function onCategorySelect() {
//     let selectedCategory = event.target.value;

//     for (let brand in techProducts) {
//         console.log(brand);
//     }

//     brandDropdown(selectedCategory)
// }

// let container = document.getElementById("container")
// function brandDropdown(category) {
//     event.preventDefault();
//     // container.innerHTML = ` <select name="brands" onclick="brandDropdown()" id="brands">`;
//     let brandSelect = document.createElement('select')
//     container.appendChild(brandSelect);

//     let brands = Object.keys(techProducts[category])
//     for (const brand in techProducts[category]) {
//         console.log(brand);

//     }
// }
const techProducts = {
    "Laptops": {
        Apple: [
            { name: "MacBook Air M2", CPU: "Apple M2", Storage: "256GB SSD", Price: "$999" },
            { name: "MacBook Pro 14", CPU: "Apple M3 Pro", Storage: "512GB SSD", Price: "$1999" },
            { name: "MacBook Air M1", CPU: "Apple M1", Storage: "256GB SSD", Price: "$899" },
            { name: "MacBook Pro 16", CPU: "Apple M3 Max", Storage: "1TB SSD", Price: "$3499" },
            { name: "MacBook Pro 13", CPU: "Apple M2", Storage: "512GB SSD", Price: "$1299" },
            { name: "MacBook Air 15", CPU: "Apple M2", Storage: "512GB SSD", Price: "$1399" },
            { name: "MacBook Pro 15 (Intel)", CPU: "Intel i7", Storage: "512GB SSD", Price: "$1799" },
            { name: "MacBook 12", CPU: "Intel Core m3", Storage: "256GB SSD", Price: "$799" },
            { name: "MacBook Air Retina", CPU: "Intel i5", Storage: "128GB SSD", Price: "$699" },
            { name: "MacBook Pro Touch Bar", CPU: "Intel i5", Storage: "512GB SSD", Price: "$1499" }
        ],
        Lenovo: [
            { name: "ThinkPad X1 Carbon", CPU: "Intel i7", Storage: "512GB SSD", Price: "$1399" },
            { name: "IdeaPad 5", CPU: "Intel i5", Storage: "256GB SSD", Price: "$649" },
            { name: "Legion 5 Pro", CPU: "AMD Ryzen 7", Storage: "1TB SSD", Price: "$1199" },
            { name: "Yoga 9i", CPU: "Intel i7", Storage: "1TB SSD", Price: "$1599" },
            { name: "ThinkBook 14", CPU: "Intel i5", Storage: "512GB SSD", Price: "$749" },
            { name: "Legion Slim 7", CPU: "AMD Ryzen 9", Storage: "1TB SSD", Price: "$1499" },
            { name: "IdeaPad Gaming 3", CPU: "Intel i5", Storage: "512GB SSD", Price: "$899" },
            { name: "Yoga Slim 7i", CPU: "Intel i7", Storage: "512GB SSD", Price: "$999" },
            { name: "ThinkPad L14", CPU: "Intel i5", Storage: "256GB SSD", Price: "$699" },
            { name: "IdeaPad Flex 5", CPU: "AMD Ryzen 5", Storage: "512GB SSD", Price: "$729" }
        ],
        Huawei: [
            { name: "MateBook X Pro", CPU: "Intel i7", Storage: "1TB SSD", Price: "$1699" },
            { name: "MateBook D14", CPU: "AMD Ryzen 5", Storage: "512GB SSD", Price: "$599" },
            { name: "MateBook 13", CPU: "Intel i5", Storage: "256GB SSD", Price: "$799" },
            { name: "MateBook 14s", CPU: "Intel i7", Storage: "1TB SSD", Price: "$999" },
            { name: "MateBook D15", CPU: "AMD Ryzen 7", Storage: "512GB SSD", Price: "$699" },
            { name: "MateBook E", CPU: "Intel i3", Storage: "128GB SSD", Price: "$499" },
            { name: "MateBook X", CPU: "Intel i5", Storage: "256GB SSD", Price: "$1099" },
            { name: "MateBook D16", CPU: "Intel i7", Storage: "512GB SSD", Price: "$899" },
            { name: "MateBook B5", CPU: "AMD Ryzen 5", Storage: "512GB SSD", Price: "$849" },
            { name: "MateBook SE", CPU: "Intel N200", Storage: "128GB SSD", Price: "$379" }
        ],
        Microsoft: [
            { name: "Surface Laptop 5", CPU: "Intel i5", Storage: "256GB SSD", Price: "$999" },
            { name: "Surface Pro 9", CPU: "Intel i7", Storage: "512GB SSD", Price: "$1399" },
            { name: "Surface Go 3", CPU: "Intel Pentium", Storage: "128GB SSD", Price: "$449" },
            { name: "Surface Laptop Studio", CPU: "Intel i7", Storage: "1TB SSD", Price: "$1799" },
            { name: "Surface Pro 8", CPU: "Intel i5", Storage: "256GB SSD", Price: "$1099" },
            { name: "Surface Book 3", CPU: "Intel i7", Storage: "512GB SSD", Price: "$1599" },
            { name: "Surface Laptop 4", CPU: "AMD Ryzen 5", Storage: "256GB SSD", Price: "$999" },
            { name: "Surface Go 4", CPU: "Intel N200", Storage: "64GB eMMC", Price: "$399" },
            { name: "Surface Laptop SE", CPU: "Intel Celeron", Storage: "64GB eMMC", Price: "$299" },
            { name: "Surface Neo", CPU: "Intel Lakefield", Storage: "256GB SSD", Price: "$1299" }
        ],
        Realme: [
            { name: "Realme Book Slim", CPU: "Intel i5", Storage: "512GB SSD", Price: "$749" },
            { name: "Realme Book Enhanced", CPU: "Intel i5", Storage: "1TB SSD", Price: "$899" },
            { name: "Realme Book Prime", CPU: "Intel i5", Storage: "512GB SSD", Price: "$799" },
            { name: "Realme Book i3", CPU: "Intel i3", Storage: "256GB SSD", Price: "$549" },
            { name: "Realme Book Ryzen", CPU: "AMD Ryzen 5", Storage: "512GB SSD", Price: "$699" },
            { name: "Realme Book Pro", CPU: "Intel i7", Storage: "1TB SSD", Price: "$1099" },
            { name: "Realme Book Ultra", CPU: "Intel i5", Storage: "512GB SSD", Price: "$849" },
            { name: "Realme Book Lite", CPU: "Intel Celeron", Storage: "128GB SSD", Price: "$399" },
            { name: "Realme Book SE", CPU: "Intel i3", Storage: "256GB SSD", Price: "$499" },
            { name: "Realme Book Neo", CPU: "Intel N200", Storage: "128GB SSD", Price: "$379" }
        ]
    },
    "Gaming PCs": {
        Alienware: [
            { name: "Aurora R15", CPU: "Intel i9 13900KF", GPU: "RTX 4090", price: "$3499" },
            { name: "Aurora Ryzen Edition", CPU: "Ryzen 9 7900X", GPU: "RTX 4080", price: "$2999" },
            { name: "Aurora R13", CPU: "Intel i7 12700KF", GPU: "RTX 3070", price: "$1999" },
            { name: "Aurora R12", CPU: "Intel i5 11600KF", GPU: "RTX 3060", price: "$1499" },
            { name: "Aurora R10", CPU: "Ryzen 7 5800X", GPU: "RTX 3060 Ti", price: "$1699" },
            { name: "Aurora R11", CPU: "Intel i9 10900KF", GPU: "RTX 3080", price: "$2299" },
            { name: "Aurora R9", CPU: "Intel i7 9700KF", GPU: "RTX 2070 Super", price: "$1599" },
            { name: "Aurora R8", CPU: "Intel i5 9600K", GPU: "RTX 2060", price: "$1399" },
            { name: "Aurora R7", CPU: "Intel i7 8700", GPU: "GTX 1080", price: "$1499" },
            { name: "Aurora R6", CPU: "Intel i7 7700", GPU: "GTX 1070", price: "$1299" }
        ],
        "HP Omen": [
            { name: "Omen 45L", CPU: "Intel i9", GPU: "RTX 4090", price: "$3199" },
            { name: "Omen 40L", CPU: "Ryzen 9", GPU: "RTX 3080", price: "$2599" },
            { name: "Omen 30L", CPU: "Intel i7", GPU: "RTX 3070", price: "$1999" },
            { name: "Omen GT13", CPU: "Ryzen 5", GPU: "RTX 3060", price: "$1499" },
            { name: "Omen GT12", CPU: "Intel i5", GPU: "GTX 1660", price: "$999" },
            { name: "Omen 875-1120", CPU: "Intel i7", GPU: "RTX 2060", price: "$1299" },
            { name: "Omen Obelisk", CPU: "Intel i7", GPU: "RTX 2070", price: "$1399" },
            { name: "Omen 870", CPU: "Intel i5", GPU: "GTX 1060", price: "$899" },
            { name: "Omen 880", CPU: "AMD Ryzen 7", GPU: "GTX 1070", price: "$1099" },
            { name: "Omen GT11", CPU: "Intel i5", GPU: "GTX 1650", price: "$849" }
        ],
        MSI: [
            { name: "Aegis RS", CPU: "Intel i9", GPU: "RTX 4080", price: "$2999" },
            { name: "Codex R", CPU: "Intel i5", GPU: "RTX 3060", price: "$1299" },
            { name: "Trident X", CPU: "Intel i7", GPU: "RTX 3070 Ti", price: "$1899" },
            { name: "Infinite RS", CPU: "Ryzen 7", GPU: "RTX 3080", price: "$2299" },
            { name: "Aegis SE", CPU: "Intel i5", GPU: "GTX 1660 Super", price: "$999" },
            { name: "Codex 5", CPU: "Intel i7", GPU: "RTX 2070", price: "$1499" },
            { name: "Aegis Ti5", CPU: "Intel i9", GPU: "RTX 3090", price: "$3999" },
            { name: "Nightblade MI3", CPU: "Intel i5", GPU: "GTX 1050 Ti", price: "$799" },
            { name: "Infinite X", CPU: "Intel i7", GPU: "RTX 2080", price: "$1999" },
            { name: "Trident 3", CPU: "Intel i5", GPU: "GTX 1660", price: "$899" }
        ],
        "CyberPowerPC": [
            { name: "Gamer Xtreme VR", CPU: "Intel i5", GPU: "RTX 3060", price: "$1199" },
            { name: "Gamer Supreme", CPU: "Ryzen 7", GPU: "RTX 3080", price: "$1799" },
            { name: "Creator PC", CPU: "Intel i9", GPU: "RTX 4090", price: "$3299" },
            { name: "Gamer Master", CPU: "Ryzen 5", GPU: "GTX 1660", price: "$899" },
            { name: "Gamer Ultra", CPU: "Intel i3", GPU: "GTX 1050 Ti", price: "$699" }
        ],
        "NZXT": [
            { name: "Streaming PC Pro", CPU: "Ryzen 9", GPU: "RTX 4090", price: "$3499" },
            { name: "Player: One", CPU: "Intel i5", GPU: "RTX 3060", price: "$1199" },
            { name: "Player: Two", CPU: "Intel i7", GPU: "RTX 3070", price: "$1599" },
            { name: "Player: Three", CPU: "Ryzen 7", GPU: "RTX 3080", price: "$1999" },
            { name: "Starter PC", CPU: "Ryzen 5", GPU: "GTX 1660", price: "$899" }
        ]
    },
    "Graphic Cards": {
        "NVIDIA": [
            { name: "GeForce RTX 4090", memory: "24GB GDDR6X", chipset: "Ada Lovelace", price: "$1599" },
            { name: "GeForce RTX 4080 Super", memory: "16GB GDDR6X", chipset: "Ada Lovelace", price: "$999" },
            { name: "GeForce RTX 4070 Ti", memory: "12GB GDDR6X", chipset: "Ada Lovelace", price: "$799" },
            { name: "GeForce RTX 4060 Ti", memory: "8GB GDDR6", chipset: "Ada Lovelace", price: "$399" },
            { name: "GeForce RTX 3080", memory: "10GB GDDR6X", chipset: "Ampere", price: "$699" },
            { name: "GeForce RTX 3070", memory: "8GB GDDR6", chipset: "Ampere", price: "$499" },
            { name: "GeForce RTX 3060", memory: "12GB GDDR6", chipset: "Ampere", price: "$329" },
            { name: "GeForce GTX 1660 Super", memory: "6GB GDDR5", chipset: "Turing", price: "$229" },
            { name: "GeForce GTX 1050 Ti", memory: "4GB GDDR5", chipset: "Pascal", price: "$149" },
            { name: "GeForce RTX 2060", memory: "6GB GDDR6", chipset: "Turing", price: "$279" }
        ],
        "AMD": [
            { name: "Radeon RX 7900 XTX", memory: "24GB GDDR6", chipset: "RDNA 3", price: "$999" },
            { name: "Radeon RX 7900 XT", memory: "20GB GDDR6", chipset: "RDNA 3", price: "$849" },
            { name: "Radeon RX 7800 XT", memory: "16GB GDDR6", chipset: "RDNA 3", price: "$599" },
            { name: "Radeon RX 7700 XT", memory: "12GB GDDR6", chipset: "RDNA 3", price: "$449" },
            { name: "Radeon RX 7600 XT", memory: "16GB GDDR6", chipset: "RDNA 3", price: "$329" },
            { name: "Radeon RX 6700 XT", memory: "12GB GDDR6", chipset: "RDNA 2", price: "$379" },
            { name: "Radeon RX 6600", memory: "8GB GDDR6", chipset: "RDNA 2", price: "$229" },
            { name: "Radeon RX 6500 XT", memory: "4GB GDDR6", chipset: "RDNA 2", price: "$179" },
            { name: "Radeon RX 5700 XT", memory: "8GB GDDR6", chipset: "RDNA", price: "$399" },
            { name: "Radeon RX Vega 64", memory: "8GB HBM2", chipset: "Vega", price: "$299" }
        ],
        "Intel": [
            { name: "Arc A770", memory: "16GB GDDR6", chipset: "Alchemist", price: "$349" },
            { name: "Arc A750", memory: "8GB GDDR6", chipset: "Alchemist", price: "$289" },
            { name: "Arc A580", memory: "8GB GDDR6", chipset: "Alchemist", price: "$229" },
            { name: "Arc A380", memory: "6GB GDDR6", chipset: "Alchemist", price: "$139" },
            { name: "Arc A310", memory: "4GB GDDR6", chipset: "Alchemist", price: "$109" },
            { name: "Arc Pro A60", memory: "12GB GDDR6", chipset: "Alchemist Pro", price: "$349" },
            { name: "Arc Pro A40", memory: "6GB GDDR6", chipset: "Alchemist Pro", price: "$279" },
            { name: "Arc A770 Limited Edition", memory: "16GB GDDR6", chipset: "Alchemist", price: "$399" },
            { name: "Arc A750 LE", memory: "8GB GDDR6", chipset: "Alchemist", price: "$329" },
            { name: "Arc A310 Mini", memory: "4GB GDDR6", chipset: "Alchemist", price: "$99" }
        ],
        "Intel Arc": [
            { name: "Arc A770", VRAM: "16GB GDDR6", MemoryBus: "256-bit", price: "$349" },
            { name: "Arc A750", VRAM: "8GB GDDR6", MemoryBus: "256-bit", price: "$289" },
            { name: "Arc A580", VRAM: "8GB GDDR6", MemoryBus: "128-bit", price: "$179" },
            { name: "Arc A380", VRAM: "6GB GDDR6", MemoryBus: "96-bit", price: "$139" },
            { name: "Arc A310", VRAM: "4GB GDDR6", MemoryBus: "64-bit", price: "$99" }
        ],
        "ZOTAC": [
            { name: "RTX 4070 Twin Edge", VRAM: "12GB GDDR6X", MemoryBus: "192-bit", price: "$599" },
            { name: "RTX 4060 Ti Solo", VRAM: "8GB GDDR6", MemoryBus: "128-bit", price: "$379" },
            { name: "RTX 3060 Twin Edge", VRAM: "12GB GDDR6", MemoryBus: "192-bit", price: "$299" },
            { name: "RTX 3050 OC", VRAM: "8GB GDDR6", MemoryBus: "128-bit", price: "$229" },
            { name: "GTX 1650 OC", VRAM: "4GB GDDR5", MemoryBus: "128-bit", price: "$159" }
        ],
        "Gigabyte": [
            { name: "RTX 4080 Gaming OC", VRAM: "16GB GDDR6X", MemoryBus: "256-bit", price: "$1299" },
            { name: "RTX 4070 Ti WindForce", VRAM: "12GB GDDR6X", MemoryBus: "192-bit", price: "$799" },
            { name: "RX 6750 XT Gaming OC", VRAM: "12GB GDDR6", MemoryBus: "192-bit", price: "$499" },
            { name: "RTX 3060 Eagle", VRAM: "12GB GDDR6", MemoryBus: "192-bit", price: "$279" },
            { name: "GTX 1660 Super OC", VRAM: "6GB GDDR6", MemoryBus: "192-bit", price: "$189" }
        ]
    },
    "Monitors": {
        "Samsung": [
            { name: "Odyssey G3", Size: "27 inch", Resolution: "1920x1080", Price: "$299" },
            { name: "Smart M8", Size: "32 inch", Resolution: "3840x2160", Price: "$699" },
            { name: "Curved CR50", Size: "27 inch", Resolution: "1920x1080", Price: "$249" },
            { name: "Odyssey Neo G8", Size: "32 inch", Resolution: "3840x2160", Price: "$999" },
            { name: "ViewFinity S6", Size: "27 inch", Resolution: "2560x1440", Price: "$399" },
            { name: "Odyssey G5", Size: "32 inch", Resolution: "2560x1440", Price: "$379" },
            { name: "Smart Monitor M5", Size: "27 inch", Resolution: "1920x1080", Price: "$229" },
            { name: "S33A", Size: "24 inch", Resolution: "1920x1080", Price: "$129" },
            { name: "U32J590", Size: "32 inch", Resolution: "3840x2160", Price: "$379" },
            { name: "CJ791", Size: "34 inch", Resolution: "3440x1440", Price: "$599" }
        ],
        "LG": [
            { name: "UltraGear 27GL83A", Size: "27 inch", Resolution: "2560x1440", Price: "$349" },
            { name: "UltraFine 5K", Size: "27 inch", Resolution: "5120x2880", Price: "$1299" },
            { name: "Ergo 32UN880", Size: "32 inch", Resolution: "3840x2160", Price: "$599" },
            { name: "UltraWide 34WN80C", Size: "34 inch", Resolution: "3440x1440", Price: "$699" },
            { name: "27GP950", Size: "27 inch", Resolution: "3840x2160", Price: "$799" },
            { name: "24MP400-B", Size: "24 inch", Resolution: "1920x1080", Price: "$129" },
            { name: "29WP60G", Size: "29 inch", Resolution: "2560x1080", Price: "$249" },
            { name: "32UN650-W", Size: "32 inch", Resolution: "3840x2160", Price: "$449" },
            { name: "34WN750-B", Size: "34 inch", Resolution: "3440x1440", Price: "$579" },
            { name: "24GN650-B", Size: "24 inch", Resolution: "1920x1080", Price: "$229" }
        ],
        "Dell": [
            { name: "S2721DGF", Size: "27 inch", Resolution: "2560x1440", Price: "$399" },
            { name: "U2723QE UltraSharp", Size: "27 inch", Resolution: "3840x2160", Price: "$679" },
            { name: "Alienware AW3423DW", Size: "34 inch", Resolution: "3440x1440", Price: "$1199" },
            { name: "P2723DE", Size: "27 inch", Resolution: "2560x1440", Price: "$489" },
            { name: "G3223Q", Size: "32 inch", Resolution: "3840x2160", Price: "$799" },
            { name: "E2422HS", Size: "24 inch", Resolution: "1920x1080", Price: "$199" },
            { name: "U2422H", Size: "24 inch", Resolution: "1920x1080", Price: "$259" },
            { name: "S2421H", Size: "24 inch", Resolution: "1920x1080", Price: "$149" },
            { name: "P3221D", Size: "32 inch", Resolution: "2560x1440", Price: "$449" },
            { name: "U3821DW", Size: "38 inch", Resolution: "3840x1600", Price: "$1149" }
        ],
        "ASUS": [
            { name: "TUF Gaming VG27AQ", Size: "27 inch", Resolution: "2560x1440", Price: "$329" },
            { name: "ROG Swift PG32UQ", Size: "32 inch", Resolution: "3840x2160", Price: "$899" },
            { name: "ProArt PA278QV", Size: "27 inch", Resolution: "2560x1440", Price: "$399" },
            { name: "VA24DQ", Size: "24 inch", Resolution: "1920x1080", Price: "$159" },
            { name: "ROG Strix XG27AQ", Size: "27 inch", Resolution: "2560x1440", Price: "$479" },
            { name: "VP249QGR", Size: "24 inch", Resolution: "1920x1080", Price: "$199" },
            { name: "TUF VG259Q", Size: "25 inch", Resolution: "1920x1080", Price: "$289" },
            { name: "ROG Swift OLED PG27AQDM", Size: "27 inch", Resolution: "2560x1440", Price: "$999" },
            { name: "ProArt Display PA329CV", Size: "32 inch", Resolution: "3840x2160", Price: "$699" },
            { name: "TUF Gaming VG32VQR", Size: "32 inch", Resolution: "2560x1440", Price: "$379" }
        ],
        "BenQ": [
            { name: "EX3501R", Size: "35 inch", Resolution: "3440x1440", Price: "$549" },
            { name: "PD2700U", Size: "27 inch", Resolution: "3840x2160", Price: "$499" },
            { name: "EW3270U", Size: "32 inch", Resolution: "3840x2160", Price: "$429" },
            { name: "ZOWIE XL2546", Size: "24.5 inch", Resolution: "1920x1080", Price: "$399" },
            { name: "MOBIUZ EX2710Q", Size: "27 inch", Resolution: "2560x1440", Price: "$299" },
            { name: "PD3220U", Size: "32 inch", Resolution: "3840x2160", Price: "$999" },
            { name: "GW2485TC", Size: "24 inch", Resolution: "1920x1080", Price: "$179" },
            { name: "EW2780U", Size: "27 inch", Resolution: "3840x2160", Price: "$379" },
            { name: "EX2780Q", Size: "27 inch", Resolution: "2560x1440", Price: "$349" },
            { name: "ZOWIE XL2411K", Size: "24 inch", Resolution: "1920x1080", Price: "$279" }
        ],
        "Acer": [
            { name: "Nitro VG271", Size: "27 inch", Resolution: "1920x1080", Price: "$229" },
            { name: "Predator XB273K", Size: "27 inch", Resolution: "3840x2160", Price: "$899" },
            { name: "SB220Q", Size: "21.5 inch", Resolution: "1920x1080", Price: "$109" },
            { name: "XFA240", Size: "24 inch", Resolution: "1920x1080", Price: "$199" },
            { name: "R240HY", Size: "23.8 inch", Resolution: "1920x1080", Price: "$149" },
            { name: "ED273", Size: "27 inch", Resolution: "1920x1080", Price: "$179" },
            { name: "CB272 bmiprx", Size: "27 inch", Resolution: "1920x1080", Price: "$199" },
            { name: "XF250Q", Size: "24.5 inch", Resolution: "1920x1080", Price: "$279" },
            { name: "KG241Q", Size: "23.6 inch", Resolution: "1920x1080", Price: "$139" },
            { name: "Predator X34", Size: "34 inch", Resolution: "3440x1440", Price: "$999" }
        ]
    },
    "Smartphones": {
        "Apple": [
            { name: "iPhone 15 Pro Max", CPU: "A17 Pro", Storage: "256GB", Price: "$1199" },
            { name: "iPhone 15", CPU: "A16 Bionic", Storage: "128GB", Price: "$799" },
            { name: "iPhone 14 Pro", CPU: "A16 Bionic", Storage: "256GB", Price: "$999" },
            { name: "iPhone 13", CPU: "A15 Bionic", Storage: "128GB", Price: "$699" },
            { name: "iPhone SE (2022)", CPU: "A15 Bionic", Storage: "64GB", Price: "$429" },
            { name: "iPhone 12", CPU: "A14 Bionic", Storage: "128GB", Price: "$599" },
            { name: "iPhone 11", CPU: "A13 Bionic", Storage: "64GB", Price: "$499" },
            { name: "iPhone XR", CPU: "A12 Bionic", Storage: "128GB", Price: "$399" },
            { name: "iPhone XS", CPU: "A12 Bionic", Storage: "64GB", Price: "$349" },
            { name: "iPhone 13 Mini", CPU: "A15 Bionic", Storage: "128GB", Price: "$599" }
        ],
        "Samsung": [
            { name: "Galaxy S24 Ultra", CPU: "Snapdragon 8 Gen 3", Storage: "256GB", Price: "$1299" },
            { name: "Galaxy S24+", CPU: "Snapdragon 8 Gen 3", Storage: "256GB", Price: "$999" },
            { name: "Galaxy Z Fold 5", CPU: "Snapdragon 8 Gen 2", Storage: "512GB", Price: "$1799" },
            { name: "Galaxy Z Flip 5", CPU: "Snapdragon 8 Gen 2", Storage: "256GB", Price: "$999" },
            { name: "Galaxy A54", CPU: "Exynos 1380", Storage: "128GB", Price: "$449" },
            { name: "Galaxy M14", CPU: "Exynos 1330", Storage: "64GB", Price: "$249" },
            { name: "Galaxy S21 FE", CPU: "Snapdragon 888", Storage: "128GB", Price: "$599" },
            { name: "Galaxy S20 Ultra", CPU: "Exynos 990", Storage: "128GB", Price: "$699" },
            { name: "Galaxy Note 20", CPU: "Snapdragon 865+", Storage: "256GB", Price: "$749" },
            { name: "Galaxy A15", CPU: "MediaTek Helio G99", Storage: "128GB", Price: "$199" }
        ],
        "Google ": [
            { name: "Pixel 8 Pro", CPU: "Google Tensor G3", Storage: "256GB", Price: "$999" },
            { name: "Pixel 8", CPU: "Google Tensor G3", Storage: "128GB", Price: "$699" },
            { name: "Pixel 7 Pro", CPU: "Google Tensor G2", Storage: "256GB", Price: "$799" },
            { name: "Pixel 7", CPU: "Google Tensor G2", Storage: "128GB", Price: "$599" },
            { name: "Pixel 6a", CPU: "Google Tensor", Storage: "128GB", Price: "$349" },
            { name: "Pixel 6 Pro", CPU: "Google Tensor", Storage: "256GB", Price: "$599" },
            { name: "Pixel 5", CPU: "Snapdragon 765G", Storage: "128GB", Price: "$499" },
            { name: "Pixel 4a 5G", CPU: "Snapdragon 765G", Storage: "128GB", Price: "$399" },
            { name: "Pixel 4 XL", CPU: "Snapdragon 855", Storage: "64GB", Price: "$349" },
            { name: "Pixel 3", CPU: "Snapdragon 845", Storage: "64GB", Price: "$299" }
        ],
        "Huawei": [
            { name: "Huawei P60 Pro", CPU: "Snapdragon 8+ Gen 1", Storage: "256GB", Price: "$999" },
            { name: "Huawei Mate 50 Pro", CPU: "Snapdragon 8+ Gen 1", Storage: "256GB", Price: "$899" },
            { name: "Huawei P50 Pocket", CPU: "Snapdragon 888", Storage: "256GB", Price: "$1099" },
            { name: "Huawei Nova 11", CPU: "Snapdragon 778G", Storage: "128GB", Price: "$499" },
            { name: "Huawei Mate Xs 2", CPU: "Snapdragon 888", Storage: "512GB", Price: "$1999" },
            { name: "Huawei P40 Pro", CPU: "Kirin 990 5G", Storage: "256GB", Price: "$699" },
            { name: "Huawei Mate 40 Pro", CPU: "Kirin 9000", Storage: "256GB", Price: "$799" },
            { name: "Huawei Nova 10", CPU: "Snapdragon 778G", Storage: "256GB", Price: "$399" },
            { name: "Huawei Y9a", CPU: "Mediatek G80", Storage: "128GB", Price: "$299" },
            { name: "Huawei Y7a", CPU: "Kirin 710A", Storage: "128GB", Price: "$249" }
        ]
    },
    "Smart Watches": {
        "Apple": [
            { name: "Apple Watch Ultra 2", storage: "64GB", battery: "36 hrs", price: "$799" },
            { name: "Apple Watch Series 9", storage: "64GB", battery: "18 hrs", price: "$399" },
            { name: "Apple Watch SE 2", storage: "32GB", battery: "18 hrs", price: "$249" },
            { name: "Apple Watch Series 8", storage: "32GB", battery: "18 hrs", price: "$299" },
            { name: "Apple Watch Series 7", storage: "32GB", battery: "18 hrs", price: "$279" },
            { name: "Apple Watch SE (2020)", storage: "32GB", battery: "18 hrs", price: "$199" },
            { name: "Apple Watch Series 6", storage: "32GB", battery: "18 hrs", price: "$249" },
            { name: "Apple Watch Series 5", storage: "32GB", battery: "18 hrs", price: "$199" },
            { name: "Apple Watch Series 4", storage: "16GB", battery: "18 hrs", price: "$179" },
            { name: "Apple Watch Series 3", storage: "8GB", battery: "18 hrs", price: "$129" }
        ],
        "Samsung": [
            { name: "Galaxy Watch 6 Classic", storage: "16GB", battery: "40 hrs", price: "$399" },
            { name: "Galaxy Watch 6", storage: "16GB", battery: "40 hrs", price: "$299" },
            { name: "Galaxy Watch 5 Pro", storage: "16GB", battery: "80 hrs", price: "$449" },
            { name: "Galaxy Watch 5", storage: "16GB", battery: "50 hrs", price: "$279" },
            { name: "Galaxy Watch 4 Classic", storage: "16GB", battery: "40 hrs", price: "$349" },
            { name: "Galaxy Watch 4", storage: "16GB", battery: "40 hrs", price: "$249" },
            { name: "Galaxy Watch 3", storage: "8GB", battery: "56 hrs", price: "$229" },
            { name: "Galaxy Watch Active 2", storage: "4GB", battery: "48 hrs", price: "$199" },
            { name: "Galaxy Watch Active", storage: "4GB", battery: "45 hrs", price: "$149" },
            { name: "Gear S3 Frontier", storage: "4GB", battery: "72 hrs", price: "$99" }
        ],
        "Garmin": [
            { name: "Fenix 7X", storage: "32GB", battery: "122 hrs", price: "$899" },
            { name: "Forerunner 965", storage: "32GB", battery: "23 days", price: "$599" },
            { name: "Venu 3", storage: "8GB", battery: "14 days", price: "$449" },
            { name: "Instinct 2X Solar", storage: "4GB", battery: "40 days", price: "$399" },
            { name: "epix Pro", storage: "32GB", battery: "16 days", price: "$899" },
            { name: "Enduro 2", storage: "32GB", battery: "46 days", price: "$999" },
            { name: "Vivoactive 5", storage: "4GB", battery: "11 days", price: "$299" },
            { name: "Lily 2", storage: "4GB", battery: "5 days", price: "$199" },
            { name: "Approach S70", storage: "32GB", battery: "20 hrs", price: "$649" },
            { name: "Descent Mk2", storage: "32GB", battery: "80 hrs", price: "$1299" }
        ],
        "Fitbit": [
            { name: "Fitbit Sense 2", storage: "4GB", battery: "6 days", price: "$299" },
            { name: "Fitbit Versa 4", storage: "4GB", battery: "6 days", price: "$229" },
            { name: "Fitbit Charge 6", storage: "4GB", battery: "7 days", price: "$159" },
            { name: "Fitbit Luxe", storage: "2GB", battery: "5 days", price: "$129" },
            { name: "Fitbit Inspire 3", storage: "2GB", battery: "10 days", price: "$99" },
            { name: "Fitbit Sense", storage: "4GB", battery: "6 days", price: "$249" },
            { name: "Fitbit Versa 3", storage: "4GB", battery: "6 days", price: "$199" },
            { name: "Fitbit Ionic", storage: "2.5GB", battery: "5 days", price: "$179" },
            { name: "Fitbit Alta HR", storage: "1GB", battery: "7 days", price: "$99" },
            { name: "Fitbit Ace 3", storage: "1GB", battery: "8 days", price: "$79" }
        ]
    },
    "Printers": {
        "HP": [
            { name: "HP LaserJet Pro M404n", type: "Laser", resolution: "1200x1200", price: "$199" },
            { name: "HP ENVY Inspire 7955e", type: "Inkjet", resolution: "4800x1200", price: "$189" },
            { name: "HP DeskJet 2755e", type: "Inkjet", resolution: "4800x1200", price: "$89" },
            { name: "HP Smart Tank 7301", type: "Ink Tank", resolution: "4800x1200", price: "$229" },
            { name: "HP Color LaserJet Pro MFP M283fdw", type: "Laser", resolution: "600x600", price: "$449" },
            { name: "HP Neverstop Laser 1001nw", type: "Laser", resolution: "600x600", price: "$189" },
            { name: "HP OfficeJet Pro 9025e", type: "Inkjet", resolution: "4800x1200", price: "$229" },
            { name: "HP LaserJet Tank MFP 2604sdw", type: "Laser", resolution: "600x600", price: "$289" },
            { name: "HP LaserJet Enterprise M507n", type: "Laser", resolution: "1200x1200", price: "$549" },
            { name: "HP OfficeJet 8015e", type: "Inkjet", resolution: "4800x1200", price: "$149" }
        ],
        "Canon": [
            { name: "Canon PIXMA G7020", type: "Ink Tank", resolution: "4800x1200", price: "$299" },
            { name: "Canon imageCLASS MF644Cdw", type: "Laser", resolution: "600x600", price: "$429" },
            { name: "Canon PIXMA TR4720", type: "Inkjet", resolution: "4800x1200", price: "$99" },
            { name: "Canon MAXIFY GX6020", type: "Ink Tank", resolution: "600x1200", price: "$499" },
            { name: "Canon PIXMA MG3620", type: "Inkjet", resolution: "4800x1200", price: "$89" },
            { name: "Canon imageCLASS MF743Cdw", type: "Laser", resolution: "600x600", price: "$549" },
            { name: "Canon PIXMA TS3520", type: "Inkjet", resolution: "4800x1200", price: "$79" },
            { name: "Canon PIXMA TS6420a", type: "Inkjet", resolution: "4800x1200", price: "$129" },
            { name: "Canon Color imageCLASS LBP622Cdw", type: "Laser", resolution: "600x600", price: "$229" },
            { name: "Canon PIXMA Pro-200", type: "Inkjet", resolution: "4800x2400", price: "$599" }
        ],
        "Epson": [
            { name: "Epson EcoTank ET-4760", type: "Ink Tank", resolution: "4800x1200", price: "$499" },
            { name: "Epson WorkForce Pro WF-4830", type: "Inkjet", resolution: "4800x2400", price: "$199" },
            { name: "Epson Expression Home XP-4200", type: "Inkjet", resolution: "5760x1440", price: "$99" },
            { name: "Epson EcoTank ET-2850", type: "Ink Tank", resolution: "5760x1440", price: "$279" },
            { name: "Epson SureColor P700", type: "Photo Inkjet", resolution: "5760x1440", price: "$799" },
            { name: "Epson WorkForce WF-2930", type: "Inkjet", resolution: "5760x1440", price: "$109" },
            { name: "Epson EcoTank ET-2400", type: "Ink Tank", resolution: "5760x1440", price: "$199" },
            { name: "Epson EcoTank ET-8500", type: "Ink Tank", resolution: "5760x1440", price: "$599" },
            { name: "Epson WorkForce WF-3820", type: "Inkjet", resolution: "4800x2400", price: "$169" },
            { name: "Epson SureColor T3170X", type: "Large Format", resolution: "2400x1200", price: "$999" }
        ],
        "Brother": [
            { name: "Brother HL-L2395DW", type: "Laser", resolution: "2400x600", price: "$199" },
            { name: "Brother MFC-J4335DW", type: "Inkjet", resolution: "4800x1200", price: "$149" },
            { name: "Brother HL-L8360CDW", type: "Color Laser", resolution: "2400x600", price: "$399" },
            { name: "Brother DCP-L2550DW", type: "Laser", resolution: "2400x600", price: "$179" },
            { name: "Brother MFC-L3770CDW", type: "Color Laser", resolution: "2400x600", price: "$449" },
            { name: "Brother HL-L3210CW", type: "Color Laser", resolution: "2400x600", price: "$229" },
            { name: "Brother MFC-J995DW", type: "Inkjet", resolution: "6000x1200", price: "$199" },
            { name: "Brother HL-L2325DW", type: "Laser", resolution: "2400x600", price: "$139" },
            { name: "Brother MFC-J1010DW", type: "Inkjet", resolution: "4800x1200", price: "$109" },
            { name: "Brother MFC-L2710DW", type: "Laser", resolution: "2400x600", price: "$179" }
        ]
    }
};

// techCatergorySelect()
// company 
// series

let techCategoriesSelect = document.getElementById("tech_category");
function techCatergoryDropdown() {
    event.preventDefault();
    techCategoriesSelect.innerHTML = "<option value=''>-- Select Category --</option>";
    for (let category in techProducts) {

        techCategoriesSelect.innerHTML += `<option value="${category}">${category}</option>`;
    }
};


let techBrandSelect = document.getElementById("tech_brand");
function onBrandSelect() {
    if (techBrandSelect.value !== 0) {
        techBrandSelect.innerHTML = ""
        techBrandSelect.classList.remove("hidden");
        for (let brand in techProducts[techCategoriesSelect.value]) {
            techBrandSelect.innerHTML += `<option value="${brand}">${brand}</option>`

        }
        showSeries()
    } else if (techBrandSelect.value === 0) {
        techBrandSelect.classList.add("hidden");
    }
}

let productHeading = document.querySelector("#selected_category_heading")
let brandHeading = document.querySelector("#selected_brand_heading")
let series_display = document.getElementById("series_display");

function showSeries() {
    let available_models = techProducts[techCategoriesSelect.value][techBrandSelect.value]

    productHeading.textContent = `${techCategoriesSelect.value}`
    brandHeading.textContent = `${techBrandSelect.value}`
    series_display.innerHTML = "";
    for (let series in available_models) {   //// {name , spec1 , spec2 , price}
        let model = available_models[series]
        // console.log(model);
        let productKeys = Object.keys(model);
        let productValues = Object.values(model);
        // console.log(productKeys);
        // console.log(productValues);
        series_display.innerHTML += `
        <div class="card prevent-select" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="product-name">${productValues[0]}</h5>
                    
                    <p id="spec-1">${productKeys[1]} : ${productValues[1]}</p>
                    <p id="spec-2">${productKeys[2]} : ${productValues[2]}</p>
                    <a href="#" class="btn price-btn">${productKeys[3]} : ${productValues[3]}</a>
                    <a href="#" class="btn cart-btn">Add to Cart</a>
                </div>
            </div>`;
    }


}
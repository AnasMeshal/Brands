const brands = [
  {
    type: "Bag",
    name: "BALR: Brand Duffle Bag Black",
    slug: "BALR:-Brand-U-Series-Duffle-Bag-Black",
    description:
      "Durable duffle bag; One large zipped compartment; Strap and handles; Part of the U-Series",
    material: "Durable nylon fabrics",
    price: "62 KWD",
    size: "52.5 CM W x 29 CM H x 24.5 CM D",
    image:
      "https://cdn.shopify.com/s/files/1/0273/3113/3576/products/webimage-E3115878-9F0F-4BBC-9561538EF2E48E12_400x.png?v=1588345748",
    id: "1",
  },
  {
    type: "Bag",
    name: "Hermes Sacabar 24 bag",
    slug: "Hermes-Sacabar-24-bag",
    description:
      "This printed leather takes its name from a town in south-east England that is famous for its horse races. Its fine, regular grain, obtained through machine-printing, has a striking, beautifully subtle dual tone.",
    material: "Epsom and Swift calfskin and Hunter cowhide",
    price: "2100 KWD",
    size: '9.6" long, 8.7" high and 2.6" deep',
    image:
      "https://assets.hermes.com/is/image/hermesproduct/hermes-sacabar-24-bag--079118CKAA-front-1-300-0-2200-2200_b.jpg",
    id: "2",
  },
  {
    type: "Wallet",
    name: "Louis Vuitton BRAZZA WALLET",
    slug: "Louis-Vuitton-BRAZZA-WALLET",
    description:
      "Safari Khaki; Monogram Eclipse coated canvas; Gusseted bill compartment; Zipped coin compartment; 4 inside flat pockets; 16 card slots",
    material: "Cowhide-leather trim, Cowhide-leather lining",
    price: "200 KWD",
    size: " 10.0 x 19.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M69260_PM2_Front%20view.jpg?wid=1024&hei=1024",
    id: "3",
  },
  {
    type: "Bag",
    name: "Meisterstück Portfolio with Zip",
    slug: "Meisterstück-Portfolio-with-Zip",
    description:
      "Portfolio made of black full-grain cowhide with Montblanc deep shine effect, black jacquard lining and metal L zip",
    material:
      "Full-grain cowhide Leather with Montblanc deep shine, chrome tanned, dyed through",
    price: "230 KWD",
    size: "350 x 15 x 250 mm",
    image:
      "https://www.montblanc.com/content/dam/rcq/mtb/20/43/50/9/2043509.png.adapt.490.490.png",
    id: "4",
  },
  {
    type: "Wallet",
    name: "Louis Vuitton SARAH WALLET",
    slug: "Louis-Vuitton-SARAH-WALLET",
    description:
      "Rose Poudré Pink; Monogram Empreinte; Gold-color hardware; Press-stud closure; 2 large gusseted compartments; Zipped coin pocket; Inside flat pocket; 16 card slots",
    material: "Cowhide-leather",
    price: "290 KWD",
    size: " 19.0 x 10.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M63465_PM2_Front%20view.jpg?wid=640&hei=640",
    id: "5",
  },
  {
    type: "Bag",
    name: "Montblanc Extreme Laptop Case",
    slug: "Montblanc-Extreme-2.0-Laptop-Case",
    description:
      "A business bag with a contemporary yet stylish shape, conceived for the modern city dweller, the Laptop Case is a cross-over item with a functional detachable shoulder strap that allows it to be used as a shoulder bag or portfolio. The practical front pocket keeps all necessary items on hand for urban business life. Well conceived internal organisation with plenty of pockets.",
    material:
      "Split calfskin, chrome-tanned, dyed-through, plain and with carbon fibre print",
    price: "240 KWD",
    size: "370 x 35 x 270 mm",
    image:
      "https://www.montblanc.com/content/dam/rcq/mtb/19/03/37/1/1903371.png.adapt.490.490.png",
    id: "6",
  },
  {
    type: "Bag",
    name: "PRADA Small woven leather tote",
    slug: "PRADA-Small-woven-leather-tote",
    description:
      "Prada's tote has been expertly crafted in Italy from smooth white leather with woven panels across the top that create a scalloped effect. It's emblazoned with the label's moniker and has a spacious interior fitted with a detachable zipped pouch to keep your belongings secure.",
    material: "White leather (Calf)",
    price: "599 KWD",
    size: " 18 x 25 x 13 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1242348/1242348_in_920_q80.jpg",
    id: "7",
  },
  {
    type: "Wallet",
    name: "BALENCIAGA Papier wallet",
    slug: "BALENCIAGA-Papier-mini-printed-textured-leather-wallet",
    description:
      "Although Balenciaga's 'Papier' wallet has a mini profile, it has ample room for your notes and receipts, as well as a separate compartment for coins.",
    material: "Black textured-leather",
    price: "87 KWD",
    size: " 2 x 10 x 6 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1201278/1201278_in_2000.jpg",
    id: "8",
  },
  {
    type: "Wallet",
    name: "CHRISTIAN LOUBOUTIN wallet",
    slug: "CHRISTIAN-LOUBOUTIN-Credilou-spiked-textured-leather-wallet",
    description:
      "Christian Louboutin's textured-leather 'Credilou' wallet is lined with the same scarlet red as the soles of his iconic shoes. It's embellished with spiked studs and a gold logo. Open it up to reveal the zipped coin pouch and three cards slots on the reverse. Use the silver clasped chain to attach yours to your keys or the inside of your handbag.",
    material: "Blush textured-leather (Calf)",
    price: "110 KWD",
    size: "12 x 7 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1098117/1098117_in_2000.jpg",
    id: "9",
  },
  {
    type: "Wallet",
    name: "GUCCI GG wallet",
    slug: "GUCCI-GG-Marmont-quilted-leather-wallet",
    description:
      "A continental wallet is key to keeping organized. Gucci's 'GG Marmont' version has been made in Italy from quilted leather and topped with the label's signature interlocking 'GG' plaque. Its dual-compartment interior is equipped with card slots, sleeves and a zipped pouch.",
    material: "Black leather",
    price: "247 KWD",
    size: "19 x 10 x 4 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1137638/1137638_in_2000.jpg",
    id: "10",
  },
  {
    type: "Bag",
    name: "Botega Veneta Clutch",
    slug: "Botega-Veneta-Bag",
    description:
      "This season, Bottega Veneta's Daniel Lee has added a chunky chain strap to the already iconic 'Pouch' bag. Made in Italy from supple leather, it's artfully gathered and securely fastens with a magnetic closure at the top.",
    material: "Cowhide-leather trim; Cowhide-leather lining",
    price: "1129 KWD",
    size: " 10.0 x 19.0 x 2.0 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1256401/1256401_in_2000.jpg",
    id: "11",
  },
  {
    type: "Shoe",
    name: "Golden Goose Sneakers",
    slug: "Golden-Goose-Shoe",
    description:
      "Golden Goose debuted its 'Superstar' sneakers over 13 years ago, but the brand still finds ways to put a fresh new spin on the design. Exclusive to us, this pair has been made in Italy from smooth leather and has multicolored beads threaded along the laces and eyelets. They have contrasting silver heel tabs and the label's signature rubber soles, which are intended to look scuffed straight out the box.",
    material: "White and silver leather, gray suede",
    price: "134 KWD",
    size: "38",
    image:
      "https://cache.net-a-porter.com/images/products/1244316/1244316_in_2000.jpg",
    id: "12",
  },
  {
    type: "Shoe",
    name: "Nike Sneakers",
    slug: "Nike-Shoe",
    description:
      "Nike's 'Air Max Triax' sneakers were first released in the '90s, and their recent resurgence has amassed a new cult following. Made from panels of lightweight mesh, faux leather and felt, this pair is set on a bouncy rubber sole that's built with signature visible 'Air' units and flex grooves to allow you to move freely.",
    material: "White mesh and faux leather, blue felt",
    price: "13 KWD",
    size: "41",
    image:
      "https://cache.net-a-porter.com/images/products/1207678/1207678_in_2000.jpg",
    id: "13",
  },
  {
    type: "Shoe",
    name: "Gucci Sneakers",
    slug: "Gucci-Shoe",
    description:
      "Inspired, as ever, by the richness of the Gucci archives, these sneakers feature the 'Tennis 1977' label as well as the iconic webbing and embroidered monogram. Made from canvas in Italy, they're set on rubber soles with a green stripe that matches the lining.",
    material: "Blue, green and red canvas",
    price: "210 KWD",
    size: "37",
    image:
      "https://cache.net-a-porter.com/images/products/1203076/1203076_in_2000.jpg",
    id: "14",
  },
  {
    type: "Shoe",
    name: "Prada Sneakers",
    slug: "Prada-Shoe",
    description:
      "Prada's collections are never without technical elements. Set on chunky lug soles, these 'Thunder' sneakers have an army-green mesh upper overlaid with black rubber panels and feature the brand's emblem at the back.",
    material: "Army-green mesh, black and yellow rubber",
    price: "258 KWD",
    size: " 40",
    image:
      "https://cache.net-a-porter.com/images/products/1258216/1258216_in_920_q80.jpg",
    id: "15",
  },
  {
    type: "Shoe",
    name: "Christian Louboutin Sneakers",
    slug: "Christian-Louboutin-Sneakers",
    description:
      "Rose Poudré Pink; Monogram Empreinte; Gold-color hardware; Press-stud closure; 2 large gusseted compartments; Zipped coin pocket; Inside flat pocket; 16 card slots",
    material: "Cowhide-leather",
    price: "398 KWD",
    size: " 38",
    image:
      "https://cache.net-a-porter.com/images/products/1197401/1197401_in_2000.jpg",
    id: "16",
  },
  {
    type: "Shoe",
    name: "Balenciaga Sneakers",
    slug: "Balenciaga-Shoe",
    description:
      "Balenciaga's 'Track' sneakers are instantly recognizable thanks to the extended tread, cage-like construction and overlapping laces - all inspired by performance gear and retro hiking boots. Made from leather, mesh and rubber, they're set on cushioned chunky soles and serrated for extra grip. Pull out the vibrant orange and black accents with your accessories.",
    material:
      "White, orange and black leather, white mesh, white and orange rubber",
    price: "272 KWD",
    size: "36",
    image:
      "https://cache.net-a-porter.com/images/products/1262733/1262733_in_920_q80.jpg",
    id: "17",
  },
  {
    type: "Shoe",
    name: "Alexander McQeen Boots",
    slug: "Alexander-McQeen-Shoe",
    description:
      "Alexander McQueen's Chelsea boots feature the same exaggerated rubber soles as the brand's best-selling sneakers. They're made from glossed-leather with stretchy gray inserts and pull-tabs to make them easy to get on and off.",
    price: "157 KWD",
    size: "40",
    image:
      "https://cache.net-a-porter.com/images/products/1262772/1262772_in_920_q80.jpg",
    id: "18",
  },
  {
    type: "Wallet",
    name: "Chloe Cardholder",
    slug: "Chloé-C-small-leather-cardholder",
    description:
      "Chloé's 'C' line may have only been introduced in Spring '19, but it's quickly become a house signature. Part of the logo-embellished collection, this cardholder is made from smooth leather and has four slots, a slip pocket and a zipped compartment to keep coins, cards and receipts organized.",
    material: "Gray leather (Calf)",
    price: "71 KWD",
    size: " 13 x 8 x 1 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1200784/1200784_in_920_q80.jpg",
    id: "19",
  },
  {
    type: "Wallet",
    name: "Miu Miu Cardholder",
    slug: "Miu-Miu-Wallet",
    description:
      "Miu Miu's cardholder is embellished with strings of crystals that swish playfully below. It's crafted from white textured-leather and has two slots to store your most-used cards. Attach the shoulder strap to carry it at parties.",
    material: "White textured-leather (Calf)",
    price: "153 KWD",
    size: " 117 x 10 x 7 x 1 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1219555/1219555_in_920_q80.jpg",
    id: "20",
  },
];

export default brands;

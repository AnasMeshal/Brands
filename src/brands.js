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
    name: "Balenciaga Wallet",
    slug: "Balenciaga-Wallet",
    description:
      "Prada's shoulder bag has a saddle-inspired shape that sits flat against the body. It's been crafted in Italy from supple leather and is sized to hold just the essentials. The slender strap can be easily adjusted, while the brown hue will complement so much in your closet.",
    material: "Brown leather (Calf)",
    price: "599 KWD",
    size: " (90-115) x 19 x 8 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1201278/1201278_in_2000.jpg",
    id: "8",
  },
  {
    type: "Wallet",
    name: "Christian Louboutin Wallet",
    slug: "Christian-Louboutin-Wallet",
    description:
      "Durable duffle bag; One large zipped compartment; Strap and handles; Part of the U-Series",
    material: "Durable nylon fabrics",
    price: "49 KWD",
    size: "52.5 CM W x 29 CM H x 24.5 CM D",
    image:
      "https://cache.net-a-porter.com/images/products/1098117/1098117_in_2000.jpg",
    id: "9",
  },
  {
    type: "Wallet",
    name: "Gucci wallet",
    slug: "Gucci-Wallet",
    description:
      "This printed leather takes its name from a town in south-east England that is famous for its horse races. Its fine, regular grain, obtained through machine-printing, has a striking, beautifully subtle dual tone.",
    material: "Epsom and Swift calfskin and Hunter cowhide",
    price: "1540 KWD",
    size: '9.6" long, 8.7" high and 2.6" deep',
    image:
      "https://cache.net-a-porter.com/images/products/1137638/1137638_in_2000.jpg",
    id: "10",
  },
  {
    type: "Wallet",
    name: "Botega Veneta Bag",
    slug: "Botega-Veneta-Bag",
    description:
      "Safari Khaki; Monogram Eclipse coated canvas; Gusseted bill compartment; Zipped coin compartment; 4 inside flat pockets; 16 card slots",
    material: "Cowhide-leather trim; Cowhide-leather lining",
    price: "235 KWD",
    size: " 10.0 x 19.0 x 2.0 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1256401/1256401_in_2000.jpg",
    id: "11",
  },
  {
    type: "Shoe",
    name: "Golden Goose Shoe",
    slug: "Golden-Goose-Shoe",
    description:
      "Rose Poudré Pink; Monogram Empreinte; Gold-color hardware; Press-stud closure; 2 large gusseted compartments; Zipped coin pocket; Inside flat pocket; 16 card slots",
    material: "Cowhide-leather",
    price: "316 KWD",
    size: " 19.0 x 10.0 x 2.0 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1244316/1244316_fr_920_q80.jpg",
    id: "12",
  },
  {
    type: "Shoe",
    name: "Nike Shoe",
    slug: "Nike-Shoe",
    description:
      "Durable duffle bag; One large zipped compartment; Strap and handles; Part of the U-Series",
    material: "Durable nylon fabrics",
    price: "108 KWD",
    size: "52.5 CM W x 29 CM H x 24.5 CM D",
    image:
      "https://cache.net-a-porter.com/images/products/1207675/1207675_in_920_q80.jpg",
    id: "13",
  },
  {
    type: "Shoe",
    name: "Gucci Shoe",
    slug: "Gucci-Shoe",
    description:
      "This printed leather takes its name from a town in south-east England that is famous for its horse races. Its fine, regular grain, obtained through machine-printing, has a striking, beautifully subtle dual tone.",
    material: "Epsom and Swift calfskin and Hunter cowhide",
    price: "610 KWD",
    size: '9.6" long, 8.7" high and 2.6" deep',
    image:
      "https://cache.net-a-porter.com/images/products/1009127/1009127_in_920_q80.jpg",
    id: "14",
  },
  {
    type: "Shoe",
    name: "Prada Shoe",
    slug: "Prada-Shoe",
    description:
      "Safari Khaki; Monogram Eclipse coated canvas; Gusseted bill compartment; Zipped coin compartment; 4 inside flat pockets; 16 card slots",
    material: "Cowhide-leather trim; Cowhide-leather lining",
    price: "358 KWD",
    size: " 10.0 x 19.0 x 2.0 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1258216/1258216_in_920_q80.jpg",
    id: "15",
  },
  {
    type: "Shoe",
    name: "Veja Shoe",
    slug: "Veja-Shoe",
    description:
      "Rose Poudré Pink; Monogram Empreinte; Gold-color hardware; Press-stud closure; 2 large gusseted compartments; Zipped coin pocket; Inside flat pocket; 16 card slots",
    material: "Cowhide-leather",
    price: "420 KWD",
    size: " 19.0 x 10.0 x 2.0 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1235636/1235636_in_920_q80.jpg",
    id: "16",
  },
  {
    type: "Shoe",
    name: "Balenciaga Shoe",
    slug: "Balenciaga-Shoe",
    description:
      "Durable duffle bag; One large zipped compartment; Strap and handles; Part of the U-Series",
    material: "Durable nylon fabrics",
    price: "65 KWD",
    size: "52.5 CM W x 29 CM H x 24.5 CM D",
    image:
      "https://cache.net-a-porter.com/images/products/1262733/1262733_in_920_q80.jpg",
    id: "17",
  },
  {
    type: "Shoe",
    name: "Alexander McQeen Shoe",
    slug: "Alexander-McQeen-Shoe",
    description:
      "This printed leather takes its name from a town in south-east England that is famous for its horse races. Its fine, regular grain, obtained through machine-printing, has a striking, beautifully subtle dual tone.",
    material: "Epsom and Swift calfskin and Hunter cowhide",
    price: "530 KWD",
    size: '9.6" long, 8.7" high and 2.6" deep',
    image:
      "https://cache.net-a-porter.com/images/products/1262772/1262772_in_920_q80.jpg",
    id: "18",
  },
  {
    type: "Wallet",
    name: "Chloe Wallet",
    slug: "Chloe-Wallet",
    description:
      "Safari Khaki; Monogram Eclipse coated canvas; Gusseted bill compartment; Zipped coin compartment; 4 inside flat pockets; 16 card slots",
    material: "Cowhide-leather trim; Cowhide-leather lining",
    price: "460 KWD",
    size: " 10.0 x 19.0 x 2.0 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1200784/1200784_in_920_q80.jpg",
    id: "19",
  },
  {
    type: "Wallet",
    name: "Miu Miu Wallet",
    slug: "Miu-Miu-Wallet",
    description:
      "Rose Poudré Pink; Monogram Empreinte; Gold-color hardware; Press-stud closure; 2 large gusseted compartments; Zipped coin pocket; Inside flat pocket; 16 card slots",
    material: "Cowhide-leather",
    price: "290 KWD",
    size: " 19.0 x 10.0 x 2.0 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1219555/1219555_in_920_q80.jpg",
    id: "20",
  },
];

export default brands;

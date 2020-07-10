const brands = [
  {
    type: "Bag",
    name: "BALR: Brand U-Series Duffle Bag Black",
    slug: "BALR:-Brand-U-Series-Duffle-Bag-Black",
    description:
      "Durable duffle bag; One large zipped compartment; Strap and handles; Part of the U-Series",
    material: "Durable nylon fabrics",
    price: "135 Euros",
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
    price: "6350 Dollars",
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
    material: "Cowhide-leather trim; Cowhide-leather lining",
    price: "765 Dollars",
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
    price: "1030 Dollars",
    size: " 19.0 x 10.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M63465_PM2_Front%20view.jpg?wid=640&hei=640",
    id: "5",
  },
  {
    type: "Bag",
    name: "Montblanc Extreme 2.0 Laptop Case",
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
    type: "Bag",
    name: "PRADA Leather Shoulder Bag",
    slug: "PRADA-Leather-Shoulder-Bag",
    description:
      "Prada's shoulder bag has a saddle-inspired shape that sits flat against the body. It's been crafted in Italy from supple leather and is sized to hold just the essentials. The slender strap can be easily adjusted, while the brown hue will complement so much in your closet.",
    material: "Brown leather (Calf)",
    price: "599 KWD",
    size: " (90-115) x 19 x 8 cm",
    image:
      "https://cache.net-a-porter.com/images/products/1242341/1242341_in_2000.jpg",
    id: "8",
  },
  {
    type: "Bag",
    name: "BALR: Brand U-Series Duffle Bag Black",
    slug: "BALR:-Brand-U-Series-Duffle-Bag-Black",
    description:
      "Durable duffle bag; One large zipped compartment; Strap and handles; Part of the U-Series",
    material: "Durable nylon fabrics",
    price: "135 Euros",
    size: "52.5 CM W x 29 CM H x 24.5 CM D",
    image:
      "https://cdn.shopify.com/s/files/1/0273/3113/3576/products/webimage-E3115878-9F0F-4BBC-9561538EF2E48E12_400x.png?v=1588345748",
    id: "9",
  },
  {
    type: "Bag",
    name: "Hermes Sacabar 24 bag",
    slug: "Hermes-Sacabar-24-bag",
    description:
      "This printed leather takes its name from a town in south-east England that is famous for its horse races. Its fine, regular grain, obtained through machine-printing, has a striking, beautifully subtle dual tone.",
    material: "Epsom and Swift calfskin and Hunter cowhide",
    price: "6350 Dollars",
    size: '9.6" long, 8.7" high and 2.6" deep',
    image:
      "https://assets.hermes.com/is/image/hermesproduct/hermes-sacabar-24-bag--079118CKAA-front-1-300-0-2200-2200_b.jpg",
    id: "10",
  },
  {
    type: "Wallet",
    name: "Louis Vuitton BRAZZA WALLET",
    slug: "Louis-Vuitton-BRAZZA-WALLET",
    description:
      "Safari Khaki; Monogram Eclipse coated canvas; Gusseted bill compartment; Zipped coin compartment; 4 inside flat pockets; 16 card slots",
    material: "Cowhide-leather trim; Cowhide-leather lining",
    price: "765 Dollars",
    size: " 10.0 x 19.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M69260_PM2_Front%20view.jpg?wid=1024&hei=1024",
    id: "11",
  },
  {
    type: "Wallet",
    name: "Louis Vuitton SARAH WALLET",
    slug: "Louis-Vuitton-SARAH-WALLET",
    description:
      "Rose Poudré Pink; Monogram Empreinte; Gold-color hardware; Press-stud closure; 2 large gusseted compartments; Zipped coin pocket; Inside flat pocket; 16 card slots",
    material: "Cowhide-leather",
    price: "1030 Dollars",
    size: " 19.0 x 10.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M69260_PM2_Front%20view.jpg?wid=1024&hei=1024",
    id: "12",
  },
  {
    type: "Bag",
    name: "BALR: Brand U-Series Duffle Bag Black",
    slug: "BALR:-Brand-U-Series-Duffle-Bag-Black",
    description:
      "Durable duffle bag; One large zipped compartment; Strap and handles; Part of the U-Series",
    material: "Durable nylon fabrics",
    price: "135 Euros",
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
    price: "6350 Dollars",
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
    material: "Cowhide-leather trim; Cowhide-leather lining",
    price: "765 Dollars",
    size: " 10.0 x 19.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M69260_PM2_Front%20view.jpg?wid=1024&hei=1024",
    id: "3",
  },
  {
    type: "Wallet",
    name: "Louis Vuitton SARAH WALLET",
    slug: "Louis-Vuitton-SARAH-WALLET",
    description:
      "Rose Poudré Pink; Monogram Empreinte; Gold-color hardware; Press-stud closure; 2 large gusseted compartments; Zipped coin pocket; Inside flat pocket; 16 card slots",
    material: "Cowhide-leather",
    price: "1030 Dollars",
    size: " 19.0 x 10.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M69260_PM2_Front%20view.jpg?wid=1024&hei=1024",
    id: "4",
  },
  {
    type: "Bag",
    name: "BALR: Brand U-Series Duffle Bag Black",
    slug: "BALR:-Brand-U-Series-Duffle-Bag-Black",
    description:
      "Durable duffle bag; One large zipped compartment; Strap and handles; Part of the U-Series",
    material: "Durable nylon fabrics",
    price: "135 Euros",
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
    price: "6350 Dollars",
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
    material: "Cowhide-leather trim; Cowhide-leather lining",
    price: "765 Dollars",
    size: " 10.0 x 19.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M69260_PM2_Front%20view.jpg?wid=1024&hei=1024",
    id: "3",
  },
  {
    type: "Wallet",
    name: "Louis Vuitton SARAH WALLET",
    slug: "Louis-Vuitton-SARAH-WALLET",
    description:
      "Rose Poudré Pink; Monogram Empreinte; Gold-color hardware; Press-stud closure; 2 large gusseted compartments; Zipped coin pocket; Inside flat pocket; 16 card slots",
    material: "Cowhide-leather",
    price: "1030 Dollars",
    size: " 19.0 x 10.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M69260_PM2_Front%20view.jpg?wid=1024&hei=1024",
    id: "4",
  },
  {
    type: "Bag",
    name: "BALR: Brand U-Series Duffle Bag Black",
    slug: "BALR:-Brand-U-Series-Duffle-Bag-Black",
    description:
      "Durable duffle bag; One large zipped compartment; Strap and handles; Part of the U-Series",
    material: "Durable nylon fabrics",
    price: "135 Euros",
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
    price: "6350 Dollars",
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
    material: "Cowhide-leather trim; Cowhide-leather lining",
    price: "765 Dollars",
    size: " 10.0 x 19.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M69260_PM2_Front%20view.jpg?wid=1024&hei=1024",
    id: "3",
  },
  {
    type: "Wallet",
    name: "Louis Vuitton SARAH WALLET",
    slug: "Louis-Vuitton-SARAH-WALLET",
    description:
      "Rose Poudré Pink; Monogram Empreinte; Gold-color hardware; Press-stud closure; 2 large gusseted compartments; Zipped coin pocket; Inside flat pocket; 16 card slots",
    material: "Cowhide-leather",
    price: "1030 Dollars",
    size: " 19.0 x 10.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M69260_PM2_Front%20view.jpg?wid=1024&hei=1024",
    id: "4",
  },
  {
    type: "Bag",
    name: "BALR: Brand U-Series Duffle Bag Black",
    slug: "BALR:-Brand-U-Series-Duffle-Bag-Black",
    description:
      "Durable duffle bag; One large zipped compartment; Strap and handles; Part of the U-Series",
    material: "Durable nylon fabrics",
    price: "135 Euros",
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
    price: "6350 Dollars",
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
    material: "Cowhide-leather trim; Cowhide-leather lining",
    price: "765 Dollars",
    size: " 10.0 x 19.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M69260_PM2_Front%20view.jpg?wid=1024&hei=1024",
    id: "3",
  },
  {
    type: "Wallet",
    name: "Louis Vuitton SARAH WALLET",
    slug: "Louis-Vuitton-SARAH-WALLET",
    description:
      "Rose Poudré Pink; Monogram Empreinte; Gold-color hardware; Press-stud closure; 2 large gusseted compartments; Zipped coin pocket; Inside flat pocket; 16 card slots",
    material: "Cowhide-leather",
    price: "1030 Dollars",
    size: " 19.0 x 10.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M69260_PM2_Front%20view.jpg?wid=1024&hei=1024",
    id: "4",
  },
  {
    type: "Bag",
    name: "BALR: Brand U-Series Duffle Bag Black",
    slug: "BALR:-Brand-U-Series-Duffle-Bag-Black",
    description:
      "Durable duffle bag; One large zipped compartment; Strap and handles; Part of the U-Series",
    material: "Durable nylon fabrics",
    price: "135 Euros",
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
    price: "6350 Dollars",
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
    material: "Cowhide-leather trim; Cowhide-leather lining",
    price: "765 Dollars",
    size: " 10.0 x 19.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M69260_PM2_Front%20view.jpg?wid=1024&hei=1024",
    id: "3",
  },
  {
    type: "Wallet",
    name: "Louis Vuitton SARAH WALLET",
    slug: "Louis-Vuitton-SARAH-WALLET",
    description:
      "Rose Poudré Pink; Monogram Empreinte; Gold-color hardware; Press-stud closure; 2 large gusseted compartments; Zipped coin pocket; Inside flat pocket; 16 card slots",
    material: "Cowhide-leather",
    price: "1030 Dollars",
    size: " 19.0 x 10.0 x 2.0 cm",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M69260_PM2_Front%20view.jpg?wid=1024&hei=1024",
    id: "4",
  },
];

export default brands;

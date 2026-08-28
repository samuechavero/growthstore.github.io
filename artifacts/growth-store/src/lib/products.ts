export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  accent: string;
};

export const categories = [
  'Todos los productos',
  'Termos y Vasos',
  'Auriculares',
  'Cables y Cargadores',
  'Parlantes',
  'Relojes',
  'Hogar y Bazar',
  'Juguetería y Niños',
  'Cuidado Personal',
  'Iluminación',
  'Herramientas y Seguridad',
  'Pilas y Baterías',
] as const;

export const mockProducts: Product[] = [
  {
    "id": "prod-1",
    "name": "PLANCHA DE PELO ALMI BEAUTY",
    "category": "Cuidado Personal",
    "description": "📌 45W de potencia\n📌 Temperatura máxima 710-950°\n📌 Función de protección contra sobrecalentamiento\n📍NHC-8558",
    "price": 19975,
    "image": "https://drive.google.com/uc?export=view&id=1s1LpmxduV2EUz0ePUsBN3CTQbjSMKSmn",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-2",
    "name": "Taza batidora recargable",
    "category": "Termos y Vasos",
    "description": "📌Imán giratorio ideal para batir el café\n📌Tapa y pico\n📌Recargable a USB o funciona con 2 pilas",
    "price": 26250,
    "image": "https://drive.google.com/uc?export=view&id=1UhM13a85D5p5cFL0TkJmMSr6oXP7ElQ6",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-3",
    "name": "Adaptador universal internacional",
    "category": "Hogar y Bazar",
    "description": "🏷️Apto para usar en más de 150 países. Ideal para todos tus viajes.\n🏷️110V 220V. No realiza la conversión en voltajes",
    "price": 6725,
    "image": "https://drive.google.com/uc?export=view&id=1sDQlk3FoOVsxPZRRfOAjgq4AzMIreh0K",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-4",
    "name": "Auriculares Bluetooth Q86",
    "category": "Auriculares",
    "description": "📌Conexión inalámbrica 5.49\n📌Power bank portátil\n📌Varios colores disponibles\n📍Sound by KFG Q86",
    "price": 16475,
    "image": "https://drive.google.com/uc?export=view&id=1PaIfOWnFOWOEx5taeuxVniccjBuXGsDR",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-5",
    "name": "Botella Enjoy",
    "category": "Termos y Vasos",
    "description": "📌500ml de capacidad\n📌Pico de botella y sorbete\n📌Seguro antiderrames\n📌Acero inoxidable conserva frío/calor\n📍Enjoy your life OSO-823A",
    "price": 27475,
    "image": "https://drive.google.com/uc?export=view&id=1etdejILseI-7E_S_NKS34SFaWzXcmud8",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-6",
    "name": "Correa de perros retráctil",
    "category": "Hogar y Bazar",
    "description": "📌5 metros de largo\n📌Mango cómodo para largos paseos\n📌Gancho de seguridad para el collar",
    "price": 14750,
    "image": "https://drive.google.com/uc?export=view&id=1x88X6EVWMrQKBy_qvP5pglqmYHKs1dRE",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-7",
    "name": "Auriculares M10 TWS👽",
    "category": "Auriculares",
    "description": "🔖Nuevo diseño. Sonido alta fidelidad.\n🔖Power bank para cargar este y otros dispositivos\n🔖Caja con led visualizador. Bluetooth v5.2.",
    "price": 12475,
    "image": "https://drive.google.com/uc?export=view&id=1iIu4XGex_e0varmuwt6AND45lvRI07tS",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-8",
    "name": "Set termo + 3 tazas",
    "category": "Termos y Vasos",
    "description": "📌 Termo acero inoxidable 500ml.\n12 horas frío/calor\n📌Tapón cebador. 3 tazas.\n📌Ideal para viajes",
    "price": 28750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-9",
    "name": "TIRA NEON DE COLORES",
    "category": "Iluminación",
    "description": "📌 5 metros de longitud\n📌 Flexible\n📌 Vida útil hasta 15 veces mayor\n📍NL-1",
    "price": 22475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-10",
    "name": "Repasadores de cocina corazones",
    "category": "Termos y Vasos",
    "description": "📌Material de toalla\n📌Ideal para secar",
    "price": 3225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-11",
    "name": "MANTEL A CUADROS",
    "category": "Hogar y Bazar",
    "description": "📌2mt x 146cm\n📌variedad de colores",
    "price": 14000,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-12",
    "name": "Set cubiertos asado",
    "category": "Hogar y Bazar",
    "description": "📌12 cubiertos de acero inoxidable y madera.\n📌Cuchillos más grandes ideales para el asado.\n🏷️Marbella -Churrasco.",
    "price": 59225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-13",
    "name": "Repasadores de cocina Galleta",
    "category": "Hogar y Bazar",
    "description": "📌Algodón premium\n📌Ideal para secar!",
    "price": 3975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-14",
    "name": "Espejo tocador LED",
    "category": "Cuidado Personal",
    "description": "📍3 tonos de luz e intensidades\n📍Base organizadora\n📍Regargable, usb\n📌 ACC0028BLA",
    "price": 11250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-15",
    "name": "Humidificador de ambiente RGB",
    "category": "Termos y Vasos",
    "description": "📌Aromatiza y humidifica el ambiente\n📌Vaporizador y aromaterapia\n📌Incluye cable USB\n📍HOG0062CLA",
    "price": 11750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-16",
    "name": "Botella Cute Friends",
    "category": "Termos y Vasos",
    "description": "📌650ml de capacidad\n📌Pico antiderrame con tapa\n📌Doble capa de acero inoxidable\n📌Manija para trasladar\n📍Beichuang Vacuum Cup OSO-823",
    "price": 34750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-17",
    "name": "Licuadora de vidrio 3 en 1",
    "category": "Hogar y Bazar",
    "description": "📌 1.6 litros de capacidad\n📌Jarra de vidrio con medidas\n📌 Molinillo para café\n📌Marbella MB-999",
    "price": 78250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-18",
    "name": "Combo Bronze ⭐",
    "category": "Termos y Vasos",
    "description": "📌 Termo de acero inoxidable doble capa.\n📌Conserva la temperatura por más 12hs\n📌 Incluye +\n📌 Yerbera y azucarera",
    "price": 72250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-19",
    "name": "SECADOR DE PELO OGAAN",
    "category": "Cuidado Personal",
    "description": "🔖 1500 RPM\n🔖 2000W\n🔖 Aire caliente y frío\n🔖 Incluye difusor\n📍RD-2001",
    "price": 36725,
    "image": "https://drive.google.com/uc?export=view&id=16RzbQy2ZVYOq0r76j1Z8hl4k37V05Bol",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-20",
    "name": "MÁQUINA DE DONAS",
    "category": "Hogar y Bazar",
    "description": "📌 Capacidad de 12 mini donitas\n📌 Cocción rápida y práctica\n📌 Placas antiadherente\n📌 Fácil de limpiar\n📍HT-1023",
    "price": 93725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-21",
    "name": "Mini aspiradora portátil",
    "category": "Hogar y Bazar",
    "description": "📌 Potencia 120w, permite realizar sellado al vacío aspirando el aire de bolsas y paquetes.\n📌Posee una boquilla pequeña que lo hace llegar a todos los rincones.\n📌 Puede utilizarse como inflador también.\n📌Ideal para autos y tapizados.\n📌 Recargable USB\n📌 Realiza una limpieza rápida y versátil!\n📍AS-228",
    "price": 14475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-22",
    "name": "Auriculares con Reloj",
    "category": "Auriculares",
    "description": "📌Auriculares estilo Airpods\n📌Con powerbank y estuche\n📌Relojes en colores pasteles\n📍TWS-K46",
    "price": 28750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-23",
    "name": "Auricular Gatito bluetooth",
    "category": "Auriculares",
    "description": "📌 Calidad premium\n📌Diseño de gatito y orejas con luces LED.\n📌Sonido de alta definición\n📌Vincha ajustable. Batería recargable.\n📌Micrófono incluido\n📍 XX0066",
    "price": 14750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-24",
    "name": "PARLANTE 12 PULGADAS",
    "category": "Parlantes",
    "description": "📌batería recargable , bluetooth, radio FM\n📌incluye micrófono y control remoto",
    "price": 264000,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-25",
    "name": "GUIRNALDA KERMESSE",
    "category": "Iluminación",
    "description": "📌10m de largo\n📌10 portalámparas\n📌220v\nSIN FOCOS",
    "price": 25725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-26",
    "name": "CANASTO DE ROPA",
    "category": "Hogar y Bazar",
    "description": "📌45 cm x 32cm y 25 de profundidad\n📌interior impermeable\n📌soporte hierro",
    "price": 14750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-27",
    "name": "HOLDER PARA AUTO🚗💥",
    "category": "Hogar y Bazar",
    "description": "📌 Boton para ajustar\n📌 Soporte giratorio de 360°\n📍6602",
    "price": 9975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-28",
    "name": "👚SACAPELUSAS RECARGABLE",
    "category": "Hogar y Bazar",
    "description": "🔖Portátil y recargable a USB\n🔖No daña la ropa\n🔖Rápido y eficaz",
    "price": 16725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-29",
    "name": "👩🏼🍳Set 12 utensilios de cocina",
    "category": "Hogar y Bazar",
    "description": "📌 12 piezas de silicona con mango de madera resistente al calor y facil de limpiar!\n📌Diseño práctico, moderno y sofisticado\n📌 Batidor, cuchara, cucharon, espátulas, etc\n📌 Pinza y brocha para pincelar\n📌Recipiente para guardar\n📌 12 piezas de silicona con mango de madera resistente al calor y facil de limpiar!\n📌Diseño práctico, moderno y sofisticado\n📌 Batidor, cuchara, cucharon, espátulas, etc\n📌 Pinza y brocha para pincelar\n📌Recipiente para guardar",
    "price": 33225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-30",
    "name": "Linterna táctica LED P50 🔦",
    "category": "Termos y Vasos",
    "description": "📌 Potente LED linterna USB recargable linterna antorcha táctica luz Camping montar el poder de la luz de 18650\n📌 Modelo: LED táctica P50\n📌 Fuente de alimentación: 1 x batería 18650 recargable (INCLUIDA) 3 x Pilas AAA (NO INCLUIDAS)\n📌 Tiempo de iluminación: 2-8 horas\n📌 Metodo de carga USB\n📌 Rango: 200 a 500 metros\n📌 Material: aluminio de aviación\n📌 Tamaño extensible : 17cm hasta 19cm\n📌 Usos: caza, patrulla, construcción, caminata, hogar, mantenimiento, búsqueda y rescate\n📌 Potente LED linterna USB recargable linterna antorcha táctica luz\nCamping montar el poder de la luz de 18650\n📌 Modelo: LED táctica P50\n📌 Fuente de alimentación: 1 x batería 18650 recargable (INCLUIDA) 3 x Pilas AAA (NO INCLUIDAS)\n📌 Tiempo de iluminación: 2-8 horas\n📌 Metodo de carga USB\n📌 Rango: 200 a 500 metros\n📌 Material: aluminio de aviación\n📌 Tamaño extensible : 17cm hasta 19cm\n📌 Usos: caza, patrulla, construcción, caminata, hogar, mantenimiento, búsqueda y rescate",
    "price": 25475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-31",
    "name": "Termo media manija🧉",
    "category": "Termos y Vasos",
    "description": "📌Capacidad: 1L\n📌Doble capa de acero inoxidable\n📍M&R\n📌Capacidad: 1L\n📌Doble capa de acero inoxidable\n📍M&R",
    "price": 29475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-32",
    "name": "Batidora Haley🥧",
    "category": "Hogar y Bazar",
    "description": "📌Potencia 500W\n📌7 velocidades\n📌2 pares de paletas paracada batido.\n📍HY-1658\n📌Potencia 500W\n📌7 velocidades\n📌2 pares de paletas paracada batido.\n📍HY-1658",
    "price": 38475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-33",
    "name": "Cargador turbo 12v💎",
    "category": "Termos y Vasos",
    "description": "📌45w de potencia (20w-25w)\n📌2 puerto tipo C\n📌diseño compacto y material metalico resistente\n📍XAEA, MODX-00C4\n📌45w de potencia (20w-25w)📌2 puerto tipo C 📌diseño compacto y material metalico resistente\n📍XAEA, MODX-00C4",
    "price": 21975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-34",
    "name": "Mousse inalámbrico GTC🐭",
    "category": "Hogar y Bazar",
    "description": "📌Compatible con Windows\n📌Conexión Usb\n📌Alcance de 12mts.\n📌Diseño Soft Palm\n📍GTC MIG-123R\n📌Compatible con Windows\n📌Conexión Usb📌Alcance de 12mts.\n📌Diseño Soft Palm\n📍GTC MIG-123R",
    "price": 16975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-35",
    "name": "Auriculares Samsung original⭐️",
    "category": "Auriculares",
    "description": "🏷️Manos libres. Audífonos súper cómodos. Entrada 3.5mm\n🏷️Samsung C550\n$0,00\n$0,26\n$0,00",
    "price": 4475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-36",
    "name": "🚧 Soporte TV fijo",
    "category": "Hogar y Bazar",
    "description": "📌De 14\" Hasta 42\"\n📍HD601\n📌De 14\" Hasta 42\"\n📍HD601",
    "price": 7475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-37",
    "name": "Microfono corbatero 🎤",
    "category": "Cables y Cargadores",
    "description": "📌Incluye 1 micrófono inalámbrico recargable\n📌1 receptor con entrada tipo C + 1 adaptador para iPhone\n📌Cable para cargar\n📍DXBATCORTC\n📌Incluye 1 micrófono inalámbrico recargable\n📌1 receptor con entrada tipo C + 1 adaptador para iPhone\n📌Cable para cargar\n📍DXBATCORTC",
    "price": 9975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-38",
    "name": "LÁPIZ 3D DE IMPRESIÓN🎨✍️",
    "category": "Cables y Cargadores",
    "description": "🔖 Dibuja en 3D con filamento PLA.\n🔖 Pantalla LCD param controlar el funcionamiento.\n🔖Velocidad de extrusión regulable.\n🔖 Liviano, cómodo y fácil de usar.\n🔖 Diseño ergonómico.\n🔖 Alimentación porm USB.\n🔖 Incluye:\n- Lápiz 3D.\n- Cable USB.\n- Filamento PLA para comenzar a crear.\n- Base porta lápiz.\n📍EXXTRA TECH, XX0064\n🔖 Dibuja en 3D con filamento PLA.🔖 Pantalla LCD param controlar el funcionamiento.\n🔖Velocidad de extrusión regulable.🔖 Liviano, cómodo y fácil de usar.\n🔖 Diseño ergonómico.\n🔖 Alimentación porm USB.\n🔖 Incluye:\n- Lápiz 3D.\n- Cable USB.\n- Filamento PLA para comenzar a crear.\n- Base porta lápiz.\n📍EXXTRA TECH, XX0064",
    "price": 31225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-39",
    "name": "Vaso de vidrio doble capa🥃",
    "category": "Termos y Vasos",
    "description": "🔖Capacidad: 150ml\n🔖76 x 80 x 50cm\n🔖Capacidad: 150ml\n🔖76 x 80 x 50cm",
    "price": 6475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-40",
    "name": "Zapatero Golden ⚜️",
    "category": "Hogar y Bazar",
    "description": "📌4 estantes para colgar el calzado\n📌Soporta hasta 16 pares de calzado\n📌Hermoso diseño para el hogar",
    "price": 37250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-41",
    "name": "👾Consola Box SUP con JOYSTICK",
    "category": "Cables y Cargadores",
    "description": "🔖400 juegos en 1🔖Conecta al TV con cable AV\n🔖Cable USB🔖Manual de usuari📍GB001",
    "price": 34975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-42",
    "name": "Calculadora 12 dígitos🧮",
    "category": "Pilas y Baterías",
    "description": "📌funcion a 1 pila AA\n📍Seis, KK-111-12",
    "price": 13975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-43",
    "name": "💡Reflector 220v 🔖20w",
    "category": "Iluminación",
    "description": "📌Apto para uso en exterior IP65\n📌Iluminacion super potente 90lm\n📌Vida util de hasta 50.000hs\n📌Ahorro eficiente, luz de bajo consumo\n📍ONLY, S-001\n📌Apto para uso en exterior IP65\n📌Iluminacion super potente 90lm\n📌Vida util de hasta 50.000hs\n📌Ahorro eficiente, luz de bajo consumo\n📍ONLY, S-001",
    "price": 13725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-44",
    "name": "💡Reflector 220v 🔖10w",
    "category": "Iluminación",
    "description": "📌Apto para uso en exterior IP65\n📌Iluminacion super potente 90lm\n📌Vida util de hasta 50.000hs\n📌Ahorro eficiente, luz de bajo consumo\n📍ONLY, S-001\n📌Apto para uso en exterior IP65\n📌Iluminacion super potente 90lm\n📌Vida util de hasta 50.000hs\n📌Ahorro eficiente, luz de bajo consumo\n📍ONLY, S-001",
    "price": 11975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-45",
    "name": "🥗TRITURADORA MANUAL",
    "category": "Hogar y Bazar",
    "description": "📌CORTADORA DE VERDURAS\n📌Prepara tu ensalada en minutos\n📌Excelente para picar verduras, frutas, frutos secos entre otros\n📌3 cuchillas ultra afiladas de acero para un picado rapido\n📌Hace más rápido tus comidas\n📌CORTADORA DE VERDURAS\n📌Prepara tu ensalada en minutos\n📌Excelente para picar verduras, frutas, frutos secos entre otros\n📌3 cuchillas ultra afiladas de acero para un picado rapido\n📌Hace más rápido tus comidas",
    "price": 18475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-46",
    "name": "Guantes polares para moto🧤❄️",
    "category": "Hogar y Bazar",
    "description": "📌con corderito\n📌ajustable\n📌soporta frio, viento y lluvia",
    "price": 9975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-47",
    "name": "🎥CÁMARA IP DE EXTERIOR",
    "category": "Hogar y Bazar",
    "description": "•Cámara IP de seguridad. Conexión por WiFi. Audio bidireccional: se puede hablar y escuchar.\n•Visión nocturna. Kit de instalación. Ángulo de visión 360°.\n•Apta para exterior/interior.\n📍OM-505\n•Cámara IP de seguridad. Conexión por WiFi. Audio bidireccional: se puede hablar y escuchar.\n•Visión nocturna. Kit de instalación. Ángulo de visión 360°.\n•Apta para exterior/interior.\n📍OM-505",
    "price": 73725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-48",
    "name": "Juego de sábanas 2800 hilos🛏️ 🏷️Full 2 plazas:",
    "category": "Hogar y Bazar",
    "description": "🔖 Colores lisos. Ultra suave. Calidad garantizada.\n📍Casa Mundo",
    "price": 57475,
    "image": "https://drive.google.com/uc?export=view&id=1AJ0xFEGoJ0-dVGM1oluMhUhwYHRwT8f5",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-49",
    "name": "Juego de sábanas 2800 hilos🛏️ 🏷️Twin 1 plaza y media",
    "category": "Hogar y Bazar",
    "description": "🔖 Colores lisos. Ultra suave. Calidad garantizada.\n📍Casa Mundo",
    "price": 51975,
    "image": "https://drive.google.com/uc?export=view&id=1HdVhI0ofLrX77jxU863s8Y7S5ZarA8CK",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-50",
    "name": "Vapes Elfbar 40K 🧊",
    "category": "Cuidado Personal",
    "description": "📌 40.000 puffs\n📌 5 niveles de frescura\n📌 Amplia variedad de sabores frutales y mentolados.\n📍Ice King\n📌 40.000 puffs\n📌 5 niveles de frescura\n📌 Amplia variedad de sabores frutales y mentolados.\n📍Ice King",
    "price": 59975,
    "image": "https://drive.google.com/uc?export=view&id=1Hq_udTlwXKcMOgKtXBu2nqPPE6Uq_pbZ",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-51",
    "name": "CONSOLA GAME BOX G5 🎮",
    "category": "Juguetería y Niños",
    "description": "🔖Pantalla color de 3.0\"\n🔖Juegos clásicos incorporados\n🔖Batería recargable de larga duración\n🔖Conexión a TV mediante cable AV\n🔖Diseño portátil, liviano y compacto\n🔖Pantalla con retroiluminación\n📍21-02\n🔖Pantalla color de 3.0\"\n🔖Juegos clásicos incorporados\n🔖Batería recargable de larga duración\n🔖Conexión a TV mediante cable AV\n🔖Diseño portátil, liviano y compacto\n🔖Pantalla con retroiluminación\n📍21-02",
    "price": 37475,
    "image": "https://drive.google.com/uc?export=view&id=1KHNZg2LER_dB6Xqwe8lsIVugrM2gNY2V",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-52",
    "name": "Set de brochas para maquillaje🖌️",
    "category": "Juguetería y Niños",
    "description": "🔖incluye 8pcs\n🔖Suave y sintético\n📍QH-006\n🔖incluye 8pcs\n🔖Suave y sintético\n📍QH-006",
    "price": 12225,
    "image": "https://drive.google.com/uc?export=view&id=1BG61wUUBHrMSZlMKhUXIo5vCnntWknKG",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-53",
    "name": "Voladores por inducción 🚁🦄",
    "category": "Juguetería y Niños",
    "description": "📌Disponible helicóptero y unicornios\n📌Vuelo automático con sensor infrarrojo\n📌Recargable USB\n📌Disponible helicóptero y unicornios\n📌Vuelo automático con sensor infrarrojo\n📌Recargable USB",
    "price": 15750,
    "image": "https://drive.google.com/uc?export=view&id=1zX3W2wNt0vjE4YgvyexygxRTnqBDwLCk",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-54",
    "name": "CAMARA IMPRESORA AM500✨",
    "category": "Juguetería y Niños",
    "description": "📌 2 colores disponibles\n📌 carga USB\n📌 2 rollos de impresión y correa\n📍AM500\n📌 2 colores disponibles\n📌 carga USB\n📌 2 rollos de impresión y correa\n📍AM500",
    "price": 80725,
    "image": "https://drive.google.com/uc?export=view&id=19A5dGrSqUMiWwsU9KE2gfKjqdFpKzATy",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-55",
    "name": "LIBRO INTERACTIVO EN ESPAÑOL✨",
    "category": "Juguetería y Niños",
    "description": "📌 3 pilas AAA\n📌 imágenes , juegos , sonidos y música\n📍TK0023\n📌 3 pilas AAA\n📌 imágenes , juegos , sonidos y música\n📍TK0023",
    "price": 29975,
    "image": "https://drive.google.com/uc?export=view&id=1YTXu2E9TpL7pCEmPk8xfGMXlkLi9MWxn",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-56",
    "name": "Perro Robot ATLAS 🤖🐕",
    "category": "Juguetería y Niños",
    "description": "📌Movimientos reales\n📌Comando de voz\n📌Control remoto\n📌Luces incorporadas\n📌Movimientos reales📌Comando de voz\n📌Control remoto\n📌Luces incorporadas",
    "price": 204750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-57",
    "name": "CAMARA IMPRESORA GATITO✨",
    "category": "Juguetería y Niños",
    "description": "📌 3 colores disponibles\n📌 carga USB\n📌 3 rollos de impresión y correa\n📍EX0205\n📌 3 colores disponibles\n📌 carga USB\n📌 3 rollos de impresión y correa\n📍EX0205",
    "price": 100450,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-58",
    "name": "Auricular con llavero/reloj🐶 🎧",
    "category": "Juguetería y Niños",
    "description": "📌Auricular estilo airpods\n📌Con powerbank y estuche\n📌Llavero o reloj según modelo.\n📍TWS-K18\n📌Auricular estilo airpods\n📌Con powerbank y estuche\n📌Llavero o reloj según modelo.\n📍TWS-K18",
    "price": 26225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-59",
    "name": "ROLLERS 3 EN 1: FROZEN Y PRINCESA ❄️👑🛼",
    "category": "Juguetería y Niños",
    "description": "🔖 Rollers ajustables\n🔖 Contiene: Cascos, rodilleras y coderas\n🔖 Ruedas con luces\n🔖Talle: 30-33, 34-37\n📍12225 -12226\n🔖 Rollers ajustables\n🔖 Contiene: Cascos, rodilleras y coderas\n🔖 Ruedas con luces\n🔖Talle: 30-33, 34-37\n📍12225 -12226",
    "price": 99975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-60",
    "name": "✨ ROLLERS PARA NIÑOS✨",
    "category": "Juguetería y Niños",
    "description": "📌Ruedas con luces LED\n📌3 estilos en 1\n📌Talle del 30 al 33 y 34 al 37\n📍12227. 12248. 12222.\n📌Ruedas con luces LED\n📌3 estilos en 1\n📌Talle del 30 al 33 y 34 al 37\n📍12227. 12248. 12222.",
    "price": 78475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-61",
    "name": "MINI CÁMARA INFANTIL 📸💕",
    "category": "Juguetería y Niños",
    "description": "📌 Diferentes colores\n📌 Recargable\n📌 Función para fotos y videos\n📌 COD X2\n📌 Diferentes colores\n📌 Recargable\n📌 Función para fotos y videos\n📌 COD X2",
    "price": 27475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-62",
    "name": "CAMINADOR INTERACTIVO CON PIZARRA👶",
    "category": "Juguetería y Niños",
    "description": "📌Música y sonidos de animales.\n📌Pizarra Mágica\n📌 Botones coloridos y luces\n📌2 pilas AAA\n📍Babygus 54468\n📌Música y sonidos de animales.\n📌Pizarra Mágica\n📌 Botones coloridos y luces\n📌2 pilas AAA\n📍Babygus 54468",
    "price": 84750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-63",
    "name": "MUÑECA TINY FASHION ✨",
    "category": "Juguetería y Niños",
    "description": "📌 incluye vestidos intercambiables\n📌 tres pares de zapatos\n📌 30cm de alto\n📍tiny fashion 53397\n📌 incluye vestidos intercambiables\n📌 tres pares de zapatos\n📌 30cm de alto\n📍tiny fashion 53397",
    "price": 19225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-64",
    "name": "Mini Futbol de mesa⚽️",
    "category": "Juguetería y Niños",
    "description": "📌2 jugadores en simultáneo\n📌Marcador manual\n📌Incluye pelota\n📌2 jugadores en simultáneo\n📌Marcador manual\n📌Incluye pelota",
    "price": 67475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-65",
    "name": "Mini cámara impresora 🖨️",
    "category": "Juguetería y Niños",
    "description": "📌Incluye 2 rollos y cable de carga\n📌Juegos incorporados\n📌Función fotos y videos\n📌Digital Mini Print Camera D17\n📌Incluye 2 rollos y cable de carga\n📌Juegos incorporados\n📌Función fotos y videos\n📌Digital Mini Print Camera D17",
    "price": 92250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-66",
    "name": "Auto a control remoto🕷️",
    "category": "Juguetería y Niños",
    "description": "🏷️2 velocidades. Funciona a pilas. Tamaño 10x12cm.\n🏷️Giro 360°. Tracción en las 4 ruedas.\n🏷️Control remoto para manejarlo desde donde quieras.\n📍Spiderman 55298\n🏷️2 velocidades. Funciona a pilas. Tamaño 10x12cm.\n🏷️Giro 360°. Tracción en las 4 ruedas.\n🏷️Control remoto para manejarlo desde donde quieras.\n📍Spiderman 55298",
    "price": 41725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-67",
    "name": "Mini Jeep para niños 🚗",
    "category": "Juguetería y Niños",
    "description": "📌Luces, sonido y control remoto\n📌Soporta hasta 30kg\n📌Medidas 110 x 65 x 65 cm\n📍Tiny Go y Spiderman\n📌Luces, sonido y control remoto📌Soporta hasta 30kg\n📌Medidas 110 x 65 x 65 cm\n📍Tiny Go y Spiderman",
    "price": 569500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-68",
    "name": "Gimnasio interactivo de bebé🚼🧩",
    "category": "Juguetería y Niños",
    "description": "🏷️gimnasio musical con piano. juegos interactivos. figuras divertidas y notas musicales.\n🏷️funciona con 3 pilas AA. 📍BabyGus",
    "price": 52975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-69",
    "name": "Autito HOTWHEELS🔥🚗",
    "category": "Juguetería y Niños",
    "description": "📍C4982-\n📍C4982-",
    "price": 11475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-70",
    "name": "Pelota BASIDIWEI⚽",
    "category": "Juguetería y Niños",
    "description": "🔖Tamaño n5\n🔖Costuras reforzadas\n🔖Tamaño n5\n🔖Costuras reforzadas",
    "price": 29975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-71",
    "name": "Perfume HAWAS For Him⚜️",
    "category": "Cuidado Personal",
    "description": "📌100ml\n📌Eau de Parfum",
    "price": 44750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-72",
    "name": "Perfume Lattafa MUSAMAM 🐍",
    "category": "Cuidado Personal",
    "description": "📌100ml\n📌Eau de Parfum",
    "price": 54750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-73",
    "name": "Perfumes en tubo 35ml🧁",
    "category": "Cuidado Personal",
    "description": "🏷️Cookie Crave, y Heavenly Water\n🏷️Ideal para llevar a todas partes!\n🏷️Se entregan SURTIDOS.",
    "price": 4625,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-74",
    "name": "Perfumes Lataffa Give Me Gourmand 🍦",
    "category": "Cuidado Personal",
    "description": "📌Eau de Parfum 📌75ml\n📌Hermosas presentaciones con forma de helado\n📌Disponible 4 fragancias 🍫🍓🍇🍨",
    "price": 56500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-75",
    "name": "termo stanley 1.300 lts",
    "category": "Termos y Vasos",
    "description": "🔆Combo Stanley tornasolado\n📌Termo de 1300cc de capacidad. Mate de 275cc\n📌24hs. Frío-Calor\n📌doble pared de aislamiento\n📌Doble capa de acero inoxidable.\n📌Bombilla de regalo\n📌Termo de 1300cc de capacidad. Mate de 275cc\n📌24hs. Frío-Calor\n📌doble pared de aislamiento\n📌Doble capa de acero inoxidable.\n📌Bombilla de regalo",
    "price": 54975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-77",
    "name": "Termo media manija Preto🖤",
    "category": "Termos y Vasos",
    "description": "📌 1lt de capacidad\n📌Doble pared de Acero inoxidable.",
    "price": 31250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-78",
    "name": "Combo Clasic. 1.3l🧉",
    "category": "Termos y Vasos",
    "description": "🔖Termo + Yerbera + Bombilla + Mate🔖Capacidad termo: 1.3L\nCapacidad yerbera: 900ml Capacidad Mate: 260ml\n🔖Pico cebador🔖Doble capa de acero inoxidable\n📍Tx-V90",
    "price": 74975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-79",
    "name": "🧉Matermos 500ml",
    "category": "Termos y Vasos",
    "description": "📌 Capacidad para poner la yerba 📌 Pico retractil\n📌Varios colores disponibles",
    "price": 25725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-80",
    "name": "🧉Matermo Stanley 750ml",
    "category": "Termos y Vasos",
    "description": "📌 Capacidad para poner la yerba 📌 Pico retractil\n📌Varios colores disponibles 📍CHEPITA",
    "price": 33725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-81",
    "name": "Combo tapa mate AFA ⭐️⭐️⭐️",
    "category": "Termos y Vasos",
    "description": "📌Termo con tapón vertedor de 1L\n📌Mate de 180ml\n📌Inlcuye bombilla",
    "price": 53750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-82",
    "name": "Combo Stanley Salma🧉",
    "category": "Termos y Vasos",
    "description": "📌Termo 1lt acero inoxidable\n📌Mate 260ml\n📌Bombilla de regalo",
    "price": 53225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-83",
    "name": "Parlante Bluetooh 12\"🕺🏻🪇",
    "category": "Termos y Vasos",
    "description": "📌Potencia 40W📌Bateria recargable\n📌Funcion: Bluetooth, Radio, USB, micro SD\n📌Microfono y control remoto.📌50cm de alto\n📍ORYX SP-1163-5A JUPITER\n$0,00\n$20,12\n$0,00\n$0,00\nVaso cafetero LISA👧☕\n📌 Acero inoxidable. Doble capa.📌 Capacidad 500ml.\n📌 Tapa hermética. Diseño elegante.📌Conserva bebidas calientes y frias!",
    "price": 21250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-84",
    "name": "Vaso térmico inteligente con sensor de temperatura☕🌡️",
    "category": "Termos y Vasos",
    "description": "📌 Acero inoxidable. Doble capa.📌 Capacidad 420ml\n📌 Tapa hermética con seguro.📌 Con correa de silicona. Diseño degrade.\n📌Conserva bebidas calientes y frias!📍Vacuum insulation cup CF-004",
    "price": 23750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-85",
    "name": "Vaso HUMA 👑",
    "category": "Termos y Vasos",
    "description": "📌Laqueado en metal📌Doble pico\n📌 Media manija para llevar\n📌600ml de capacidad",
    "price": 45475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-86",
    "name": "🥤Vaso de silicona plegable",
    "category": "Termos y Vasos",
    "description": "🔖 Capacidad 350ml Libre de BPA. Pico con tapita\n🔖Soporta hasta 200° de temperatura. Se entregan colores surtidos\n$0,00\n$0,00",
    "price": 10375,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-87",
    "name": "Super combo tornasolado🧉 Silver 🎆",
    "category": "Termos y Vasos",
    "description": "* Termo de acero 1.2lts* Mate con bombilla\n* Jarro con tapa y manija* Tapa mate Stanley\n$6,57\n$0,00",
    "price": 79975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-88",
    "name": "Combo 1.3L doble mate🧉 Mora 💜",
    "category": "Termos y Vasos",
    "description": "* Termo de acero 1300ml + * Mate con bombilla\n+\n* Taza mate con tapa y manija * Acero inoxidable doble capa\n$6,57\n$0,00",
    "price": 66500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-89",
    "name": "Auricular Bluetooth JBL Pure Bass",
    "category": "Auriculares",
    "description": "🔖compatible con asistencia de voz. sonido con bajos puros bst\n🔖 llamadas con manos libres y control por voz🔖conexión multipunto\n🔖diseño ligero y plegable🔖Varios colores\n📍JBL, TUNE770",
    "price": 39750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-90",
    "name": "Auricular Bluetooth P47🎶",
    "category": "Auriculares",
    "description": "🔖Almohadillas cómodas que no dañan el oido\n🔖5v\n🔖Recargable (Usb incluido)\n📍SUONO, AYV0002ROJ\n🔖Almohadillas cómodas que no dañan el oido\n🔖5v🔖Recargable (Usb incluido)\n📍SUONO, AYV0002ROJ",
    "price": 11225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-91",
    "name": "Auricular manos libres🌀",
    "category": "Auriculares",
    "description": "📌Modelos con gomitas\n📌compatible con cualquier dispositivo\n📍MAXXA, A15 - A22",
    "price": 3225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-92",
    "name": "Auricular AirPods Pro 2da generación🍎",
    "category": "Auriculares",
    "description": "🔖Controlador de alta excursión🔖Amplificador exclusivo con alto rango dinámico\n🔖Cancelación Activa de Ruido🔖Recargable Tc y a través de MagSafe (Cable incluido)\n🔖Modo Ambiente adaptable\n🔖Ecualización de presión mediante un sistema de ventilación, ecualización Adaptativa\n🔖Audio espacial personalizado con seguimiento dinámico de la cabeza1\n🔖Paquete de gomitas protectoras incluido\n📍Iphone, AM826-11815",
    "price": 32225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-93",
    "name": "Auriculares R5 estilo Airpods🎧",
    "category": "Auriculares",
    "description": "🏷️Conexión Bluetooth. Sonido de alta fidelidad.\n🏷️Power bank para cargarlos en cualquier parte.\n🏷️Larga duración de batería.🔋",
    "price": 25725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-94",
    "name": "Auriculares Premium WIRELESS",
    "category": "Auriculares",
    "description": "📌Bluetooth con micrófono manos libres\n📌 Luces Led RGB WIRELESS A30",
    "price": 18500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-95",
    "name": "AURICULARES ESTILO IPHONE🪽",
    "category": "Auriculares",
    "description": "📌 Manos libres 📌Color blanco\n📌Interfase: 3.5mm\n$0,00\n$0,24\n$0,00",
    "price": 3625,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-96",
    "name": "Cable Auxiliar 3m💠",
    "category": "Cables y Cargadores",
    "description": "📌3.5mm\n📍DINAX, DX-CABSPE3",
    "price": 1875,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-97",
    "name": "⚡FUENTE SAMSUNG 45W USB-C",
    "category": "Cables y Cargadores",
    "description": "📌Travel Adapter\n📌Súper potencia de 45W",
    "price": 6225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-98",
    "name": "Cable Hulk mallado 4.4A🧌",
    "category": "Cables y Cargadores",
    "description": "📌Ficha tipo C📌Material mallado y reforzada\n📌4.4 amperes de potencia📌XAEA HULK, mods-2079",
    "price": 5975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-99",
    "name": "⚡️FUENTE 20W IPHONE🔋🔌",
    "category": "Cables y Cargadores",
    "description": "📌USB-C📌Adaptador de corriente de 20W\n📌Para cable tipo C a Lightning\n📌Compatible para iPhone, Apple Watch y iPad",
    "price": 11225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-100",
    "name": "⚡Cable iPhone USB original",
    "category": "Cables y Cargadores",
    "description": "📌 Certificado\n📌3.0\n📌1mt",
    "price": 4475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-101",
    "name": "Cargador tipo c RAPTOR💥",
    "category": "Cables y Cargadores",
    "description": "📌Fuente de 45w con entrada tc\n📌220-240v, 45w\n📍RAPTOR XAEA, MOD507",
    "price": 13975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-102",
    "name": "Cargador turbo 12v VoLTair💎",
    "category": "Cables y Cargadores",
    "description": "📌45w de potencia (20w-25w)📌1 puerto tipo C y 1 puerto USB\n📌diseño compacto y material metalico resistente 📍XAEA, MODX-517",
    "price": 14975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-103",
    "name": "CABLE TURBO V8⚡",
    "category": "Cables y Cargadores",
    "description": "📌25W 📌1m.\n📌Transferencia de datos\n📌Carga rápida 📍MOTOROLA",
    "price": 1875,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-104",
    "name": "Fuente rapida 45w💥",
    "category": "Cables y Cargadores",
    "description": "📌Fuente de 45w con entrada tc\n📌220-240v, 45w\n📍RAPTOR XAEA, MOD507",
    "price": 11250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-105",
    "name": "⚡CABLE C a C de iPhone",
    "category": "Cables y Cargadores",
    "description": "📌60W de potencia📌Cable original certificado\n📌 Ideal para iPhone 15 en adelante 📌1mt de largo",
    "price": 4975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-106",
    "name": "❗️CABLE DE IPHONE A TIPO C",
    "category": "Cables y Cargadores",
    "description": "🔖1 metro de largo.\n$0,00\n$0,35\n$0,00",
    "price": 4725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-107",
    "name": "Cable rapido Tipo-C 5A☢️📌",
    "category": "Cables y Cargadores",
    "description": "Cable rapido Tipo-C 5A☢️\n📌Potencia 5A📌1m de longitud\n📌Mallado📍ROYALCELL, RC-5009",
    "price": 2750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-108",
    "name": "Cargador de auto 12v 🚙",
    "category": "Cables y Cargadores",
    "description": "📌2 Puertos Usb\n📌2.1 A. Carga rápida",
    "price": 3000,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-109",
    "name": "Cargador de moto",
    "category": "Cables y Cargadores",
    "description": "📌3.1A📌Voltaje de entrada 10-24v\n📌 Cable 1.4m.📌 pantalla de voltaje\n📌 Doble puerto usb",
    "price": 34225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-110",
    "name": "Cargador universal Notebook 💻",
    "category": "Cables y Cargadores",
    "description": "📌10 conectores intercambiables para distintos tipos de netbooks incluido tc\n📌Entrada 100-240V. 📌 Salida DC 24V 5.0A\n📍Manta",
    "price": 28250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-111",
    "name": "Parlante con microfono karaoke⭐",
    "category": "Parlantes",
    "description": "🔖Conexión BT, SD, Aux, FM\n🔖Frente con luces LED. Modificador de voz.\n🔖1 micrófonos incluido\n📍 Colorful karaoke sound",
    "price": 17475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-112",
    "name": "Parlante con 2 micrófonos karaoke⭐",
    "category": "Parlantes",
    "description": "🔖Conexión BT, SD, Aux, FM\n🔖Frente con luces LED. Modificador de voz.\n🔖2 micrófonos incluidos\n📍 Colorful karaoke sound system 087\n-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    "price": 24975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-113",
    "name": "Parlante G portatil⭐",
    "category": "Parlantes",
    "description": "🔖Potencia:3W\n🔖Bluetooth y Radio\n🔖7 modos de iluminación\n🔖Recargable Tipo C (incluido)\n📍SUONO, AYV0398BLA\n🔖Potencia:3W🔖Bluetooth y Radio\n🔖7 modos de iluminación\n🔖Recargable Tipo C (incluido)\n📍SUONO, AYV0398BLA",
    "price": 24975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-114",
    "name": "PARLANTE BLUETOOTH CRISTAL🔮",
    "category": "Parlantes",
    "description": "🔖5w de potencia\n🔖3.7v\n🔖500mAh\n📍SUONO, AYV0335NEG\n🔖5w de potencia 🔖3.7v\n🔖500mAh📍SUONO, AYV0335NEG",
    "price": 11225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-115",
    "name": "Parlante Wireless 4\"💎",
    "category": "Parlantes",
    "description": "🔖Bluetooth, Radio, Tarjeta SD y USB🔖Luz led\n🔖Recargable (usb incluido)📍Greatnice, gts-2159\n-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    "price": 19975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-116",
    "name": "PARLANTE BLUETOOTH SPEAKER V2🔰",
    "category": "Parlantes",
    "description": "🔖5w de potencia 🔖Luz led\n🔖500mAh 📍V2",
    "price": 13725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-117",
    "name": "Parlante bluetooth X1🪐",
    "category": "Parlantes",
    "description": "📌5cm x 5cm x 3.5cm📌Recargable tipo c\n📌sonido envolvente 3D📍EX0036",
    "price": 7475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-118",
    "name": "Parlante Speaker pastel 3\"🦄",
    "category": "Parlantes",
    "description": "📌Usb, tarjeta de memoria, Bluetooth, radio y aux\n📌Con manija📌Recargable (usb incluido)\n📌6w 📍MS-1615BT",
    "price": 17975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-119",
    "name": "Set 7 en 1 PREMIUM💎PARLANTE CON MICRÓFONO + SMARTWATCH",
    "category": "Parlantes",
    "description": "🔖-Reloj smart:📌4 mallas resistentes📌Carga magnética\n📌+100 modos, control de sueño, notificaciones, ritmo cardiaco, etc\n🔖-Parlante con micrófono📌5w de potencia\n📌Bluetooth, SD, USB, Radio y Aux📌Recargable tipo C (incluido)📍ZT-40",
    "price": 64975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-120",
    "name": "Reloj ROLEX Milgauss Night",
    "category": "Relojes",
    "description": "📌Malla metálica",
    "price": 39250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-121",
    "name": "Reloj CASIO 3⌚️",
    "category": "Relojes",
    "description": "📍Nuevo modelo",
    "price": 24625,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-122",
    "name": "Reloj ROLEX Milgauss Night⌚️",
    "category": "Relojes",
    "description": "📌Malla metálica",
    "price": 39250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-123",
    "name": "Reloj ROLEX cuero⌚️",
    "category": "Relojes",
    "description": "📌Malla de cuero",
    "price": 24750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-124",
    "name": "Reloj CASIO💎",
    "category": "Relojes",
    "description": "📍CASIO ZN, CASIO TP",
    "price": 42225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-125",
    "name": "Super Toallon GOLDSUN🪶",
    "category": "Hogar y Bazar",
    "description": "🔖Tamaños: 90x160cm\n🔖Suave al tacto, no destiñe\n📍GOLDSUN TP-7Q",
    "price": 18975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-126",
    "name": "Nebulizador portátil🌬️",
    "category": "Hogar y Bazar",
    "description": "📌3 niveles de vapor\n📌1 boquilla + 2 mascarillas para bebés y adultos\n📌Recargable USB\n📌Alivia congestión, gripe y resfríos. Súper necesario en casa!\n📌3 niveles de vapor📌1 boquilla + 2 mascarillas para bebés y adultos\n📌Recargable USB\n📌Alivia congestión, gripe y resfríos. Súper necesario en casa!",
    "price": 28725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-127",
    "name": "Plato hondo Blanco🥣",
    "category": "Hogar y Bazar",
    "description": "📌Ceramica\n📌23 x 3.5cm\n📍DX-4\n📌Ceramica\n📌23 x 3.5cm\n📍DX-4",
    "price": 6725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-128",
    "name": "MANDOLINA DE COCINA🥕🥒",
    "category": "Hogar y Bazar",
    "description": "📌Colador\nRecipiente De Almacenamiento\n📌16 PIEZAS\n📌DESMONTABLE\n📌OPCIONES DE CUCHILLA PARA\nRALLADO, CORTADO Y CORTADO EN DADOS.\n📌2 cuchillas en cubos: (11x11mm, 6x6mm)\n1- Rallador de queso grueso ideal para el queso\nRebanadora.\n1-Wavey: Ideal para preparar patatas o calabacínes\no calabaza para papas fritas o col para ensalada de cola.\n1- Gramo (4 mm):: Quesos\nsta, patatas para hachís.\n# Quita las lágrimas #\najo rallado, jengibre,\npatatas patatas, y cebollas para planas.\n1- Rallador fino (3 mm): Pert\nnuez moscada o incluso chocolate.\n📌Rebanadoras de 1: Ideales para su uso\nensaladas, cereales.\nPelador/protector de manos/separador de huevos\ns y frutas para bocadillos\n📌16 pcs VEGGIE SLICER\n📌ColadorRecipiente De Almacenamiento 📌16 PIEZAS\n📌DESMONTABLE📌OPCIONES DE CUCHILLA PARA\nRALLADO, CORTADO Y CORTADO EN DADOS.\n📌2 cuchillas en cubos: (11x11mm, 6x6mm)\n1- Rallador de queso grueso ideal para el queso\nRebanadora.\n1-Wavey: Ideal para preparar patatas o calabacínes\no calabaza para papas fritas o col para ensalada de cola.\n1- Gramo (4 mm):: Quesos\nsta, patatas para hachís.\n# Quita las lágrimas #\najo rallado, jengibre,\npatatas patatas, y cebollas para planas.\n1- Rallador fino (3 mm): Pert\nnuez moscada o incluso chocolate.\n📌Rebanadoras de 1: Ideales para su uso\nensaladas, cereales.\nPelador/protector de manos/separador de huevos\ns y frutas para bocadillos\n📌16 pcs VEGGIE SLICER",
    "price": 28975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-129",
    "name": "ACOLCHADO PIEL DE MONO 🙊",
    "category": "Hogar y Bazar",
    "description": "📌Incluye fundas p/almohadas\n📌2 plazas y media\n📌Súper suaves y calentitos",
    "price": 118225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-130",
    "name": "Set utensilios 6pcs🥘",
    "category": "Termos y Vasos",
    "description": "🔖Incluye:\n-Cuchara de servir\n-Cucharon\n-Espatula ranurada\n-Espatula\n-Servidor de pasta\n-Espumadera\n🔖Material resistente y duradero\n🔖Incluye:-Cuchara de servir-Cucharon\n-Espatula ranurada\n-Espatula-Servidor de pasta\n-Espumadera\n🔖Material resistente y duradero",
    "price": 13725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-131",
    "name": "Taladro / Atornillador Inalámbrico Lambo🪛",
    "category": "Cables y Cargadores",
    "description": "📌Frecuencia: 50\n📌Las 2 baterías de 1.5 Ah permiten alternar su uso para mantener el trabaio continuo sin esperar ciclos de recarga.\n📌El mandril de 10 mm permite el uso de brocas estándar para perforar madera, metal y plástico en proyectos domésticos.\n📌 La función percutor integrada permite realizar perforaciones en mampostería además de las tareas de atornillado,\n📌El ajuste de torsión 18+1 permite graduar la fuerza de apriete para evitar daños en las cabezas de los tornillos.\n📌 La empuñadura con recubrimiento de goma suave absorbe las vibraciones durante el uso prolongado de la herramienta.\n📌EI maletín de transporte permite organizar el equipa iunto con el cargador y sus accesorios en un mismo lugar.\n📍Lambo tech, c-k1066\n📌Frecuencia: 50\n📌Las 2 baterías de 1.5 Ah permiten alternar su uso para mantener el trabaio\ncontinuo sin esperar ciclos de recarga.\n📌El mandril de 10 mm permite el uso de brocas estándar para perforar madera, metal\ny plástico en proyectos domésticos.\n📌 La función percutor integrada permite realizar perforaciones en mampostería además\nde las tareas de atornillado,\n📌El ajuste de torsión 18+1 permite graduar la fuerza de apriete para evitar daños en las cabezas de los tornillos.\n📌 La empuñadura con recubrimiento de goma suave absorbe las vibraciones durante el uso prolongado de la herramienta.\n📌EI maletín de transporte permite organizar el equipa iunto con el cargador y sus accesorios en un mismo lugar.\n📍Lambo tech, c-k1066",
    "price": 129750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-132",
    "name": "Llavero linterna multiuso💡🔦",
    "category": "Iluminación",
    "description": "📌Encendedor de filamento incorporado\n📌Llavero multiuso. Martillo de emergencia.\n📌Luz fría ,cálida, alta y baja. Luz roja y luz intermitente.\n📌Trincheta, Destapador y 2 tipos de destornilladores.\n📌Carga mediante USB tipo-C. Indicador de bateria.\n📍W5147\n📌Encendedor de filamento incorporado📌Llavero multiuso. Martillo de emergencia.\n📌Luz fría ,cálida, alta y baja. Luz roja y luz intermitente.\n📌Trincheta, Destapador y 2 tipos de destornilladores.\n📌Carga mediante USB tipo-C. Indicador de bateria.\n📍W5147",
    "price": 13725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-133",
    "name": "Set de 3 Sartenes🥘🥘",
    "category": "Hogar y Bazar",
    "description": "📌De 28cm, 24cm y 20 cm con revestimiento antiadherente.\n📌Retención de calor y ahorro energético\n📌Mango ergonómico 📍 Baroly",
    "price": 110975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-134",
    "name": "👩🍳Balanza de cocina",
    "category": "Pilas y Baterías",
    "description": "📌 10kg.\n📌Funciona con 2 pilas AAA.\n📍dx-balc10\n📌 10kg.📌Funciona con 2 pilas AAA.\n📍dx-balc10",
    "price": 12975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-135",
    "name": "⚡LINTERNA PICANA",
    "category": "Herramientas y Seguridad",
    "description": "📌Linterna potente led\n📌Batería recargable\n📌 Conector de carga\n📌 Botón de seguridad\n📌 Batería independiente a220v\n📌17cm de largo 2.3cm de diámetro\n📌180g.\n📌Linterna potente led📌Batería recargable\n📌 Conector de carga📌 Botón de seguridad\n📌 Batería independiente a220v📌17cm de largo 2.3cm de diámetro 📌180g.",
    "price": 25475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-136",
    "name": "Batidor de mano inalámbrico 3 en 1🥚🍰",
    "category": "Cables y Cargadores",
    "description": "📌3 cabezales intercambiables📌3 velocidades\n📌Recargable Tipo c (cable incluido)\n📍SEIS, Av5712",
    "price": 32475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-137",
    "name": "Anafe eléctrico🥩🍖🍗",
    "category": "Iluminación",
    "description": "📌Regulador de temperatura\n📌Luz encendido/apagado\n📌1 hornalla\n📍Exxtra tech, AD-C101A",
    "price": 31475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-138",
    "name": "🧰 Set de Herramientas 108 Piezas",
    "category": "Termos y Vasos",
    "description": "🏷️ 1/4\" y 1/2\"\n🏷️ Incluye criques reversibles, tubos, puntas, extensiones y accesorios para todo tipo de trabajos.\n🏷️ Fabricado con materiales resistentes y presentado en un práctico maletín\norganizador para transportar y guardar fácilmente.\n🏷️ Ideal para mecánica, mantenimiento del hogar, taller y uso profesional.\n📍MANTA, CR-V",
    "price": 120975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-139",
    "name": "Organizador cajonera👕",
    "category": "Hogar y Bazar",
    "description": "🔖Confeccionado en metal y PVC🔖63cm x 168cm x 28cm\n🔖5 estantes📍DX-6205",
    "price": 53475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-140",
    "name": "Perchero organizador👕👞💼",
    "category": "Hogar y Bazar",
    "description": "📌 Confeccionado en metal y PVC, fácil armado!\n📌 170cm de alto. 5 estantes ideales para calzado.\nNivel superior con ganchos para bolsos y camperas.",
    "price": 53475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-141",
    "name": "Pegatinas para desagües🚫🦂",
    "category": "Hogar y Bazar",
    "description": "📍M302017\nPegatinas para desagües🚫🦂\n📍M302017",
    "price": 1950,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-142",
    "name": "🗡️ AFILADOR DE CUCHILLOS Y TIJERAS ✂️",
    "category": "Hogar y Bazar",
    "description": "📌Afilador de cuchillos y tijeras de primera calidad 📌Agarre comodo y seguro\n📌Antideslizante en la parte inferior 📌3 ranuras con indicador de afilado\n📌Tijeras y cuchillos sin filo son cosa del pasado📌Liviano, versatil y resistente",
    "price": 4975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-143",
    "name": "☀️ FAROL SOLAR EXTERIOR CON SENSOR",
    "category": "Hogar y Bazar",
    "description": "📌Sensor de movimiento\n📌Funcion encendido automatico cuando anochece\n📌Recarga automatica solar\n📌Bombilla led de bajo consumo y super potente\n📍Legatus, BK-888",
    "price": 17975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-144",
    "name": "📌Pulidora recargable",
    "category": "Hogar y Bazar",
    "description": "📌Pulidora recargable\n📌Kit de tres pads\n📍 LIYANG-02",
    "price": 62250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-145",
    "name": "Panquequera Eléctrica🥞",
    "category": "Hogar y Bazar",
    "description": "🔖Potencia: 800w🔖Superficie antiadherente\n🔖Control de temperatura 🔖Incluye espatulas\n📍Dinax, WH-CM800SECO02",
    "price": 92475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-147",
    "name": "Candado de bronce🔐",
    "category": "Herramientas y Seguridad",
    "description": "📌 Bronce de 50mm.\n📌 Arco de acero endurecido.\n📌 Incluye 3 llaves.\n📍 Trois Circle 265",
    "price": 5500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-148",
    "name": "Cinto clásico de cuero 🤵♂️",
    "category": "Hogar y Bazar",
    "description": "📌Cinto de caballero\n📌Hebilla reforzada\n📌Diseño con texturas",
    "price": 13725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-149",
    "name": "Juego de Ollas Rosmania 10 Piezas 🍲✨",
    "category": "Hogar y Bazar",
    "description": "📌 Granito de aluminio fundido\n📌 Revestimiento antiadherente tipo mármol de alta durabilidad\n📌 Tapas de vidrio templado con botón indicador de temperatura\n📌 16 capas de protección y superficie resistente\n📌 Ideal para todo tipo de preparaciones\n📍ROSMANIA, MR-9629A\n📌 Granito de aluminio fundido\n📌 Revestimiento antiadherente tipo mármol de alta durabilidad\n📌 Tapas de vidrio templado con botón indicador de temperatura\n📌 16 capas de protección y superficie resistente\n📌 Ideal para todo tipo de preparaciones\n📍ROSMANIA, MR-9629A",
    "price": 343225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-150",
    "name": "Lampara solar bidireccional💡",
    "category": "Iluminación",
    "description": "📌panel solar amplio\n📌1200 lumenes\n📌5.5v, 1w\n📍LEGATUS, BK-618-2\n📌panel solar amplio📌1200 lumenes\n📌5.5v, 1w📍LEGATUS, BK-618-2",
    "price": 21550,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-151",
    "name": "Cortapelo PROFESIONAL💇🏻♂️💈",
    "category": "Hogar y Bazar",
    "description": "🔖Potencia: 6w🔖4 peines( 3, 6, 9 y 12mm)\n🔖5 niveles📍LEGATUS, LCC003A",
    "price": 27475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-152",
    "name": "Maquina de Arepas🫓",
    "category": "Hogar y Bazar",
    "description": "🔖Potencia: 1.400w🔖Placa antideslizante\n🔖antiadherente 📍DINAX, DX-ARE1400",
    "price": 133475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-153",
    "name": "🍲 Batería de Ollas Rosmania 9 Piezas – Roca Volcánica",
    "category": "Hogar y Bazar",
    "description": "🔖 Granito de aluminio fundido.\n🔖 Revestimiento antiadherente Trexflon de 12 capas.\n🔖 Revestimiento en mármol de alta durabilidad.\n🔖 100% libre de PFOA.\n🔖 Tapas de vidrio templado.\n🔖 Mangos resistentes al calor.\n🔖 Incluye 2 utensilios de silicona con mango de madera.\n🔖 Contiene 4 ollas con tapa + 1 sartén (9 piezas en total).\n📍ROSMANIA TMF-308A",
    "price": 343225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-154",
    "name": "Vinilo adhesivo 5mts ⏲️ 🏘️",
    "category": "Cuidado Personal",
    "description": "📌Medidas: 60 cm x 5 metros!\n📌 Ideal para restaurar mesadas y superficies.\n📌Plancha con adhesivo\n📌Fácil de instalar y retirar.\n📌Agiliza la limpieza de tu hogar!\n📌Medidas: 60 cm x 5 metros!\n📌 Ideal para restaurar mesadas y superficies.\n📌Plancha con adhesivo\n📌Fácil de instalar y retirar.\n📌Agiliza la limpieza de tu hogar!",
    "price": 23750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-155",
    "name": "Escurridor manual de utensilios🔪🥄",
    "category": "Hogar y Bazar",
    "description": "📌4 cabidades\n📌4 cabidades",
    "price": 4975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-156",
    "name": "Basurero plegable🗑️",
    "category": "Termos y Vasos",
    "description": "🔖Material: Silicona\n🔖Para piso y Bacha",
    "price": 25975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-157",
    "name": "Reflector solar pinza💡",
    "category": "Iluminación",
    "description": "* Recargable Solar y a Usb tipo c (incluido)\n* 3 niveles de iluminación con fotocelula\n* sensor de movimiento\n* 54 Led\n* Boton encendido/apagado\n📍YD-19\n* Recargable Solar y a Usb tipo c (incluido)\n* 3 niveles de iluminación con fotocelula\n* sensor de movimiento * 54 Led\n* Boton encendido/apagado\n📍YD-19",
    "price": 19475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-158",
    "name": "Escurridor / organizador de cocina🍽️",
    "category": "Termos y Vasos",
    "description": "📌Material: Acero inoxidable de alta calidad\n📌2 estantes + ganchos + porta cuchillos\n📌Adaptable a cualquier tipo de bacha\n📍RGC electronic",
    "price": 98225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-159",
    "name": "Pava Cosmos 12v🧉",
    "category": "Termos y Vasos",
    "description": "🔖Capacidad: 1 litro\n🔖Material resistente\n📍COSMOS, CI-408",
    "price": 71975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-160",
    "name": "Escurridor de platos🍽️",
    "category": "Termos y Vasos",
    "description": "📌Cubículo para cubiertos📌Dos pisos para platos y vasos\n📌Bandeja recolectora de agua\n📍Cosmos, CI-6167",
    "price": 48225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-161",
    "name": "🌚Cortinas Black Out PREMIUM⭐",
    "category": "Iluminación",
    "description": "🔖2 paños de 230 x 140 cm🔖Bloquea la luz solar 98%\n🔖Evita ruidos exteriores🔖Regula la temperatura de la habitación\n🔖Calidad premium🔖Varios colores disponibles ❗️GOLDSUN, CR-21",
    "price": 82250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-162",
    "name": "Reflector solar con camara☀️",
    "category": "Iluminación",
    "description": "🔖Panel solar amplio🔖Con control remoto incluido🔖Tamaño: 607 x 268 x 70mm\n🔖Movimiento 355°, 93°🔖Micrófono incorporado🔖2 antenas\n🔖sensor de movimiento y fotocelula 🔖Audio bidireccional 📍JORTAN, 83088",
    "price": 388225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-163",
    "name": "MATE IMPERIAL 🧉🪵",
    "category": "Termos y Vasos",
    "description": "📌Algarrobo barnizado\n📌Virola de acero inoxidable, apta para grabar con láser",
    "price": 33725,
    "image": "https://drive.google.com/uc?export=view&id=1XHfd_GZwcKXNtiGAUdoWsg1TVXBoxCTF",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-164",
    "name": "Pantuflas de Dama gatito🐱💐",
    "category": "Hogar y Bazar",
    "description": "📌Talles: 36-37\n📌Con peluchito",
    "price": 24975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-165",
    "name": "Lámpara bolichera giratoria",
    "category": "Hogar y Bazar",
    "description": "Lámpara bolichera giratoria\n📌Giratoria\n📌220V",
    "price": 5975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-166",
    "name": "💅🏻SET DE MANICURA Y PEDICURA EN ESTUCHE",
    "category": "Hogar y Bazar",
    "description": "📌12 piezas📌Acero inoxidable\n📌Ideal para pies y manos\n📌Modelo super premium y facil de transportar📍D3571",
    "price": 10725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-167",
    "name": "Mini planchita flequillera👩🏻✨",
    "category": "Hogar y Bazar",
    "description": "📌Ceramica\n📌100-240Vca; 50/60Hz",
    "price": 6975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-168",
    "name": "Cortador 3 en 1 multifuncional🛍️",
    "category": "Hogar y Bazar",
    "description": "🔖Cuchilla deslizante bidireccional\n🔖amplio con 36cm de largo\n📍6811",
    "price": 33975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-169",
    "name": "🌚Reflector solar 6 led🌝",
    "category": "Iluminación",
    "description": "📌Sensor de movimiento 📌Panel solar amplio\n📌Control remoto incluido📍616-4",
    "price": 15475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-171",
    "name": "Secador de pelo Onica🪮",
    "category": "Cuidado Personal",
    "description": "📌2000 W y 11.000 RPM📌Incluye accesorios\n📌3 velocidades, 3 temperaturas y función de aire frío.\n📍OA-CP223",
    "price": 65725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-172",
    "name": "Set de arte 68 piezas 🎨",
    "category": "Hogar y Bazar",
    "description": "📌12 crayones 📌12 lápices color pastel\n📌12 lápices de colores📌12 crayones 📌12 fibras de colores\n📌1 pincel, 1 lápiz, 1 goma, 1 pegamento, 1 regla, 1 paleta y 1 sacapuntas.",
    "price": 32475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-173",
    "name": "Cobertor impermeable para moto🏍️🛵",
    "category": "Hogar y Bazar",
    "description": "📌 Cubre motos y scooters de distintos tamaños\n📌 Disponible en color plata\n📌 Proteje tu vehículo de los rayos uv, la lluvia y el granizo!",
    "price": 19500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-174",
    "name": "Peluche con sonido y proyector de estrellas 🦦🤍",
    "category": "Pilas y Baterías",
    "description": "📌Música, sonido relajante y proyector de estrellas 📌Ayuda a dormir\n📌Calma la ansiedad📌Lleva 2 pilas AA\n📌Varios modelos\n$0,00\nRadio portatil solar📻☀️\n🔖Panel solar de 5v🔖FM/AM/SW de 3 bandas\n🔖USB/TF (MP3)🔖Antena 360°📍FP-717-S",
    "price": 43725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-175",
    "name": "Balanza comercial con mastil⚖️",
    "category": "Hogar y Bazar",
    "description": "📌 Capacidad máxima de 40 kg con alta precisión.\n📌 Pantalla LCD de fácil lectura con visor para peso, precio unitario y total.\n📌 Función TARA y cálculo automático del importe.\n📌 Memorias M1, M2 y M3 para guardar precios.\n📌 Función de acumulación de compras (SUM).\n📌 Plataforma de acero inoxidable resistente.\n📌 Teclado de 20 teclas, resistente al agua.\n📌 Batería recargable 4V/4Ah (hasta 40 horas de uso aprox.).\n📌 También funciona conectada a la corriente.\n📌 Sistema de peso en KG/LB.\n📌 Ideal para almacenes, verdulerías, carnicerías, kioscos y comercios en general.\n📍MORLEY BA-956D",
    "price": 164975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-176",
    "name": "Monopatín Spider-Man🛴",
    "category": "Hogar y Bazar",
    "description": "🔖Plegable 🔖Ruedas Direccionables\n🔖Freno Posterior 🔖Manubrio antideslizante\n🔖Altura ajustable📍12207",
    "price": 64225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-177",
    "name": "Mini Pimer MARBELLA🍰🧁",
    "category": "Hogar y Bazar",
    "description": "🔖2 velocidades 🔖4 cuchillas\n🔖500w potencia, 220v\n📍Marbella, MB-8009",
    "price": 48250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-178",
    "name": "Pava eléctrica de vidrio🫖",
    "category": "Hogar y Bazar",
    "description": "🔖Capacidad: 2 litros🔖Vidrio templado\n🔖Indicador de nivel🔖1.500w\n📍VIDA DIGITAL, VD-033",
    "price": 56725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-179",
    "name": "Pico Vertedor🧉",
    "category": "Hogar y Bazar",
    "description": "*Pico Vertedor*🧉",
    "price": 6725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-180",
    "name": "Pelota KANTO⭐⚽",
    "category": "Juguetería y Niños",
    "description": "🔖Tamaño: N°5\n🔖Costuras reforzadas\n📍56121",
    "price": 11225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-181",
    "name": "Mate de acero Isa 🧉",
    "category": "Termos y Vasos",
    "description": "📌Doble capa de acero inoxidable\n📌180ml de capacidad\n📌Ideal para grabar logos o personalizarlo!",
    "price": 14475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-182",
    "name": "Estereo con pantalla LED🚗⭐",
    "category": "Hogar y Bazar",
    "description": "🔖Pantalla de 4.1\"🔖Videos en 1080p\n🔖Radio, Bluetooth, Usb, Tarjeta SD y Auxiliar\n🔖Control incluido 📍LAMBO TECH. 4051AI",
    "price": 123475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-183",
    "name": "CHAU LATAS 🙌🏽🧉",
    "category": "Hogar y Bazar",
    "description": "📌Yerbera y Azucarera 📌Cuero ecológico\n📌Costuras reforzadas",
    "price": 11975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-184",
    "name": "🌑CORTINAS BLACK OUT",
    "category": "Iluminación",
    "description": "🔖Dos paños de 250 x 150 cm🔖Bloquea la luz solar 98%\n🔖Evita ruidos exteriores🔖Regula la temperatura de la habitación\n🔖Diseños modernos y novedosos🔖Calidad premium\n🔖Varios colores disponibles❗️CASATEX, JK02-200",
    "price": 67250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-185",
    "name": "ESTEREO DESMONTABLE PARA AUTO🔊",
    "category": "Relojes",
    "description": "📌Bluetooth, Usb, Sd, Aux, Radio📌Reloj en el frente\n📌Maxima calidad y fidelidad de sonido📌Control remoto\n📍DT1788",
    "price": 52225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-186",
    "name": "Album Mundial de la FIFA 2026⚽🏆",
    "category": "Hogar y Bazar",
    "description": "📍PANINI",
    "price": 24750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-187",
    "name": "Cascada de chocolate🍫",
    "category": "Hogar y Bazar",
    "description": "🔖3 niveles🔖Calefacción contante\n🔖Hasta 1k🔖Potencia 60w📍OM, MY-C011v",
    "price": 98975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-188",
    "name": "🌅LASER MULTIPUNTO",
    "category": "Hogar y Bazar",
    "description": "📌Color verde y rojo📌Incluye tripode y soporte para colgar\n📌Un Show de luces📌Incluye Transformador\n📌Programable 📌Funcion audioritmico",
    "price": 41725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-189",
    "name": "👶🏼Pijama 3 en 1",
    "category": "Hogar y Bazar",
    "description": "🏷️remeron + pantalón largo + pantalón corto. talles de bebé 1, 2 y 3.\n🏷️modelo de media estación. diseños estampados. suaves, frescos y cómodos para dormir",
    "price": 22475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-190",
    "name": "Juego de cubiertos 24 piezas🍴",
    "category": "Hogar y Bazar",
    "description": "📌 Acero inoxidable 📌 Mangos de polipropileno\n📌 Resistente al lavavajillas 📍 Marbella New kolor",
    "price": 38225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-191",
    "name": "👩🏼🍳Set de utensilios 20pcs Premium⭐️",
    "category": "Hogar y Bazar",
    "description": "🔖Utensilio de silicona con mango de madera resistente al calor y facil de limpiar!\n🔖Incluye tabla, rallador, destapador, cuchillos, pinza, tijeras y brocha para pincelar.\n🔖Batidor, cuchara, cucharon, espátulas. Recipiente para guardar.\n🔖Nuevo diseño super completo",
    "price": 97250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-192",
    "name": "Set cuchillos serrucho 🔪",
    "category": "Hogar y Bazar",
    "description": "📌6 cuchillos con sierra\n📌Excelente filo",
    "price": 7975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-193",
    "name": "Reflector Solar 4 Led☀️",
    "category": "Iluminación",
    "description": "📌Sensor de movimiento 📌Panel solar amplio\n📌Control remoto incluido 📌Soporte resistente y movil\n📍BK-120-4COB-B",
    "price": 25725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-194",
    "name": "Juego de sábanas Casatex 4800 hilos🛏️⭐ FULL",
    "category": "Hogar y Bazar",
    "description": "🏷️3 piezas: cubre colchón, sábana y fundas de almohadas.\n🏷️Hermosos diseños estampados. Calidad garantizada✨🏷️Full 2 plazas:\n140x195x30cm",
    "price": 54225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-195",
    "name": "🌠Tira LED RGB 5050",
    "category": "Hogar y Bazar",
    "description": "📌 5mts. Autoadhesiva.\n📌 Control remoto\n📍OM-5050",
    "price": 20725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-196",
    "name": "Tira neon RGB🔮",
    "category": "Cables y Cargadores",
    "description": "📌Distancia: 5m\n📌Autoadhesiva\n📌12V 📌Con fuente y control",
    "price": 38225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-197",
    "name": "BANDEJA DE SILICONA 🌡️",
    "category": "Hogar y Bazar",
    "description": "📌Silicona de buena calidad\n📌 Resistencia al horneado a alta temperatura\n📌No retiene olores ni sabores\n📌 Tamaño 16cm X 5cm. Fácil de lavar",
    "price": 3225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-198",
    "name": "GAS PIMIENTA🌶️🔥",
    "category": "Hogar y Bazar",
    "description": "💄DISEÑO LABIAL 25ml\n📌 Su forma de lápiz labial lo hace cómodo y discreto\n📌 Tamaño adecuado, ideal para llevar en el bolso y la cartera",
    "price": 4975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-199",
    "name": "Cortauñas grande💅🏼",
    "category": "Hogar y Bazar",
    "description": "📌 Acero inoxidable. Durabilidad y resistencia\n📌 8cm de largo\n📍Trim No.211",
    "price": 1150,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-200",
    "name": "🛎️ TIMBRE INALAMBRICO",
    "category": "Pilas y Baterías",
    "description": "📌Control funciona a 220V\n📌Timbre inalámbrico 32 melodias📌Distancia de cobertura 50mts\n📌 Pila A23 incluida📌Alcance aproximado: 100mts\n📍 Lambo Tech",
    "price": 14975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-201",
    "name": "Balanza de cocina 10k🥩🫑",
    "category": "Hogar y Bazar",
    "description": "📌báscula resistente\n🔖SEIS, Av1875",
    "price": 12475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-202",
    "name": "Campera PARKA🤩❄️",
    "category": "Hogar y Bazar",
    "description": "🔖Super abrigada, Bolsillos con cierre\n🔖 interior de plush\n🔖Capucha con peluchito",
    "price": 85750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-203",
    "name": "⛄️Conjunto: Gorro y cuello polar",
    "category": "Hogar y Bazar",
    "description": "🔖Gorro de lana con peluchito.🔖Cuello de lana elastizado.\n🔖Varios colores disponibles🔖Tamaños universales",
    "price": 13875,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-204",
    "name": "Olla eléctrica de 5 litros🫕",
    "category": "Hogar y Bazar",
    "description": "🔖Control electrónico. Pantalla digital LED🔖Potencia 900w\n🔖Cuenco revestido de cerámica\n🔖Valvula de vapor desmontable📍RAF, R.166W",
    "price": 149975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-205",
    "name": "Linga con clave de seguridad🔐",
    "category": "Termos y Vasos",
    "description": "📌4 digitos\n📌Material resistente",
    "price": 23750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-207",
    "name": "Lámina vinilo estilo marmol💎",
    "category": "Hogar y Bazar",
    "description": "📌60x70cm",
    "price": 12475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-208",
    "name": "Bolsa elegante con moño🎀🌟",
    "category": "Hogar y Bazar",
    "description": "🔖27cm X 20cm X 9cm",
    "price": 4475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-209",
    "name": "Bolsa amplia con visor🛍️",
    "category": "Hogar y Bazar",
    "description": "📌20cm x 30cm x 15cm",
    "price": 6400,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-210",
    "name": "Bolsa con Moño🎀🛍️",
    "category": "Hogar y Bazar",
    "description": "🔖14cm X 20cm X 7cm",
    "price": 4250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-211",
    "name": "Botas con peluche 🧸",
    "category": "Hogar y Bazar",
    "description": "📌SÚPER calentitas con corderito por dentro\n📌Suela antideslizante con plataforma\n📌Moñito movible en detalle📌36-37 / 38-39 y 40-41",
    "price": 44250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-212",
    "name": "Espejo led triple🪞 + porta lentes de contacto👁️",
    "category": "Cables y Cargadores",
    "description": "🔖estereoscopico 270°\n🔖pinza para lentes de contacto incluida + 2 portalentes de contacto\n🔖Recargable Tipo C (cable incluido)📍SEIS, Av5779",
    "price": 37475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-213",
    "name": "Horno eléctrico + Freidora 2 en 1🍗",
    "category": "Hogar y Bazar",
    "description": "📌Temperatura máxima: 230°\n📌Perilla de selección de tiempo, perilla de funciones y perilla de temperatura\n📌Indicador de encendido 📌1300w, 220v📌18 litros\n📌430 x 410 x 400mm📍Global, 1000001918",
    "price": 253750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-214",
    "name": "PROTON 12 Led RGB🚦",
    "category": "Hogar y Bazar",
    "description": "📌Control incluido📌Funcion a USB\n📌Con soporte para colgar📍OM-1012",
    "price": 21750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-215",
    "name": "PROTON 6 LED RGB🚦",
    "category": "Hogar y Bazar",
    "description": "📌Control incluido\n📌Funcion a USB\n📌Con soporte para colgar\n📍OM-1006",
    "price": 14975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-216",
    "name": "Cuchillos + utensilios + tabla 💎",
    "category": "Termos y Vasos",
    "description": "📌5 cuchillos de calidad\n📌Espátula, batidor, sopera, pelapapa y tijeras, etc\n📌Tabla para picar\n📌Todo material de silicona para no rayar tus ollas!",
    "price": 89625,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-217",
    "name": "Cortapelo para animales🐶🐱",
    "category": "Hogar y Bazar",
    "description": "📌Silenciosa v versátil📌 Adaptable a todo tipo de pelo\n📌Portátil v recargable📌Cuchilla fija de acero y cuchilla móvil de cerámica: no se desafilan\n📌4 tipos de peine: de 3 a 12mm 📌Cuchilla regulable: 0.8 a 2mm\n📌Voltaje de trabajo: 4v - Potencia 5w📌Recargable tipo C (incluido)",
    "price": 20375,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-218",
    "name": "Campera inflable infantil❄️",
    "category": "Hogar y Bazar",
    "description": "🔖Super abrigada. Bolsillos con cierre.\n🔖Impermeable",
    "price": 32000,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-221",
    "name": "Griferia monocomando matte🚰",
    "category": "Hogar y Bazar",
    "description": "🔖Control preciso de temperatura\n🔖Excelente presión\n🔖Metal resistente a la corrosión\n📍ORYX, 265A",
    "price": 63725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-222",
    "name": "Maquina de barbacoa giratoria🍢🍖",
    "category": "Hogar y Bazar",
    "description": "📌Giratoria 360°📌1200w\n📌Parrilla vertical y sin humo📌12 brochetas\n📌2 cartuchos de goteo📍SILVER LOVE",
    "price": 181250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-223",
    "name": "MÁQUINA 7 en 1 🍩🧇🥪",
    "category": "Hogar y Bazar",
    "description": "📌7 placas intercambiables para realizar todo tipo de snacks!\n📌Molde para donas, wafles, sándwiches y muchos otros.\n📌850W 220-240V📌Marbella MB-207",
    "price": 134975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-224",
    "name": "🍴Set de cubiertos tubo 25 piezas",
    "category": "Hogar y Bazar",
    "description": "📌 Tarro ideal para guardarlos. Mango de plástico súper resistente.\n📌 Tenedores, cuchillos, cucharas, cucharitas\n+ pelapapa 🎁",
    "price": 20475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-226",
    "name": "Limpia vidrio con iman🧽🪟",
    "category": "Cables y Cargadores",
    "description": "📌alcance aplicable 3-6mm\n📌Paños intercambiables\n📍SEIS, AV5744",
    "price": 16250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-227",
    "name": "Mochilas homologadas🏴☠️🇫🇮",
    "category": "Hogar y Bazar",
    "description": "📌Modelos de Belgrano y Talleres 📌Licencia oficial✅\n📌Cierres super reforzados📌2 compartimentos\n📍B11, T11",
    "price": 22500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-228",
    "name": "Pijama infantil de plush🥰",
    "category": "Hogar y Bazar",
    "description": "📌remera + pantalón\n📌de plush súper calentito, ideal para pasar el invierno.\n📌talles para los más pequeños",
    "price": 24000,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-229",
    "name": "CONJUNTO INFANTIL 🐰",
    "category": "Hogar y Bazar",
    "description": "📌Todos de plush súper calentitos\n📌Talles de 4 a 10 años\n📌Buzo con capucha y bolsillos\n📌Jogging súper cómodo!",
    "price": 34500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-231",
    "name": "Molinillo manual de pimienta y sal 2 en 1👨🏼🍳🧂",
    "category": "Hogar y Bazar",
    "description": "🔖 Acero inoxidable y acrilico. Rotor de cerámica para lograr molido perfecto.\n🔖 Posee dos compartimientos separados! Aptos para moler dos condimentos en simultáneo!",
    "price": 12225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-232",
    "name": "”Judías mágicas” 🫘🪄",
    "category": "Termos y Vasos",
    "description": "* Doble cara con 4 colores diferentes\n* 12cm X 10cm\n* Material resistente y sólido",
    "price": 16250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-233",
    "name": "Set CHEF Tabla + Cuchillas👨🏼🍳👩🏽🍳",
    "category": "Hogar y Bazar",
    "description": "📌 Incluye: Tabla para picar + Cuchillo chef 20cm + cuchillo de pan 20cm + cuchillo fileteador 20cm\n+ cuchillo de uso general 13cm + cuchillo pelador 9cm + pelapapas + tijera.\n📌 Hoja de cerámica. Mango de plastico. Colores pastel📌 Presentación en caja. Apto lavavajillas.",
    "price": 25975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-234",
    "name": "Red mosquitera con imanes❌🦟",
    "category": "Hogar y Bazar",
    "description": "* Protegerá su hogar, cabaña, apartamento y oficina de diversos insectos y polvo de la calle\n* Se monta fácilmente en la puerta, se abre y se cierra instantáneamente\n* 90cm X 210cm. Con imanes que hacen que se cierre 📌Se entregan colores surtidos",
    "price": 18497.5,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-235",
    "name": "Antifaz relajante con gel 😎",
    "category": "Iluminación",
    "description": "📌Gel apto frío - calor\n📌Reduce ojeras y alivia la migraña\n📌Obstaculiza la luz, ayuda a dormir y relajarse",
    "price": 9750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-236",
    "name": "🚴🏻 Luz para bici con bocina🚴🏻",
    "category": "Iluminación",
    "description": "📌 Recargable USB\n📌 Luz alta, Luz baja y luz intermitente\n📌 Resistente al agua 📍GM-7588",
    "price": 13500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-237",
    "name": "TECLADO A USB⌨️🖱️",
    "category": "Hogar y Bazar",
    "description": "📌104 teclas📌63cm X 12cm\n📌compatible con Windows\n📍GTC, KBG-207",
    "price": 13475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-238",
    "name": "Super candado antirrobo🔒⛓️",
    "category": "Herramientas y Seguridad",
    "description": "📌Acero inoxidable\n📌Incluye 2 llaves",
    "price": 27475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-239",
    "name": "ARMARIO PLEGABLE INFANTIL",
    "category": "Hogar y Bazar",
    "description": "Armario plegable infantil 🧸🐰\n📌Medidas: 154 x 82 x 49 cm\n📌Fácil de armar📌Diseño unisex",
    "price": 105725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-240",
    "name": "Manguera expansible 22.5mts💧",
    "category": "Hogar y Bazar",
    "description": "* Boquilla con diferentes formas. Se expande 3 veces su tamaño\n* Se contrae automáticamente. Ligero y compacto para un almacenamiento sencillo",
    "price": 36750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-241",
    "name": "Raqueta mata insectos 🦟",
    "category": "Hogar y Bazar",
    "description": "📍FuncionaUSB\n📍Mata moscas y mosquitos con electricidad\n📍Disponible en varios colores\n$0,00",
    "price": 13000,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-242",
    "name": "soporte movil para tablet y celular_🚗",
    "category": "Hogar y Bazar",
    "description": "📌Facil instalación apto para cabecera\n📌Ajuste manual📌Brazo de aluminio\n📍ROYALCELL, RP005\n$0,00",
    "price": 46800,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-243",
    "name": "Bermudas👖",
    "category": "Hogar y Bazar",
    "description": "📌 Para hombre y dama\n📌 Disponible modelo clásico y con roturas\n📌 talles 38 al 46",
    "price": 38750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-244",
    "name": "Mini aire acondicionado❄",
    "category": "Hogar y Bazar",
    "description": ".* Enfría, humidifica y aromatiza tu espacio personal!* Reduce la temperatura ambiente entre 3° y 5°\n* Incluye 7 luces led de colores. 3 velocidades.* Deposito de agua con duración de hasta 6hs\n* Tipo de alimentación: USB* Incluye temporizador. Cabezal movible 360°\n$0,00",
    "price": 33750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-245",
    "name": "💰 Contadora de billetes portátil 💵",
    "category": "Hogar y Bazar",
    "description": "📌 Display digital LED📌 600 billetes por minuto\n📌 Función de adicion y autoexamen\n📍Dinax B1861\n$7,41\n$0,00",
    "price": 85500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-246",
    "name": "Olla a Presión de 11 litros Rosmania🌡️",
    "category": "Termos y Vasos",
    "description": "📌Material: Acero inoxidable 📌30cm x 20cm\n📌Mango resistente al calor\n📍ROSMANIA, AP-911AC",
    "price": 217475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-247",
    "name": "Batidora con bowl🧁",
    "category": "Hogar y Bazar",
    "description": "•Capacidad: 3 litros•10 velocidades\n•2 ganchos y 2 batidores d acero inoxidable\n📍UNIQUE, TX-M186\n$3,92\n$0,00",
    "price": 234000,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-248",
    "name": "Maquina para hacer helado con frutas🍨🫐🍦🍓",
    "category": "Termos y Vasos",
    "description": "🔖 Potencia 220W. Capacidad 2lt. 🔖 Material no tóxico ABS. Fácil de desarmar y de limpiar.\n🔖 Tiempo estimado de preparación: 40 minutos.\n🔖 Ideal para realizar helado en casa con los mas pequeños! ✨ Dessert Maker\n$7,79\n$0,00",
    "price": 106500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-249",
    "name": "Juego de luces audio-rítmicas🏮✨",
    "category": "Cables y Cargadores",
    "description": "📌2 Bastones de luz Led estilo RGB de 90*30*320mm\n📌Conexión con cable usb para multipantallas, ver películas, escuchar música, etc\n📌Con control remoto y app para controlar el ritmo de las luces 📍 LAMPRGB29\n$4,24\n$0,00",
    "price": 65500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-250",
    "name": "LAMPARA ESFERA DE CRISTAL 3D🪐 🌕",
    "category": "Iluminación",
    "description": "📌 Base de madera iluminada📌 Conexión USB\n📌UNICAMENTE MOTIVOS NAVIDEÑOS\n$1,69\n$0,00",
    "price": 25875,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-251",
    "name": "Espirales gran leon🌀 🦟",
    "category": "Hogar y Bazar",
    "description": "📌 10 horas de duración.📌 Repele y mata mosquitos, zancudos y jejenes.\n📌 Proteje a tu familia y decile NO al dengue!\n📌 La caja incluye 10 espirales y 2 soportes metálicos.\n$0,30\n$0,00",
    "price": 3125,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-252",
    "name": "Pilas AAA",
    "category": "Pilas y Baterías",
    "description": "PILAS AAA\n🏷️pilas alcalinas. larga duración.\n🏷️1.5v de energía.📍OM,12-2028\n$0,10\n$0,00",
    "price": 1750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-253",
    "name": "🔋Pilas AA",
    "category": "Pilas y Baterías",
    "description": "🏷️pilas alcalinas. larga duración.\n🏷️1.5v de energía.\n📍Onica,pa002",
    "price": 1750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-254",
    "name": "🔋FLYCAT❗️FLYCAT",
    "category": "Pilas y Baterías",
    "description": "🔖Batería de litio🔖Apta como 2032\n🔖Relojes, calculadoras, cámaras, etc🔖3v\n$0,28\n$0,00",
    "price": 3475,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-255",
    "name": "Pilas recargables AAA⚡",
    "category": "Pilas y Baterías",
    "description": "📌1600mAh📌1.2V\n📍DXL.two, NI-MH",
    "price": 15750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-256",
    "name": "RECEPTOR DE BLUETOOTH COMPATIBLE CON V1.2/2.0/2.1/3.0/4 RECIBE 10M ENVIA 20M",
    "category": "Cables y Cargadores",
    "description": "$1,00\n$0,00",
    "price": 15250,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-257",
    "name": "💨 CABLE HDMI 1.5 MTS💨",
    "category": "Cables y Cargadores",
    "description": "🔖1.5 mts de longitud🔖Resolución máxima Full HD\n🔖Conector de entrada y salida HDMI🔖Extremos reforzados\n🔖Cable mallado para mayor durabilidad\n$0,54\n$0,00\n$0,00\n💨 CABLE HDMI 5 MTS HIGH SPEED💨\n🔖5 mts de longitud🔖Resolución máxima Full HD\n🔖Conector de entrada y salida HDMI🔖Extremos reforzados\n🔖Cable mallado para mayor durabilidad\n$1,10\n$0,00",
    "price": 16875,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-258",
    "name": "☑️ADAPTADOR JACK",
    "category": "Cables y Cargadores",
    "description": "📌Tipo C a 3.5 mm\n📍SAMSUNG\n$0,45\n$0,00",
    "price": 6875,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-259",
    "name": "📌CABLE ADAPTADOR PS4🎮",
    "category": "Cables y Cargadores",
    "description": "📌AUDIO a 3,5\n$0,21\n$0,00",
    "price": 3225,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-260",
    "name": "FICHA ADAPTADOR DE HDMI A HDMI",
    "category": "Cables y Cargadores",
    "description": "$0,51\n$0,00",
    "price": 7750,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-261",
    "name": "⚧️ADAPTADOR ESTEREO📍DINAX e35",
    "category": "Cables y Cargadores",
    "description": "📌3.5M a 2 estereo 3.5H\n📌Transmisión de señales estable y duradera\n📌Ideal para conectar parlantes y auriculares en la misma salida de audio PC\n$0,24\n$0,00",
    "price": 3725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-262",
    "name": "Mochila cuna maternal",
    "category": "Cables y Cargadores",
    "description": "* Térmica e impermeable. Bolsillo frontal para 3 mamaderas.📍R1907\n* Tiradores para colgar del cochecito. Bolsillo lateral para toallitas\n* Bolsillo posterior desplegable que se convierte en cuna y cambiador, súper acolchado\n* interior amplio con separador para guardar ropa, pañales, juguetes, etc.",
    "price": 48975,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-263",
    "name": "Remera termica",
    "category": "Cables y Cargadores",
    "description": "🏷 Talle Único\n🏷 Especial para el frío\n$1,07\n$0,00",
    "price": 17500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-264",
    "name": "Conjuntos deportivos🏃♀🏃♂1️⃣ Conjunto Adidas hombre",
    "category": "Cables y Cargadores",
    "description": "Conjuntos deportivos🏃♀🏃♂1️⃣ Conjunto Adidas hombre\n📌cierre reforzado. súper abrigados\n📌no se destiñe. calidad premium\n$4,97\n$0,00",
    "price": 25000,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-265",
    "name": "Tiny muñecas🤎🥳",
    "category": "Cables y Cargadores",
    "description": "Muñeca Tiny Fantasy🙆🏼♀️🏷️30cm de alto. presentación en caja con su vestido y zapatos.\n🏷️económica ideal para regalo🎁 X12 unidades incluye exhibidor\n$0,73\n$0,00",
    "price": 10725,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-266",
    "name": "Bola con alas🪩📍",
    "category": "Cables y Cargadores",
    "description": "JM-888📌Tecnologia infrarroja que permite mantener en el aire\n📌Material resistente a caidas📌Recargable a USB\n📌Luces LED de colores ideal para jugar en la oscuridad.\n$1,35\n$0,00",
    "price": 18500,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-267",
    "name": "⚽Pelotas de fútbol",
    "category": "Cables y Cargadores",
    "description": "🔖Tamaño n5. 400g de peso.\n🔖Costuras reforzadas y variedad de diseños\n$1,65\n$0,00",
    "price": 24000,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  },
  {
    "id": "prod-268",
    "name": "Saltarines",
    "category": "Cables y Cargadores",
    "description": "🐴Caballo saltarín🔖Goma reforzada\n🔖Apto para interior y exterior🔖Suave, cómodo y seguro\n$2,38\n$0,00",
    "price": 20000,
    "image": "https://placehold.co/400x400/E7EBDE/8A918B?text=Sin+Imagen",
    "accent": "#d7e6ba"
  }
];

export async function loadProducts(): Promise<{ products: Product[], categories: string[] }> {
  return { products: mockProducts, categories: [...categories] };
}

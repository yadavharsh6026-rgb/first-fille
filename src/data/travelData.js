// Comprehensive travel dataset for Himachal Pradesh & Uttarakhand
export const destinationsData = {
  himachal: [
    {
      id: "manali",
      name: "Manali & Solang",
      state: "Himachal Pradesh",
      tagline: "Snow peaks, cedar pines & high mountain passes",
      altitude: "2,050 m (6,725 ft)",
      bestTime: "Oct to Jun (Snow: Dec-Feb)",
      popularSpots: ["Solang Valley", "Atal Tunnel", "Rohtang Pass", "Hadimba Temple", "Old Manali Cafes", "Jogini Waterfalls"],
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      description: "Himachal's most beloved valley town, offering world-class snow adventure in Solang, gateway to the mighty Atal Tunnel, and serene pine forests.",
      packagesCount: 6
    },
    {
      id: "spiti",
      name: "Spiti Valley & Pin Valley",
      state: "Himachal Pradesh",
      tagline: "The Middle Land — Ancient monasteries & cold desert wonders",
      altitude: "3,800 m (12,500 ft)",
      bestTime: "May to Oct (Winter Expedition: Jan-Feb)",
      popularSpots: ["Key Monastery", "Chandratal Lake", "Hikkim (Highest Post Office)", "Komic", "Langza Fossil Village", "Dhankar"],
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80",
      description: "A surreal high-altitude wonderland bordering Tibet with crystal-clear starry nights, thousand-year-old cliffside gompas, and turquoise glacial lakes.",
      packagesCount: 4
    },
    {
      id: "shimla",
      name: "Shimla, Kufri & Mashobra",
      state: "Himachal Pradesh",
      tagline: "Queen of Hills — Heritage colonial charm & pine ridges",
      altitude: "2,276 m (7,467 ft)",
      bestTime: "All Year (Snow: Dec-Jan)",
      popularSpots: ["The Ridge & Mall Road", "Jakhoo Temple & Giant Hanuman", "Kufri Snow World", "Mashobra Apple Groves", "Christ Church"],
      image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
      description: "Former British summer capital perched across seven picturesque pine-covered ridges, home to the UNESCO World Heritage Kalka-Shimla Toy Train.",
      packagesCount: 5
    },
    {
      id: "dharamshala",
      name: "Dharamshala & McLeodganj",
      state: "Himachal Pradesh",
      tagline: "Little Lhasa — Tibetan spirituality & Dhauladhar peaks",
      altitude: "1,750 m (5,740 ft)",
      bestTime: "Sep to Jun",
      popularSpots: ["Dalai Lama Temple", "Triund Trek", "HPCA International Stadium", "Bhagsunag Falls", "Norbulingka Institute"],
      image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
      description: "Seat of the Dalai Lama set beneath the towering snow-clad Dhauladhar range, featuring Tibetan monasteries, serene tea gardens, and vibrant cafe culture.",
      packagesCount: 4
    },
    {
      id: "kasol",
      name: "Kasol, Tosh & Parvati Valley",
      state: "Himachal Pradesh",
      tagline: "Riverside serenity, herbal hot springs & pine trails",
      altitude: "1,580 m (5,180 ft)",
      bestTime: "Mar to Jun & Sep to Nov",
      popularSpots: ["Parvati River Banks", "Kheerganga Hot Springs", "Tosh Village", "Manikaran Sahib", "Chalal Nature Trail"],
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
      description: "The backpacker and nature lover's paradise alongside roaring turquoise Parvati river, surrounded by pine forests and wooden Himachali hamlets.",
      packagesCount: 3
    },
    {
      id: "jibhi",
      name: "Jibhi & Tirthan Valley",
      state: "Himachal Pradesh",
      tagline: "Untouched trout streams, treehouses & Jalori Pass",
      altitude: "1,600 m (5,250 ft)",
      bestTime: "Mar to Nov",
      popularSpots: ["Jalori Pass & Serolsar Lake", "Great Himalayan National Park", "Jibhi Waterfall", "Chehni Kothi Fort", "Bahu Village"],
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      description: "A hidden Himachali jewel of cozy cedar treehouses, crystal-clear trout streams, and emerald alpine meadows in the UNESCO buffer zone.",
      packagesCount: 3
    }
  ],
  uttarakhand: [
    {
      id: "rishikesh",
      name: "Rishikesh & Haridwar",
      state: "Uttarakhand",
      tagline: "Yoga capital of the world & whitewater rapids",
      altitude: "372 m (1,220 ft)",
      bestTime: "Sep to May",
      popularSpots: ["Triveni Ghat Aarti", "Shivpuri River Rafting", "Beatles Ashram", "Lakshman Jhula", "Neer Garh Waterfall", "Bungee Jumping"],
      image: "https://images.unsplash.com/photo-1600100397608-f010e421c60b?auto=format&fit=crop&w=800&q=80",
      description: "Where holy Mother Ganga cascades out of the Himalayas into emerald calm waters; holy evening aartis blend seamlessly with adrenaline rafting.",
      packagesCount: 5
    },
    {
      id: "kedarnath",
      name: "Kedarnath & Chardham",
      state: "Uttarakhand",
      tagline: "Sacred high-altitude Jyotirlinga in Garhwal Himalayas",
      altitude: "3,583 m (11,755 ft)",
      bestTime: "May to Jun & Sep to Oct (Temple open dates)",
      popularSpots: ["Kedarnath Temple", "Bhairavnath Peak", "Mandakini Valley", "Gaurikund", "Guptkashi", "Vasuki Tal"],
      image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
      description: "One of the most revered Hindu pilgrimage shrines dedicated to Lord Shiva, framed by snow-clad 6,940m Kedarnath peaks.",
      packagesCount: 4
    },
    {
      id: "auli",
      name: "Auli & Joshimath",
      state: "Uttarakhand",
      tagline: "India's ski capital with panoramic Nanda Devi views",
      altitude: "2,800 m (9,200 ft)",
      bestTime: "Dec to Mar (Skiing) & Apr to Jun (Meadows)",
      popularSpots: ["Auli Ropeway (Cable Car)", "Artificial Lake", "Gorson Bugyal Trek", "Nanda Devi Viewpoint", "Joshimath Shankaracharya Math"],
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      description: "Pristine Himalayan ski slopes flanked by dense oak and coniferous forests, offering 270-degree panoramas of India's second-highest peak Nanda Devi.",
      packagesCount: 3
    },
    {
      id: "chopta",
      name: "Chopta, Tungnath & Chandrashila",
      state: "Uttarakhand",
      tagline: "Highest Shiva temple in the world & 360° summit views",
      altitude: "2,680 m (8,790 ft)",
      bestTime: "Apr to Nov (Snow trek: Dec-Mar)",
      popularSpots: ["Tungnath Temple (3,680 m)", "Chandrashila Summit (4,000 m)", "Deoria Tal Lake", "Rohini Bugyal", "Ukhimath"],
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      description: "Known affectionately as the 'Mini Switzerland of Uttarakhand', featuring sprawling rhododendron meadows and an accessible summit trek.",
      packagesCount: 4
    },
    {
      id: "nainital",
      name: "Nainital, Bhimtal & Mukteshwar",
      state: "Uttarakhand",
      tagline: "Kumaon lake district, Himalayan orchards & colonial estates",
      altitude: "2,084 m (6,837 ft)",
      bestTime: "All Year",
      popularSpots: ["Naini Lake Boating", "Naina Devi Temple", "Mukteshwar Chauli Ki Jali", "Bhimtal Island", "Snow View Point"],
      image: "https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?auto=format&fit=crop&w=800&q=80",
      description: "A tranquil emerald eye-shaped lake surrounded by seven verdant green hills, featuring heritage sailing clubs and fruit orchard homestays.",
      packagesCount: 4
    },
    {
      id: "mussoorie",
      name: "Mussoorie & Dhanaulti",
      state: "Uttarakhand",
      tagline: "Queen of Hills — Doon Valley mist & George Everest ridge",
      altitude: "2,005 m (6,578 ft)",
      bestTime: "Mar to Jun & Sep to Nov",
      popularSpots: ["Sir George Everest House", "Kempty Falls", "Mall Road & Library Point", "Dhanaulti Eco Park", "Lal Tibba"],
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      description: "Romantic hill station overlooking the sparkling lights of Dehradun valley, famous for the winterline sunset phenomenon.",
      packagesCount: 3
    }
  ]
};

// Curated Tour Packages with full realistic itineraries & details
export const tourPackagesData = [
  {
    id: "pkg-1",
    title: "Manali, Solang Valley & Atal Tunnel Snow Escapade",
    region: "himachal",
    theme: "Family",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    price: 13999,
    originalPrice: 18999,
    discountPercent: 26,
    rating: 4.9,
    reviewsCount: 318,
    badge: "Bestseller",
    startEnd: "Delhi to Delhi (Volvo + Private Cab)",
    hotelCategory: "3★ / 4★ Mountain View Hotels",
    mealPlan: "Daily Breakfast & Dinner",
    coverImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=900&q=80"
    ],
    overview: "Experience the magic of snow in Manali! Drive through the architectural wonder of Atal Tunnel into Lahaul's Sissu waterfall, engage in thrilling paragliding and skiing at Solang, and unwind along the riverbanks of Old Manali.",
    highlights: [
      "Drive through Atal Tunnel (World's longest highway tunnel above 10,000 ft)",
      "Full day adventure in Solang Valley (Skiing, Snow Tube, Paragliding)",
      "Hadimba Temple, Vashisht Hot Springs & Mall Road strolling",
      "Scenic excursion to Sissu Waterfall in Lahaul Valley",
      "Comfortable Delhi-Manali AC Volvo overnight transfers"
    ],
    itinerary: [
      {
        day: 1,
        title: "Overnight Volvo from Delhi to Manali",
        desc: "Board luxury Volvo coach in Delhi (Majnu Ka Tilla / Kashmiri Gate) in the evening. Overnight journey with panoramic mountain views approaching morning.",
        meals: "Self / On Road",
        stay: "Overnight Volvo Bus"
      },
      {
        day: 2,
        title: "Arrival in Manali & Local Sightseeing",
        desc: "Arrive in Manali, pickup and check-in to your mountain-view hotel. Freshen up and visit Hadimba Devi Temple, Club House, Tibetan Monastery, and evening stroll on Mall Road.",
        meals: "Dinner Included",
        stay: "Manali Mountain View Resort"
      },
      {
        day: 3,
        title: "Solang Valley, Atal Tunnel & Sissu (Lahaul)",
        desc: "Full day excursion to Solang Valley for adrenaline snow activities. Cross the 9.02 km Atal Tunnel to marvel at the snow-covered Chandra River and Sissu Waterfall.",
        meals: "Breakfast & Dinner Included",
        stay: "Manali Mountain View Resort"
      },
      {
        day: 4,
        title: "Naggar Castle, Art Gallery & Old Manali Cafes",
        desc: "Visit the historic Naggar Castle (former seat of Kullu kings), Nicholas Roerich Art Gallery, and riverside trout points. Evening explore quirky cafes in Old Manali.",
        meals: "Breakfast & Dinner Included",
        stay: "Manali Mountain View Resort"
      },
      {
        day: 5,
        title: "Vashisht Sulphur Springs & Departure to Delhi",
        desc: "Visit ancient Vashisht temple with natural hot sulphur springs. Afternoon shopping on Mall Road for Himachali shawls and apples. Board return evening Volvo to Delhi.",
        meals: "Breakfast Included",
        stay: "Overnight Volvo (Arrive Delhi next morning)"
      }
    ],
    inclusions: [
      "Delhi - Manali - Delhi AC Semi-Sleeper Luxury Volvo bus tickets",
      "03 Nights stay in premium 3★/4★ mountain view hotel",
      "03 Breakfasts and 03 Dinners (Buffet)",
      "Private Swift Dzire / Etios cab for all sightseeing listed",
      "Toll taxes, parking fees, fuel & driver allowances",
      "24/7 on-ground Himachali tour coordinator"
    ],
    exclusions: [
      "Lunch and personal snacks",
      "Adventure sports fees (Paragliding, Ski gear, Quad bikes)",
      "Rohtang Pass green permit (if opened & opted separately)",
      "Any medical or emergency expenses"
    ],
    departureDates: ["Every Friday & Tuesday", "Nov 15, 2026", "Nov 22, 2026", "Dec 05, 2026", "Dec 24 (Xmas Special)"],
    difficulty: "Easy",
    idealFor: "Couples, Families, Friends"
  },
  {
    id: "pkg-2",
    title: "Spiti Valley & Chandratal Lake Complete Circuit",
    region: "himachal",
    theme: "Adventure & Treks",
    duration: "8 Days / 7 Nights",
    durationDays: 8,
    price: 24999,
    originalPrice: 32999,
    discountPercent: 24,
    rating: 5.0,
    reviewsCount: 187,
    badge: "Trending Now",
    startEnd: "Shimla to Manali (Full Himalayan Circuit)",
    hotelCategory: "Handpicked Heritage Homestays & Glamping",
    mealPlan: "All Breakfasts & Dinners",
    coverImage: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80"
    ],
    overview: "The ultimate Himalayan road trip for adventurers! Traverse Kinnaur's jaw-dropping Hindustan-Tibet road, explore Chitkul (the last village), send a postcard from Hikkim, and sleep under millions of stars beside the moon-shaped Chandratal lake.",
    highlights: [
      "Send a postcard from the World's Highest Post Office in Hikkim (14,567 ft)",
      "Stay in lakeside luxury dome tents at Chandratal with Milky Way stargazing",
      "Visit 1,000-year-old Key Monastery & Dhankar cliffside gompa",
      "Travel the legendary Kinnaur cliffs, Sangla Valley & Chitkul border village",
      "Rugged 4x4 Tempo Traveller / SUV with certified mountain driver"
    ],
    itinerary: [
      {
        day: 1,
        title: "Shimla to Sangla / Chitkul (Kinnaur Valley)",
        desc: "Early morning pickup from Shimla. Drive through Rampur along the roaring Sutlej river to reach the Kinnaur valley.",
        meals: "Dinner Included",
        stay: "Deluxe Riverside Camp in Sangla"
      },
      {
        day: 2,
        title: "Chitkul (Last Village) to Kalpa with Kinner Kailash View",
        desc: "Visit Chitkul (11,320 ft), India's last inhabited village before Tibet border. Drive to Kalpa for golden sunset over the sacred 6,050m Kinner Kailash peak.",
        meals: "Breakfast & Dinner",
        stay: "Kalpa Heritage Hotel"
      },
      {
        day: 3,
        title: "Kalpa to Nako & Tabo Monastery (Enter Spiti)",
        desc: "Cross into Spiti Valley. Visit the serene Nako Lake and the 1,000-year-old Tabo Monastery, known as the 'Ajanta of the Himalayas'.",
        meals: "Breakfast & Dinner",
        stay: "Tabo Traditional Guesthouse"
      },
      {
        day: 4,
        title: "Tabo to Dhankar & Kaza",
        desc: "Marvel at Dhankar Monastery perched dramatically on a high clay spire over the confluence of Spiti and Pin rivers. Evening arrive in Kaza.",
        meals: "Breakfast & Dinner",
        stay: "Kaza Premium Hotel"
      },
      {
        day: 5,
        title: "High Village Circuit: Hikkim, Komic, Langza & Key Monastery",
        desc: "Post a letter at Hikkim (world's highest post office), visit Komic (highest motorable village), view Langza giant Buddha statue, and visit iconic Key Monastery.",
        meals: "Breakfast & Dinner",
        stay: "Kaza Premium Hotel"
      },
      {
        day: 6,
        title: "Kaza to Chandratal Lake via Kunzum Pass (14,931 ft)",
        desc: "Cross majestic Kunzum La pass with 360-degree glaciers. Reach the shimmering crescent-shaped Chandratal (Moon Lake). Camp under pristine dark skies.",
        meals: "Breakfast & Dinner",
        stay: "Chandratal Luxury Alpine Swiss Camps"
      },
      {
        day: 7,
        title: "Chandratal to Manali via Batal & Atal Tunnel",
        desc: "Drive through the thrilling off-road stretch of Batal, cross Rohtang Pass / Atal Tunnel, and arrive back in lush green Manali.",
        meals: "Breakfast & Dinner",
        stay: "Manali Riverside Cottage"
      },
      {
        day: 8,
        title: "Manali to Delhi / Chandigarh Drop",
        desc: "Relish your final morning Himalayan breakfast and depart for Delhi/Chandigarh with unforgettable memories of the cold desert.",
        meals: "Breakfast Included",
        stay: "Tour Concludes"
      }
    ],
    inclusions: [
      "All transfers in dedicated Force Urbania / 4x4 Innova Crysta",
      "07 Nights accommodation (Hotels, Homestays & Swiss Tents)",
      "Daily breakfast & freshly cooked dinner with local Spitian flavors",
      "Inner Line Permits & Forest conservation fees",
      "Oxygen cylinder & mountain first-aid onboard 24/7",
      "Experienced high-altitude expedition leader"
    ],
    exclusions: [
      "Any personal expenses or monastery donations",
      "Lunch meals during transit",
      "Tips to driver and guides"
    ],
    departureDates: ["Every Saturday", "Nov 14", "Nov 21", "Dec 02", "Dec 16"],
    difficulty: "Moderate",
    idealFor: "Adventure Lovers, Photographers, Solo Travelers, Groups"
  },
  {
    id: "pkg-3",
    title: "Kedarnath Dham & Chopta Tungnath Sacred Pilgrimage",
    region: "uttarakhand",
    theme: "Spiritual / Chardham",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    price: 16999,
    originalPrice: 22499,
    discountPercent: 25,
    rating: 4.9,
    reviewsCount: 420,
    badge: "Spiritual Favorite",
    startEnd: "Haridwar / Rishikesh to Haridwar",
    hotelCategory: "Clean Pilgrimage Hotels & Kedarnath Base Camps",
    mealPlan: "Pure Vegetarian Breakfast & Dinner",
    coverImage: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e421c60b?auto=format&fit=crop&w=900&q=80"
    ],
    overview: "Embark on the holiest Shiva pilgrimage in the Himalayas! Offer prayers at the Kedarnath Jyotirlinga, trek the sacred meadows of Chopta to Tungnath (world's highest Shiva shrine), and immerse in Rishikesh Ganga Aarti.",
    highlights: [
      "VIP assisted Darshan at the Kedarnath Jyotirlinga (11,755 ft)",
      "Optional Helicopter transfer booking assistance (Phata / Guptkashi / Sersi)",
      "Trek to Chopta Tungnath & sunrise view from Chandrashila Summit (13,100 ft)",
      "Visit confluence of Holy Rivers (Devprayag & Rudraprayag)",
      "Pure Satvik and hygienic meals throughout the sacred journey"
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar / Rishikesh to Guptkashi / Sitapur",
        desc: "Morning pickup from Haridwar/Rishikesh. Drive along Ganga and Alaknanda rivers. Stop at Devprayag to witness Bhagirathi and Alaknanda confluence forming Holy Ganga.",
        meals: "Dinner Included",
        stay: "Guptkashi / Sitapur Hotel"
      },
      {
        day: 2,
        title: "Sitapur to Sonprayag & Trek up to Kedarnath Dham",
        desc: "Early morning transfer to Sonprayag/Gaurikund. Begin the sacred 16 km trek (or pony/helicopter) to Kedarnath with echoing chants of 'Har Har Mahadev'. Evening Aarti at temple.",
        meals: "Breakfast & Dinner",
        stay: "Kedarnath Base Camp / GMVN Hotel near Temple"
      },
      {
        day: 3,
        title: "Morning Kedarnath Darshan & Trek Down to Guptkashi",
        desc: "Wake up early for divine Abhishek Darshan at Kedarnath. After blessings, trek down to Gaurikund and drive back to Guptkashi hotel to rest.",
        meals: "Breakfast & Dinner",
        stay: "Guptkashi Hotel"
      },
      {
        day: 4,
        title: "Guptkashi to Chopta & Tungnath Trek",
        desc: "Drive to Chopta, the 'Mini Switzerland of Uttarakhand'. Begin scenic 3.5 km trek to Tungnath, the highest Shiva temple on earth, and reach Chandrashila summit.",
        meals: "Breakfast & Dinner",
        stay: "Chopta Alpine Eco Resort / Camp"
      },
      {
        day: 5,
        title: "Chopta to Rishikesh via Rudraprayag",
        desc: "Scenic descent towards Rishikesh. Check-in to riverside hotel and attend the world-famous evening Ganga Aarti at Triveni Ghat with soulful chants and floating diyas.",
        meals: "Breakfast & Dinner",
        stay: "Rishikesh Boutique Riverside Hotel"
      },
      {
        day: 6,
        title: "Rishikesh Sightseeing & Haridwar Drop",
        desc: "Visit Ram Jhula, Beatles Ashram, and partake in optional river rafting. Afternoon drop at Haridwar Railway Station for your onward journey.",
        meals: "Breakfast Included",
        stay: "Tour Concludes"
      }
    ],
    inclusions: [
      "Haridwar - Kedarnath - Chopta - Haridwar private cab",
      "05 Nights accommodation in verified sanitized hotels & camps",
      "Daily Pure Veg Breakfast and Dinner",
      "Mandatory Biometric Kedarnath Yatra Registration assistance",
      "Tolls, state tax, driver allowance & parking charges",
      "Local guide assistance for Tungnath & Chandrashila trek"
    ],
    exclusions: [
      "Helicopter tickets, mule, pony, or palki charges",
      "Personal pooja or VIP special abhishek charges",
      "Lunch meals during travel"
    ],
    departureDates: ["Every Wednesday & Sunday", "Nov 18", "Nov 25", "Dec 03", "Dec 10"],
    difficulty: "Moderate",
    idealFor: "Devotees, Families, Seniors (with helicopter), Trek Enthusiasts"
  },
  {
    id: "pkg-4",
    title: "Rishikesh Whitewater Adventure & Auli Ski Paradise",
    region: "uttarakhand",
    theme: "Adventure & Treks",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    price: 17499,
    originalPrice: 23999,
    discountPercent: 27,
    rating: 4.8,
    reviewsCount: 204,
    badge: "Thrill Special",
    startEnd: "Dehradun / Rishikesh to Rishikesh",
    hotelCategory: "Adventure Glamping & Auli Mountain Resorts",
    mealPlan: "All Meals during Camping + Hotel Breakfast/Dinner",
    coverImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e421c60b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
    ],
    overview: "Combine India's wildest river rapids with the white slopes of Auli! Raft 16 km on the roaring Ganga, ride Asia's second-highest cable car in Auli, and soak in awe-inspiring views of Mount Nanda Devi (7,816 m).",
    highlights: [
      "16 km Grade III+ Whitewater Rafting from Shivpuri to Rishikesh with cliff jumping",
      "Asia's longest 4 km Cable Car (Ropeway) ride from Joshimath to Auli",
      "Skiing sessions with certified instructors on Auli's international slopes",
      "Panoramic views of Nanda Devi, Kamet, and Trishul Himalayan peaks",
      "Riverside bonfire night with live barbecue and music in Rishikesh"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Rishikesh & Riverside Camping",
        desc: "Arrive in Rishikesh and check into luxury riverside Swiss tents in Shivpuri. Enjoy volleyball, evening bonfire, barbecue, and starlit river whispers.",
        meals: "Lunch, Snacks & Dinner",
        stay: "Luxury Riverside Alpine Camps"
      },
      {
        day: 2,
        title: "Ganga Whitewater Rafting & Drive to Joshimath",
        desc: "Gear up for 16 km whitewater rafting tackling rapids like Roller Coaster and Golf Course. Cliff jump at Maggi point. Afternoon scenic drive to Joshimath.",
        meals: "Breakfast & Dinner",
        stay: "Joshimath Mountain Lodge"
      },
      {
        day: 3,
        title: "Joshimath to Auli via Cable Car & Ski Exploration",
        desc: "Ride the thrilling 4 km aerial ropeway to Auli (10,000 ft). Check into your snow resort. Afternoon skiing practice and walk around the emerald artificial lake.",
        meals: "Breakfast & Dinner",
        stay: "Auli Snow View Resort"
      },
      {
        day: 4,
        title: "Gorson Bugyal Snow Trek & Nanda Devi Sunset",
        desc: "Trek 3 km through dense oak forests to Gorson Bugyal meadows. Stand in awe of Nanda Devi peak glowing golden under the sunset sky.",
        meals: "Breakfast & Dinner",
        stay: "Auli Snow View Resort"
      },
      {
        day: 5,
        title: "Auli to Rishikesh via Rudraprayag Confluence",
        desc: "Descend from Auli and drive back along the Alaknanda valley. Stop at Karnaprayag and Nandaprayag. Arrive Rishikesh by evening.",
        meals: "Breakfast & Dinner",
        stay: "Rishikesh Boutique Hotel"
      },
      {
        day: 6,
        title: "Triveni Ghat, Beatles Ashram & Departure",
        desc: "Morning yoga session by the Ganga, visit Beatles Ashram (Chaurasi Kutia), cafe hopping, and drop at Dehradun Airport or Rishikesh Railway Station.",
        meals: "Breakfast Included",
        stay: "Tour Concludes"
      }
    ],
    inclusions: [
      "16 km Whitewater Rafting with safety gear, lifejackets & helmets",
      "05 Nights accommodation in camps and mountain view resorts",
      "Daily breakfast and dinner (All meals at camp on Day 1)",
      "Private AC transport with experienced hill driver",
      "Bonfire and music night at riverside camp",
      "Sightseeing and entry permits"
    ],
    exclusions: [
      "Auli cable car tickets (approx ₹1,000 per person)",
      "Ski equipment rental and professional ski coaching",
      "Bungee jumping or Giant Swing charges at Rishikesh"
    ],
    departureDates: ["Every Friday", "Nov 20", "Nov 27", "Dec 11", "Dec 18"],
    difficulty: "Moderate",
    idealFor: "Youth, Couples, Adventure Seekers, Corporate Groups"
  },
  {
    id: "pkg-5",
    title: "Romantic Shimla, Kullu & Manali Honeymoon Special",
    region: "himachal",
    theme: "Honeymoon",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    price: 19999,
    originalPrice: 27999,
    discountPercent: 28,
    rating: 5.0,
    reviewsCount: 260,
    badge: "Honeymoon Special",
    startEnd: "Delhi to Delhi (Private Sedan / Crysta throughout)",
    hotelCategory: "4★ / 5★ Luxury Jacuzzi & Valley View Suites",
    mealPlan: "Daily Breakfast, Candlelight Dinner & Honeymoon Inclusions",
    coverImage: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=900&q=80"
    ],
    overview: "Crafted exclusively for newlyweds! Cherish private candlelit dinners overlooking snow peaks, flower bed decoration, private chauffeur-driven luxury cab, scenic pine trails in Shimla, and cozy fireside moments in Manali.",
    highlights: [
      "Exclusive Honeymoon Package: 1 Candlelight Dinner, Badam Milk, Flower Bed Decors & Cake",
      "Private dedicated Dzire / Ertiga cab from Delhi door-to-door (no bus change)",
      "Scenic drive through Bilaspur, Sundernagar Lake & Pandoh Dam",
      "Snow fun at Solang Valley & Atal Tunnel with cozy couple photoshoot spots",
      "Stroll hand-in-hand along Shimla's Ridge & Mall Road at sunset"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Shimla Private Drive",
        desc: "Chauffeured pickup from Delhi Airport/Home. Drive through the Shivalik foothills and timber trails to Shimla. Check into luxury valley-facing suite.",
        meals: "Dinner Included",
        stay: "Shimla Luxury Valley View Suite"
      },
      {
        day: 2,
        title: "Shimla, Kufri & Romantic Stroll on The Ridge",
        desc: "Excursion to Kufri for horse riding and snow viewpoints. Evening walk on Mall Road, Christ Church, and cozy cafe date.",
        meals: "Breakfast & Romantic Dinner",
        stay: "Shimla Luxury Valley View Suite"
      },
      {
        day: 3,
        title: "Shimla to Manali via Kullu Valley & River Rafting",
        desc: "Scenic drive to Manali along the Beas river. Stop at Kullu for river rafting and Pashmina shawl shopping. Arrive in Manali; special floral bed decoration.",
        meals: "Breakfast & Special Candlelight Dinner",
        stay: "Manali Premium Honeymoon Cottage"
      },
      {
        day: 4,
        title: "Solang Valley Snow Adventure & Atal Tunnel Excursion",
        desc: "Full day amidst snow in Solang Valley. Enjoy tandem paragliding, cable car rides, and explore the snowy portal of Atal Tunnel into Lahaul.",
        meals: "Breakfast & Dinner",
        stay: "Manali Premium Honeymoon Cottage"
      },
      {
        day: 5,
        title: "Naggar Castle, Old Manali & Vashisht Baths",
        desc: "Visit the royal wooden Naggar Castle, cozy cafe hopping in Old Manali, and soothing hot sulphur bath at Vashisht.",
        meals: "Breakfast & Dinner",
        stay: "Manali Premium Honeymoon Cottage"
      },
      {
        day: 6,
        title: "Manali to Delhi Return Drive",
        desc: "Post a lazy mountain breakfast, drive back comfortably in your private car to Delhi Airport/Railway Station.",
        meals: "Breakfast Included",
        stay: "Tour Concludes"
      }
    ],
    inclusions: [
      "All transfers in dedicated private AC Sedan / Ertiga for the entire 6 days",
      "02 Nights in Shimla & 03 Nights in Manali luxury 4★ rooms",
      "05 Buffet Breakfasts & 05 Gourmet Dinners",
      "Special Honeymoon Inclusions: Candlelight dinner, Cake, Decorated bed & Badam milk",
      "All toll taxes, state permits, parking fees, and driver charges"
    ],
    exclusions: [
      "Lunches and adventure sports charges",
      "Monument entry fees",
      "Personal shopping and gratuities"
    ],
    departureDates: ["Daily Departures Available", "Flexible Dates for Couples"],
    difficulty: "Easy",
    idealFor: "Newlyweds, Couples, Anniversaries"
  },
  {
    id: "pkg-6",
    title: "Nainital, Mukteshwar & Jim Corbett Wildlife Safari",
    region: "uttarakhand",
    theme: "Family",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    price: 15499,
    originalPrice: 20999,
    discountPercent: 26,
    rating: 4.9,
    reviewsCount: 175,
    badge: "Wildlife & Lakes",
    startEnd: "Delhi to Delhi (Private AC Vehicle)",
    hotelCategory: "Heritage Lake Resorts & Jungle Wilderness Lodges",
    mealPlan: "Breakfast & Dinner Daily",
    coverImage: "https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e421c60b?auto=format&fit=crop&w=900&q=80"
    ],
    overview: "The quintessential Kumaon holiday! Sail across the emerald waters of Naini Lake, gaze at 300 km of Himalayan snow peaks in Mukteshwar, and track the elusive Royal Bengal Tiger in Jim Corbett National Park on an open 4x4 Gypsy.",
    highlights: [
      "Private Open 4x4 Jeep Safari in Jim Corbett National Park",
      "Yacht sailing and shikara boat ride on Naini Lake",
      "Stunning 180° panorama of Trishul, Nanda Devi & Panchachuli from Mukteshwar",
      "Visit Garjiya Devi Temple, Corbett Waterfalls & Heritage Museum",
      "Comfortable Delhi pickup and drop by dedicated private cab"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Nainital (Lake District of India)",
        desc: "Morning pickup from Delhi. Scenic drive ascending through the Kumaon hills. Arrive in Nainital and enjoy evening boat ride on Naini Lake.",
        meals: "Dinner Included",
        stay: "Nainital Lake View Hotel"
      },
      {
        day: 2,
        title: "Nainital Lake Tour: Bhimtal, Sattal & Naukuchiatal",
        desc: "Explore the lake cluster of Kumaon: Bhimtal with its central island aquarium, Sattal seven interconnected lakes, and 9-cornered Naukuchiatal.",
        meals: "Breakfast & Dinner",
        stay: "Nainital Lake View Hotel"
      },
      {
        day: 3,
        title: "Mukteshwar Himalayan Viewpoint to Jim Corbett",
        desc: "Drive to Mukteshwar. Visit the 350-year-old Shiva temple and Chauli Ki Jali cliff. Afternoon drive down to Corbett National Park; check into jungle lodge.",
        meals: "Breakfast & Dinner",
        stay: "Corbett Jungle Resort with Swimming Pool"
      },
      {
        day: 4,
        title: "Morning 4x4 Open Jeep Safari & Corbett Local Sightseeing",
        desc: "Early morning thrilling Open 4x4 Gypsy Safari into Corbett Tiger Reserve (Bijrani / Jhirna / Dhela zone). Spot wild elephants, deer, and royal tigers. Visit Garjiya temple.",
        meals: "Breakfast & Dinner",
        stay: "Corbett Jungle Resort"
      },
      {
        day: 5,
        title: "Corbett to Delhi Return Drive",
        desc: "Enjoy resort breakfast and morning bird watching by the Kosi River. Depart for Delhi with drop at your destination by evening.",
        meals: "Breakfast Included",
        stay: "Tour Concludes"
      }
    ],
    inclusions: [
      "Dedicated private AC vehicle for all transfers and sightseeing",
      "02 Nights in Nainital & 02 Nights in Corbett luxury resort",
      "Daily breakfast & dinner buffet",
      "01 Open 4x4 Gypsy Safari in Corbett Tiger Reserve with guide",
      "Forest entry permits & driver allowances"
    ],
    exclusions: [
      "Boat ride fees on Naini Lake (approx ₹200-₹300)",
      "Lunches and beverages",
      "Any camera entry fees inside park"
    ],
    departureDates: ["Departures Every Thursday & Saturday", "All Season Available"],
    difficulty: "Easy",
    idealFor: "Families with Children, Wildlife Lovers, Seniors"
  },
  {
    id: "pkg-7",
    title: "Dharamshala, McLeodganj & Dalhousie 'Mini Switzerland'",
    region: "himachal",
    theme: "Family",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    price: 16499,
    originalPrice: 21999,
    discountPercent: 25,
    rating: 4.8,
    reviewsCount: 195,
    badge: "Heritage & Hills",
    startEnd: "Pathankot / Delhi to Pathankot / Delhi",
    hotelCategory: "3★ / 4★ Colonial & Himalayan Hotels",
    mealPlan: "Daily Breakfast & Dinner",
    coverImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80"
    ],
    overview: "Immerse in Tibetan monasteries, fragrant Kangra tea gardens, and the breathtaking pine glades of Khajjiar — officially certified as India's Mini Switzerland.",
    highlights: [
      "Visit the Dalai Lama Main Temple & Tsuglagkhang Complex in McLeodganj",
      "Day excursion to Khajjiar meadow surrounded by dense deodar forests",
      "Explore St. John in the Wilderness Church & colonial Dalhousie",
      "Tour HPCA International Cricket Stadium with snow-capped Dhauladhar backdrop",
      "Hygienic private cab throughout your scenic journey"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dharamshala / McLeodganj",
        desc: "Pickup from Pathankot / Gaggal Airport / Delhi. Check in to McLeodganj hotel. Evening visit to Dalai Lama Temple and Tibetan handicraft market.",
        meals: "Dinner Included",
        stay: "McLeodganj Boutique Hotel"
      },
      {
        day: 2,
        title: "Dharamshala Sightseeing & Tea Gardens",
        desc: "Visit HPCA Cricket Stadium, Kangra Art Museum, scenic Dharamshala tea gardens, and Bhagsu Nag waterfall.",
        meals: "Breakfast & Dinner",
        stay: "McLeodganj Boutique Hotel"
      },
      {
        day: 3,
        title: "Dharamshala to Dalhousie via Jot Pass",
        desc: "Drive through pine-scented hills to the colonial town of Dalhousie. Check into hotel and evening stroll at Gandhi Chowk.",
        meals: "Breakfast & Dinner",
        stay: "Dalhousie Heritage Hotel"
      },
      {
        day: 4,
        title: "Khajjiar (Mini Switzerland) & Kalatop Wildlife Sanctuary",
        desc: "Full day in magical Khajjiar. Walk around the lake and ancient floating island, horse riding, and dense deodar trails in Kalatop.",
        meals: "Breakfast & Dinner",
        stay: "Dalhousie Heritage Hotel"
      },
      {
        day: 5,
        title: "Panchpula, Dainkund Peak & Subhash Baoli",
        desc: "Trek to Dainkund, the highest peak in Dalhousie, with 360-degree views of the Chenab and Ravi river valleys.",
        meals: "Breakfast & Dinner",
        stay: "Dalhousie Heritage Hotel"
      },
      {
        day: 6,
        title: "Dalhousie to Pathankot / Delhi Drop",
        desc: "Farewell breakfast in the hills. Drive down to Pathankot Railway Station or onward destination.",
        meals: "Breakfast Included",
        stay: "Tour Concludes"
      }
    ],
    inclusions: [
      "Dedicated private vehicle for all 6 days",
      "02 Nights in McLeodganj + 03 Nights in Dalhousie",
      "Daily breakfast & dinner buffet",
      "Driver allowance, toll taxes, parking",
      "Guided support for Khajjiar & local visits"
    ],
    exclusions: [
      "Lunch and personal cafe bills",
      "Horse riding and paragliding in Khajjiar"
    ],
    departureDates: ["Weekly Departures Every Tuesday & Friday"],
    difficulty: "Easy",
    idealFor: "Families, Seniors, Peace Seekers"
  },
  {
    id: "pkg-8",
    title: "Chardham Yatra by Road & Helicopter (Kedarnath, Badrinath, Gangotri, Yamunotri)",
    region: "uttarakhand",
    theme: "Spiritual / Chardham",
    duration: "10 Days / 9 Nights",
    durationDays: 10,
    price: 38999,
    originalPrice: 49999,
    discountPercent: 22,
    rating: 5.0,
    reviewsCount: 350,
    badge: "Maha Pilgrimage",
    startEnd: "Haridwar to Haridwar (Complete Sacred Circuit)",
    hotelCategory: "Premium Pilgrimage Hotels with Hot Water & Geysers",
    mealPlan: "Pure Satvik Vegetarian Meals (Breakfast & Dinner)",
    coverImage: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e421c60b?auto=format&fit=crop&w=900&q=80"
    ],
    overview: "The most sacred journey of a lifetime! Complete all four Himalayan dhams — Yamunotri, Gangotri, Kedarnath, and Badrinath with experienced drivers, guaranteed hot water rooms, and dedicated yatra managers.",
    highlights: [
      "Complete Darshan of all 4 sacred Dhams (Yamunotri, Gangotri, Kedarnath & Badrinath)",
      "Dedicated Yatra Manager traveling with or coordinating the group 24/7",
      "Hot water guaranteed in all high-altitude mountain halts",
      "Mana Village visit — The First Village of India near Tibetan border & Bheem Pul",
      "Pure vegetarian Satvik meals prepared with utmost cleanliness"
    ],
    itinerary: [
      { day: 1, title: "Haridwar to Barkot / Yamunotri Base", desc: "Drive along Mussoorie and Kempty Falls to Barkot.", meals: "Dinner", stay: "Barkot Hotel" },
      { day: 2, title: "Barkot to Yamunotri Dham & back", desc: "Trek to Yamunotri, holy dip in Surya Kund, Divya Shila pooja.", meals: "Breakfast & Dinner", stay: "Barkot Hotel" },
      { day: 3, title: "Barkot to Uttarkashi (Kashi Vishwanath Temple)", desc: "Scenic drive to Uttarkashi alongside Bhagirathi River.", meals: "Breakfast & Dinner", stay: "Uttarkashi Hotel" },
      { day: 4, title: "Uttarkashi to Gangotri Dham & back", desc: "Darshan at Gangotri Temple, Bhagirathi Shila, and Submerged Shivling.", meals: "Breakfast & Dinner", stay: "Uttarkashi Hotel" },
      { day: 5, title: "Uttarkashi to Guptkashi / Sitapur", desc: "Scenic hill drive connecting Bhagirathi to Mandakini valley.", meals: "Breakfast & Dinner", stay: "Guptkashi Hotel" },
      { day: 6, title: "Kedarnath Darshan & Night Stay", desc: "Trek or helicopter to Kedarnath. Evening Aarti at 11,755 ft.", meals: "Breakfast & Dinner", stay: "Kedarnath Camp" },
      { day: 7, title: "Kedarnath descent to Pipalkoti", desc: "Descent from Kedarnath and drive towards Badrinath route.", meals: "Breakfast & Dinner", stay: "Pipalkoti Hotel" },
      { day: 8, title: "Pipalkoti to Badrinath Dham", desc: "Holy dip in Tapt Kund, Darshan of Lord Badri Vishal, visit Mana Village.", meals: "Breakfast & Dinner", stay: "Badrinath Hotel" },
      { day: 9, title: "Badrinath to Rudraprayag / Srinagar", desc: "Visit Vishnuprayag, Nandaprayag, Karnaprayag confluences.", meals: "Breakfast & Dinner", stay: "Rudraprayag Hotel" },
      { day: 10, title: "Rudraprayag to Haridwar Drop via Rishikesh", desc: "Drive back with stops at Devprayag and Rishikesh. Haridwar drop.", meals: "Breakfast", stay: "Tour Concludes" }
    ],
    inclusions: [
      "AC vehicle throughout (AC turned off in hill sections as standard)",
      "09 Nights accommodation in verified comfortable hotels & camps",
      "Pure vegetarian Breakfast and Dinner daily",
      "Chardham biometric registration & health permit assistance",
      "Driver, toll, parking & state permits"
    ],
    exclusions: [
      "Pony, doli, helicopter shuttle charges at Yamunotri/Kedarnath",
      "Special VIP puja tickets"
    ],
    departureDates: ["Departures throughout May to October Season", "Batches every Monday & Thursday"],
    difficulty: "Challenging (Pilgrimage)",
    idealFor: "Seniors, Families, Devotees, Spiritual Pilgrims"
  }
];

// Why choose us points
export const whyChooseUsData = [
  {
    icon: "ShieldCheck",
    title: "100% Himachal & UK Local Experts",
    desc: "We live and breathe the Himalayas. Our operational teams, drivers, and coordinators are born and raised in Manali, Shimla, and Rishikesh."
  },
  {
    icon: "Car",
    title: "Expert High-Altitude Mountain Drivers",
    desc: "Our drivers are vetted for Rohtang, Kunzum Pass, and treacherous Chardham bends. Clean, sanitized cabs with commercial tourist permits."
  },
  {
    icon: "Clock",
    title: "24/7 On-Ground Emergency Support",
    desc: "From sudden road weather advisories to medical oxygen backups, our on-ground crew resolves any hitch within minutes."
  },
  {
    icon: "Sparkles",
    title: "Zero Hidden Fees & Flexible Rescheduling",
    desc: "All taxes, tolls, permits, and driver charges clearly itemized. Free rescheduling in case of unpredictable mountain weather closures."
  },
  {
    icon: "Award",
    title: "Govt. of HP Tourism Approved",
    desc: "Registered tour operator under Himachal Pradesh Department of Tourism and Civil Aviation (Registration No: HP-TO-2022-7814)."
  },
  {
    icon: "Users",
    title: "12,000+ Happy Indian Travelers",
    desc: "Consistent 4.9★ rating on Google Reviews from families, honeymoon couples, solo backpackers, and spiritual groups."
  }
];

// Verified Customer Reviews
export const reviewsData = [
  {
    id: 1,
    name: "Rohit & Ananya Verma",
    location: "New Delhi",
    tour: "Manali & Solang Snow Escapade",
    rating: 5,
    date: "October 2026",
    comment: "Our Manali trip was seamlessly organized! The hotel had a stunning balcony view of snow peaks. Driver Bhupinder ji drove like a pro on the Atal tunnel route. 100% booking our next Spiti trip with Himshikhar Escapes!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Dr. Rajesh Sharma & Family",
    location: "Ahmedabad, Gujarat",
    tour: "Kedarnath & Chopta Sacred Pilgrimage",
    rating: 5,
    date: "September 2026",
    comment: "Taking my elderly parents to Kedarnath was daunting, but the team took care of everything — from pony coordination to guaranteed warm rooms in Sitapur and clean satvik Gujarati food. Truly blessed experience!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Vikram & Group",
    location: "Bengaluru",
    tour: "Spiti Valley & Chandratal Circuit",
    rating: 5,
    date: "August 2026",
    comment: "The Spiti trip in their 4x4 Urbania was epic! Stargazing at Chandratal camp was out of this world. Our tour lead Aman had an oxygen cylinder ready and knew the best local momo spots in Kaza. Best trip ever!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Pooja & Sameer Kulkarni",
    location: "Pune, Maharashtra",
    tour: "Shimla Manali Romantic Honeymoon",
    rating: 5,
    date: "October 2026",
    comment: "The candlelit dinner in Manali with flower decor and cake made our honeymoon truly unforgettable. We felt so pampered throughout. Highly recommended for couples wanting hassle-free luxury in Himachal!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  }
];

// FAQs for mountain travelers
export const faqsData = [
  {
    q: "Do I need special permits to visit Rohtang Pass or Spiti Valley?",
    a: "Rohtang Pass requires an NGT (National Green Tribunal) permit, which our team arranges in advance for our guests. Indian citizens do not need an Inner Line Permit for Spiti Valley, only a valid government ID (Aadhaar or Voter ID). For Chitkul and Kaza, our driver handles local check-post entries."
  },
  {
    q: "How do you handle acute mountain sickness (AMS) in high-altitude tours like Spiti or Kedarnath?",
    a: "Safety is our topmost priority. We design itineraries with proper gradual acclimatization (e.g. Kalpa and Sangla halts before Kaza). All our Spiti and Kedarnath vehicles carry portable medical oxygen cylinders, oximeters, and first-aid kits, with guides trained in high-altitude protocols."
  },
  {
    q: "What is your booking and cancellation policy?",
    a: "You can reserve any package with just a 25% advance token deposit. The remaining balance can be paid upon arrival in Himachal or Uttarakhand. In case of extreme weather alerts, landslides, or road closures, we offer 100% free date rescheduling or credit vouchers valid for 12 months."
  },
  {
    q: "Can I customize the itinerary according to my family's pace?",
    a: "Yes! 100% of our private tours can be customized. Whether you want extra days in Jibhi, luxury jacuzzi cottages in Manali, or a helicopter upgrade for Kedarnath, our Himachal travel architects will tailor the plan to your exact preferences."
  },
  {
    q: "What clothes should we pack for Himachal & Uttarakhand?",
    a: "For summer (Apr-Jun): Light cottons with a fleece jacket for evenings. For autumn/spring (Mar, Sep-Nov): Heavy woolens, windproof jackets, and thermal innerwear. For winter snow (Dec-Feb): Heavy down jackets, snow boots, woolen caps, gloves, and UV sunglasses."
  }
];

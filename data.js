const indianStatesAndUTs = [
  // --- STATES ---
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [79.4192, 16.5062]
    },
    "properties": {
      "name": "Andhra Pradesh",
      "capital": "Amaravati",
      "speciality": "Rice Bowl of India & Kuchipudi Dance",
      "language": "Telugu",
      "details": "Known for the Tirumala Venkateswara Temple and its rich agricultural heritage."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [93.6053, 27.0844]
    },
    "properties": {
      "name": "Arunachal Pradesh",
      "capital": "Itanagar",
      "speciality": "Land of the Dawn-Lit Mountains",
      "language": "English",
      "details": "Famous for the Tawang Monastery and diverse tribal cultures."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [91.7362, 26.1158]
    },
    "properties": {
      "name": "Assam",
      "capital": "Dispur",
      "speciality": "Assam Tea & One-horned Rhinos",
      "language": "Assamese",
      "details": "Home to Kaziranga National Park and the mighty Brahmaputra river."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [85.1376, 25.5941]
    },
    "properties": {
      "name": "Bihar",
      "capital": "Patna",
      "speciality": "Cradle of Buddhism & Ancient History",
      "language": "Hindi",
      "details": "Home to Bodh Gaya, where Buddha attained enlightenment, and the ancient Nalanda University."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [81.6296, 21.2514]
    },
    "properties": {
      "name": "Chhattisgarh",
      "capital": "Raipur",
      "speciality": "Heavily Forested & Mineral Rich",
      "language": "Chhattisgarhi, Hindi",
      "details": "Known for its waterfalls (Chitrakote) and steel industries."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [73.8278, 15.4909]
    },
    "properties": {
      "name": "Goa",
      "capital": "Panaji",
      "speciality": "Beaches & Portuguese Heritage",
      "language": "Konkani",
      "details": "Famous for its vibrant nightlife, seafood, and the Basilica of Bom Jesus."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [72.6369, 23.2156]
    },
    "properties": {
      "name": "Gujarat",
      "capital": "Gandhinagar",
      "speciality": "Asiatic Lions & White Desert",
      "language": "Gujarati",
      "details": "Home to the Statue of Unity (tallest in the world) and Gir National Park."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [76.7794, 30.7333]
    },
    "properties": {
      "name": "Haryana",
      "capital": "Chandigarh",
      "speciality": "Agricultural Powerhouse & Sports",
      "language": "Hindi",
      "details": "A major contributor to India's grain production and Olympic athletes."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [77.1734, 31.1048]
    },
    "properties": {
      "name": "Himachal Pradesh",
      "capital": "Shimla",
      "speciality": "Himalayan Landscapes & Apples",
      "language": "Hindi",
      "details": "A popular tourist destination for hill stations like Manali and Dharamshala."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [85.3096, 23.3441]
    },
    "properties": {
      "name": "Jharkhand",
      "capital": "Ranchi",
      "speciality": "Land of Forests & Minerals",
      "language": "Hindi",
      "details": "Rich in mineral resources like coal and iron ore; famous for waterfalls."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [77.5946, 12.9716]
    },
    "properties": {
      "name": "Karnataka",
      "capital": "Bengaluru",
      "speciality": "Silicon Valley of India & Hampi Ruins",
      "language": "Kannada",
      "details": "A hub for IT and biotechnology, also home to the ancient Vijayanagara empire ruins."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [76.9366, 8.5241]
    },
    "properties": {
      "name": "Kerala",
      "capital": "Thiruvananthapuram",
      "speciality": "God's Own Country (Backwaters)",
      "language": "Malayalam",
      "details": "Famous for high literacy, Ayurveda, houseboats, and spice plantations."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [77.4126, 23.2599]
    },
    "properties": {
      "name": "Madhya Pradesh",
      "capital": "Bhopal",
      "speciality": "Heart of India (Tiger State)",
      "language": "Hindi",
      "details": "Known for Khajuraho temples, Sanchi Stupa, and having the highest tiger population."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [72.8777, 19.0760]
    },
    "properties": {
      "name": "Maharashtra",
      "capital": "Mumbai",
      "speciality": "Financial Hub & Bollywood",
      "language": "Marathi",
      "details": "Home to the Gateway of India, Ajanta & Ellora caves, and India's stock exchange."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [93.9368, 24.8170]
    },
    "properties": {
      "name": "Manipur",
      "capital": "Imphal",
      "speciality": "Jewel of India (Loktak Lake)",
      "language": "Meitei (Manipuri)",
      "details": "Famous for the floating Keibul Lamjao National Park and Manipuri classical dance."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [91.8933, 25.5788]
    },
    "properties": {
      "name": "Meghalaya",
      "capital": "Shillong",
      "speciality": "Abode of Clouds & Living Root Bridges",
      "language": "English, Khasi, Garo",
      "details": "Contains Cherrapunji and Mawsynram, the wettest places on Earth."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [92.7176, 23.7271]
    },
    "properties": {
      "name": "Mizoram",
      "capital": "Aizawl",
      "speciality": "Land of Blue Mountains",
      "language": "Mizo, English",
      "details": "Known for its bamboo forests and the vast Chapchar Kut festival."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [94.1086, 25.6751]
    },
    "properties": {
      "name": "Nagaland",
      "capital": "Kohima",
      "speciality": "Land of Festivals (Hornbill)",
      "language": "English",
      "details": "Famous for its unique tribal culture, rich traditions, and the Hornbill Festival."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [85.8245, 20.2961]
    },
    "properties": {
      "name": "Odisha",
      "capital": "Bhubaneswar",
      "speciality": "Temples & Classical Dance (Odissi)",
      "language": "Odia",
      "details": "Home to the Jagannath Temple (Puri) and the Konark Sun Temple."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [75.3412, 31.1471]
    },
    "properties": {
      "name": "Punjab",
      "capital": "Chandigarh",
      "speciality": "Land of Five Rivers & Golden Temple",
      "language": "Punjabi",
      "details": "Famous for the Golden Temple in Amritsar, Bhangra dance, and wheat production."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [75.7873, 26.9124]
    },
    "properties": {
      "name": "Rajasthan",
      "capital": "Jaipur",
      "speciality": "Land of Kings (Forts & Palaces)",
      "language": "Hindi, Rajasthani",
      "details": "Famous for the Thar Desert, Jaipur (Pink City), and Udaipur (City of Lakes)."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [88.6138, 27.3314]
    },
    "properties": {
      "name": "Sikkim",
      "capital": "Gangtok",
      "speciality": "Organic State & Kangchenjunga",
      "language": "Nepali, English",
      "details": "India's first fully organic state; home to the third highest mountain in the world."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [80.2707, 13.0827]
    },
    "properties": {
      "name": "Tamil Nadu",
      "capital": "Chennai",
      "speciality": "Land of Temples & Classical Culture",
      "language": "Tamil",
      "details": "Known for Dravidian architecture, Bharatanatyam dance, and the automobile industry."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [78.4867, 17.3850]
    },
    "properties": {
      "name": "Telangana",
      "capital": "Hyderabad",
      "speciality": "IT Hub & Biryani",
      "language": "Telugu",
      "details": "Famous for Charminar, Golconda Fort, and the Ramoji Film City."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [91.2868, 23.8315]
    },
    "properties": {
      "name": "Tripura",
      "capital": "Agartala",
      "speciality": "Palaces & Bamboo Crafts",
      "language": "Bengali, Kokborok",
      "details": "Known for the Ujjayanta Palace and Neermahal (Water Palace)."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [80.9462, 26.8467]
    },
    "properties": {
      "name": "Uttar Pradesh",
      "capital": "Lucknow",
      "speciality": "Taj Mahal & Spiritual Centers",
      "language": "Hindi",
      "details": "Most populous state; home to the Taj Mahal (Agra) and Varanasi (spiritual capital)."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [78.0322, 30.3165]
    },
    "properties": {
      "name": "Uttarakhand",
      "capital": "Dehradun",
      "speciality": "Land of Gods (Devbhoomi)",
      "language": "Hindi, Sanskrit",
      "details": "Famous for the Himalayas, Yoga (Rishikesh), and the Ganges river origin."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [88.3639, 22.5726]
    },
    "properties": {
      "name": "West Bengal",
      "capital": "Kolkata",
      "speciality": "Cultural Capital & Sundarbans",
      "language": "Bengali",
      "details": "Known for Durga Puja, literature, and the Royal Bengal Tigers in Sundarbans."
    }
  },

  // --- UNION TERRITORIES ---
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [92.7265, 11.6234]
    },
    "properties": {
      "name": "Andaman and Nicobar Islands",
      "capital": "Port Blair",
      "speciality": "Emerald Islands",
      "language": "Hindi, English",
      "details": "Remote archipelago known for pristine beaches and Cellular Jail."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [76.7794, 30.7333]
    },
    "properties": {
      "name": "Chandigarh",
      "capital": "Chandigarh",
      "speciality": "The City Beautiful",
      "language": "English, Hindi, Punjabi",
      "details": "The first planned city of independent India; capital of both Punjab and Haryana."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [72.9668, 20.2763]
    },
    "properties": {
      "name": "Dadra & Nagar Haveli and Daman & Diu",
      "capital": "Daman",
      "speciality": "Portuguese History & Tribal Culture",
      "language": "Gujarati, Hindi",
      "details": "Known for colonial forts, beaches, and scenic beauty."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [77.2090, 28.6139]
    },
    "properties": {
      "name": "Delhi",
      "capital": "New Delhi",
      "speciality": "Capital of India",
      "language": "Hindi, English",
      "details": "The political center of India; home to the Red Fort, Qutub Minar, and India Gate."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [74.7973, 34.0837]
    },
    "properties": {
      "name": "Jammu and Kashmir",
      "capital": "Srinagar (Summer) / Jammu (Winter)",
      "speciality": "Paradise on Earth",
      "language": "Kashmiri, Dogri, Urdu",
      "details": "Renowned for Dal Lake, houseboats, and Mughal Gardens."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [77.5771, 34.1526]
    },
    "properties": {
      "name": "Ladakh",
      "capital": "Leh",
      "speciality": "Land of High Passes",
      "language": "Ladakhi, Hindi",
      "details": "Famous for its stark mountain landscapes, monasteries, and Pangong Lake."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [72.6420, 10.5667]
    },
    "properties": {
      "name": "Lakshadweep",
      "capital": "Kavaratti",
      "speciality": "Coral Paradise",
      "language": "Malayalam",
      "details": "India's smallest Union Territory, known for its exotic coral reefs."
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [79.8145, 11.9416]
    },
    "properties": {
      "name": "Puducherry",
      "capital": "Puducherry",
      "speciality": "French Riviera of the East",
      "language": "Tamil, French, English",
      "details": "Known for its French colonial architecture and the Auroville experimental township."
    }
  }
];
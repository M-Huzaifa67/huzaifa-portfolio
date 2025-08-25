

const imageBasePath = "/assets/images/";
const videoBasePath = "/assets/videos/";


export const PROJECTS = [
  {
    id: 1,
    title: "Course Recommendation App",
    overview: "A personalized mobile app that suggests courses dynamically based on user interests.",
    image: imageBasePath + "proj1.jpg",
    details: [
      {
        section: "description",
        content:
          "A personalized course recommendation mobile app built with Flutter, designed to guide learners toward the most relevant courses based on their interests and progress. The app leverages a custom-trained machine learning model to deliver intelligent, data-driven recommendations, creating an adaptive and engaging learning experience.",
      },
      {
        section: "Key Features",
        content: [
          "Course recommendations tailored to user interests",
          "Dynamic updates when new courses are selected",
          "Enrolled courses section with PDF, quizzes, and results",
          "User profile with course history",
          "Authentication with password reset",
        ],
      },
      {
        section: "Tech Stack",
        content: [
          "Frontend: Flutter (Dart)",
          "Backend/Storage: Local ML model + Firebase (Auth & Database)",
          "Machine Learning: Python (model tuning, training & testing)",
        ],
      },
      {
        section: "My Contributions",
        content: [
          "Developed and trained the machine learning model for recommendations",
          "Designed and implemented complete frontend in Flutter",
          "Integrated ML model into the mobile app",
          "Managed authentication, state handling, and user flow",
        ],
      },
      {
        section: "video",
        thumbnail: imageBasePath + "proj1.jpg",
        content: "https://huzaifa-portfolio-67.web.app/assets/videos/crs.mp4",
      },
      {
        section: "link",
        content: "#",
      },
    ],
  },

  {
    id: 2,
    title: "Food Delivery App",
    overview:
      "Crafted a seamless food ordering experience with real-time tracking, menu browsing and food ordering for local restaurants.",
    image: imageBasePath + "foodies.jpeg",
    details: [
      {
        section: "description",
        content:
          "A modern food delivery application providing users with a smooth ordering process, restaurant browsing, and real-time order tracking. Designed to enhance convenience for customers and increase visibility for local restaurants.",
      },
      {
        section: "Key Features",
        content: [
          "Browse restaurants and menus",
          "Order tracking on map",
          "Order history and re-order option",
        ],
      },
      {
        section: "Tech Stack",
        content: [
          "Frontend: Flutter (Dart)",
          "Backend: Firebase (Realtime Database, Auth)",
          "Maps API: Google Maps",
        ],
      },
      {
        section: "My Contributions",
        content: [
          "Designed user interface with Flutter widgets",
          "Integrated Firebase Authentication and Realtime Database",
          "Implemented live order status updates using Google Maps API",
        ],
      },
      {
        section: "video",
        thumbnail: imageBasePath + "foodies.jpeg",
        content: "assets/videos/food-delivery.mp4",
      },
      {
        section: "link",
        content: "#",
      },
    ],
  },

  {
    id: 3,
    title: "Tourism Guide",
    overview:
      "Developed a smart Tourism Guide App providing personalized recommendations, nearby attractions, restaurant bookings, and seamless itinerary planning through location-based services.",
    image: imageBasePath + "proj3.jpg",
    details: [
      {
        section: "description",
        content:
          "An intelligent tourism guide application that uses location-based services to recommend attractions, restaurants, and events. Includes itinerary planning, booking support, and personalized suggestions to enhance travel experiences.",
      },
      {
        section: "Key Features",
        content: [
          "Location-based attraction recommendations",
          "Nearby restaurants with ratings & reviews",
          "Smart itinerary planning",
          "Hotel and ticket booking integration",
          "Offline mode for saved itineraries",
        ],
      },
      {
        section: "Tech Stack",
        content: [
          "Frontend: Flutter (Dart)",
          "Backend: Firebase Firestore",
          "APIs: Google Maps,Google Places, OpenWeather",
        ],
      },
      {
        section: "My Contributions",
        content: [
          "Implemented location services and integrated Google Maps",
          "Built recommendation system for attractions",
          "Designed itinerary planner with calendar sync",
          "Optimized UI for travelers with offline support",
        ],
      },
      {
        section: "video",
        thumbnail: imageBasePath + "proj3.jpg",
        content: "assets/videos/tourism-guide.mp4",
      },
      {
        section: "link",
        content: "#",
      },
    ],
  },

  {
    id: 4,
    title: "Chat Application",
    overview:
      "Developed a real-time chat lightweight messaging platform with instant delivery, user authentication, and smooth one-on-one conversations.",
    image: imageBasePath + "chatApp.jpeg",
    details: [
      {
        section: "description",
        content:
          "A lightweight, secure real-time chat application that supports one-on-one messaging with instant delivery, and persistent chat history. Built to provide a smooth and reliable communication experience.",
      },
      {
        section: "Key Features",
        content: [
          "Real-time one-on-one messaging",
          "User authentication and profile management",
          "Typing indicators & message seen status",
          "Offline chat storage",
        ],
      },
      {
        section: "Tech Stack",
        content: [
          "Frontend: Flutter (Dart)",
          "Backend: Firebase (Auth, Firestore, Cloud Messaging)",
        ],
      },
      {
        section: "My Contributions",
        content: [
          "Integrated Firebase Authentication for secure logins",
          "Developed chat UI with message bubbles and typing status",
          "Handled data persistence for offline messaging",
        ],
      },
      {
        section: "video",
        thumbnail: imageBasePath + "chatApp.jpeg",
        content: "assets/videos/chat-app.mp4",
      },
      {
        section: "link",
        content: "#",
      },
    ],
  },

  {
    id: 5,
    title: "GoRide",
    overview: "A ride-hailing app like InDrive.",
    image: imageBasePath + "goride.jpeg",
    details: [
      {
        section: "description",
        content:
          "A ride-hailing application inspired by services like InDrive and Uber, allowing users to book rides, negotiate fares, and connect directly with nearby drivers in real-time for a flexible and convenient travel experience.",
      },
      {
        section: "Key Features",
        content: [
          "Real-time ride booking with live tracking",
          "Fare negotiation between driver and rider",
          "Driver rating & review system",
        ],
      },
      {
        section: "Tech Stack",
        content: [
          "Frontend: Flutter (Dart)",
          "Backend: Firebase Firestore",
          "Maps API: Google Maps SDK",
        ],
      },
      {
        section: "My Contributions",
        content: [
          "Developed ride booking flow with live driver tracking",
          "Integrated fare negotiation system",
          "Built driver profile, rating & reviews feature",
        ],
      },
      {
        section: "video",
        thumbnail: imageBasePath + "goride.jpeg",
        content: "assets/videos/goride-demo.mp4",
      },
      {
        section: "link",
        content: "#",
      },
    ],
  },

  {
    id: 6,
    title: "6Valley",
    overview:
      "A comprehensive e-commerce platform designed to facilitate online shopping, offering a wide range of features such as product browsing, cart management, and secure checkout for a seamless shopping experience.",
    image: imageBasePath + "6valley.jpeg",
    details: [
      {
        section: "description",
        content:
          "An end-to-end e-commerce solution with multi-vendor support, product search, secure checkout, and order management. Built to deliver a smooth and intuitive shopping experience for users while helping vendors manage their stores.",
      },
      {
        section: "Key Features",
        content: [
          "Multi-vendor marketplace support",
          "Product browsing with categories & filters",
          "Cart and wishlist management",
          "Order tracking",
        ],
      },
      {
        section: "Tech Stack",
        content: [
          "Frontend: Flutter (Dart)",
          "Backend: Firebase (Firestore, Auth, Functions)",
          "Maps API: Google Maps SDK",
        ],
      },
      {
        section: "My Contributions",
        content: [
          "Built responsive Flutter UI for e-commerce flow",
          "Implemented cart, wishlist, and order management",
          "Designed vendor dashboard features",
        ],
      },
      {
        section: "video",
        thumbnail: imageBasePath + "6valley.jpeg",
        content: "assets/videos/6valley.mp4",
      },
      {
        section: "link",
        content: "#",
      },
    ],
  },
];

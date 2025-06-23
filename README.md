🥾 Sploot Walk Tracker App
A simple React Native application that tracks your walking routes using GPS, displays them on Google Maps, and allows you to save and view past walks. Built as part of a developer assessment.

🚀 Features
✅ Core Functionality
📍 Start / Stop Walks with real-time GPS tracking

🗺️ Google Map integration using react-native-maps (Google provider)

🔵 Polyline route display of your current walk

📌 Markers for start and end points

⏱️ Live walk timer

💾 Save completed walks to AsyncStorage

📋 View list of saved walks with date and duration

👀 Tap any walk to view route on map

📱 Screens
1. Home Screen
Displays Google Map centered on user's current location

Start/Stop button to track walks

Polyline showing real-time walk route

Walk duration timer and number of location points collected

2. Saved Walks Screen
List of previous walks with:

Walk date

Duration

Tap a walk to view the route drawn on the map

🧠 Architecture Decisions
Used Expo for faster build/deploy.

Used minimal state (React hooks only) to keep app lightweight.

Avoided Redux or heavy state libraries for simplicity.

🔐 Security Note
Google Maps API key is now secured using .env and not pushed to GitHub.

Original leaked key was rotated.

Built with ❤️ by Khushi Chhatwani

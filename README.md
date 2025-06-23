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

⚙️ Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/khushichhatwani/sploot-walk-tracker.git
cd sploot-walk-tracker
2. Install dependencies
npm install
# or
yarn install
3. Set up your Google Maps API key
Create a .env file in the root of the project:
GOOGLE_MAPS_API_KEY=your_actual_google_maps_api_key

🔐 Note: The key is not pushed to GitHub and is stored securely in the .env file.

4. Run the app (Expo)
npx expo start
Scan the QR code with Expo Go or run it on an emulator.

🧠 Architecture Decisions
Used Expo for fast setup and cross-platform ease.

State managed using React hooks (useState, useEffect, useRef) to keep the app lightweight.

No Redux or external state libraries — simple and sufficient for the project scope.

🔐 Security Note
Google Maps API key is now secured using .env and excluded from Git history.

The original leaked key has been revoked and rotated.

🙋🏻‍♀️ Built with ❤️ by Khushi Chhatwani

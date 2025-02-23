🌐 Micro-Frontend Application using Webpack Module Federation
This is a Micro-Frontend Architecture project built with React 18 and Webpack 5 Module Federation. The Main Host application dynamically integrates multiple micro-frontends and serves as the shell for them.

🚀 Deployment
🔗 Live Demo: 
Link : https://micro-frontendhost.netlify.app/
📌 Tech Stack
React 18
Webpack 5 (Module Federation)
React Router DOM
Babel (for JSX compilation)
Bootstrap (No custom CSS)
🛠️ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/happy9316/Microfrontend.git
cd Microfrontend
2️⃣ Install Dependencies
npm install
3️⃣ Run the Development Server
npm start
👉 The Main Host application runs on http://localhost:3000.

4️⃣ Build for Production
npm run build
⚙️ Webpack Module Federation Configuration
This project uses Webpack Module Federation to dynamically load micro-frontends at runtime.

🌍 Module Federation in Webpack
Each micro-frontend is exposed via remoteEntry.js, allowing seamless integration into the Main Host.

🏠 Main Host (Container App)
Runs on http://localhost:3000
Dynamically loads remote micro-frontends
📩 Email Micro-Frontend
Runs on http://localhost:3002
Live Demo: https://micro-mail.netlify.app/
💬 Chat Micro-Frontend
Runs on http://localhost:3001
Live Demo: https://microchatapp.netlify.app/
🎯 Key Features
✅ Micro-Frontend Architecture using Webpack 5
✅ Module Federation for seamless integration
✅ React 18 with Bootstrap (No custom CSS)
✅ React Router DOM for navigation
✅ Babel for JSX transformation
✅ Works in both development and production

📜 License
This project is open-source.


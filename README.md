# CINEC Campus Navigator 🗺️

A modern, interactive campus navigation system for CINEC Campus, built with React and Tailwind CSS.

![CINEC Campus Navigator](src/assets/cinec-logo.png)

## 🌟 Features

- **Interactive Campus Map**
  - Real-time location tracking
  - Building markers with detailed information
  - Zoom and pan controls
  - Search functionality for buildings and facilities

- **Smart Navigation**
  - Multiple route options (Fastest, Accessible, Indoor)
  - Real-time crowd levels
  - Building hours and availability
  - Staff presence indicators

- **User-Friendly Interface**
  - Responsive design for all devices
  - Dark/Light mode support
  - Intuitive search and filtering
  - Role-based views (Student, Faculty, Staff, Visitor)

- **Additional Features**
  - Building information cards
  - Event notifications
  - Staff availability tracking
  - Accessibility options
  - Recent places history
  - Favorites system

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation


1. Install dependencies:
   ```bash
   npm install
   ```


2. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Router](https://reactrouter.com/) - Navigation
- [Google Maps API](https://developers.google.com/maps) - Map functionality
- [Remix Icons](https://remixicon.com/) - Icons

## 📱 Features in Detail

### Map Navigation
- Interactive campus map with building markers
- Real-time location tracking
- Zoom and pan controls
- Search functionality for buildings and facilities

### Building Information
- Detailed building cards with:
  - Opening hours
  - Current events
  - Staff availability
  - Crowd levels
  - Facilities and amenities

### User Features
- Role-based views (Student, Faculty, Staff, Visitor)
- Multiple route options
- Accessibility settings
- Dark/Light mode
- Recent places history
- Favorites system

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 🙏 Acknowledgments

- CINEC Campus for providing the map data
- All contributors who have helped shape this project
- The open-source community for their invaluable tools and resources

---

## 👥 Contributors

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
  {[
    {
      name: "Laalitha Niroshan",
      github: "https://github.com/LaalithaNiroshan01",
    },
    {
      name: "Banitha Madushan",
      github: "https://github.com/BanithaMadushan",
    },
    {
      name: "Nadumi Prathibha",
      github: "https://github.com/NadumiPrathibha",
    },
    {
      name: "Palindi Fernando",
      github: "https://github.com/PalindiFernando",
    },
    {
      name: "Osanda Chathuranga",
      github: "https://github.com/osca16",
    },
  ].map((contributor) => (
    <a
      href={contributor.github}
      target="_blank"
      rel="noopener noreferrer"
      key={contributor.github}
      className="transition-transform duration-300 transform hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md text-center"
    >
      <div className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {contributor.name}
      </div>
      <div className="text-blue-600 dark:text-blue-400 underline text-sm">
        {contributor.github.replace("https://", "")}
      </div>
    </a>
  ))}
</div>


<div align="center">
Made with ❤️ for CINEC Campus
</div>

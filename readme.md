# Disaster Management Backend

## Overview

This project is a comprehensive backend system for disaster management and emergency response. It provides real-time alerts, user data submission, SOS functionality, messaging, and an AI-powered chatbot to assist during emergencies. The system also includes features for partner organizations to access and manage emergency data.

## Features

- **Alert System**: Fetches and manages real-time disaster alerts
- **User Data Submission**: Allows users to submit reports with images and location data
- **SOS System**: Enables users to send emergency SOS signals
- **Messaging System**: Facilitates communication between users
- **AI Chatbot**: Provides disaster-related information and guidance using Google's Generative AI
- **Partner Access**: Allows partner organizations to view SOS reports and messages

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Google Generative AI
- Multer for file uploads
- Axios for HTTP requests

## Prerequisites

- Node.js (v14 or later recommended)
- MongoDB
- Google Cloud account (for Generative AI API)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/AayushNandan623/HackX2.0_Team_Titans.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   GOOGLE_API_KEY=your_google_api_key
   ```

4. Start the server:
   ```
   npm start
   ```

## API Endpoints

- Alerts: `GET, POST /api/v1/alerts`
- User Data: `POST /api/v1/routeUserData`
- Chatbot: `POST /api/v1/chatBot`
- SOS: `POST /api/v1/sos`
- Messages: `GET, POST /api/v1/messages`
- Partner Access: 
  - SOS Reports: `GET /api/v1/partners/sos`
  - Messages: `GET /api/v1/partners/messages`

For detailed API documentation, please refer to our [API Documentation](link-to-api-docs).

## Project Structure

```
.
├── index.js
├── package.json
└── src
    ├── config
    │   └── multerConfig.js
    ├── controllers
    │   ├── alertsController.js
    │   ├── chatBotController.js
    │   ├── messageController.js
    │   ├── partnerController.js
    │   ├── sosController.js
    │   └── userDataController.js
    ├── db
    │   └── connection.js
    ├── models
    │   ├── alerts.js
    │   ├── message.js
    │   ├── sos.js
    │   └── userData.js
    └── routes
        ├── alertRoute.js
        ├── chatbotRoutes.js
        ├── messageRoute.js
        ├── partnerRoutes.js
        ├── sosRoutes.js
        └── userDataRoutes.js
```

## Contributing

We welcome contributions to improve the Disaster Management Backend. Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contact

Aayush Nandan - [Your Email]

Project Link: [https://github.com/your-username/disaster-management-backend](https://github.com/your-username/disaster-management-backend)

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Google Generative AI](https://cloud.google.com/ai-platform)
- [Multer](https://github.com/expressjs/multer)
- [Axios](https://axios-http.com/)
- [Sachet NDMA](https://sachet.ndma.gov.in/) for providing the alert data API

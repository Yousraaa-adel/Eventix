# Eventix - Event Planning Platform

Eventix is a comprehensive event planning platform that simplifies the process of organizing, managing, and attending events. This project is built as part of a graduation project for ALX and is designed to provide users with a seamless event experience, from browsing events to booking tickets and receiving real-time notifications.

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Eventix is designed to streamline event management for both organizers and attendees. Organizers can create and manage events, view locations on maps, and track RSVPs, while attendees can easily find events by location or category, RSVP, and purchase tickets without creating an account. The platform provides a smooth experience for browsing and booking, as well as functionalities like email notifications, ticketing with QR codes, and an admin dashboard for enhanced management.

## Key Features

- **Authentication**: Secure login and sign-up for organizers with protected routes.
- **Event Management**: Create, edit, and delete events with details like title, description, location, and date.
- **Filtering Options**: Search events by category and location.
- **QR Code Ticketing**: Generate and email QR codes for easy check-in at events.
- **RSVP and Ticket Booking**: Attendees can book tickets and view booking confirmations.
- **Email Notifications**: Automated email notifications for successful ticket bookings.
- **Admin Dashboard**: Allows admins to manage events, view RSVPs, and update event details.

## Tech Stack

- **Frontend**: Next.js (with App Router), React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Other Libraries**:
  - `nodemailer` for email functionality
  - `qrcode` for generating QR codes

## Setup and Installation

### Prerequisites

To run Eventix locally, ensure you have the following installed:

- **Node.js** (v14+ recommended)
- **MongoDB** (locally or MongoDB Atlas)

### Installation Steps

1. Clone the Repository:
   ```bash
   git clone https://github.com/your-username/Eventix.git
   cd Eventix
   ```
2. Install Dependencies:

```bash
npm install
```

3. Setup Environment Variables: Create a .env file in the root directory and add the following variables:
   Create a `.env` file in the root directory of your project and add the following variables:
   ```env
   EMAIL_HOST=smtp.your-email-provider.com
   EMAIL_PORT=587
   EMAIL_USERNAME=your-email@example.com
   EMAIL_PASSWORD=your-email-password
   MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/your-db-name?retryWrites=true&w=majority
   ```
4. Run the Development Server:

```bash
  npm run dev
```

5. Open the Application: Navigate to http://localhost:3000 in your browser to view the Eventix app.

## Usage

### Creating an Event

Organizers can create an event by providing essential details like:

- Event title
- Event description
- Event category
- Event location
- Event date/time

### Ticket Booking

Attendees can:

- Browse events filtered by category or location.
- Choose an event and select the number of tickets.
- Receive a booking confirmation email with a QR code for easy check-in.

### Admin Dashboard

Admins can:

- Access a dedicated dashboard to manage events.
- Update event details such as name, description, and location.
- View RSVPs for events and manage user information.

### QR Code Integration

Each ticket booking generates a unique QR code:

- The QR code is sent to the attendee’s email as an attachment.
- The QR code is also available inline within the email (if the email client supports CID images).

## API Documentation

### Endpoints

- `POST /api/v1/users/signup`: Create a new user account.
- `POST /api/v1/users/login`: Login with email and password.
- `GET /api/v1/events`: Fetch all events.
- `POST /api/v1/events`: Create a new event.
- `POST /api/v1/orders`: Book tickets for an event, including generating and sending a QR code.

## Contributing

We welcome contributions! If you have ideas to improve Eventix, please fork the repository and create a pull request. Be sure to follow coding standards and document your code.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch for your changes.
3. Implement the changes and commit them.
4. Push your changes and create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

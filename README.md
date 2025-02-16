# 📅 Ticketing Management System

[![React](https://img.shields.io/badge/React-20232a?style=flat&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![ShadCN UI](https://img.shields.io/badge/ShadCN_UI-000000?style=flat&logoColor=white)](https://ui.shadcn.com/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express)](https://expressjs.com/)
[![bcrypt](https://img.shields.io/badge/bcrypt-Supported-yellow)](https://www.npmjs.com/package/bcrypt)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[![Live Demo](https://img.shields.io/badge/vercel-live%20demo-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://exposome-insights.vercel.app/)

![Project Screenshot](https://github.com/Sb-CCL/Exposome-Insights/blob/main/public/screenshot.png?raw=true)

The Ticketing System Project is a comprehensive web application designed to streamline the ticket management process. This application allows users to register, authenticate, create, and manage tickets efficiently. Built with modern technologies, it offers a secure and user-friendly experience.

## ✨ Features

### 🔒 Authentication System

- JWT token-based authentication
- Protected routes middleware
- Password hashing with bcrypt
- HTTP header authorization checks
- Token verification with environment secrets

### 🎫 Ticket Management

- Full CRUD operations for tickets
- Schema validation for ticket data
- ID parameter validation middleware
- User-specific ticket ownership
- Secure endpoint protection

### 👥 User Management

- Secure registration/login workflows

## 🛠 Tech Stack

| Backend             | Frontend         |
| ------------------- | ---------------- |
| Node.js 20          | React 18         |
| Express.js 4.19     | Vite 4           |
| MongoDB 7.0         | Tailwind CSS 3.3 |
| Mongoose 8.3        | React Hook Form  |
| JSON Web Tokens 9.0 | Axios 1.5        |
| Bcrypt 5.1          | Date-fns 2.30    |

## 📄 API Endpoints

## User Routes

| Method | Endpoint    | Description         | Middleware |
| ------ | ----------- | ------------------- | ---------- |
| POST   | `/login`    | Log in a user       | None       |
| POST   | `/register` | Register a new user | None       |

## Ticket Routes

| Method | Endpoint | Description         | Middleware                                              |
| ------ | -------- | ------------------- | ------------------------------------------------------- |
| GET    | `/`      | Get all tickets     | `requireAuth`                                           |
| GET    | `/:id`   | Get a single ticket | `requireAuth`, `validateTicketId`                       |
| POST   | `/`      | Create a new ticket | `requireAuth`, `validateTicketData`                     |
| PATCH  | `/:id`   | Update a ticket     | `requireAuth`, `validateTicketId`, `validateTicketData` |
| DELETE | `/:id`   | Delete a ticket     | `requireAuth`, `validateTicketId`                       |

### Middleware Used

- `requireAuth`: Ensures the user is authenticated before accessing ticket routes.
- `validateTicketId`: Validates the ticket ID parameter.
- `validateTicketData`: Validates the ticket data before creation or update.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

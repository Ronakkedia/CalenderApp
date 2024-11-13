
# **CalendarApp**

A full-stack calendar application that allows users to create, view, update, and delete events. Users can also attach images, videos, and text to events and receive browser notifications for scheduled events.

---

## **Features**
- User-friendly calendar interface to display events.
- Create, update, and delete events via a modal form.
- Attach pictures, videos, and text to events.
- Form validation using `Formik` and `Yup`.
- Backend API for managing event data using **NestJS**.
- Basic in-memory database setup.
- Browser notifications with snooze options.
- Optional features: Event search and filters.

---

## **Technologies Used**
### **Frontend**
- React.js
- React Big Calendar
- Formik & Yup for form handling and validation
- Axios for API requests

### **Backend**
- NestJS
- In-memory database (Can be switched to a persistent database like MongoDB or PostgreSQL)
- Multer for file uploads

### **Other Tools**
- Node.js
- npm or yarn
- Git for version control

---

## **Getting Started**

### Prerequisites
Make sure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later) or Yarn
- Git

---

### **Setup Instructions**

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd CalenderApp
   ```

2. **Backend Setup**
    - Navigate to the `backend` folder:
      ```bash
      cd backend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Start the server:
      ```bash
      npm run start:dev
      ```
    - The backend will run at `http://localhost:3000`.

3. **Frontend Setup**
    - Navigate to the `frontend` folder:
      ```bash
      cd ../frontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Start the development server:
      ```bash
      npm start
      ```
    - The frontend will run at `http://localhost:3001`.

---

## **API Endpoints**

### **Event Endpoints**
| Method | Endpoint         | Description                  |
|--------|------------------|------------------------------|
| GET    | `/events`        | Fetch all events            |
| POST   | `/events`        | Create a new event          |
| PUT    | `/events/:id`    | Update an event by ID       |
| DELETE | `/events/:id`    | Delete an event by ID       |

---

## **Usage**
1. Navigate to `http://localhost:3001` in your browser.
2. View existing events on the calendar.
3. Click on a date to create a new event.
4. Upload images or videos as attachments while creating an event.
5. Receive browser notifications for upcoming events.

---

## **Screenshots**

### **Calendar View**
![Calendar View](https://via.placeholder.com/800x400)

### **Event Form Modal**
![Event Form](https://via.placeholder.com/800x400)

---

## **Optional Features**
- **Search Events**: Implement a search bar to find specific events by title or description.
- **Filter Events**: Filter events by date, type (text, video, picture), etc.

---

## **Future Improvements**
- Integration with persistent databases like MongoDB or PostgreSQL.
- User authentication and event sharing.
- Enhanced event recurrence options.

---

## **Contributing**
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

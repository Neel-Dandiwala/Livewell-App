# Livewell Interactive Patient-Doctor Chat Experience

## Project Overview
This project presents an innovative and aesthetically pleasing patient and doctor experience, aligned with Livewell's theme. A standout feature of this solution is multimedia communication in the chats, elevating the user interaction to a more comprehensive level.

![Login Page](/public/readme-1.png)

## Core Functionalities

### User Authentication
We've developed a secure login mechanism that interacts with a robust PostgreSQL database, designed to manage user credentials, data, and chat histories. It supports complex queries and ensures data persistence and reliability.

### Messaging
The chat feature is at the heart of real-time health service delivery, enabling seamless communication between doctors and patients. All messages are securely stored in the database for historical reference.

![Chatbox](/public/readme-2.png)

### Media Handling
Users can upload images, including medical photos, directly into the chat. This enriches the conversation and aids in the diagnostic process.

### Responsive UI/UX
The front end has been crafted using React and Tailwind CSS, creating a responsive and smooth user experience across all devices and screen sizes.

![Doctors Page](/public/readme-3.png)

### Data Validation and State Management
Client-side data validation and state management ensure data integrity and a dynamic application state that responds intuitively to user interactions.

### RESTful APIs Endpoints
The backend logic, data retrieval, and manipulation are facilitated through RESTful API endpoints, ensuring a decoupled architecture and effortless scalability.

![Patients Page](/public/readme-4.png)

## Technologies Used

- **Next.js**: Leveraging SSR and SSG features for enhanced performance.
- **React**: Utilizing React's component-based architecture and hooks for state and side effect management.
- **PostgreSQL**: Chosen for its robustness, both locally and on Vercel's PostgreSQL instance.
- **Tailwind CSS**: Adopting a utility-first approach for a highly customizable and responsive design.
- **Imgur API**: Integrated for image uploads and leveraging cloud-based storage solutions.
- **TypeScript**: Employed for application logic, with static typing to reduce bugs and improve code quality.
- **JWT and Cookies**: Used for secure token-based authentication and session state management.

## Deployment

The application storage is deployed on Vercel, showcasing its PostgreSQL integration and the ease of hosting Next.js applications on the platform.

![Vercel PostgreSQL Snapshot](/public/readme-5.png)

## Running the Project

Instructions on how to clone, install dependencies, and run the project locally or in a production environment.

```bash
# Clone the repository
git clone https://your-repository-url

# Install dependencies
npm install

# Run the application in development mode
npm run dev

# Build the application for production
npm run build

# Start the production server
npm start

import React from "react";
import "./App.css";
import ChipInput from "./Components/UserInput/ChipInput";

interface UserContact {
  name: string;
  email: string;
  image: string;
}

const userContacts: UserContact[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Emily Brown",
    email: "emily.brown@example.com",
    image:
      "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Michael Davis",
    email: "michael.davis@example.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Samantha White",
    email: "samantha.white@example.com",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Brian Miller",
    email: "brian.miller@example.com",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Olivia Wilson",
    email: "olivia.wilson@example.com",
    image:
      "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Christopher Moore",
    email: "christopher.moore@example.com",
    image:
      "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Jessica Taylor",
    email: "jessica.taylor@example.com",
    image:
      "https://images.unsplash.com/profile-1600709081617-366469bccf24image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
  },
  {
    name: "Daniel Lee",
    email: "daniel.lee@example.com",
    image:
      "https://thumbs.dreamstime.com/b/user-icon-vector-female-person-symbol-profile-circle-avatar-sign-flat-color-glyph-pictogram-illustration-user-icon-vector-115922585.jpg",
  },
  {
    name: "Sophia Robinson",
    email: "sophia.robinson@example.com",
    image:
      "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
  },
  {
    name: "Ethan Anderson",
    email: "ethan.anderson@example.com",
    image:
      "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
  },
  {
    name: "Ava Martinez",
    email: "ava.martinez@example.com",
    image:
      "https://e7.pngegg.com/pngimages/122/453/png-clipart-computer-icons-user-profile-avatar-female-profile-heroes-head.png",
  },
  {
    name: "Logan Harris",
    email: "logan.harris@example.com",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
  },
];

function App() {
  return (
    <div className="app">
      <h1>Pick User</h1>
      <ChipInput userContacts={userContacts} />
    </div>
  );
}

export default App;

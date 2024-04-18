// import Image from "next/image";
// import Header from "../components/Header.tsx"
// import Menu from "../components/Menu.tsx"
// import Doctors from "../components/Doctors.tsx"
// import Chat from "../components/Chat.tsx"
// export default function Home() {
//   return (
//     <>
//     <Header />
//     {/* <Menu  /> */}
//     <Doctors />
//     <Chat />
//     </>
//   );
// }
import Image from "next/image";
import Header from "../components/Header.tsx"
import Menu from "../components/Menu.tsx"
import Contacts from "../components/Contacts"
import Chat from "../components/Chat.tsx"

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      
    </div>
  );
}
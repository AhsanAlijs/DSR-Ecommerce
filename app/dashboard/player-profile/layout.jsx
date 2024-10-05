
import "@/app/globals.css";
import ProfileTab from "@/components/dashboard/ProfileTab";


export default function RootLayout({ children }) {

  return (
    <div>
      <ProfileTab children={children} />
    </div>



  );
}
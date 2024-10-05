
import "@/app/globals.css";
import Sidebar from "@/components/dashboard/Sidebar";


export default function RootLayout({ children }) {

  return (
    <div>
      <Sidebar children={children} />
    </div>



  );
}
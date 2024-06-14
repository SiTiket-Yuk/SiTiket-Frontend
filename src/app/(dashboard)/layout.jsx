import "../globals.css";
import { redirect } from "next/navigation";
import { DM_Sans } from "next/font/google";
import SideNavigationBar from "@/components/SideNavigationBar";
import { Providers } from "../nextuiproviders";
import { getSession } from "../lib/session";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
};

const RootLayout = async ({ children }) => {
  const session = await getSession();
  if (session === null) {
    redirect("/landing-page");
  }

  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Providers>
          <div className="flex flex-row">
            <SideNavigationBar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;

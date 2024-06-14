import { DM_Sans } from "next/font/google";
import "../globals.css";
import SideNavigationBarAdmin from "@/components/SideNavigationBarAdmin";
import { Providers } from "../nextuiproviders";
import { getSession } from "../lib/session";
import { redirect } from "next/navigation";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Admin SiTiket",
};

const RootLayout = async ({ children }) => {
  const session = await getSession();
  if (session === null || session.userSession.isAdmin != true) {
    redirect("/landing-page");
  }

  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Providers>
          <div className="flex flex-row">
            <SideNavigationBarAdmin />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;

import "../globals.css";
import { DM_Sans } from "next/font/google";
import { redirect } from "next/navigation";
import { Providers } from "../nextuiproviders";
import { getSession } from "../lib/session";
import AppBar from "@/components/AppBar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Daftar Akun SiTiket",
};

const RootLayout = async ({ children }) => {
  const session = await getSession();

  if (session) {
    redirect("/landing-page");
  }

  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Providers>
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;

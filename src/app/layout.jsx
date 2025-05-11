import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/animate.css";
import "../assets/css/jquery-ui.min.css";
import "../assets/css/style.css";

import { ProviderComponent } from "@/components/provider/Provider";

export const metadata = {
  title: "Codeschool LK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ProviderComponent>{children}</ProviderComponent>
      </body>
    </html>
  );
}

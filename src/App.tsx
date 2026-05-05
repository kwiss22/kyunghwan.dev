import { Route, Routes } from "react-router-dom";

import { RootLayout } from "@/components/layout/root-layout";
import { AboutPage } from "@/pages/about";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { SellerBackofficePage } from "@/pages/projects/seller-backoffice";

export function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="projects/seller-backoffice"
          element={<SellerBackofficePage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

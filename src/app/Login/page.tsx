import type { Metadata } from "next";
import LoginPage from "@/components/Login/LoginPage";
import LoginFooter from "@/components/Login/LoginFooter";

export const metadata: Metadata = {
  title: "Login | Budhanilkantha School",
};

export default function Page() {
  return (
    <>
      <LoginPage />
      <LoginFooter />
    </>
  );
}

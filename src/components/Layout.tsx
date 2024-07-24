import { child } from "@/Types/Types";
import Header from "./Header";

export default function Layout({ children }: child) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "700px" }}>{children}</div>
    </>
  );
}

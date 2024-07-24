import { child } from "@/Types/Types";
import Header from "./Header";

export default function Layout({ children }: child) {
  return (
    <div className="px-6">
      <Header />
      <div className="mx-8">{children}</div>
    </div>
  );
}

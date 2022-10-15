import { ReactNode } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

type Props = {
  children: ReactNode;
};
function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <main
        style={{
          minHeight: "calc(85vh)",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }: any) {
  return (
    <div className="relative">
      <Header />
      <main className="  h-screen w-screen pb-[58px] pt-[58px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

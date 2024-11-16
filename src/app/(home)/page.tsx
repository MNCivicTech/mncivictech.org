import Hero from "@/app/(home)/Hero";
import WhatsGoingOn from "@/app/(home)/WhatsGoingOn";

export default function HomePage() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-blue-200 to-green-100 p-12 pt-32 md:p-36">
        <Hero />
      </div>

      <WhatsGoingOn />
    </main>
  );
}

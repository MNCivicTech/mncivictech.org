import Hero from "@/app/(home)/hero";
import WhatsGoingOn from "@/app/(home)/whats-going-on";

export default function HomePage() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-blue-50/50 to-green-50 p-12 pt-32 md:p-36">
        <Hero />
      </div>

      <WhatsGoingOn />
    </main>
  );
}

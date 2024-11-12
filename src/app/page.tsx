import LogoIcon from "@/icons/logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-green-50 p-8 md:p-24">
      <LogoIcon width={100} height={200} />

      <h1 className="my-8 text-center font-bold text-green-800">
        MN Civic Tech
      </h1>

      <p className="text-green-800">🚧 coming soon 🚧</p>
    </main>
  );
}

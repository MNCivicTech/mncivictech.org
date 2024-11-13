export default function Hero() {
  return (
    <div>
      <div className="grid grid-cols-1 items-center gap-4 md:gap-16 md:py-16 lg:grid-cols-2">
        <h1 className="mb-4 font-bold text-3xl sm:text-5xl lg:text-6xl">
          Building <br /> Civic Tech <br /> for Minnesota
        </h1>

        <p className="mx-auto mb-8 max-w-2xl md:text-xl lg:mx-0">
          At MN Civic Tech, we connect technologists, public servants, and
          community advocates to improve minnesota’s civic tech by building
          together.
        </p>

        <div className="flex justify-between gap-8 sm:justify-start">
          <button type="button">Get Involved</button>
          <button type="button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

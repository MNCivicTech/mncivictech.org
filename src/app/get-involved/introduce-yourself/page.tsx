import IntroductionForm from "@/app/get-involved/introduce-yourself/IntroductionForm";

export default function IntroduceYourselfPage() {
  return (
    <div className="mx-auto bg-blue-50/5 p-6 pt-32 text-brown-900 md:p-36">
      <h1 className="mb-6 font-bold text-2xl">Introduce Yourself</h1>

      <IntroductionForm />
    </div>
  );
}

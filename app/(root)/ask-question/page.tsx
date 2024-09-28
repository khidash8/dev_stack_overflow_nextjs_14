import { Question } from "@/components/forms/question";

const page = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a questions</h1>

      <div className="mt-9">
        <Question mongoUserId="bluhh" />
      </div>
    </div>
  );
};

export default page;

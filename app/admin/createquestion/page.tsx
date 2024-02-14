import QuestionCreateForm from "@/components/admin/QuestionCreateForm";

const CreateQuestionPage = () => {
  return (
    <div className="min-h-[100vh] w-[100vw] p-4  flex flex-col items-center gap-5">
       <h1 className=" text-lg font-bold">Create Question</h1>
       <div className="w-[50vw] ">
       <QuestionCreateForm/>
       </div>
    </div>
  )
}

export default CreateQuestionPage;
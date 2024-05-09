import PageHeading from "@/components/pageheading";
import { redirect } from "next/navigation";
import { db } from "@/database";
//
//
export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // > need to be server action !
    "use server";

    // > check the user's input and make sure they are valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // > Create a new record in data base
    const snippet = await db.snippet.create({
      data: {
        title: title,
        code : code
      }
    });
    console.log(snippet);
    
    // > Take the user to the home page or root route
    redirect('/');
  }

  return (
    <div className="flex flex-col w-11/12 min-h-screen p-4 mx-auto">
      <PageHeading title="Create Snippet" />
      <form action={createSnippet}>
        <div className="w-2/3 flex flex-col mt-4 gap-4 justify-start">
          <div className="flex gap-4">
            <label className="p-2" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              className="border-2 rounded p-2 w-1/2"
              id="title"
            />
          </div>
          <div className="flex gap-4">
            <label className="p-2" htmlFor="code">
              code
            </label>
            <textarea
              name="code"
              className="border-2 rounded p-2 w-1/2"
              id="code"
            />
          </div>
          <button className="w-1/5 mx-auto py-2 px-4 bg-gray-600 text-white mt-4 rounded transition ease-in-out duration-300 hover:bg-gray-500 ">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

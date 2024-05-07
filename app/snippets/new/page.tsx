import { db } from "@/db";
import { redirect } from "next/navigation";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // This needs to be a server action
    "use server"; // This is a server action, it will be run on the server

    // Check the user's input and make sure its valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // Take the user input and create a new record in the db
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log("Created new snippet", snippet);

    // Redirect the user to the new snippet's page
    redirect("/");
  }

  return (
    <form action={createSnippet} className="">
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code">Code</label>
          <textarea
            id="code"
            name="code"
            className="border rounded p-2 w-full"
          />
        </div>
        <button type="submit" className="border rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}

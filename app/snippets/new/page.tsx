export default function SnippetCreatePage() {
  return (
    <form action="" className="">
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

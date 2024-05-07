"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });
  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  return {
    message: "This is a test message",
  };
  // // This needs to be a server action
  // // "use server"; // This is a server action, it will be run on the server

  // // Check the user's input and make sure its valid
  // const title = formData.get("title") as string;
  // const code = formData.get("code") as string;

  // // Take the user input and create a new record in the db
  // const snippet = await db.snippet.create({
  //   data: {
  //     title,
  //     code,
  //   },
  // });

  // console.log("Created new snippet", snippet);

  // // Redirect the user to the new snippet's page
  // redirect("/");
}

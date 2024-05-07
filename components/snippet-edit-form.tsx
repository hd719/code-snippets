"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return (
    <div>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
        }}
      />
    </div>
  );
}

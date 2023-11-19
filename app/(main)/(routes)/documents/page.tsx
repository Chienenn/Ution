"use client";
import Image from "next/image";
//{useUser}使用者名稱
import { useUser } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  //convex裡的documents裡的create function
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    //新標題都先叫untitle
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="250"
        width="250"
        alt="empty"
        className="dark:hidden"
      />
      <Image
        src="/documents-dark.png"
        height="250"
        width="250"
        alt="empty-dark"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Ution
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;

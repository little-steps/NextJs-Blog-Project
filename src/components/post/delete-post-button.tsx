"use client";

import { DeletePostButtonProps } from "@/lib/types";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { deletePost } from "@/app/action/post-action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function DeletePostButton({ postId }: DeletePostButtonProps) {
  const router = useRouter();
  const [isDeleting, setisDeleting] = useState(false);
  async function handleDelete() {
    setisDeleting(true);
    try {
      const res = await deletePost(postId);
      if (res.success) {
        toast(res.message);
        router.push("/");
      } else {
        toast(res.message);
      }
    } catch (error) {
      console.log(error);
      toast("An Error deleting post. Please try again");
    } finally {
      setisDeleting(false);
    }
  }
  return (
    <>
      <Button
        disabled={isDeleting}
        onClick={handleDelete}
        className="ml-2"
        variant="destructive"
        size="sm"
      >
        <Trash2 className="h-4 w-4 mr-1" />
        {isDeleting ? "Deleting..." : "Delete"}
      </Button>
    </>
  );
}
export default DeletePostButton;

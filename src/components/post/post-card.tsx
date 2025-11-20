import { PostCardProps } from "@/lib/types";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Car } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <Link className="hover:underline" href={`/post/${post.slug}`}>
          <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
        </Link>
        <CardDescription>
          By {post.author.name} - {formatDate(post.createdAt)}
        </CardDescription>
      </CardHeader>
      <CardHeader>
        <p className="text-muted-foreground">{post.description}</p>
      </CardHeader>
    </Card>
  );
}

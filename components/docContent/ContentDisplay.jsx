import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import React from "react";
import Tag from "./Tag";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentContent(id);
  return (
    <article className="prose dark:prose-invert">
      <h1>{documentContent?.title}</h1>
      <div>
        <span>
          Published On: {documentContent.date} by {""}
          <Link href={`/author/${documentContent.author}`}>
            {documentContent.author}
          </Link>{" "}
          under the{" "}
          <Link href={`/category/${documentContent.category}`}>
            {documentContent.category}
          </Link>{" "}
          category
        </span>
      </div>
      <div>
        {documentContent.tags &&
          documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
      />
    </article>
  );
};

export default ContentDisplay;

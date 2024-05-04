import ContentDisplay from "@/components/docContent/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTags } from "@/utils/doc-util";

;

const TagsPage = ({params:{name}}) => {

    const docs = getDocuments()
    const matchedDocuments= getDocumentsByTags(docs,name)
    return (
        <ContentDisplay id={matchedDocuments[0].id} />
    );
};

export default TagsPage;
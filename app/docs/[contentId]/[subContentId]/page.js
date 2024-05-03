import ContentDisplay from "@/components/docContent/ContentDisplay";

const SubContentPage = ({ params: { subContentId } }) => {
  return <ContentDisplay id={subContentId} />;
};

export default SubContentPage;

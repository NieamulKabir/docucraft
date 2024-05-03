import ContentDisplay from "@/components/docContent/ContentDisplay";

const ContentPage = ({ params: { contentId } }) => {
  return <ContentDisplay id={contentId} />;
};

export default ContentPage;

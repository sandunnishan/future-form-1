import EditArticleForm from './EditArticleForm';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function EditArticlePage({ params }: { params: { id: string } }) {
  return <EditArticleForm articleId={params.id} />;
}
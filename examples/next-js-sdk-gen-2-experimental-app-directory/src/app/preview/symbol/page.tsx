import { Content, getBuilderSearchParams, fetchOneEntry } from '@builder.io/sdk-react-nextjs';

interface MyPageProps {
  searchParams: Record<string, string>;
}
const apiKey = '271bdcf584e24ca896dede7a91dfb1cb';

export default async function SymbolPage(props: MyPageProps) {
  let locale = 'en-US';

  const content = await fetchOneEntry({
    model: 'symbol',
    apiKey,
    options: {
      locale, 
      ...getBuilderSearchParams(props.searchParams),
    }
  });

  return <Content content={content} model="symbol" locale={locale} options={{locale}} apiKey={apiKey} />;
}
export const revalidate = 5;

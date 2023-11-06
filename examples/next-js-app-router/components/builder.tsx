'use client';
import { BuilderComponent, useIsPreviewing, builder } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
// builder.init('271bdcf584e24ca896dede7a91dfb1cb');
builder.init('89cddbc998f54a0bbf8478e9140edd84')
interface BuilderPageProps {
  content: any;
}

export function RenderBuilderContent({ content }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  if (content || isPreviewing) {
    return <BuilderComponent content={content} model="page" />;
  }

  return <DefaultErrorPage statusCode={404} />;
}

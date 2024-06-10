'use client';
import { BuilderComponent, useIsPreviewing, builder, Builder } from '@builder.io/react';
import DefaultErrorPage from 'next/error';

interface BuilderPageProps {
  content: any;
  model: any;
  data?: any;
}


export function RenderBuilderContent({ content, data, model }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();
  // const locale="Default";
  // console.log('IS PREVIEWING: ', isPreviewing)

  if (content || isPreviewing) {
    return <BuilderComponent content={content} model={model} data={data} key={content?.id} />;
  }

  return <DefaultErrorPage statusCode={404} />;
}
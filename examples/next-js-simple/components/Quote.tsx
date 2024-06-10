import Image from 'next/image';
import Link from 'next/link';
import { Builder } from '@builder.io/react'

import type { FC } from 'react';

export interface ComponentQuoteProps {
  author?: {value: {data: {name: string, title: string, image: string}}};
  quote?: string;
}

const ComponentQuote: FC<ComponentQuoteProps> = ({ quote, author }) => {
  console.log('HELLOO: ', author)

  return (
    <div className="flex w-full flex-col p-12 rounded border border-kyotoLight-800 sm:flex-row relative">
      <div className="flex w-full max-w-full flex-col items-center gap-6 md:items-start">        
        {quote && (
          <p className="text-left font-ttInterPro text-xl font-semibold not-italic text-black dark:text-white">
            {quote}
          </p>
        )}
        {author?.value?.data && (
          <div className="flex flex-row w-full gap-4">
            <div>
              <img
                src={author.value.data.image}
                width={48}
                height={48}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-col justify-between gap-[-2px] text-left">
                {author.value.data.name && (
                  <span className="text-md font-semibold font-ttInterPro not-italic text-black dark:text-white">{author.value.data.name}</span>
                )}
                {author.value.data.title && (
                  <span className="regular text-md font-normal font-ttInterPro not-italic text-kyotoLight-400">{`${author.value.data.title}`}</span>
                )}
              </div>
            
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ComponentQuote;
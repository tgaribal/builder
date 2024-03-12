"use client"
import { Builder } from '@builder.io/react';
// import './badge.css';

export function ProductBadge({ product }: { product: any }) {
  return (
    <>
      {product?.metafields.map((field: any, i:any) => (
        field.key === 'PLOOP BLOOP DOOP' 
          ? <span className={`product-badge`} dangerouslySetInnerHTML={{ __html: field.value }} key={i} />
          : null
      ))}
    </>
  );
}

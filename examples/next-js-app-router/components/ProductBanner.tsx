"use client"
// import './badge.css';

export function ProductBanner({ product }: { product: any }) {
  return (
    <>
      {product?.metafields.map((field: any, i:any) => (
        field.key === 'Product: Banner' 
          ? <span className={`product-badge`} dangerouslySetInnerHTML={{ __html: field.value }} key={i} />
          : null
      ))}
    </>
  );
}

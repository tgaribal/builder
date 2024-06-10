import { builder, BuilderComponent } from '@builder.io/react';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

export default function Edit(props) {
  const router = useRouter();
  const slug = router.query.modelSlug;
  console.log('SLUG: ', slug, props)
  // useEffect
  const [content, setContent] = useState(null);

  useEffect(() => {
    builder.get("figma-imports", {
        enrich: true
      })
      .toPromise()
      .then((data) => {
        console.log('HELL: DATA: ', data)
        setContent(data)
  });
  }, []);

  return (<BuilderComponent model="figma-imports" content={content} />)

}
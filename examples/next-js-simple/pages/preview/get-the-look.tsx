import React, { useEffect, useMemo, useState } from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { find } from 'lodash';
// import { BUILDER_API_KEY, SiteSettings } from 'src/scripts/utils/environment';

// builder.init("aa96744e7fe74e2a90d22918299c1f1d");
export default function GetTheLookBuilder ({ productTags }: { productTags: string[] }) {
  const isPreviewing = useIsPreviewing();
  const [data, setData] = useState({});

  const getStyleId = (tags: string[], prefix: string = 'styleid:') => {
    const styleTag = find(tags, (tag: string) => tag.toLowerCase().startsWith(prefix))
      ?.toUpperCase()
      ?.slice(prefix.length);
    return styleTag;
  };
  const lowerCaseProductTags = useMemo(() => productTags.map((tag) => tag.toLowerCase()), [productTags]);

  const builderTargettingAttributes = useMemo(() => {
    return {
      styleId: '123456',
      productTags: lowerCaseProductTags,
    };
  }, []);

  useEffect(() => {
    console.log(builderTargettingAttributes)
    builder
      .get('get-the-look-pdp', {
        userAttributes: builderTargettingAttributes,
        enrich: true
      })
      .toPromise()
      .then((fetchedData) => {
        console.log('fetched data', fetchedData)
        setData(fetchedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [builderTargettingAttributes]);

  if (builderTargettingAttributes && data) {
    return <BuilderComponent model="get-the-look-pdp" options={{enrich: true}} content={data} />;
  } else {
    return <></>;
  }
};

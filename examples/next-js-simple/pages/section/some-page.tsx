import { useIsPreviewing } from '@builder.io/react';
import { useEffect } from 'react';
// import builderConfig from '@config/builder';
// import '@builder.io/widgets/dist/lib/builder-widgets-async'

export default function SomePage() {

  const isPreviewing = useIsPreviewing();
  return (<div>Hello</div>)

}
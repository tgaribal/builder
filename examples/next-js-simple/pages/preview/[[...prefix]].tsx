import { BuilderComponent, builder } from '@builder.io/react';
import builderConfig from '@config/builder';
import '@builder.io/widgets/dist/lib/builder-widgets-async'

export default function Prefix() {

  return <BuilderComponent model="my-schneider-page"  options={{includeRefs: true}} />

}
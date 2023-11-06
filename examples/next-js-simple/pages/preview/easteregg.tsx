import { BuilderComponent, BuilderContent, useIsPreviewing, builder } from '@builder.io/react';
import 'components/hero/Hero'

builder.init('271bdcf584e24ca896dede7a91dfb1cb')
export async function getStaticProps() {

  const easteregg = await builder
    .get('easteregg')
    .toPromise();
    console.log('SERVER EGG: ', easteregg)
  return {
    props: {
      easteregg: easteregg || null,
    },
  };
}

export default function Easteregg(easteregg: any) {
    const isPreviewingInBuilder = useIsPreviewing();
    const show404 = !easteregg && !isPreviewingInBuilder;
    
    return (
        (show404 ? <div>NO CONTENT</div> : 
        <BuilderContent model="easteregg" content={easteregg}> 
        {(data, loading, fullContent) => {
            const show = data?.previewConfiguration;
            return(
                <>
                <div style={{ display: show === 'full-width'? 'block' : 'none', border: '1px solid blue', background: 'lightgreen', height: '200px'}}>
                    <BuilderComponent model="easteregg" content={easteregg} />
                </div>
                <div style={{ display: 'flex', border: 'solid 1px red', justifyContent: 'space-around'}}>
                    <div style={{ flex: '1', border: '1px solid blue', background: 'lavender', height: '200px'}}></div>
                    <div style={{ display: show === 'fifty-fifty'? 'none' : 'block', flex: '1', border: '1px solid blue', background: 'lavender', height: '200px'}}></div>
                    <div style={{ display: show === 'full-width'? 'block' : 'none', flex: '1', border: '1px solid blue', background: 'lavender', height: '200px'}}></div>
                    <div style={{ display: show === 'full-width'? 'none' : 'block', flex: '1', border: '1px solid blue', background: 'lightgreen', height: '200px'}}>
                        <BuilderComponent model="easteregg" content={easteregg} />
                    </div>
                </div>
                </>
            );
        }}
    </BuilderContent>
  ));
}
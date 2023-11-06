import React from 'react';
import { Builder, withChildren, stringToFunction, BuilderStoreContext } from '@builder.io/react';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';


export const Slider = (props ) => {
  const {
    children,
    autoplay,
    delay,
    speed,
    prevClassName,
    nextClassName,
  } = props;


  const hasChildren = Array.isArray(children) && children.length > 0;

  const propsExcludingBuilderProps = [...Object.values(props)].slice(2);
  console.log('CHILDREN', children)
  return (
    <BuilderStoreContext.Consumer>
        {state => (
        <Swiper
            freeMode
            navigation={{
            prevEl: `.${prevClassName}`,
            nextEl: `.${nextClassName}`,
            }}
            key={`${propsExcludingBuilderProps}`}
            slidesPerView={hasChildren ? 'auto' : 0}
            effect={'slide'}
            speed={speed}
            spaceBetween={24}
            autoplay={
            autoplay && {
                delay,
                disableOnInteraction: false,
            }
            }
            modules={[Autoplay, Pagination, Navigation, FreeMode]}
        >
            {hasChildren ? (
             React.Children.map(children, (child, index) => {

                if (child.props.block.repeat && child.props.block.repeat.collection) {
                    const collectionPath = child.props.block.repeat.collection;
                    const collectionName = (collectionPath || '')
                    .split(/\.\w+\(/)[0]
                    .trim()
                    .split('.')
                    .pop();

                    const itemName =
                    child.props.block.repeat.itemName ||
                    (collectionName ? collectionName + 'Item' : 'item');

                    console.log({collectionName, itemName})

                    let array = stringToFunction(
                        collectionPath,
                        true,
                        [],
                        [],
                    )(state.state);

                    console.log('ARRAY: ', array);
                    
                    if (Array.isArray(array)) {
                        if (!Builder.isBrowser) {
                            array = array.slice(0, 1);
                        }
                    }
                    return array?.map((item, ind) => {
                        console.log('ITEM: ', item)
                        return <SwiperSlide key={`${ind}`}>{item}</SwiperSlide>
                    })




                    // return array.map((data, index) => {
                    //     // TODO: Builder state produce the data
                    //     const childState = {
                    //     ...state.state,
                    //     [itemName]: data,
                    //     $index: index,
                    //     $item: data,
                    //     };

                    //     return (
                    //     <BuilderStoreContext.Provider
                    //         key={block.id}
                    //         value={{ ...state, state: childState }}
                    //     >
                    //         <BuilderBlockComponent
                    //         block={{
                    //             ...block,
                    //             repeat: null,
                    //         }}
                    //         index={index}
                    //         child /* TODO: fieldname? */
                    //         />
                    //     </BuilderStoreContext.Provider>
                    //     );
                    // });
                    // }
                }
                return <SwiperSlide key={`${index}`}>{child}</SwiperSlide>;
            })
            ) : (
            <p>Insert Slides Inside</p>
            )}
        </Swiper>
      )}
    </BuilderStoreContext.Consumer>
  );
};
const SliderWithChildren = withChildren(Slider);

Builder.registerComponent(SliderWithChildren, {
  name: 'Slider',
  inputs: [
    {
      name: 'autoplay',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Enable autoplay',
    },
    {
      name: 'includeMargins',
      friendlyName: 'Include side margins',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Add margin to the sides of the slider',
    },
    {
      name: 'delay',
      type: 'string',
      defaultValue: 2000,
      helperText: 'Delay between transitions (in seconds)',
      enum: [
        {
          label: '1s',
          value: 1000,
        },
        {
          label: '2s',
          value: 2000,
        },
        {
          label: '3s',
          value: 3000,
        },
        {
          label: '4s',
          value: 4000,
        },
      ],
    },
    {
      name: 'speed',
      type: 'string',
      defaultValue: 1500,
      helperText: 'Transition speed',
      enum: [
        {
          label: 'Slow',
          value: 3000,
        },
        {
          label: 'Medium',
          value: 1500,
        },
        {
          label: 'Fast',
          value: 500,
        },
      ],
    },
    {
      name: 'showPagination',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Enable pagination - mobile only',
    },
    {
      name: 'prevClassName',
      type: 'string',
      friendlyName: 'Previous button class name',
      helperText:
        'Add a class to the element you choose and refresh the page after each update.',
    },
    {
      name: 'nextClassName',
      type: 'string',
      friendlyName: 'Next button class name',
      helperText:
        'Add a class to the element you choose and refresh the page after each update.',
    },
    {
      name: 'event',
      type: 'object',
      subFields: [
        {
          friendlyName: 'Data',
          name: 'eventData',
          type: 'object',
          subFields: [
            {
              friendlyName: 'Location in the page',
              name: 'location',
              type: 'string',
              helperText: 'Examples: hero, fold_1.',
            },
          ],
        },
      ],
    },
    {
        name: "content",
        type: "uiBlocks",
        hidefromUI: true,
        defaultValue: []
    }
  ]  
});

'use client';
import { builder, Builder } from '@builder.io/react';
import Counter from './components/Counter/Counter';
import { ProductBadge } from './components/ProductBadge';
import { ProductBanner } from './components/ProductBanner';
// 
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: 'Counter',
  inputs: [
    {
      name: 'initialCount',
      type: 'number',
      defaultValue: 99
    },
    {
      name: 'someOtherInput',
      type: 'text',
      defaultValue: ''
    },
  ],
  defaults: {
    bindings: {
      'component.options.someOtherInput': 'component.options.initialCount',
    }
  }
});

Builder.registerComponent(ProductBanner,
  {
    models: ['product-detail-page'],
    name: 'Banner',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/awards.svg',
    description:
      'Product badge for Product Detail Page',
    defaults: {
      bindings: {
        'component.options.product': 'state.product'
      }
    }
  }
);
Builder.registerComponent(ProductBadge,
  {
    models: ['product-detail-page'],
    name: 'Badge',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/awards.svg',
    description:
      'Product badge for Product Detail Page',
    defaults: {
      bindings: {
        'component.options.product': 'state.product'
      }
    }
  }
);

Builder.register("editor.settings", {

  designTokens: {
    // strictMode: true,
    // allowOverridingTokens: true,
    colors: [
      { name: "Brand Blue", value: "rgba(93, 150, 255, 1)" },
      { name: "Brand Red", value: "var(--red)" },
    ],
    spacing: [
      { name: "Large", value: "var(--space-large, 20px)" },
      { name: "Small", value: "10px" },
      { name: "Tiny", value: "5px" },
    ],
    fontFamily: [
      { name: 'Primary Font', value: 'Roboto, sans-serif' },
      { name: 'Serif Font', value: 'var(--serif-font)' },
    ]
  },
});
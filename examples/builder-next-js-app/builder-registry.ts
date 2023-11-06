'use client';
import { Builder } from '@builder.io/react';
import Counter from './components/Counter/Counter';
import Header from './components/InputText/header';

Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [
    {
      name: 'initialValue',
      type: 'string',
    },
  ],
});

Builder.registerComponent(Counter, {
  name: 'Counter',
  inputs: [
    {
      name: 'initialCount',
      type: 'number',
    },
  ],
});

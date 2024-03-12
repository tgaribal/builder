import React from 'react';
import { builder, Builder } from '@builder.io/sdk';
import Head from 'next/head';
import { RenderBuilderContent } from '@/components/builder';
import { ProductBadge } from '@/components/ProductBadge'
import { cookies } from 'next/headers';

// Replace with your Public API Key
builder.init('0bd09925871b4b6d871c492523937a00');

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const content = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (props?.params?.page?.join('/') || '')
      },
      prerender: false,
    })
    .toPromise();
    const product = {
        "id": "112",
        "handle": "/patriot-power-generator-2000x-test/",
        "availableForSale": true,
        "title": "Patriot Power Generator 2000X",
        "description": "NEW &amp; Improved with Included Solar Panel:&nbsp;Silent, fume-free and safe to use inside your home.&nbsp;Worth its...",
        "descriptionHtml": "<p><strong>NEW &amp; Improved with Included Solar Panel:</strong>&nbsp;Silent, fume-free and safe to use inside your home.<span>&nbsp;</span>Worth its weight in gold in a blackout and charges in the sun.</p> <p>This solar power station for home charges more devices for longer in a blackout. Double the capacity &amp; more peak power than before. Now expandable for even more power when you add a&nbsp;2000X Expansion Pack.</p> <ul class=\"ul1\"> <li class=\"li1\"><span class=\"s1\"></span><strong>NEW</strong>&nbsp;2000w output to run more at once</li> <li class=\"li1\"><span class=\"s1\"></span><strong>NEW</strong>&nbsp;More peak power for bigger appliances</li> <li class=\"li1\"><span class=\"s1\"></span><strong>NEW</strong> 1612 Wh capacity (expandable!)</li> <li class=\"li1\"><span class=\"s1\"></span><strong>NEW</strong> 12 outlets</li> <li class=\"li1\"><span class=\"s1\"></span>Power fridge, TV, medical devices &amp; more</li> <li class=\"li1\"><span class=\"s1\"></span><em><strong>FREE</strong></em> Solar panel included</li> <li class=\"li1\"><span class=\"s1\"></span><em><strong>FREE</strong></em> Shipping &amp; handling to lower 48</li> <li class=\"li1\"><span class=\"s1\"></span>365-Day money-back <a href=\"#anchor-test\">satisfaction guarantee</a></li> <li class=\"li1\"><strong>UNLOCKED</strong> Claim 14 FREE gifts<span>&nbsp;</span>(worth $1,190.79) with your Solar Generator order.</li> </ul> <p><em>* Demand is surging for these solar generators. Items ship separately.</em></p>",
        "options": [
            {
                "id": "116",
                "name": "Choose Your Payment Plan Option",
                "values": [
                    "One-time purchase",
                    "Subscribe & Save 5%"
                ]
            }
        ],
        "price": {
            "amount": "2999.95",
            "currencyCode": "USD"
        },
        "basePrice": {
            "amount": "2999.95",
            "currencyCode": "USD"
        },
        "salePrice": {
            "amount": "0",
            "currencyCode": ""
        },
        "priceRange": {
            "maxVariantPrice": {
                "amount": "2999.95",
                "currencyCode": "USD"
            },
            "minVariantPrice": {
                "amount": "2849.96",
                "currencyCode": "USD"
            }
        },
        "variants": [
            {
                "parentId": "112",
                "id": "83",
                "title": "",
                "availableForSale": true,
                "selectedOptions": [
                    {
                        "name": "Choose Your Payment Plan Option",
                        "value": "One-time purchase"
                    }
                ],
                "price": {
                    "amount": "2999.95",
                    "currencyCode": "USD"
                },
                "basePrice": {
                    "amount": "2999.95",
                    "currencyCode": "USD"
                },
                "salePrice": {
                    "amount": "0",
                    "currencyCode": "USD"
                },
                "inventory": {
                    "isInStock": true,
                    "aggregated": {
                        "availableToSell": 11,
                        "warningLevel": 5
                    }
                },
                "metafields": []
            },
            {
                "parentId": "112",
                "id": "84",
                "title": "",
                "availableForSale": true,
                "selectedOptions": [
                    {
                        "name": "Choose Your Payment Plan Option",
                        "value": "Subscribe & Save 5%"
                    }
                ],
                "price": {
                    "amount": "2849.96",
                    "currencyCode": "USD"
                },
                "basePrice": {
                    "amount": "2849.96",
                    "currencyCode": "USD"
                },
                "salePrice": {
                    "amount": "0",
                    "currencyCode": "USD"
                },
                "inventory": {
                    "isInStock": true,
                    "aggregated": {
                        "availableToSell": 9,
                        "warningLevel": 5
                    }
                },
                "metafields": []
            }
        ],
        "images": [
            {
                "url": "https://cdn11.bigcommerce.com/s-ojvzyfmspp/images/stencil/1080w/products/112/378/ARRAY-PPG-2KX-NEW-FOX-FRIENDS-1024x1024__23207.1706645730.jpg",
                "altText": "",
                "width": 2048,
                "height": 2048
            },
            {
                "url": "https://cdn11.bigcommerce.com/s-ojvzyfmspp/images/stencil/1080w/products/112/376/PDP-PPG-2KX-RUNNING-TIMES-GRAPHIC_OTO1__88132.1706645730.jpg",
                "altText": "",
                "width": 2048,
                "height": 2048
            },
            {
                "url": "https://cdn11.bigcommerce.com/s-ojvzyfmspp/images/stencil/1080w/products/112/377/PDP-PPG-2KX-OUTLET-DIAGRAM-MOBILE-mockup-onlycopy__52284.1706645730.jpg",
                "altText": "",
                "width": 2048,
                "height": 2048
            },
            {
                "url": "https://cdn11.bigcommerce.com/s-ojvzyfmspp/images/stencil/1080w/products/112/381/PPG-2KX-FRIDGE-LIFESTYLE-1024x1024_1__19389.1706645731.png",
                "altText": "",
                "width": 2048,
                "height": 2048
            },
            {
                "url": "https://cdn11.bigcommerce.com/s-ojvzyfmspp/images/stencil/1080w/products/112/379/PPG-2KX-FUME-FREE-1024x1024__54344.1706645731.png",
                "altText": "",
                "width": 2048,
                "height": 2048
            },
            {
                "url": "https://cdn11.bigcommerce.com/s-ojvzyfmspp/images/stencil/1080w/products/112/380/PPG-2KX_PPG-EXP-1024x1024__19046.1706645731.png",
                "altText": "",
                "width": 2048,
                "height": 2048
            }
        ],
        "featuredImage": {
            "url": "https://cdn11.bigcommerce.com/s-ojvzyfmspp/images/stencil/1080w/products/112/378/ARRAY-PPG-2KX-NEW-FOX-FRIENDS-1024x1024__23207.1706645730.jpg",
            "altText": "",
            "width": 2048,
            "height": 2048
        },
        "seo": {
            "title": "Patriot Power Generator 2000X",
            "description": ""
        },
        "tags": [
            ""
        ],
        "updatedAt": "2024-01-30T20:15:29Z",
        "sku": "810026145773",
        "customFields": [
            {
                "name": "Battery Type",
                "value": "LifPo Battery"
            }
        ],
        "metafields": [
            {
                "key": "Shipping: Restrictions",
                "value": "[{\"text\": \"We are unable to ship this item to PO Boxes, Alaska, Hawaii, or Canada at this time. This item will ship via freight.\"}]"
            },
            {
                "key": "Shipping: Delivery Information",
                "value": "[{\"text\": \"Ships <strong>FREE</strong> next business day\"}, {\"text\": \"Your <strong>FREE</strong> carts & light strings ship January 2024\"}]"
            },
            {
                "key": "Product: Promotion Text",
                "value": "Today Only: 15% Off Generators"
            },
            {
                "key": "Product: Banner",
                "value": "As Seen on Fox & Friends"
            },
            {
                "key": "Product: Videos",
                "value": "[{\"video\": \"https://www.youtube.com/watch?v=DC9qZLEdbrQ\"}, {\"video\": \"https://www.youtube.com/watch?v=o9F68F7puBE\"}]"
            },
            {
                "key": "Product: Burst",
                "value": "https://cdn.builder.io/api/v1/image/assets%2F1adbd5971dac4273891f273603729777%2F9bbda29cd422410795c03f2cc9568350"
            },
            {
                "key": "Product: Specs",
                "value": "2000 watts continuous power | 2500 lifecycles"
            }
        ],
        "weight": {
            "value": 50,
            "unit": "oz"
        },
        "height": {
            "value": 0,
            "unit": ""
        },
        "width": {
            "value": 0,
            "unit": ""
        },
        "depth": {
            "value": 0,
            "unit": ""
        },
        "inventory": {
            "isInStock": true,
            "hasVariantInventory": true,
            "aggregated": {
                "availableToSell": 20,
                "warningLevel": 10
            }
        }
    }


  return (
    <>
      <Head>
        <title>{content?.data.title}</title>
      </Head>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} data={{product}}/>
    </>
  );
}
export const revalidate = 5;
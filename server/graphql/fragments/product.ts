import { gql } from 'graphql-tag';

import { IMAGE_FRAGMENT } from './image';
import { MEDIA_IMAGE_FRAGMENT } from './mediaImage';
import { MODEL_3D_FRAGMENT } from './model3d';
import { PRICE_RANGE_FRAGMENT } from './priceRange';
import { PRODUCT_OPTION_FRAGMENT } from './productOption';
import { PRODUCT_VARIANT_FRAGMENT } from './productVariant';
import { SELLING_PLAN_GROUP_FRAGMENT } from './sellingPlanGroup';
import { VIDEO_FRAGMENT } from './video';

export const PRODUCT_FRAGMENT = gql`
  fragment Product on Product {
    availableForSale
    compareAtPriceRange {
      ...PriceRange
    }
    createdAt
    description
    descriptionHtml
    featuredImage {
      ...Image
    }
    handle
    id
    images(first: 250) {
      edges {
        node {
          ...Image
        }
      }
    }
    isGiftCard
    media(first: 250) {
      edges {
        node {
          alt
          id
          mediaContentType
          ... on MediaImage {
            ...MediaImage
          }
          ... on Model3d {
            ...Model3d
          }
          ... on Video {
            ...Video
          }
        }
      }
    }
    onlineStoreUrl
    options(first: 250) {
      ...ProductOption
    }
    priceRange {
      ...PriceRange
    }
    productType
    publishedAt
    requiresSellingPlan
    sellingPlanGroups(first: 250) {
      edges {
        node {
          ...SellingPlanGroup
        }
      }
    }
    tags
    title
    totalInventory
    trackingParameters
    updatedAt
    variants(first: 250) {
      edges {
        node {
          ...ProductVariant
        }
      }
    }
    # Custom Metafields
    color_swatch: metafield(namespace: "custom", key: "color_swatch") {
      references(first: 10) {
        edges {
          node {
            ... on Metaobject {
              handle
              id
              fields {
                key
                value
              }
            }
          }
        }
      }
    }
    matching_colors: metafield(namespace: "custom", key: "matching_colors") {
      references(first: 10) {
        edges {
          node {
            ...on Product {
              availableForSale
              handle
              id
              options(first: 250) {
                ...ProductOption
              }
            }
          }
        }
      }
    }
    details: metafield(namespace: "custom", key: "details") {
      key
      value
    }
    shipping: metafield(namespace: "custom", key: "shipping") {
      key
      value
    }
  }
  ${PRICE_RANGE_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${MEDIA_IMAGE_FRAGMENT}
  ${MODEL_3D_FRAGMENT}
  ${VIDEO_FRAGMENT}
  ${PRODUCT_OPTION_FRAGMENT}
  ${SELLING_PLAN_GROUP_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
`;

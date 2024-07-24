import { AlgoliaInsightsHit } from "@algolia/autocomplete-js";
import { Hit } from "@algolia/client-search";

type ProductRecord = {
  brand: string;
  post_title: string[];
  description: string;
  image: string;
  name: string;
  price: number;
  rating: number;
  url: string;
};

export type ProductHit = AlgoliaInsightsHit & Hit<ProductRecord>;

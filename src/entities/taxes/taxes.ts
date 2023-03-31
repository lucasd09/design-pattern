import { Product } from "../products";

export abstract class Tax {
  abstract calculate(product: Product): number;
}

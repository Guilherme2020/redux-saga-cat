import { ActionTypes, IProduct } from "./types";


export function addProducToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}


export function addProducToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}  

export function addProducToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    }
  };
}
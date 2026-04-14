import List "mo:core/List";
import ProductTypes "../types/products";
import Common "../types/common";
import ProductLib "../lib/products";

mixin (
  products : List.List<ProductTypes.Product>
) {
  public query func listProducts(category : ?Text, searchText : ?Text) : async [ProductTypes.Product] {
    let filter : ProductTypes.ProductFilter = { category; searchText };
    ProductLib.listProducts(products, filter)
  };

  public query func getProduct(id : Common.ProductId) : async ?ProductTypes.Product {
    ProductLib.getProduct(products, id)
  };

  public shared ({ caller }) func seedProducts() : async () {
    ProductLib.seedProducts(products)
  };
};

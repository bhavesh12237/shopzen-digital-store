import Common "common";

module {
  public type Product = {
    id : Common.ProductId;
    name : Text;
    description : Text;
    price : Float;
    category : Text;
    imageUrl : Text;
    stock : Nat;
    rating : Float;
  };

  public type ProductFilter = {
    category : ?Text;
    searchText : ?Text;
  };
};

import Common "common";

module {
  public type OrderItem = {
    productId : Common.ProductId;
    quantity : Nat;
    price : Float;
  };

  public type BillingInfo = {
    fullName : Text;
    email : Text;
    address : Text;
    city : Text;
    postalCode : Text;
    country : Text;
  };

  public type OrderStatus = {
    #pending;
    #processing;
    #shipped;
    #delivered;
    #cancelled;
  };

  public type Order = {
    id : Common.OrderId;
    userId : Common.UserId;
    items : [OrderItem];
    billingInfo : BillingInfo;
    status : OrderStatus;
    total : Float;
    createdAt : Common.Timestamp;
  };
};

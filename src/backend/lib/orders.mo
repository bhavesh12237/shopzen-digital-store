import List "mo:core/List";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Types "../types/orders";
import Common "../types/common";

module {
  public func createOrder(
    orders : List.List<Types.Order>,
    userId : Common.UserId,
    items : [Types.OrderItem],
    billingInfo : Types.BillingInfo,
    total : Float
  ) : Types.Order {
    let id = orders.size() + 1;
    let order : Types.Order = {
      id;
      userId;
      items;
      billingInfo;
      status = #pending;
      total;
      createdAt = Time.now();
    };
    orders.add(order);
    order
  };

  public func getOrdersByUser(
    orders : List.List<Types.Order>,
    userId : Common.UserId
  ) : [Types.Order] {
    let userOrders = orders.filter(func(o) { Principal.equal(o.userId, userId) });
    userOrders.toArray()
  };

  public func getOrder(
    orders : List.List<Types.Order>,
    id : Common.OrderId
  ) : ?Types.Order {
    orders.find(func(o) { o.id == id })
  };
};

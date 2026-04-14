import List "mo:core/List";
import Principal "mo:core/Principal";
import OrderTypes "../types/orders";
import Common "../types/common";
import OrderLib "../lib/orders";

mixin (
  orders : List.List<OrderTypes.Order>
) {
  public shared ({ caller }) func createOrder(
    items : [OrderTypes.OrderItem],
    billingInfo : OrderTypes.BillingInfo,
    total : Float
  ) : async OrderTypes.Order {
    OrderLib.createOrder(orders, caller, items, billingInfo, total)
  };

  public shared query ({ caller }) func getMyOrders() : async [OrderTypes.Order] {
    OrderLib.getOrdersByUser(orders, caller)
  };

  public shared query ({ caller }) func getOrder(id : Common.OrderId) : async ?OrderTypes.Order {
    switch (OrderLib.getOrder(orders, id)) {
      case (?order) {
        if (Principal.equal(order.userId, caller)) { ?order } else { null }
      };
      case null null;
    }
  };
};

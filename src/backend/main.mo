import List "mo:core/List";
import Map "mo:core/Map";
import ProductTypes "types/products";
import OrderTypes "types/orders";
import ContactTypes "types/contacts";
import UserTypes "types/users";
import Common "types/common";
import ProductsApi "mixins/products-api";
import OrdersApi "mixins/orders-api";
import ContactsApi "mixins/contacts-api";
import UsersApi "mixins/users-api";

actor {
  let products = List.empty<ProductTypes.Product>();
  let orders = List.empty<OrderTypes.Order>();
  let contactMessages = List.empty<ContactTypes.ContactMessage>();
  let userProfiles = Map.empty<Common.UserId, UserTypes.UserProfile>();

  include ProductsApi(products);
  include OrdersApi(orders);
  include ContactsApi(contactMessages);
  include UsersApi(userProfiles);
};

import List "mo:core/List";
import ContactTypes "../types/contacts";
import ContactLib "../lib/contacts";

mixin (
  contactMessages : List.List<ContactTypes.ContactMessage>
) {
  public shared func submitContactMessage(
    name : Text,
    email : Text,
    subject : Text,
    message : Text
  ) : async ContactTypes.ContactMessage {
    ContactLib.submitMessage(contactMessages, name, email, subject, message)
  };
};

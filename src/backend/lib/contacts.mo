import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/contacts";
import Common "../types/common";

module {
  public func submitMessage(
    messages : List.List<Types.ContactMessage>,
    name : Text,
    email : Text,
    subject : Text,
    message : Text
  ) : Types.ContactMessage {
    let id = messages.size() + 1;
    let msg : Types.ContactMessage = {
      id;
      name;
      email;
      subject;
      message;
      timestamp = Time.now();
    };
    messages.add(msg);
    msg
  };

  public func listMessages(
    messages : List.List<Types.ContactMessage>
  ) : [Types.ContactMessage] {
    messages.toArray()
  };
};

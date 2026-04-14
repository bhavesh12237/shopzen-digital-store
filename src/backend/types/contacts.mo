import Common "common";

module {
  public type ContactMessage = {
    id : Common.ContactId;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Common.Timestamp;
  };
};

import Common "common";

module {
  public type UserProfile = {
    id : Common.UserId;
    var name : Text;
    var email : Text;
  };

  public type UserProfilePublic = {
    id : Common.UserId;
    name : Text;
    email : Text;
  };
};

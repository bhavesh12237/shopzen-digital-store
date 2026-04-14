import Map "mo:core/Map";
import UserTypes "../types/users";
import Common "../types/common";
import UserLib "../lib/users";

mixin (
  userProfiles : Map.Map<Common.UserId, UserTypes.UserProfile>
) {
  public shared ({ caller }) func upsertProfile(name : Text, email : Text) : async UserTypes.UserProfilePublic {
    UserLib.upsertProfile(userProfiles, caller, name, email)
  };

  public shared query ({ caller }) func getMyProfile() : async ?UserTypes.UserProfilePublic {
    UserLib.getProfile(userProfiles, caller)
  };
};

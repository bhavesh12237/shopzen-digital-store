import Map "mo:core/Map";
import Types "../types/users";
import Common "../types/common";

module {
  public func getProfile(
    profiles : Map.Map<Common.UserId, Types.UserProfile>,
    userId : Common.UserId
  ) : ?Types.UserProfilePublic {
    switch (profiles.get(userId)) {
      case (?profile) ?toPublic(profile);
      case null null;
    }
  };

  public func upsertProfile(
    profiles : Map.Map<Common.UserId, Types.UserProfile>,
    userId : Common.UserId,
    name : Text,
    email : Text
  ) : Types.UserProfilePublic {
    switch (profiles.get(userId)) {
      case (?existing) {
        existing.name := name;
        existing.email := email;
        toPublic(existing)
      };
      case null {
        let profile : Types.UserProfile = {
          id = userId;
          var name = name;
          var email = email;
        };
        profiles.add(userId, profile);
        toPublic(profile)
      };
    }
  };

  public func toPublic(profile : Types.UserProfile) : Types.UserProfilePublic {
    { id = profile.id; name = profile.name; email = profile.email }
  };
};

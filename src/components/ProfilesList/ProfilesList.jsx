import Profile from "../Profile/Profile";

const ProfilesList = ({ profiles }) => {
  return (
    <div className="profiles-list-container">
      {profiles.map((profile, idx) => {
        return <Profile profile={profile.node} key={idx} />;
      })}
    </div>
  );
};

export default ProfilesList;

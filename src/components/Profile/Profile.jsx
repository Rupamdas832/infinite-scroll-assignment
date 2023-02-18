import { useEffect, useState } from "react";
import "./Profile.css";

const Profile = ({ profile }) => {
  const [updated, setUpdated] = useState("");

  useEffect(() => {
    if (profile) {
      const dataTime = new Date();
      dataTime.setTime(profile.last_update);
      setUpdated(String(dataTime));
    }
  }, []);

  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={profile.field_photo_image_section} alt="profile" />
      </div>
      <div className="profile-body">
        <div className="profile-title">
          <p>{profile.title}</p>
        </div>
        <p className="profile-time">{updated}</p>
      </div>
    </div>
  );
};

export default Profile;

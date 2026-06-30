import ProfileHeader from "./ProfileHeader";
import AccountSettings from "./AccountSettings";
import ConnectedGroups from "./ConnectedGroups";
const ProfileManagement = () => {
  return (
    <div className="w-full space-y-10 px-4 py-10 max-w-4xl mx-auto">
      <ProfileHeader />

      <div className="flex flex-col items-center w-full">
        <div className="md:col-span-12 space-y-6 max-w-2xl mx-auto w-full">
          <AccountSettings />
          <ConnectedGroups />
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;

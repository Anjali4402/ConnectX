import ProfileHeader from "../../settings/ProfileHeader";
import AccountSettings from "../../settings/AccountSettings";
import ConnectedGroups from "../../settings/ConnectedGroups";
import { useLogout } from "../hook/useProfile";
import { useRouter } from "next/navigation";
const ProfileManagement = () => {
  const { mutate: userLogout } = useLogout();

  const router = useRouter();

  const handleLogout = async () => {
    await userLogout();
  };

  return (
    <div className="w-full space-y-10 px-4 py-10 max-w-4xl mx-auto">
      <ProfileHeader />

      <div className="flex flex-col items-center w-full">
        <div className="md:col-span-12 space-y-6 max-w-2xl mx-auto w-full">
          <AccountSettings />
          <ConnectedGroups handleLogout={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;

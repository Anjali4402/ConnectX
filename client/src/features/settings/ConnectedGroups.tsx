import { Users, Layout, ChevronRight, LogOut } from "lucide-react";

const ConnectedGroups = () => {
  const groups = [
    {
      id: 1,
      name: "Design Systems Lab",
      members: "1,240 Members",
      icon: Users,
      bgColor: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      id: 2,
      name: "Future of AI Chat",
      members: "45 Active",
      icon: Layout,
      bgColor: "bg-purple-500/20",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <div className="rounded-3xl p-6 shadow-sm bg-white/5 backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-white mb-4">
        Connected Groups
      </h3>

      <div className="space-y-3">
        {groups.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.id}
              className="flex items-center justify-between p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 ${group.bgColor} rounded-xl flex items-center justify-center`}
                >
                  <Icon className={`size-5 ${group.iconColor}`} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-white">
                    {group.name}
                  </h4>
                  <p className="text-xs text-gray-400">{group.members}</p>
                </div>
              </div>
              <ChevronRight className=" size-4 text-gray-400" />
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <button className="w-full flex items-center justify-center gap-2 py-3 bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors rounded-xl text-sm">
          <LogOut className=" size-4" />
          Log out of Luminal
        </button>
      </div>
    </div>
  );
};

export default ConnectedGroups;

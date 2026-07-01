import Logo from "@/components/ui/shared/Logo";
import { Shield, User } from "lucide-react";
import React from "react";

const AdminLogin = () => {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 antialiased overflow-hidden">
      <main className="relative z-50 flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-105 rounded-xl overflow-hidden glass-panel aether-glow border border-white/10 p-[1px]">
          <div className="bg-surface-container-low/90 p-8 flex flex-col items-center">
            {/* Shield Icon */}
            {/* <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Shield className="h-6 w-6" fill="currentColor" />
            </div> */}

            <div className="mb-6">
              <Logo />
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-on-surface mb-2">
                Elevated Access Required
              </h1>
              <p className="text-xs text-on-surface-variant tracking-wider uppercase">
                Secure Session Layer Active
              </p>
            </div>

            {/* Login Form */}
            <form className="w-full space-y-6">
              <div className="space-y-4">
                {/* Admin ID Field */}
                <div className="group">
                  <label
                    className="block text-sm text-on-surface-variant mb-2 ml-1"
                    htmlFor="admin-id"
                  >
                    Admin ID
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant h-4 w-4" />
                    <input
                      className="w-full h-12 pl-10 pr-4 bg-surface-container-lowest/50 border border-white/5 rounded-lg text-base text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all input-recessed"
                      id="admin-id"
                      placeholder="Enter ID..."
                      type="text"
                    />
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-col gap-3 pt-4">
                <button className="w-full h-12 bg-primary text-on-primary text-sm rounded-lg active:scale-95 transition-all inner-glow-btn hover:brightness-110">
                  Verify Credentials
                </button>
                <button className="w-full h-12 bg-transparent text-on-surface-variant text-sm rounded-lg hover:bg-white/5 transition-all active:scale-95 border border-white/5">
                  Cancel
                </button>
              </div>
            </form>

            {/* Status Indicator */}
            <div className="mt-8 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm text-on-surface-variant/60">
                System Ready for Protocol Validation
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLogin;

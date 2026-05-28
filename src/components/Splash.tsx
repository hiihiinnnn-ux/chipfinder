import { useEffect, useState } from "react";
import { Cpu } from "lucide-react";

export function Splash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("splash-seen")) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("splash-seen", "1");
      setVisible(false);
    }, 2200);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="splash-overlay fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-steel-900 via-blue-700 to-steel-700 text-primary-foreground">
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/20">
          <Cpu className="h-7 w-7" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Welcome to</p>
          <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">ChipFinder Iraq</h1>
        </div>
        <div className="h-px w-40 overflow-hidden bg-white/15">
          <div className="splash-bar h-full w-full bg-white" />
        </div>
        <p className="text-sm text-white/80">Created by <span className="font-semibold text-white">Ali Raed</span></p>
      </div>
    </div>
  );
}

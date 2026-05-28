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
    <div className="splash-overlay fixed inset-0 z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        <div className="splash-logo flex h-14 w-14 items-center justify-center rounded-xl">
          <Cpu className="h-7 w-7" />
        </div>
        <div>
          <p className="splash-muted text-xs uppercase tracking-[0.3em]">Welcome to</p>
          <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">ChipFinder Iraq</h1>
        </div>
        <div className="splash-track h-px w-40 overflow-hidden">
          <div className="splash-bar h-full w-full" />
        </div>
        <p className="splash-muted text-sm">Created by <span className="splash-strong font-semibold">Ali Raed</span></p>
      </div>
    </div>
  );
}

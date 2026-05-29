import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  component: ResetPasswordPage,
  head: () => ({
    meta: [
      { title: "Reset password — ChipFinder" },
      { name: "description", content: "Set a new password for your ChipFinder account." },
    ],
  }),
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    // Supabase parses the recovery token from the URL hash automatically
    // and emits a PASSWORD_RECOVERY event.
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setReady(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const submit = async () => {
    setMessage("");
    if (password.length < 6) { setMessage("Password must be at least 6 characters."); return; }
    if (password !== confirm) { setMessage("Passwords do not match."); return; }
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) setMessage(error.message);
    else {
      setMessage("Password updated. Redirecting…");
      setTimeout(() => navigate({ to: "/" }), 1200);
    }
  };

  return (
    <main className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-4 py-10">
      <h1 className="font-display text-2xl font-bold text-foreground">Reset your password</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {ready ? "Enter a new password for your account." : "Open this page from the reset link in your email."}
      </p>

      <div className="mt-6 space-y-3 rounded-xl border bg-card p-5 shadow-sm">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-foreground" htmlFor="new-password">New password</label>
          <input
            id="new-password"
            type="password"
            autoComplete="new-password"
            disabled={!ready}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold text-foreground" htmlFor="confirm-password">Confirm password</label>
          <input
            id="confirm-password"
            type="password"
            autoComplete="new-password"
            disabled={!ready}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
        </div>
        <button
          onClick={submit}
          disabled={!ready || busy}
          className="h-11 w-full rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-blue-600 disabled:opacity-50"
        >
          {busy ? "Updating…" : "Update password"}
        </button>
        {message && <p className="rounded-lg bg-muted px-3 py-2 text-xs text-muted-foreground">{message}</p>}
      </div>
    </main>
  );
}

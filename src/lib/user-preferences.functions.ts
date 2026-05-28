import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const PreferenceSchema = z.object({
  query: z.string().max(160).default(""),
  city: z.string().min(1).max(80).default("All cities"),
  tag: z.string().min(1).max(80).default("All services"),
  detectedCity: z.string().max(80).nullable().optional(),
  theme: z.enum(["dark", "light"]).optional(),
});

const ThemeSchema = z.object({ theme: z.enum(["dark", "light"]) });

export const saveUserTheme = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) => ThemeSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { error } = await supabase
      .from("user_preferences")
      .upsert({ user_id: userId, theme: data.theme }, { onConflict: "user_id" });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const getUserSearchProfile = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;

    const [{ data: preferences, error: preferencesError }, { data: searches, error: searchesError }] = await Promise.all([
      supabase.from("user_preferences").select("preferred_city, preferred_tag, last_query, last_detected_city, theme").eq("user_id", userId).maybeSingle(),
      supabase.from("saved_searches").select("id, query, city, tag, created_at").eq("user_id", userId).order("created_at", { ascending: false }).limit(5),
    ]);

    if (preferencesError) throw new Error(preferencesError.message);
    if (searchesError) throw new Error(searchesError.message);

    return { preferences, searches: searches ?? [] };
  });

export const saveUserSearchProfile = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) => PreferenceSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { error: preferencesError } = await supabase.from("user_preferences").upsert(
      {
        user_id: userId,
        preferred_city: data.city,
        preferred_tag: data.tag,
        last_query: data.query,
        last_detected_city: data.detectedCity ?? null,
      },
      { onConflict: "user_id" },
    );

    if (preferencesError) throw new Error(preferencesError.message);

    if (data.query.trim() || data.city !== "All cities" || data.tag !== "All services") {
      const { error: searchError } = await supabase.from("saved_searches").insert({
        user_id: userId,
        query: data.query.trim(),
        city: data.city,
        tag: data.tag,
      });

      if (searchError) throw new Error(searchError.message);
    }

    return { ok: true };
  });
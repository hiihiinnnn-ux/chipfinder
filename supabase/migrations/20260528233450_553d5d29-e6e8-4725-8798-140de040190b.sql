CREATE TABLE public.favorites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  shop_id text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, shop_id)
);

CREATE INDEX idx_favorites_user_id ON public.favorites(user_id);

GRANT SELECT, INSERT, DELETE ON public.favorites TO authenticated;
GRANT ALL ON public.favorites TO service_role;

ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own favorites"
  ON public.favorites FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can add their own favorites"
  ON public.favorites FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove their own favorites"
  ON public.favorites FOR DELETE TO authenticated
  USING (auth.uid() = user_id);
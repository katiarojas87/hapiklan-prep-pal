CREATE TABLE public.preorders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  address text NOT NULL,
  postal_code text NOT NULL,
  city text NOT NULL,
  country text NOT NULL DEFAULT 'Belgique',
  bundle_id text NOT NULL,
  units integer NOT NULL,
  total_cents integer NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.preorders TO anon, authenticated;
GRANT ALL ON public.preorders TO service_role;
ALTER TABLE public.preorders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a preorder" ON public.preorders FOR INSERT TO anon, authenticated WITH CHECK (units > 0 AND units <= 20 AND total_cents > 0);

CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.newsletter_subscribers TO anon, authenticated;
GRANT ALL ON public.newsletter_subscribers TO service_role;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can subscribe" ON public.newsletter_subscribers FOR INSERT TO anon, authenticated WITH CHECK (email <> '');

CREATE OR REPLACE FUNCTION public.preorder_progress()
RETURNS TABLE (units_reserved bigint, orders_count bigint)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(SUM(units), 0)::bigint, COUNT(*)::bigint FROM public.preorders;
$$;

GRANT EXECUTE ON FUNCTION public.preorder_progress() TO anon, authenticated;
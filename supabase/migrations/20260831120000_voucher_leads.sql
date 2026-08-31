CREATE TABLE public.voucher_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  consent boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.voucher_leads TO anon, authenticated;
GRANT ALL ON public.voucher_leads TO service_role;
ALTER TABLE public.voucher_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can request a voucher" ON public.voucher_leads FOR INSERT TO anon, authenticated WITH CHECK (email <> '' AND first_name <> '' AND last_name <> '');

create table public.parties (
  party_id uuid not null default gen_random_uuid (),
  name text not null,
  owner text not null
  owner_id uuid not null default gen_random_uuid(),
  players json not null default {["player1"]}
)

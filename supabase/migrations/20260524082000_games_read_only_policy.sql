-- 20260524082000_games_read_only_policy.sql

-- Allow authenticated users to read the games table
create policy "Users can read games"
on public.games
for select
to authenticated
using (true);

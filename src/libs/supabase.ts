import { createClient } from "@supabase/supabase-js";

// 環境変数のロード
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// 環境変数が設定されていなかったらエラーを投げる
if (!SUPABASE_URL) {
  throw new Error("Missing SUPABASE_URL");
}
if (!SUPABASE_KEY) {
  throw new Error("Missing SUPABASE_KEY");
}

export const client = createClient(SUPABASE_URL, SUPABASE_KEY);

// データベースmanga_titleから情報を取得する関数
export const getTitles = async () => {
  const { data, error } = await client
    .from("manga_title")
    .select("*")
    .order("title");

  if (!error && data) {
    return data;
  }
  return [];
};

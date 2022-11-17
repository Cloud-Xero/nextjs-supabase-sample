import { Auth } from "@supabase/ui";
import type { AppProps } from "next/app";
import { AuthLayout } from "@this/layout/AuthLayout";
import { client } from "@this/libs/supabase";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Auth.UserContextProvider supabaseClient={client}>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </Auth.UserContextProvider>
    </div>
  );
};

export default MyApp;

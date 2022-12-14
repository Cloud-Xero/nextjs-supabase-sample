import { Auth, Button, IconLogOut } from "@supabase/ui";

import { Header } from "@this/components/Header";
import { LayoutErrorBoundary } from "@this/layout/LayoutErrorBoundary";
import { client } from "@this/libs/supabase";
import { Footer } from "@this/components/Footer";

type Props = {
  children: React.ReactNode;
};

export const AuthLayout = (props: Props) => {
  const { user } = Auth.useUser(); // 現在ログイン中のユーザー情報を取得

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto grid grid-rows-[auto,1fr,auto] min-h-screen">
        <Header />
        <main className="px-4 text-gray-600 bg-gray-100">
          <LayoutErrorBoundary>
            {user ? (
              <div>
                <div>{props.children}</div>
                <div className="flex justify-end mx-2 my-4">
                  <Button
                    size="medium"
                    icon={<IconLogOut />}
                    onClick={() => client.auth.signOut()}
                  >
                    Sign out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="justify-center pt-8">
                <div className="w-full">
                  <Auth
                    supabaseClient={client}
                    providers={["github"]}
                    socialColors={true}
                  />
                </div>
              </div>
            )}
          </LayoutErrorBoundary>
        </main>
        <Footer />
      </div>
    </div>
  );
};

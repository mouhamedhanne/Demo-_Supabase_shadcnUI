"use client";

import { Suspense } from "react";
import useSession from "@/hooks/useSession";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ButtonList from "@/components/ui/ButtonList";
import ButtonItem from "@/components/ui/ButtonList/ButtonItem";
import UpdateEmailButton from "./_components/UpdateEmailButton";
import UpdatePasswordButton from "./_components/UpdatePasswordButtton";

const AccountPage = () => {
  const { user } = useSession();
  //console.log(user);

  const handleClick = () => {
    console.log("hello world");
  };

  return (
    <Suspense>
      <div className="container mx-auto py-8 space-y-8">
        <h1 className="text-xl font-bold">My Account</h1>
        <Card>
          <CardHeader>
            <CardTitle>Personnal Informations</CardTitle>
            <CardDescription>
              Manage your personnal informations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ButtonList>
              <ButtonItem
                value="Mouhamedhanne"
                onClick={handleClick}
                className="block justify-between items-center lg:flex"
              >
                UserName
              </ButtonItem>

              <UpdateEmailButton />

              <UpdatePasswordButton />
            </ButtonList>
          </CardContent>
        </Card>
      </div>
    </Suspense>
  );
};

export default AccountPage;

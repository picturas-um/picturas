"use client";

import Loading from "@/components/loading";
import { SessionData } from "@/lib/session";
import { createContext, useContext, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { OctagonAlert } from "lucide-react";
import { useGetSession } from "@/lib/queries/session";
import { useUpdateSession } from "@/lib/mutations/session";

interface SessionContextData {
  session: SessionData;
}

const SessionContext = createContext<SessionContextData | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const session = useGetSession();
  const updateSession = useUpdateSession();

  useEffect(() => {
    const session = localStorage.getItem("session");
    if (session) {
      const parsedSession = JSON.parse(session) as SessionData;
      updateSession.mutate({
        userId: parsedSession.user._id,
        token: parsedSession.token,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!session.data)
    return (
      <div className="flex justify-center items-center size-full absolute top-0 left-0">
        <Loading />
        {session.isError && (
          <Alert
            variant="destructive"
            className="w-fit max-w-[40rem] text-wrap truncate"
          >
            <OctagonAlert className="size-4" />
            <AlertTitle>{session.error.name}</AlertTitle>
            <AlertDescription>{session.error.message}</AlertDescription>
          </Alert>
        )}
      </div>
    );

  return (
    <SessionContext.Provider value={{ session: session.data }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession() must be used within a SessionProvider");
  }
  return context.session;
}

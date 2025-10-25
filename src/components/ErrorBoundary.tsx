import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";

export function ErrorBoundary({ children }: { children: PropsWithChildren }) {
  const [hasError, setHasError] = useState(false);
  const [errorInfo, setErrorInfo] = useState<string | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      setErrorInfo(event.message || "Произошла непредвиденная ошибка");
      console.error("Caught an error:", event.error);
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return (
      <div style={{ padding: "20px", color: "red" }}>
        <h2>Что-то пошло не так</h2>
        <p>{errorInfo}</p>
      </div>
    );
  } else {
    return <>{children}</>;
  }
}

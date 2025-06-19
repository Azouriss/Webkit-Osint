// PATH: dashboard/src/pages/Login.tsx
import React, { useState } from "react";
import "@/styles/styles.css"; // Import global styles
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login: React.FC = () => {
  const [err, setErr] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr("");

    const { email, password } = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as { email: string; password: string };

    try {
      const res = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Identifiants invalides");
      window.location.href = "/";
    } catch (e: any) {
      setErr(e.message);
    }
  };

  return (
    <main className="login">
      <form onSubmit={handleSubmit}>
        <Card className="login__card">
          <CardHeader>
            <h1>Connexion 🔒</h1>
            <p>Accédez à votre espace sécurisé</p>
          </CardHeader>

          <CardContent>
            <Input type="email" name="email" placeholder="E-mail" required />
            <Input
              type="password"
              name="password"
              placeholder="Mot de passe"
              required
            />
            {err && <span className="error">{err}</span>}
          </CardContent>

          <CardFooter>
            <Button type="submit">Se connecter</Button>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
};

export default Login;

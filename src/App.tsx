import { useState } from "react";
import "./styles/global.css";
import { Logo } from "./Logo";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Envelope, Lock } from "phosphor-react";
import { CheckBox } from "./components/CheckBox";
import { Button } from "./components/Button";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-900 flex items-center justify-center">
      <header className="flex-col items-center flex">
        <Logo />
        <Heading className="mt-4" size="lg">
          REACT DESIGN SYSTEM
        </Heading>

        <Text className="text-gray-400 mt-1">Faça Login e comece a usar!</Text>
      </header>

      <form className="gap-4 flex flex-col items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold text-gray-400">Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold text-gray-400">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2 ">
          <CheckBox
            className="text-gray-200 text-sm pl-4"
            text="Lembrar de mim por 30 dias"
          />
        </label>
        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild>
          <a className="text-gray-400 underline hover:text-gray-200" href="">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild>
          <a className="text-gray-400 underline hover:text-gray-200" href="">
            Não possui conta? Crie uma agora
          </a>
        </Text>
      </footer>
    </div>
  );
}

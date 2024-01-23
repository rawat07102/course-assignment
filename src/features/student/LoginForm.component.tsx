import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
    handleSearch: React.FormEventHandler
    onNameChange: React.ChangeEventHandler<HTMLInputElement>
    value: string
}

export default function LoginForm({
    handleSearch,
    onNameChange,
    value
}: Props) {
  return (
      <form
        onSubmit={handleSearch}
        className="flex mb-4 w-full max-w-sm items-center space-x-2"
      >
        <Input
          onChange={onNameChange}
          value={value}
          placeholder="Enter your name to login"
        />
        <Button type="submit">Login</Button>
      </form>
  );
}

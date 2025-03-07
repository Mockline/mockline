import * as Popover from "@radix-ui/react-popover";

export function Greet({ name }: { name: string }) {
    return (
        <>
        <h1>Hello, {name}!</h1>
        <Popover.Root>
        <Popover.Trigger>More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            Some more info…
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      </>
    );
}
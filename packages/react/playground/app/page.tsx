import {Greet, Button} from "../../src/index.ts";

export default function Home() {
  return (
    <>
      <section>
        <h1 className={"text-xl text-gray-500 mb-4"}>Greet</h1>
        <Greet name="World"/>
      </section>
      <section>
        <h1 className={"text-xl text-gray-500 mb-4"}>Button</h1>
        <Button label="Icon button" icon="mdi-light:home" className={"bg-green-500"}/>
        <br/>
        <Button className={"bg-red-500"}>
          Leading and trailing
        </Button>
        <br/>
        <Button className={"bg-blue-500"} loading={true} trailing={false}>
          Loading
        </Button>
      </section>
    </>
  );
}

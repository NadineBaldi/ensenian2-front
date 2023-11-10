import routes from "./server";

function Index() {
  return (
    <div>
      <header>
        <div>{routes}</div>
      </header>
    </div>
  );
}

export default Index;

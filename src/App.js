function App() {
  let str = "Hello Universe";
  let pi = 3.144;
  let active = false;
  let user = { id: 1, Name: "Rohit" };

  return (
    <>
      <h1>Hello World</h1>
      <h1>{str}</h1>
      <h1>pi= {pi}</h1>
      <h1>
        {" "}
        ID= {user.id} Name{user.Name}
      </h1>
    </>
  );
}
export default App;

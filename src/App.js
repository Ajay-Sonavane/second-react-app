function App() {
  let str = "Hello Universe";
  let pi = 3.144;
  let active = false;
  let id = "id1";

  return (
    <>
      <h1>Hello World</h1>
      <h1>{str}</h1>
      <h1>pi= {pi}</h1>
      <h1 id="id1"> HEllo World</h1>
      <h1 id={"id1"}> I am AJay</h1>
      <h1 id={id}> from shirdi</h1>
    </>
  );
}
export default App;

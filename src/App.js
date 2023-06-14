function App() {
  //mixing js in the HTML
  let str = "Hello World";
  return (
    <>
      <h1> {str}</h1>
      <h1>{str.toLowerCase()}</h1>
      <h1>{str.substring(2)}</h1>
    </>
  );
}
export default App;

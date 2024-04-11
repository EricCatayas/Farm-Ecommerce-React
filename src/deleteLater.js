



const AsyncComponent = React.lazy(() => import("./AsyncComponent"));

const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Render the asynchronously loaded component */}
        <AsyncComponent />
      </Suspense>
    </div>
  );
};

export default App;

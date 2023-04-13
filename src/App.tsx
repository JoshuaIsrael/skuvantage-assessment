import Button from './components/button';
import './App.scss';

function App() {
  const onAddImage = () => {
    console.log('Add Image');
  };

  const onRemoveRandomImage = () => {
    console.log('Remove Image');
  };

  return (
    <div className="App">
      Hello World
      <div>
        <Button onClick={onAddImage}>Add</Button>
        <Button onClick={onRemoveRandomImage}>Remove</Button>
      </div>
    </div>
  );
}

export default App;

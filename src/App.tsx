import { useState } from 'react';
import { Button, Image } from 'components';
import { getRandomImage } from 'services/image';
import './App.scss';

function App() {
  const [images, setImages] = useState<string[]>([]);

  const onAddImage = () => {
    getRandomImage().then((res) => {
      setImages((prev) => {
        return prev.concat([res]);
      });
    });
  };

  const onRemoveRandomImage = () => {
    const indexToRemove = Math.floor(
      Math.random() * Math.floor(images.length - 1)
    );
    setImages((prev) => {
      const newImages = [...prev];
      newImages.splice(indexToRemove, 1);
      return newImages;
    });
  };

  return (
    <div className="App">
      <div>
        {images.map((image, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Image key={index} src={image} />
        ))}
      </div>
      <div>
        <Button onClick={onAddImage}>Add</Button>
        <Button onClick={onRemoveRandomImage}>Remove</Button>
      </div>
    </div>
  );
}

export default App;

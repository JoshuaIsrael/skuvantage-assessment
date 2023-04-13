import { useState } from 'react';
import { Button, Image } from 'components';
import { getRandomImage } from 'services/image';
import styles from './App.module.scss';

export type ImageDetails = {
  id: string;
  src: string;
};

function App() {
  const [images, setImages] = useState<ImageDetails[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const onAddImage = () => {
    setIsFetching(true);
    getRandomImage()
      .then((res) => {
        setImages((prev) => {
          return prev.concat([
            {
              id: Math.random().toString(),
              src: res,
            },
          ]);
        });
      })
      .finally(() => setIsFetching(false));
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
    <div className={styles.App}>
      <div>
        {images.map(({ id, src }) => (
          <Image key={id} src={src} />
        ))}
      </div>
      <div className={styles.Actions}>
        <Button isLoading={isFetching} onClick={onAddImage}>
          Add
        </Button>
        <Button onClick={onRemoveRandomImage}>Remove</Button>
      </div>
    </div>
  );
}

export default App;

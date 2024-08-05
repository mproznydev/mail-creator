import { DragDropContext } from 'react-beautiful-dnd';
import { CreateBoard } from '../components/creator/Board';
import { CreateAssets } from '../components/creator/Assets';
import { useState } from 'react';
import { Asset } from '../@types/assets.types';

const Home = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  const onDragEnd = (asset) => {
    console.log(asset);
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex gap-1">
        <DragDropContext onDragEnd={onDragEnd}>
          <CreateBoard assets={assets}></CreateBoard>
          <CreateAssets setAssets={setAssets}></CreateAssets>
        </DragDropContext>
      </div>
    </>
  );
};

export default Home;

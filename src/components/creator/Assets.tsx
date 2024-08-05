import { Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../Strict-mode-droppable';
import { ASSET_TYPE, Asset as HomeAssets } from '../../@types/assets.types';

type CreateAssetsProps = {
  setAssets: React.Dispatch<React.SetStateAction<HomeAssets[]>>;
};

type Asset = {
  type: ASSET_TYPE;
  id: number;
  label: string;
};

const assets: Asset[] = [
  { id: 1, type: ASSET_TYPE.TEXT, label: 'text' },
  { id: 2, type: ASSET_TYPE.IMAGE, label: 'image' },
];

export const CreateAssets = ({ setAssets }: CreateAssetsProps) => {
  return (
    <StrictModeDroppable droppableId="board2">
      {(provided, snapshot) => (
        <div
          className="w-[30%] bg-gray-100 rounded-2xl"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {assets.map((asset, index) => (
            <Draggable
              draggableId={`asset-${asset.id}`}
              index={index}
              key={asset.id}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <div className="rounded-xl p-2 m-2 bg-gray-300">
                    {asset.label}
                  </div>
                </div>
              )}
            </Draggable>
          ))}
        </div>
      )}
    </StrictModeDroppable>
  );
};

import { Draggable, Droppable } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../Strict-mode-droppable';
import { useState } from 'react';
import {
  Asset,
  ASSET_TYPE,
  TextAsset,
  ImageAsset,
} from '../../@types/assets.types';

type CreateBoardProps = {
  assets: Asset[];
};

// <div className="rounded-xl p-2 m-2 bg-gray-300">
//                     {asset.text}
//                   </div>

// Type guard for TextAsset
const isTextAsset = (asset: Asset): asset is TextAsset => {
  return asset.type === ASSET_TYPE.TEXT;
};

// Type guard for ImageAsset
const isImageAsset = (asset: Asset): asset is ImageAsset => {
  return asset.type === ASSET_TYPE.IMAGE;
};

const renderAsset = (asset: Asset) => {
  if (isTextAsset(asset)) {
    return <p>{asset.content}</p>;
  } else if (isImageAsset(asset)) {
    return <img src={asset.src} alt="" />;
  } else {
    return null;
  }
};

export const CreateBoard = ({ assets }: CreateBoardProps) => {
  return (
    <StrictModeDroppable droppableId="board1">
      {(provided, snapshot) => (
        <div
          className="w-[70%] bg-gray-50 rounded-2xl"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {assets?.map((asset) => (
            <Draggable draggableId="board-1" index={1}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {renderAsset(asset)}
                </div>
              )}
            </Draggable>
          ))}
        </div>
      )}
    </StrictModeDroppable>
  );
};

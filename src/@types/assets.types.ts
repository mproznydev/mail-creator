export enum ASSET_TYPE {
  TEXT = 'text',
  IMAGE = 'image',
}

export type TextAsset = {
  type: ASSET_TYPE;
  //eventually it would be type as wysiwyg text editor
  content: string;
};

export type ImageAsset = {
  type: ASSET_TYPE;
  src: string;
};

export type Asset = TextAsset | ImageAsset;

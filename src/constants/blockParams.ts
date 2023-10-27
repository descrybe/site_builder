export enum EWrapperSize {
  SMALL = '320',
  MEDIUM = '550',
  BIG = '640',
}

export enum EBlockType {
  SIMPLE = 'SIMPLE',
  ACTION = 'ACTION'
}

export type TBlockProperties = {
  id: number
  amount: number
  type: EBlockType
  size: EWrapperSize
}
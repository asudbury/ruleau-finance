/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    CreateSliceOptions,
    SliceCaseReducers,
    ValidateSliceCaseReducers
  } from '@reduxjs/toolkit';
  
  // REF: https://stackoverflow.com/a/49198999
  type Diff<T extends keyof any, U extends keyof any> = ({ [P in T]: P } &
    { [P in U]: never } & { [x: string]: never })[T];
  type Overwrite<T, U> = Pick<T, Diff<keyof T, keyof U>> & U;
  
  export interface FSAMeta {
    pending: boolean;
  }
  
  interface CreateSliceOptionsExtended {
    fsa: any;
    reducers?: ValidateSliceCaseReducers<any, SliceCaseReducers<any>>;
  }
  export type SliceFSA = Overwrite<
    CreateSliceOptions,
    CreateSliceOptionsExtended
  >;
  
  export interface FSA<T> {
    meta: FSAMeta;
    payload: T | Error | any;
    error: boolean;
    type?: string;
    states?: any;
  }
  
  export interface CachedFSA {
    id: string;
  }
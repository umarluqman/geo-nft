/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface BoundsInput {
  ne: CoordinateInput;
  sw: CoordinateInput;
}

export interface CoordinateInput {
  latitude: number;
  longitude: number;
}

export interface HouseInput {
  address: string;
  bedrooms: number;
  coordinates: CoordinateInput;
  image: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

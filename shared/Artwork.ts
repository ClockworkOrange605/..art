import { ObjectID } from './Types'

enum ArtworkLibraryEnum {
  p5js = 'p5.js',
  threejs = 'three.js',
  theatrejs = 'theatre.js',
  babylonjs = 'babylon.js'
}

interface Artwork {
  _id: ObjectID
  library: ArtworkLibraryEnum
  createdAt: Date
  updatedAt: Date
}

export { Artwork, ArtworkLibraryEnum }

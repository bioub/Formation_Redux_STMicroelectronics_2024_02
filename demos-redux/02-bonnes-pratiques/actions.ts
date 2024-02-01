import { INCREMENT_LIKES, UPDATE_NAME } from "./constants";

export function incrementLikes() {
  return {
    type: INCREMENT_LIKES,
  }
}

export function updateName(newName: string) {
  return {
    type: UPDATE_NAME,
    payload: newName,
  }
}

// FLUX STANDARD ACTION
// Convention du type de l'action
// Principalement { type: string, payload: any }

// export function todoAdd(title: string) {
//   return {
//     type: TODO_ADD,
//     todo: {
//       id: Math.random(),
//       title: title,
//       completed: false,
//     }
//   }
// }
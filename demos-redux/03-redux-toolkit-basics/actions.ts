import { createAction } from "@reduxjs/toolkit";


export const incrementLikes = createAction('INCREMENT_LIKES');
export const updateName = createAction<string>('UPDATE_NAME');

// function createAction(type: string) {
//   return (payload: any) => {
//     return {
//       type,
//       payload,
//     }
//   }
// }



// export function incrementLikes() {
//   return {
//     type: INCREMENT_LIKES,
//   }
// }


// export function updateName(newName: string) {
//   return {
//     type: UPDATE_NAME,
//     payload: newName,
//   }
// }

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
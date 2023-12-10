export const selectCurrentProjectData = ( dataset, name ) => {
  return dataset.filter( item => item.name === name )[0];
}

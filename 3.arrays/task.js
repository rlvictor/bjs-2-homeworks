function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])
  );
}

function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter((item) => item.gender === gender);
  if (filteredUsers.length === 0) {
    return 0;
  }
  const ageSum = filteredUsers.reduce((acc, item) => acc + item.age, 0);
  const result = ageSum / filteredUsers.length;
  return result;
}

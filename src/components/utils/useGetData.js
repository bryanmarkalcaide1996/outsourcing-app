export default function useGetData(database, dataType) {
  let data = localStorage.getItem(database);
  if (data !== null) {
    return JSON.parse(localStorage.getItem(database));
  } else {
    if (dataType === "string") {
      return localStorage.setItem(database, JSON.stringify(""));
    }
    if (dataType === "bool") {
      return localStorage.setItem(database, JSON.stringify(false));
    }
    if (dataType === "arr") {
      return localStorage.setItem(database, JSON.stringify([]));
    }
    if (dataType === "obj") {
      return localStorage.setItem(database, JSON.stringify({}));
    }
    if (dataType === "null") {
      return localStorage.setItem(database, JSON.stringify(null));
    }
  }
}

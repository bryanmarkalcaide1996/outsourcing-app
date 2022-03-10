export default function useGetData() {
  let data = localStorage.getItem("users");
  if (data !== null) {
    return JSON.parse(localStorage.getItem("users"));
  } else {
    return localStorage.setItem("users", JSON.stringify([]));
  }
}

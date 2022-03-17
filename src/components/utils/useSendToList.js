import useGetData from "./useGetData";

export default function useSendToList(id, personData, errCallBack) {
  console.log(id);
  console.log(personData);
  console.log(errCallBack);

  const bucket = useGetData("client-list", "arr");
  if (bucket) {
    const double = bucket.filter((existing) => existing.id.value === id);

    if (double.length > 0) {
      errCallBack({ style: "red", status: true });
      console.log("will not let this in");
    } else {
      localStorage.setItem(
        "client-list",
        JSON.stringify([...bucket, { ...personData }])
      );
      console.log("will let this in");
    }
  } else {
    localStorage.setItem("client-list", JSON.stringify([{ ...personData }]));
    console.log("not on list, will add this");
  }
}

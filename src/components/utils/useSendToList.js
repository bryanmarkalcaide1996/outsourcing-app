export default function useSendToList(id, personData, errCallBack) {
  const bucket = JSON.parse(localStorage.getItem("currentUser"));
  console.log(bucket);

  if (bucket.clientList) {
    const double = bucket.clientList.filter(
      (existing) => existing.login.uuid === id
    );
    if (double.length > 0) {
      errCallBack({ style: "red", status: true });
      console.log("will not let this in");
    } else {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          ...bucket,
          clientList: [...bucket.clientList, { ...personData }],
        })
      );
      errCallBack((prevState) => {
        return { ...prevState, style: "green" };
      });
    }
  } else {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ ...bucket, clientList: [{ ...personData }] })
    );
    errCallBack((prevState) => {
      return { ...prevState, style: "green" };
    });
  }
}

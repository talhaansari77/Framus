import moment from "moment";
import Toast from "react-native-root-toast";

export const EditValidate = (data, submitError, setSubmitError, nameList, emailError) => {
  if (!data.userName) {
    return setSubmitError({
      ...submitError,
      userNameError: "User Name is required",
    });
  }

  if (!data.email) {
    return setSubmitError({
      ...submitError,
      emailError: "Eamil is required",
    });
  }

  if (!data.firstName) {
    return setSubmitError({
      ...submitError,
      firstNameError: "First Name is required",
    });
  }

  if (!data.lastName) {
    return setSubmitError({
      ...submitError,
      lastNameError: "Last Name is required",
    });
  }

  let filterData = nameList.filter((user) => user.name.toLowerCase()==data.userName.toLowerCase());
  
  if(filterData.length>0) {
    console.log("User Name",filterData);
    return setSubmitError({
        ...submitError,
        userNameError: "User Name "+filterData[0].name+" alreday taken",
      });
  }
  // console.log("svdsvfsv",data.userName)
  // console.log("svfvfv",nameList)

  return true;
};

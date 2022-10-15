import moment from "moment";
import Toast from "react-native-root-toast";

export const EditValidate = (data, submitError, setSubmitError, ) => {
  if (!data.userName) {
    return setSubmitError({
      ...submitError,
      userNameError: "User Name is required",
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

  return true;
};

import * as yup from "yup";

export const animalSchema = yup.object().shape({
  img: yup.string().required(),
  name: yup.string().required(),
  type: yup.string().required(),
  size: yup.string().required(),
  sex: yup.string().required(),
  age: yup.string().required(),
  history: yup.string().required(),
});

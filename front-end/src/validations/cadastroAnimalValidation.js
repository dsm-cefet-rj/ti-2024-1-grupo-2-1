import * as yup from "yup";

export const animalSchema = yup.object().shape({
  img: yup.string().required('a imagem é obrigatório'),
  name: yup.string().required('o nome é obrigatório'),
  type: yup.string().required('o tipo é obrigatório'),
  size: yup.string().required('o tamanho é obrigatório'),
  sex: yup.string().required('o sexo é obrigatório'),
  age: yup.string().required('a idade é obrigatório'),
  history: yup.string().required('a historia do animal é obrigatório'),
});

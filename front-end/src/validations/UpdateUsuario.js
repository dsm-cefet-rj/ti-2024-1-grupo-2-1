import * as Yup from "yup"

export const validationUserSchema = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    senha: Yup.string()
      .min(5,   
   'A senha deve ter no mínimo 5 caracteres')
      .required('Reescreva sua senha ou troque-a'),
  });
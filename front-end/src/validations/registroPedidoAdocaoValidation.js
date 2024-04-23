import * as yup from "yup";

export const pedidoAdocaoSchema = yup.object().shape({
    email: yup.string().email().required()
});

import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import * as Yup from "yup";
import "./FormFormik.css";

const FormFormik = () => {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: () => {
      Toastify({
        text: "Formulario enviado correctamente",
        duration: 3000,
      }).showToast();
      navigate("/itemList");
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Debe tener al menos 5 caracteres")
        .max(20),
      email: Yup.string()
        .email("No corresponde a un email valido")
        .required("Este campo es obligatorio"),

      phone: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^[0-9]+$/, "Debe ser un numero"),
    }),
    validateOnChange: false,
  });

  return (
    <div className="formulario-div">
      <form className="formFormik"
        onSubmit={handleSubmit}
        action="https://formsubmit.co/rufinojoaquin10@gmail.com"
        method="POST"
      >
        <TextField
          type="text"
          label="Nombre"
          InputLabelProps={{
            style: { color: "white" },
          }}
          variant="outlined"
          name="name"
          onChange={handleChange}
          error={errors.name ? true : false}
          helperText={errors.name}
        />
        <TextField
          type="text"
          label="Email"
          InputLabelProps={{
            style: { color: "white" },
          }}
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          type="text"
          label="Phone"
          InputLabelProps={{
            style: { color: "white" },
          }}
          variant="outlined"
          name="phone"
          onChange={handleChange}
          error={errors.phone ? true : false}
          helperText={errors.phone}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
        <Button type="reset" variant="contained">
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default FormFormik;

import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import * as Yup from "yup";
import "./FormFormik.css"

const FormFormik = () => {

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      
    },
    onSubmit: (data) => {   
      console.log(data);
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
        <form onSubmit={handleSubmit}
          target="_blank"
          action="https://formsubmit.co/rufinojoaquin10@gmail.com" method="POST">
          <TextField
            color="white"
            type="text"
            label="Nombre"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            color="white"
            type="text"
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            color="white"
            type="text"
            label="Phone"
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






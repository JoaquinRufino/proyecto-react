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


      //password: Yup.string()
      //.required("Este campo es obligatorio")
      //.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
      //  message:
      //"La contraseña debe tener al menos 1 mayuscula y 6 caracteres ",
      //}),
      //repet: Yup.string()
      //.required("Este campo es obligatorio")
      //.oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <div className="formulario-div">
        <form onSubmit={handleSubmit}>
          target="_blank"
          action="https://formsubmit.co/rufinojoaquin10@gmail.com" method="POST"
          <TextField
            label="Nombre"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            type="text"
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          {/*<FormControl variant="filled">
          <OutlinedInput
            style={{ width: "400px" }}
            label="Password"
            variant="outlined"
            name="password"
            onChange={handleChange}
            error={errors.password ? true : false}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>

          <TextField
          type="text"
          label="Repet"
          variant="outlined"
          name="repet"
          onChange={handleChange}
          error={errors.repet ? true : false}
          helperText={errors.repet}
          />*/}
          <TextField
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






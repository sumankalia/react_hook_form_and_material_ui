import React, { useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Checkbox, FormGroup } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email("Please enter a valid email"),
  phone: yup.number().positive().integer().required(),
  address: yup.string().required(),
  gender: yup.string().required(),
  isEmployed: yup.string().required(),
  employmentStatus: yup.string().required(),
  termsAndConditions: yup.boolean().required(),
});

const HookForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      gender: "male",
      isEmployed: "",
      employmentStatus: "",
      termsAndConditions: "",
    },
    resolver: yupResolver(schema),
  });

  const isEmployed = watch("isEmployed");

  useEffect(() => {
    setValue(
      "employmentStatus",
      isEmployed === "yes"
        ? "employed"
        : isEmployed === "no"
        ? "unemployed"
        : ""
    );
  }, [isEmployed]);

  const onSubmit = (values) => {
    console.log({ values });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              id="firstName"
              label="First Name"
              error={errors.firstName}
            />
          )}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="lastName">Last Name</InputLabel>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              id="lastName"
              label="Last Name"
              error={errors.lastName}
            />
          )}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              id="email"
              label="Email"
              error={errors.email}
            />
          )}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="phone">Phone Number</InputLabel>
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              id="phone"
              label="Phone Number"
              error={errors.phone}
            />
          )}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="address">Address</InputLabel>
        <Controller
          name="address"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              id="address"
              label="Address"
              error={errors.address}
            />
          )}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <Controller
          name="gender"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="Gender"
              {...field}
              error={errors.gender}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          )}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="isEmployed">Are you employed?</InputLabel>
        <Controller
          name="isEmployed"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              id="isEmployed"
              labelId="label"
              label="Are you employed?"
              {...field}
              error={errors.isEmployed}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          )}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="employmentStatus">Employment Status</InputLabel>
        <Controller
          name="employmentStatus"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              error={errors.employmentStatus}
              id="employmentStatus"
              labelId="label"
              label="Employment Status"
            >
              <MenuItem value="employed">Employed</MenuItem>
              <MenuItem value="unemployed">Unemployed</MenuItem>
            </Select>
          )}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <Controller
          name="termsAndConditions"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormGroup {...field}>
              <FormControlLabel
                control={<Checkbox />}
                label="Accept Terms and Conditions"
              />
            </FormGroup>
          )}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <Button variant="contained" color="success" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default HookForm;

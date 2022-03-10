import React, { useState } from "react";
import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";

const ProductFilterAttempt = (props) => {
  const { formValues, setFormValues } = props;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log(formValues);
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formValues);
  // };
  return (
    // <form onSubmit={handleSubmit}>
    <form>
      <Grid container alignItems="center" justify="center" direction="column">
        {/* <Grid item>
            <div style={{ width: "400px" }}>
              Rating
              <Slider
                value={formValues.rating}
                onChange={handleSliderChange("rating")}
                defaultValue={30}
                step={1}
                min={0}
                max={50}
                marks={[
                  {
                    value: 10,
                    label: "1.0",
                  },
                  {
                    value: 20,
                    label: "2.0",
                  },
                  {
                    value: 30,
                    label: "3.0",
                  },
                  {
                    value: 40,
                    label: "4.0",
                  },
                  {
                    value: 50,
                    label: "5.0",
                  },
                ]}
                valueLabelDisplay="off"
              />
            </div>
          </Grid> */}
        {/* <Grid item>
          <TextField
            id="rating"
            name="rating"
            label="Rating"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid> */}
        {/* <Grid item>
          <TextField
            id="age-input"
            name="age"
            label="Age"
            type="number"
            value={formValues.age}
            onChange={handleInputChange}
          />
        </Grid> */}
        <Grid item>
          <FormControl>
            <FormLabel>Rating</FormLabel>
            <RadioGroup
              name="rating"
              value={formValues.rating}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="5 Star"
                value="5"
                control={<Radio size="small" />}
                label="5 Stars"
              />
              <FormControlLabel
                key="4.8 Star"
                value="4.8"
                control={<Radio size="small" />}
                label="4.8 Stars and Up"
              />
              <FormControlLabel
                key="4.6 Star"
                value="4.6"
                control={<Radio size="small" />}
                label="4.6 Stars and Up"
              />
              <FormControlLabel
                key="4.4 Star"
                value="4.4"
                control={<Radio size="small" />}
                label="4.4 Stars and Up"
              />
              <FormControlLabel
                key="4.2 Star"
                value="4.2"
                control={<Radio size="small" />}
                label="4.2 Stars and Up"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <Typography>Product Type</Typography>
          <FormControl>
            <Select
              name="productType"
              value={formValues.productType}
              onChange={handleInputChange}
            >
              <MenuItem key="bronzer" value="bronzer">
                Bronzer
              </MenuItem>
              <MenuItem key="blush" value="blush">
                Blush
              </MenuItem>
              <MenuItem key="lipLiner" value="lip_Liner">
                Lip Liner
              </MenuItem>
              <MenuItem key="foundation" value="foundation">
                Foundation
              </MenuItem>
              <MenuItem key="eyeShadow" value="eyeshadow">
                Eye Shadow
              </MenuItem>
              <MenuItem key="eyeLiner" value="eyeliner">
                Eye Liner
              </MenuItem>
              <MenuItem key="nailPolish" value="nail_polish">
                Nail Polish
              </MenuItem>
              <MenuItem key="lipstick" value="lipstick">
                Lipstick
              </MenuItem>
              <MenuItem key="mascara" value="mascara">
                Mascara
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <RadioGroup
              name="price"
              value={formValues.price}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="0-3.99"
                value="3.99"
                control={<Radio size="small" />}
                label="$0-$3.99"
              />
              <FormControlLabel
                key="4-8.99"
                value="8.99"
                control={<Radio size="small" />}
                label="$4-$8.99"
              />
              <FormControlLabel
                key="9-13.99"
                value="13.99"
                control={<Radio size="small" />}
                label="$9-$13.99"
              />
              <FormControlLabel
                key="14-18.99"
                value="18.99"
                control={<Radio size="small" />}
                label="$14-$18.99"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        {/* <Button variant="contained" color="primary" type="submit">
          Submit
        </Button> */}
      </Grid>
    </form>
  );
};
export default ProductFilterAttempt;